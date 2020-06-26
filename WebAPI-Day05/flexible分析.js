// 立即执行函数
(function flexible(window, document) {
    // 获取HTML根元素
    var docEl = document.documentElement
    // dpr 像素比 PC端1像素 移动端2像素
    var dpr = window.devicePixelRatio || 1

    // adjust body font size 设置页面字体的大小
    function setBodyFontSize() {
        if (document.body) { // 如果有body，则将body里的字体设置为：12像素乘以相应像素比后的大小
            document.body.style.fontSize = (12 * dpr) + 'px'
        } else { // 如果获取不到body，那么等DOM的主要内容元素加载完后，调用设置字体大小的函数
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    // 调用设置字体大小的函数
    setBodyFontSize();

    // set 1rem = viewWidth / 10
    function setRemUnit() {
        // 将页面的可视区宽度划为了10等份
        var rem = docEl.clientWidth / 10
        // 设置HTML元素的字体大小
        docEl.style.fontSize = rem + 'px'
    }
    setRemUnit()

    // 如果页面尺寸大小发生变化时，则重新设置rem的大小
    window.addEventListener('resize', setRemUnit)
    // pageshow是重新加载页面触发的事件
    window.addEventListener('pageshow', function (e) {
        // e.persisted 返回的是true 即表明这个页面是从缓存取过来的页面，也要重新计算一下rem 的大小
        if (e.persisted) {
            setRemUnit()
        }
    })

    // detect 0.5px supports 为有的移动端不支持0.5px而做的支持
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}(window, document))