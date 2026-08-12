var posts=["2026/08/07/api学习/api学习/","2026/08/12/学习路径/张学长学习路径分享/","2026/08/10/注册表学习/注册表的学习/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };