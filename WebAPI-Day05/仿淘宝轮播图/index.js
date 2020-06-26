/* 
图片的滚动，可以调用动画函数animate()

功能模块分析：
1. 当鼠标移到轮播图上时，左右箭头显示，当鼠标离开时，左右箭头隐藏
2. 当点击左箭头时，图片向右滚动一张；当点击右箭头，图片向左滚动一张
3，当图片在轮播的时候，底部相应索引号的小圆点也随之变色
4. 底部的小圆点被点击后，即可播放到相应的图片
5. 不做任何点击时，图片自动轮播 setInterval()
6. 当鼠标经过轮播图是，图片的自动轮播即停止
*/

window.addEventListener('load', function () {
    // alert('src js ojbk');

    // 1. 获取元素
    // 获取轮播图大盒子
    let promo = document.querySelector('.promo');
    // console.log(promo);
    // 获取左按钮
    let arrowLeft = promo.querySelector('.arrow_l');
    // 获取右按钮
    let arrowRight = promo.querySelector('.arrow_r');
    // 获取图片元素对象
    let promoImg = promo.querySelector('ul')
    console.log(promoImg);
    // 获取底部导航ul元素对象
    let promoNav = promo.querySelector('.promo_nav').querySelector('.circle');
    console.log(promoNav);


    // 功能模块1：当鼠标经过轮播图时，显示左右箭头；当鼠标离开轮播图时，则左右箭头隐藏
    promo.addEventListener('mouseover', function () {
        arrowLeft.style.display = 'block';
        arrowRight.style.display = 'block';
        clearInterval(timer);
        timer = null; // 释放变量
    });
    promo.addEventListener('mouseout', function () {
        arrowLeft.style.display = 'none';
        arrowRight.style.display = 'none';
        timer = setInterval(function () {
            // 手动调用点击事件
            arrowRight.click();
        }, 2000)

    })


    // 底部小圆点导航
    /* 根据实际的图片张数，动态地生成底部小圆点个数
    1. 先获取图片的张数 因为图片放在li里面，也就是获取li的个数 .length
    2. 利用循环动态生成小圆点
    3. 如何生成一个新的元素节点？createElement('li')
    4. 创建新的元素节点后，需要插入到相应的位置 appendChild('li')
    */
    // 利用for循环，创建新节点元素，并插入到相应的位置下
    for (let i = 0; i < promoImg.children.length; i++) {
        // console.log(promoImg.children.length);
        // 文档document下创建一个新的元素节点
        let li = document.createElement('li');
        // console.log(li);
        // 并添加到相应的元素节点里
        promoNav.appendChild(li);
    }
    // console.log(promoNav);
    for (let i = 0; i < promoNav.children.length; i++) {
        let a = document.createElement('a');
        // 给小圆点设置索引号这个自定义属性，setAttribute()
        a.setAttribute('index', i);
        promoNav.children[i].appendChild(a);
        // 小圆点的排他思想
        a.addEventListener('click', function () {
            for (let i = 0; i < promoNav.children.length; i++) {
                promoNav.children[i].children[0].className = '';
            }
            // promoNav.children[i].children[0].className = 'current';
            this.className = 'current';
            // 是图片所在的ul移动距离，即ul在滚动，其移动距离=小圆点的索引号*图片本身的宽度 注意是负值
            // 调用animate()动画函数 animate(obj, target, callback)
            // 图片的宽度，也就是轮播图这个盒子的宽度，即promo.offsetWidth
            // console.log(promo.offsetWidth);
            // 那么，如何获取小圆点的索引号？通过在生成小圆点的时候设置一个自定义属性，然后获取该自定义属性即可 return to line-63
            // 获取当前小圆点的索引号getAttribute()
            let index = a.getAttribute('index');
            num = circle = index;
            // console.log(index);
            // 注意是负值 -index
            animate(promoImg, -index * promo.offsetWidth);
        });
    }
    // 给底部小圆点导航的第一个li中的a添加current类
    promoNav.children[0].children[0].className = 'current';

    // 小圆点的排他思想：当前被点击的小圆点显示颜色(即添加current类就可)，其他不作变化。在遍历生成a的时候就可以进行设置，return to line-64。

    /* 点击小圆点，滚动播放相应的图片
    1. 导入animate函数，注意上下依赖关系
    2. 使用动画函数的前提是：这个obj有定位属性
    3. 是图片所在的ul在滚动，而不是图片所在的单个li在滚动，可以看作一整张长的图片？
    4. 那么是按照什么样方式进行滚动呢？即，小圆点的索引号乘以图片的宽度作为ul的移动距离
    return to line-71
    */


    /* 
    克隆第一张图片 写在生成小圆点其后，是为了让小圆点是根据原先的图片数量生成相应的个数 不影响小圆点生成的个数
    1. 克隆图片所在ul里的第一个li cloneNode()
    a. 如果值设置为true，则为深克隆：即包括克隆该节点下的所有子节点；如果为false，则为浅克隆，不克隆其下的子节点
    2. 克隆以后，将其添加到图片所在的ul里面 即appendChild()
    */
    let first = promoImg.children[0].cloneNode(true);
    promoImg.appendChild(first);


    /* 功能模块：当点击右箭头时，图片向左滚动播放一张；当点击左箭头时，图片向右滚动播放一张
    1. 声明一个变量num， 点击一次，自增1，让这个变量乘以图片的宽度，即为图片所在ul移动的距离
    2. 图片的无缝滚动：
    a. 把图片所在的ul里第一个li复制一份到ul的末尾
    b. 当图片滚动到所克隆的最后一张时，让图片所在的ul快速地、不做动画地跳到最左侧，即：left:0;(进行判断)
    c. 同时，num重新赋值为0，从头开始滚动图片
    */
    let num = 0;
    let circle = 0
    // 设置节流阀
    let flag = true;
    // 右侧按钮
    arrowRight.addEventListener('click', function () {
        // alert(1);
        if (flag) {
            flag = false;
            // 判断是否滚动到最后一张
            if (num == promoImg.children.length - 1) {
                promoImg.style.left = 0;
                num = 0;
            }
            num++;
            // animate(obj, target, callback)
            animate(promoImg, -num * promo.offsetWidth, function () {
                flag = true;
            });

            circle++;
            if (circle == promoNav.children.length) {
                circle = 0;
            }
            // 排他思想
            for (let i = 0; i < promoNav.children.length; i++) {
                promoNav.children[i].children[0].className = '';
            }
            promoNav.children[circle].children[0].className = 'current';
        }
    });

    /* 
    点击右侧按钮，小圆点随之变化
    1. 声明一个变量circle，每点击一次，自增1，因为左侧按钮也需要这个变量，注意这个变量的作用域范围
    2. 注意实际的图片数量多出一张，但是小圆点仍旧是以原先的图片数量为准
    3. 那么，就要加一个判断条件，即circle == 原先图片数量时，circle = 0;
    return to line-129
    */
    // 左侧按钮
    arrowLeft.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = promoImg.children.length - 1;
                promoImg.style.left = -num * promo.offsetWidth + 'px';
            }
            num--;
            animate(promoImg, -num * promo.offsetWidth, function () {
                flag = true;
            });

            circle--;
            if (circle < 0) {
                circle = promoNav.children.length - 1;
            }
            for (let i = 0; i < promoNav.children.length; i++) {
                promoNav.children[i].children[0].className = '';
            }
            promoNav.children[circle].children[0].className = 'current';
        }
    })


    /* 自动播放轮播图 
    1. 添加一个定时器
    2. 自动轮播，相当于点击了右侧按钮
    3，通过手动调用右侧按钮的的点击事件 arrowRight.click()
    4. 鼠标经过轮播图，停止定时器
    5. 鼠标离开轮播图，开始定时器
    */
    let timer = setInterval(function () {
        // 手动调用点击事件
        arrowRight.click();
    }, 2000);

    /* 节流阀：防止轮播图按钮连续点击造成播放过快
    节流阀：当上一个动画函数执行完后，再执行下一个动画函数，让事件无法连续触发
    核心思路：利用回调函数 因为回调函数就是等上一个事件完成后再执行这个函数
    且，添加一个变量，来锁住函数和解锁函数  let flag = true;
    if(flag){flag=false; do something}; 关闭水龙头
    利用回调函数 动画执行完毕后 flag=true 打开水龙头
    */
})