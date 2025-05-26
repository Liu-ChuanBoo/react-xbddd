import React from 'react';
import { Form as AntForm } from 'antd';
import type { FormProps } from 'antd';

// 封装基础 Form 组件
function Form<Values extends object = any>(props: FormProps<Values>) {
  return <AntForm<Values> {...props} />;
}

// 导出Form的子组件，如Item, List等
Form.Item = AntForm.Item;
Form.List = AntForm.List;
// ... 导出其他需要的子组件

export default Form; 