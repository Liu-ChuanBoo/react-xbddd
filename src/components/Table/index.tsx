import React from 'react';
import { Table as AntTable } from 'antd';
import type { TableProps } from 'antd';

// 封装基础 Table 组件
function Table<RecordType extends object>(props: TableProps<RecordType>) {
  return <AntTable {...props} />;
}

export default Table; 