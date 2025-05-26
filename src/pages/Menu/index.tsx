import React from 'react';
import Table from '@/components/Table';
import { mockMenus } from '@/mock';

export default function MenuManagement() {
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: '名称', dataIndex: 'name', key: 'name' },
    { title: '路径', dataIndex: 'path', key: 'path' },
    { title: '图标', dataIndex: 'icon', key: 'icon' },
    { title: '排序', dataIndex: 'order', key: 'order' },
    // 添加操作列
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: any) => (
        <span>
          <a>编辑</a>
          {/* <Divider type="vertical" /> */}
          <a>删除</a>
        </span>
      ),
    },
  ];

  return (
    <div>
      <h1>菜单管理</h1>
      <Table columns={columns} dataSource={mockMenus} rowKey="id" />
    </div>
  );
} 