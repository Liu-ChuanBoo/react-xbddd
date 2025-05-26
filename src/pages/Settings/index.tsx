import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export default function Settings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>设置</h1>
      <h2>主题切换</h2>
      <p>当前主题: {theme}</p>
      <button onClick={toggleTheme}>
        切换到{theme === 'light' ? '暗黑' : '白色'}主题
      </button>
    </div>
  );
} 