import { Dropdown, Avatar } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import './TopNav.scss';
import { useLayoutStore } from '../../store/layout';
import { useNavigate } from 'react-router-dom';

const TopNav = () => {
  const collapsed = useLayoutStore((s) => s.collapsed);
  const toggle = useLayoutStore((s) => s.toggle);
  const navigate = useNavigate();

  // 假设退出登录功能
  const handleLogout = () => {
    // 执行退出登录逻辑
    console.log('退出登录');
  };

  const menuItems = [
    {
      label: '退出登录',
      key: 'logout',
      icon: <LogoutOutlined />,
      onClick: handleLogout,
    },
  ];

  return (
    <div className="top-nav">
      <div className="trigger" onClick={toggle}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <div className="top-nav-right">
        <SettingOutlined
          className="nav-icon"
          onClick={() => navigate('/settings')}
          style={{cursor: 'pointer'}}
        />
        <Dropdown menu={{ items: menuItems }} placement="bottomRight" className='user-info-dropdown'>
          <div className="user-info">
            <Avatar icon={<UserOutlined />} style={{ marginRight: 8 }} />
            <span>admin</span>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default TopNav; 