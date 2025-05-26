import { Menu } from 'antd';
import { DashboardOutlined, UserOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { staticRoutes, dynamicRoutes } from '../../routes/routesConfig';
import './SideMenu.scss';
import { useState, useEffect } from 'react';
import { useLayoutStore } from '../../store/layout';

const SIDEBAR_TRANSITION_DURATION = 200; // 估算动画时长 (ms)

// 可选：为不同路由分配icon
const iconMap: Record<string, React.ReactNode> = {
  '仪表盘': <DashboardOutlined />,
  '用户管理': <UserOutlined />,
  '设置': <SettingOutlined />,
};

interface RouteItem {
  path?: string;
  label?: string;
  children?: RouteItem[];
}

function routeToMenuItems(routes: RouteItem[], parentPath = ''): any[] {
  return routes.map(route => {
    const fullPath = route.path ? (parentPath ? `${parentPath}/${route.path}` : `/${route.path}`) : parentPath;
    const item: any = {
      label: route.label,
      key: fullPath,
      icon: iconMap[route.label || ''] || undefined,
    };
    if (route.children && route.children.length > 0) {
      item.children = routeToMenuItems(route.children, fullPath);
    }
    return item;
  });
}

const items = [
  ...routeToMenuItems(staticRoutes),
  ...routeToMenuItems(dynamicRoutes),
];

const SideMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const collapsed = useLayoutStore((s) => s.collapsed);

  const [showLogoText, setShowLogoText] = useState(!collapsed); // 控制文字是否显示

  // 监听 collapsed 状态变化，控制文字显示延迟
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!collapsed) {
      // 在展开时延迟显示文字
      timer = setTimeout(() => {
        setShowLogoText(true);
      }, SIDEBAR_TRANSITION_DURATION);
    } else {
      // 在折叠时立即隐藏文字
      setShowLogoText(false);
    }

    // 清理定时器
    return () => clearTimeout(timer);
  }, [collapsed]);

  // 只展开当前路径相关的父级菜单
  const getDefaultOpenKeys = () =>
    location.pathname
      .split('/')
      .filter(Boolean)
      .map((_, idx, arr) => '/' + arr.slice(0, idx + 1).join('/'));

  const [openKeys, setOpenKeys] = useState<string[]>(getDefaultOpenKeys());

  // 路由变化时自动展开当前路径相关菜单
  useEffect(() => {
    setOpenKeys(getDefaultOpenKeys());
  }, [location.pathname]);

  return (
    <div>
      <div className="side-menu-logo" onClick={() => navigate('/home')} style={{cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 64, fontSize: 24, color: '#1890ff', fontWeight: 'bold', letterSpacing: 2, background: '#fff', marginBottom: 8}}>
        <AppstoreOutlined style={{fontSize: 24, marginRight: collapsed ? 0 : 12}} />
        {showLogoText && <span>测试系统</span>}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        openKeys={openKeys}
        onOpenChange={setOpenKeys}
        items={items}
        onClick={({ key }) => navigate(key)}
        className="side-menu"
      />
    </div>
  );
};

export default SideMenu; 