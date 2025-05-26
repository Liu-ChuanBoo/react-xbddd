import React from 'react';
import './index.css';

export default function Home() {
  return (
    <div className="home-container">
      <h1>欢迎来到智能管理系统</h1>
      <p className="home-desc">这里是系统首页，您可以通过左侧菜单访问各类功能和数据看板。</p>
      <div className="home-info-list">
        <div className="home-info-item">
          <div className="home-info-title">系统公告</div>
          <div className="home-info-content">暂无公告</div>
        </div>
        <div className="home-info-item">
          <div className="home-info-title">快捷入口</div>
          <div className="home-info-content">可在左侧菜单快速访问常用功能</div>
        </div>
        <div className="home-info-item">
          <div className="home-info-title">帮助中心</div>
          <div className="home-info-content">如有疑问请联系管理员</div>
        </div>
      </div>
    </div>
  );
} 