import React, { useEffect, useState } from 'react';
import Table from '../..//components/Table';
// import { mockLogs } from '@/mock'; // 移除 mock 数据导入
import "./log.scss";
// 定义日志数据接口
interface LogData {
  id: number;
  type: string;
  action: string;
  user: string;
  time: string;
}

// 定义组件 props 的类型
interface LogManagementProps {
  token?: string; // 接收 token prop
  // 添加一个回调函数 prop，用于将数据传给外部
  onDataExport?: (data: LogData[]) => void;
}

// 修改组件定义，接收 props
export default function LogManagement({ token, onDataExport }: LogManagementProps) {
  // 使用 LogData 接口定义 logs 状态的类型
  const [logs, setLogs] = useState<LogData[]>([]); // 使用状态存储真实数据
  const [loading, setLoading] = useState(true); // 添加加载状态

  // 模拟异步数据请求
  useEffect(() => {
    if (token) {
      setLoading(true);
      console.log('Using token to fetch logs:', token); // 打印 token 验证
      // 模拟 API 调用，实际中替换为你的 fetch 调用
      const fakeFetch = (): Promise<LogData[]> => { // 更新 fakeFetch 的返回类型
        return new Promise(resolve => {
          setTimeout(() => {
            // 模拟一些数据返回
            const fetchedData: LogData[] = [
              { id: 1, type: '系统', action: '登录', user: 'admin', time: '2023-10-26 10:00:00' },
              { id: 2, type: '用户', action: '新增', user: 'test', time: '2023-10-26 10:05:00' },
            ];
            resolve(fetchedData);
          }, 1000); // 模拟网络延迟 1 秒
        });
      };

      fakeFetch()
        .then((data) => { // 这里的 data 类型会自动推断为 LogData[]
          setLogs(data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Failed to fetch logs:", error);
          setLoading(false);
          setLogs([]); // 清空数据或显示错误信息
        });
    } else {
      // 如果没有 token，可能需要提示用户登录或不加载数据
      console.warn("Token is missing, cannot fetch logs.");
      setLoading(false);
      setLogs([]); // 清空数据
    }
  }, [token]); // 当 token 变化时重新运行 effect

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: '类型', dataIndex: 'type', key: 'type' },
    { title: '操作', dataIndex: 'action', key: 'action' },
    { title: '用户', dataIndex: 'user', key: 'user' },
    { title: '时间', dataIndex: 'time', key: 'time' },
  ];

  // 按钮点击事件处理函数
  const handleExportClick = () => {
    // 如果 onDataExport 回调存在，则调用它并传递当前日志数据
    if (onDataExport) {
      console.log('Export button clicked, passing data to outer HTML:', logs);
      onDataExport(logs);
    }
  };

  return (
    <div className='log-content'>
      <h1>日志管理</h1>
      {/* 添加一个导出数据的按钮 */}
      <button onClick={handleExportClick} disabled={loading || logs.length === 0}>导出日志数据</button>
      {loading ? (
        <p>加载中...</p> // 显示加载状态
      ) : logs.length > 0 ? (
        <Table columns={columns} dataSource={logs} rowKey="id" /> // 使用从 API 获取的数据
      ) : (
        <p>没有日志数据可显示。</p>
      )}
      <span className='label'>测试样式</span>
    <span className='label'>测试css</span>
    </div>
  );
} 