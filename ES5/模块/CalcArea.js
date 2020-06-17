const circleArea = r => (Math.PI * r ** 2).toFixed(2);
// const circleArea = r => Math.PI*(r**2);

const squareArea = s => s ** 2;

/* 
exports.circleArea = circleArea;
exports.squareArea = squareArea; 
*/

// module 模块、组件
module.exports.circleArea = circleArea; //如果exports跟module.exports指向的对象不同(即引用不同)，那么最终以module.exports为准
module.exports.squareArea = squareArea;