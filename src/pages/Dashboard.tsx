import React from 'react';
import ReactECharts from 'echarts-for-react';
import './Dashboard.css';

const info = [
  { label: '今日访问量', value: 12345 },
  { label: '注册用户', value: 6789 },
  { label: '活跃用户', value: 2345 },
  { label: '转化率', value: '12.5%' },
];

const barOption = {
  title: { text: '月访问量' },
  xAxis: { type: 'category', data: ['1月', '2月', '3月', '4月', '5月', '6月'] },
  yAxis: { type: 'value' },
  series: [{ data: [1200, 2000, 1500, 800, 1700, 2100], type: 'bar' }],
};

const pieOption = {
  title: { text: '用户来源', left: 'center' },
  tooltip: { trigger: 'item' },
  legend: { orient: 'vertical', left: 'left' },
  series: [
    {
      name: '来源',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: '直接访问' },
        { value: 735, name: '邮件营销' },
        { value: 580, name: '联盟广告' },
        { value: 484, name: '视频广告' },
        { value: 300, name: '搜索引擎' },
      ],
      emphasis: {
        itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)' },
      },
    },
  ],
};

const lineOption = {
  title: { text: '一周活跃用户' },
  xAxis: { type: 'category', data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'] },
  yAxis: { type: 'value' },
  series: [{ data: [820, 932, 901, 934, 1290, 1330, 1320], type: 'line' }],
};

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-info">
        {info.map(item => (
          <div className="dashboard-info-item" key={item.label}>
            <div className="dashboard-info-label">{item.label}</div>
            <div className="dashboard-info-value">{item.value}</div>
          </div>
        ))}
      </div>
      <div className="dashboard-charts">
        <div className="dashboard-chart"><ReactECharts option={barOption} style={{height: 300}} /></div>
        <div className="dashboard-chart"><ReactECharts option={pieOption} style={{height: 300}} /></div>
        <div className="dashboard-chart"><ReactECharts option={lineOption} style={{height: 300}} /></div>
      </div>
    </div>
  );
} 