// 屏幕缩放适配方案
(() => {
    const oHtml = document.getElementsByTagName('html')[0];
    const width = oHtml.clientWidth;
    // 375px的屏幕基准像素为10px
    oHtml.style.fontSize = 10 * (width / 375) + "px";
    console.log(oHtml.style.fontSize)
})()