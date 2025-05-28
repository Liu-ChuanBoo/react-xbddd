import { useCallback, useState } from 'react';

interface FetchOptions extends RequestInit {
  // 可以添加自定义选项，例如 token
  token?: string;
  // 是否在组件挂载时立即执行请求
  manual?: boolean;
}

// 定义 Hook 的返回类型
interface UseFetchDataResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  fetchData: (url: string, options?: FetchOptions) => Promise<void>;
}

function useFetchData<T>(): UseFetchDataResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  // 使用 useCallback 缓存 fetchData 函数，避免不必要的重新创建
  const fetchData = useCallback(
    async (url: string, options: FetchOptions = {}) => {
      setLoading(true);
      setError(null);
      setData(null); // 可选：在每次新请求时清空旧数据

      const headers = new Headers(options.headers);
      if (options.token) {
        headers.set('Authorization', `Bearer ${options.token}`);
      }

      try {
        const response = await fetch(url, {
          ...options,
          headers,
        });

        if (!response.ok) {
          throw new Error(
            `HTTP error! status: ${response.status}, URL: ${url}`
          );
        }

        const result = await response.json();
        setData(result as T);
      } catch (err) {
        console.error('An error occurred during the fetch operation:', err);
        setError(
          err instanceof Error ? err : new Error('An unknown error occurred')
        );
      } finally {
        setLoading(false);
      }
    },
    []
  ); // 依赖项为空数组，表示函数只在组件首次渲染时创建

  // 如果 manual 为 false (默认)，则在组件挂载后自动执行请求
  // 注意：这里不自动执行，让用户在组件中使用 useEffect 或其他方式触发

  return { data, loading, error, fetchData };
}

export default useFetchData;
