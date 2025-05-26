import React from 'react';
import Table from '@/components/Table';
import { mockPersonnel } from '@/mock';

export default function PersonnelManagement() {
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: '姓名', dataIndex: 'name', key: 'name' },
    { title: '年龄', dataIndex: 'age', key: 'age' },
    { title: '性别', dataIndex: 'gender', key: 'gender' },
    { title: '部门', dataIndex: 'department', key: 'department' },
    { title: '职位', dataIndex: 'position', key: 'position' },
    // 可选：添加操作列
    // {
    //   title: '操作',
    //   key: 'action',
    //   render: (_: any, record: any) => (
    //     <span>
    //       <a>编辑</a>
    //       {/* <Divider type="vertical" /> */}
    //       <a>删除</a>
    //     </span>
    //   ),
    // },
  ];

  return (
    <div>
      <h1>人员管理</h1>
      <Table columns={columns} dataSource={mockPersonnel} rowKey="id" />
    </div>
  );
} 