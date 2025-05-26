import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import NotFound from '../pages/NotFound';
import { staticRoutes, dynamicRoutes } from './routesConfig';
import { Suspense } from 'react';
import type { LazyExoticComponent, FC } from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import React from 'react';
import { Menu } from 'antd';

interface RouteConfig {
  path: string;
  element: LazyExoticComponent<FC>;
  label?: string;
  children?: RouteConfig[];
}

function renderRoutes(routes: RouteConfig[]) {
  return routes.map((route: RouteConfig) => (
    <Route
      key={route.path}
      path={route.path}
      element={
        <Suspense fallback={<div>加载中...</div>}>
          <route.element />
        </Suspense>
      }
    >
      {route.children && renderRoutes(route.children)}
    </Route>
  ));
}

const AppRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 只展开当前路径相关的父级菜单
  const getDefaultOpenKeys = () =>
    location.pathname
      .split('/')
      .filter(Boolean)
      .map((_, idx, arr) => '/' + arr.slice(0, idx + 1).join('/'));

  const [openKeys, setOpenKeys] = useState<string[]>(getDefaultOpenKeys());

  // 路由变化时自动展开当前路径相关菜单
  React.useEffect(() => {
    setOpenKeys(getDefaultOpenKeys());
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout /> }>
        <Route index element={<Navigate to="home" />} />
        {renderRoutes(staticRoutes)}
        {renderRoutes(dynamicRoutes)}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes; 