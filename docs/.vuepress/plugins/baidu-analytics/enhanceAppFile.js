export default ({ router }) => {
  // 百度分析集成
  if (process.env.NODE_ENV === 'production' && GA_ID && typeof window !== 'undefined') {
    let _hmt = _hmt || [];
    (function () {
      let hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?8e73e612b55e425a2ffcc0f6cd7c23dc";
      let s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
  }
}