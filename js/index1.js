//定义一个导航类
function Nav(navBg, position, navList, color, el) {
  //1.导航栏的主题背景色
  this.navBg = navBg;
  //2.导航栏的位置
  this.position = position;
  //3.导航栏列表
  this.navList = navList;
  //4.字体颜色
  this.color = color;
  //5.导航栏元素对象
  this.el = el;
}

//导航栏原型
Nav.prototype = {
  init() {
    //初始化默认class
    this.el.classList.add('nav', 'black');
    //设置背景颜色
    this.el.style.backgroundColor = this.navBg;
    //设置阴影颜色
    this.el.style.boxShadow = '0 5px 5px ' + this.navBg;
    //设置导航栏位置
    this.el.style.textAlign = this.position;
    //初始化列表
    for(let i in this.navList) {
      let that = this;
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.href = this.navList[i].link;
      a.innerText = this.navList[i].content;
      li.appendChild(a);
      this.el.appendChild(li);
    }
    // let style = document.getElementsByTagName('style')[0];
    // let style = document.styleSheets[1];
    let sheet = document.styleSheets[1].sheet;
    console.log(document.styleSheets);
    
    sheet.addRule('.nav li::before', 'background: linear-gradient(top, ' + this.navBg + ', rgba(255, 255, 255, .2) 50%, ' + this.navBg + ')');
    sheet.addRule('.nav li::after', 'background: linear-gradient(top, ' + this.navBg + ', rgba(255, 255, 255, .2) 50%, ' + this.navBg + ')');
    // sheet.insertRule('.nav li::before { background: linear-gradient(top, ' + this.navBg + ', rgba(255, 255, 255, .2) 50%, ' + this.navBg + ')}', 0);
    // sheet.insertRule('.nav li::after { background: linear-gradient(top, ' + this.navBg + ', rgba(255, 255, 255, .2) 50%, ' + this.navBg + ')}', 0);
    console.log(document.styleSheets);
    //设置字体颜色
    this.el.color = this.color;
  }
}

//单例模式生成导航对象
let navInstance = function(navBg, position, navList, color, el) {
  let nav = null;
  if(!nav) {
    nav = new Nav(navBg, position, navList, color, el);
  }
  return nav;
}