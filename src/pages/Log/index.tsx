import React from 'react';
import Table from '@/components/Table';
import { mockLogs } from '@/mock';

export default function LogManagement() {
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: '类型', dataIndex: 'type', key: 'type' },
    { title: '操作', dataIndex: 'action', key: 'action' },
    { title: '用户', dataIndex: 'user', key: 'user' },
    { title: '时间', dataIndex: 'time', key: 'time' },
  ];

  return (
    <div>
      <h1>日志管理</h1>
      <Table columns={columns} dataSource={mockLogs} rowKey="id" />
    </div>
  );
} 