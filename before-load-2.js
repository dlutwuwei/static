/**
 * 客户端识别及基本属性与事件获取
 */

/* eslint-disable */
const init = (global = window, baseFontSize = 100) => {
  if ("sysType" in global) {
    return !0;
  }
  let countScale;
  let setScale;
  const ua = navigator.userAgent.toLowerCase();
  // alert(ua);
  const doc = global.document;
  const docElem = doc.documentElement;
  let viewSet = doc.querySelector('meta[name="viewport"]');
  const isTouchPad = /hp-tablet/gi.test(navigator.appVersion);
  const hasTouch = "ontouchstart" in global && !isTouchPad;
  const Sys = {
    hasTouch: hasTouch,
    evStart: hasTouch ? "touchstart" : "mousedown",
    evMove: hasTouch ? "touchmove" : "mousemove",
    evEnd: hasTouch ? "touchend" : "mouseup",
    evInput: "\v" === "v" ? "propertychange" : "input",
    evResize: "onresize" in global ? "resize" : "orientationchange",
    evTap: typeof global.Zepto === "function" ? "tap" : "click",
  };
  // 增加class
  function addClass(klass) {
    docElem.className === ""
      ? (docElem.className += klass)
      : (docElem.className += " " + klass);
  }
  // 判断浏览器类型与客户端类型
  (function () {
    /* eslint max-len: 0 */
    let s;
    // 微信
    (s = ua.match(/messenger\/([\d.]+)/))
      ? ((Sys.webOs = s[1]), (Sys.browser = "weixin"), addClass("weixin"))
      : // 微博
      (s = ua.match(/(webos|hpwos)[\s\/]([\d.]+)/))
      ? ((Sys.webOs = s[2]), (Sys.browser = "webo"), addClass("webo"))
      : // IE
      (s = ua.match(/(msie |trident\/)([\d.]+)/))
      ? ((Sys.ie = s[1]), (Sys.browser = "ie"), addClass("ie"))
      : // 火狐
      (s = ua.match(/firefox\/([\d.]+)/))
      ? ((Sys.firefox = s[1]), (Sys.browser = "firefox"), addClass("firefox"))
      : // 谷歌
      (s = ua.match(/chrome\/([\d.]+)/))
      ? ((Sys.chrome = s[1]), (Sys.browser = "chrome"), addClass("chrome"))
      : // 欧朋
      (s = ua.match(/opera.([\d.]+)/))
      ? ((Sys.opera = s[1]), (Sys.browser = "opera"), addClass("opera"))
      : // 苹果
      (s = ua.match(/version\/([\d.]+).*safari/))
      ? ((Sys.safari = s[1]), (Sys.browser = "safari"), addClass("safari"))
      : !1;
    // vivo手机特殊化
    (s = ua.match(/vivobrowser\/([\d.]+)/))
      ? ((Sys.vivo = s[1]), (Sys.isVivo = "vivo"), addClass("vivo"))
      : !1;

    // 客户端类型
    (s = ua.match(/windows.* ([\d.]+)\;/))
      ? ((Sys.windows = s[1]), (Sys.facility = "windows"), addClass("win-pc"))
      : (s = ua.match(/mac.*x ([\d.]+)\;/))
      ? ((Sys.windows = s[1]), (Sys.facility = "osx"), addClass("mac-pc"))
      : (s = ua.match(/iphone.* ([\d]+)\_([\d])/))
      ? ((Sys.ios = s[2] ? (s[1] + s[2]) / 10 : s[1]),
        (Sys.facility = "iphone"),
        addClass("ios"))
      : (s = ua.match(/ipad.* ([\d]+)\_([\d])\_/))
      ? ((Sys.ios = s[2] ? (s[1] + s[2]) / 10 : s[1]),
        (Sys.facility = "ipad"),
        addClass("ios"))
      : (s = ua.match(/android ([\d.]+)\;/))
      ? ((Sys.android = s[1]), (Sys.facility = "android"), addClass("android"))
      : !1;

    // 是否移动端 ； v0.13.1 添加android,iphone,ios,ipad有些移动端设备 UA中并没有mobile,比如三星折叠手机
    (s = ua.match(/(android|iphone|ios|ipad|mobile|silk-accelerated=true)/))
      ? (Sys.mobile = !0)
      : !1;
    Sys.telPrefix =
      Sys.facility === "android" && parseInt(Sys.android, 10) < 4
        ? "tel://"
        : "tel:";
    global.sysType = Sys;
    // alert(JSON.stringify(Sys));
  })();
  // 写入根字体大小
  function writeBaseFontSize() {
    if (location.pathname === "/app/download") {
      return false;
    }

    const dw = docElem.getBoundingClientRect().width;
    console.log("---dw=", dw);
    console.log("document.body.offsetWidth=", document.body.offsetWidth);
    // 非mobile情况
    // if (!global.sysType.mobile) {
    //   if (dw >= 750) {
    //     // windows PC端 按750大小初始化
    //     global.rem = baseFontSize;
    //   } else {
    //     // windows PC端 小于750 按移动端处理
    //     global.rem = baseFontSize / 2 * (dw / 375);
    //   }
    //   if (global.sysType.facility === 'android') {
    //     // 单屏机
    //     const isSingleScreen =
    //       document.body.offsetHeight > document.body.offsetWidth;
    //     if (!isSingleScreen && location.pathname === '/store/download') {
    //       global.rem = baseFontSize / 2 * countScale;
    //       document.getElementById ('root').style.maxWidth = '100%'; // 30.56rem
    //     }
    //   }
    // } else {
    // mobile 手机端
    global.rem = (baseFontSize / 2) * (dw / 375);
    // }
    if (location.pathname === "/store/helpCenter") {
      // 单屏机(设计稿宽度1528)
      global.rem = (baseFontSize / 2) * (dw / 1528);
      document.getElementById("root").style.maxWidth = "100%"; // 30.56rem
    }
    // if (countScale > 1) {
    // global.rem = baseFontSize / 2 * (docElem.getBoundingClientRect().width / 375);
    // } else {
    //     global.rem = baseFontSize / 2 * countScale;
    // }

    // console.log(`global.sysType=${JSON.stringify(global.sysType)}, width=${docElem.getBoundingClientRect().width}, countScale=${countScale}, font-size=${global.rem}`);
    docElem.style.fontSize = global.rem + "px";
  }
  // 没有viewport标签
  if (!viewSet) {
    viewSet = doc.createElement("meta");
    viewSet.setAttribute("name", "viewport");
    doc.head.appendChild(viewSet);
  }

  // 计算缩放倍率
  if (!countScale || !setScale) {
    countScale = global.devicePixelRatio;
    setScale = 1 / countScale;
    viewSet.setAttribute(
      "content",
      `width=device-width,user-scalable=no,initial-scale=${setScale},maximum-scale=${setScale},minimum-scale=${setScale},viewport-fit=cover`
    );
    global.dpr = countScale;
  }

  // 屏幕旋转重新计算
  let delay;
  global.addEventListener(
    Sys.evResize,
    function () {
      clearTimeout(delay);
      delay = setTimeout(writeBaseFontSize, 10);
    },
    !1
  );
  // 记录首次加载时间
  global.addEventListener("load", (e) => {
    global.loadTime = Date.now();
  });
  // 如果页面使用了bfcache，强制刷新
  global.addEventListener("pageshow", (e) => {
    // let curTime = Date.now();
    // // 如果浏览器有persisted属性或当前时间超过首次加载时间很长
    // if (e.persisted || (curTime - global.loadTime > 1000)) {
    //     return location.reload();
    // }
  });

  writeBaseFontSize();

  // app中嵌入访问，添加in-app样式
  if (global.nativeSupportApp) {
    addClass("in-app");
  }
};

// 确保渲染器所在的页面加载完成后再执行
init();
