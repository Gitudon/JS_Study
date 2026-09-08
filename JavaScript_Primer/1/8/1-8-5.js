const array = [1, 2, 3];
// 仮引数が1つなので`()`を省略できる
// 関数の処理が1つの式なので`return`文を省略できる
const doubleArray = array.map(value => value * 2);
console.log(doubleArray); // => [2, 4, 6]