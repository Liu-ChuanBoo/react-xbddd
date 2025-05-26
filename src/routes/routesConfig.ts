import { lazy } from 'react';

// 静态路由
export const staticRoutes = [
  {
    path: 'home',
    element: lazy(() => import('@/pages/Home')),
    label: '首页',
  },
  {
    path: 'dashboard',
    element: lazy(() => import('@/pages/Dashboard')),
    label: '仪表盘',
  },
  {
    path: 'users',
    element: lazy(() => import('@/pages/Users')),
    label: '用户管理',
    children: [
      {
        path: 'list',
        element: lazy(() => import('@/pages/Users/List')),
        label: '用户列表',
      },
      {
        path: 'detail',
        element: lazy(() => import('@/pages/Users/Detail')),
        label: '用户详情',
      },
    ],
  },
  {
    path: 'menu',
    element: lazy(() => import('@/pages/Menu')),
    label: '菜单管理',
  },
  {
    path: 'log',
    element: lazy(() => import('@/pages/Log')),
    label: '日志管理',
  },
  {
    path: 'personnel',
    element: lazy(() => import('@/pages/Personnel')),
    label: '人员管理',
  },
];

// 动态路由（模拟mock数据）
export const dynamicRoutes = [
  {
    path: 'settings',
    element: lazy(() => import('@/pages/Settings')),
    label: '设置',
  },
  // 你可以在这里添加更多动态路由
]; 