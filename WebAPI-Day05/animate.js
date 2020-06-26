function animate(obj, target, callback) {
    // 先清除定时器，只保留当前的一个定时器
    clearInterval(obj.timer);
    // 给不同的元素对象设置不同的定时器 obj.timer
    obj.timer = setInterval(function () {
        // 计算步长
        let step = (target - obj.offsetLeft) / 10;
        // 判断步长是否大于0，如果大于向上取整，反之向下取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // 如果元素的位置等于target，则停止定时器
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // 如果有回调函数，则执行回调函数
            // callback ? callback() : null;
            callback&&callback(); //短路运算
        }
        // obj每次移动的距离，记得加单位px
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}