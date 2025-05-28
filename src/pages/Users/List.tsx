export default function Toolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert('你点击了 toolbar ！');
      }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          alert('正在播放！');
        }}
      >
        播放电影
      </button>
      <button onClick={() => alert('正在上传！')}>上传图片</button>
    </div>
  );
}
