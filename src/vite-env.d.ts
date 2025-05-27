/// <reference types="vite/client" />

declare module '@/components/Table' {
  import { FC } from 'react';
  import { TableProps } from 'antd';
  
  const Table: FC<TableProps<any>>;
  export default Table;
}

console.log(import.meta.env.VITE_API_URL);
console.log(import.meta.env.VITE_ENABLE_MOCK);

if (import.meta.env.VITE_ENABLE_MOCK === 'true') {
  // 启用 Mock 数据
}
