/* 
三个功能模块：
1. 鼠标经过原图片小盒子时，透明黄的遮挡层出现，且放大图片的盒子也跟着显示，鼠标离开即隐藏
2. 透明黄的遮挡层跟随鼠标移动
3. 透明黄的遮挡层在移动时，放大的图片也随之移动
*/

// 等HTML、CSS加载完后执行JS代码
window.addEventListener('load', function () {
    // 1. 获取元素
    let box = document.querySelector('.box');
    let orginalImg = document.querySelector('.orginal_img');
    // console.log(orginalImg);
    let mask = document.querySelector('.mask');
    // console.log(mask);
    let enlargedImg = document.querySelector('.enlarged_img');
    // console.log(enlargedImg);
    let bigImg = document.querySelector('.bigImg');
    // console.log(bigImg);

    // console.log(enlargedImg.offsetWidth);
    // console.log(bigImg.offsetWidth);

    // 2. 功能模块①：鼠标经过(mouseover)原图片小盒子时，透明黄的遮挡层出现，且放大图片的盒子也跟着显示，鼠标离开(mouseout)即隐藏
    orginalImg.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        enlargedImg.style.display = 'block';
    })
    orginalImg.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        enlargedImg.style.display = 'none';
    })

    // 3. 功能模块②：透明黄的遮挡层跟随鼠标移动，把鼠标在原图片这个盒子内的XY坐标给透明黄遮挡层，同时让鼠标居中于遮挡层盒子
    /* 
    0. 把鼠标的坐标给遮挡层并不合适，因为遮挡层是以父盒子(原图片所在的盒子)为准
    1. 所以先获得鼠标在原图片盒子内的坐标
    2. 然后将X，Y坐标值赋给遮挡层的left，top
    3. 这是鼠标移动(mousemove)事件，但还是在原图片这个盒子里面移动，不能让透明黄遮挡层超出这个范围
    */
    orginalImg.addEventListener('mousemove', function (e) {
        // A. 鼠标在原图片盒子内坐标 = 鼠标在当前网页页面中的XY坐标 - 原图片盒子在当前网页页面内的XY坐标
        // 注意，如果原图片盒子有带定位属性的父级盒子，那么通过offset获取的坐标就是以该带定位属性的父级盒子为准
        // 那么如果有这样的父盒子，则被减时加上父盒子在当前网页页面内的XY坐标
        let x = e.pageX - (this.offsetLeft + box.offsetLeft);
        let y = e.pageY - (this.offsetTop + box.offsetTop);
        // console.log(x, y);

        /* B. 然后将X，Y坐标值赋给遮挡层的left，top
        a. 通过style属性，注意获得的X、Y是数值，并不带单位，所以要添加单位
        b. 另外，如何让鼠标居于一个盒子中部？即让这个盒子往上、往左走自身宽高的一半，负值
        c. 如何获取一个盒子自身的宽高 offsetWidth offsetHeight
        */
        // mask.style.top = y - mask.offsetHeight / 2 + 'px';
        // mask.style.left = x - mask.offsetWidth / 2 + 'px';

        /* C. 透明黄遮挡层在原图片这个盒子里面移动，不能让其超出这个范围
        通过判断mask的top left值：
        a. 如果left, top值小于0，则让其左，上移值为0；
        b. 如果超过右边、下面，则是判断左移值是否超过(原图片盒子自身宽度-遮挡层盒子宽度)的差值，判断是否超过下面同理
        */
        let maskX = x - mask.offsetWidth / 2;
        let maskY = y - mask.offsetHeight / 2;
        let maxX = orginalImg.offsetWidth - mask.offsetWidth;
        let maxY = orginalImg.offsetHeight - mask.offsetHeight;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maxX) {
            maskX = maxX;
        }
        mask.style.left = maskX + 'px';
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maxY) {
            maskY = maxY;
        }
        mask.style.top = maskY + 'px';

        /* D. 放大的图片成比例的随透明黄遮挡层移动
        遮挡层移动的距离/遮挡层最大移动距离 = 大图移动的距离/大图最大移动距离
        */
        // 求大图可移动的最大距离 = 大图本身的宽度 - 大图所在盒子本身的宽度，又因为是正方形
        let bigImgMax = bigImg.offsetWidth - enlargedImg.offsetWidth;
        // console.log('enlargedImg.offsetWidth: ', enlargedImg.offsetWidth);
        // console.log('bigImg.offsetWidth: ', bigImg.offsetWidth);
        // console.log('bigImgMax: ', bigImgMax);
        
        // 大图移动的距离
        let bigImgX = maskX * bigImgMax / maxX;
        // console.log('bigImgX: ', bigImgX);
        let bigImgY = maskY * bigImgMax / maxY;
        // console.log('bigImgY: ', bigImgY);
        // 负值，往相反的方向走，记得加单位
        bigImg.style.left = -bigImgX + 'px';
        bigImg.style.top = -bigImgY + 'px';
    })
})