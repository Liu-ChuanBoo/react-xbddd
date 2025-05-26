/// <reference types="vite/client" />

console.log(import.meta.env.VITE_API_URL);
console.log(import.meta.env.VITE_ENABLE_MOCK);

if (import.meta.env.VITE_ENABLE_MOCK === 'true') {
  // 启用 Mock 数据
}
