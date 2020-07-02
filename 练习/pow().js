/* 
pow(a,n)：求a的n次方
*/
function pow(a, n) {
    // product 乘积
    let product = 1;
    for (let i = 0; i < n; i++) {
        product *= a;
    }
    return product;
}

console.log(pow(1, 3));