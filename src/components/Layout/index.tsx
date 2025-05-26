import { Layout } from 'antd';
import SideMenu from './SideMenu';
import TopNav from './TopNav';
import '@/index.scss';
import { useLayoutStore } from '../../store/layout';
import { Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const MainLayout = ({ children }: { children?: React.ReactNode }) => {
  const collapsed = useLayoutStore((s) => s.collapsed);
  return (
    <Layout style={{ height: '100vh' }} className="site-layout">
      <Sider collapsible collapsed={collapsed} trigger={null}>
        <SideMenu />
      </Sider>
      <Layout className="site-layout">
        <Header className="main-header">
          <TopNav />
        </Header>
        <Content className="main-content">
          {children ? children : <Outlet />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout; 