import React, { useEffect } from 'react';
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

import useFetchData from '../../hooks/useFetchData';

// 修改组件定义，接收 props
export default function LogManagement({ token, onDataExport }: LogManagementProps) {
  const { data: logs, loading, error, fetchData } = useFetchData<LogData[]>();

  // 使用 useEffect 在 token 变化时触发数据请求
  useEffect(() => {
    if (token) {
      // 替换为你的实际 API 地址
      fetchData('/api/logs', { token });
    } else {
      // 如果没有 token，可以在这里处理，例如清空数据或显示提示
      // fetchData(null); // 如果 Hook 支持清空数据的方法
      console.warn("Token is missing, cannot fetch logs.");
    }
  }, [token, fetchData]);

  // 可以在这里处理 error 状态，例如显示错误信息
  useEffect(() => {
    if (error) {
      console.error("Error fetching logs:", error);
      // 例如，显示一个错误提示给用户
      // alert(`加载日志失败: ${error.message}`);
    }
  }, [error]);

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: '类型', dataIndex: 'type', key: 'type' },
    { title: '操作', dataIndex: 'action', key: 'action' },
    { title: '用户', dataIndex: 'user', key: 'user' },
    { title: '时间', dataIndex: 'time', key: 'time' },
  ];

  // 按钮点击事件处理函数
  const handleExportClick = () => {
    // 确保 logs 存在且 onDataExport 回调存在
    if (onDataExport && logs) {
      console.log('Export button clicked, passing data to outer HTML:', logs);
      onDataExport(logs); // 现在 logs 确定是 LogData[] 类型
    }
  };

  return (
    <div className='log-content'>
      <h1>日志管理</h1>
      {/* 添加一个导出数据的按钮 */}
      <button onClick={handleExportClick} disabled={loading || !logs || logs.length === 0}>导出日志数据</button>
      {loading ? (
        <p>加载中...</p> // 显示加载状态
      ) : error ? (
        <p>加载日志失败: {error.message}</p> // 显示错误信息
      ) : logs && logs.length > 0 ? (
        <Table columns={columns} dataSource={logs} rowKey="id" /> // 使用从 API 获取的数据
      ) : (
        <p>没有日志数据可显示。</p>
      )}
      <span className='label'>测试样式</span>
    <span className='label'>测试css</span>
    </div>
  );
} 