console.log(String("str")); // => "str"
console.log(String(true)); // => "true"
console.log(String(null)); // => "null"
console.log(String(undefined)); // => "undefined"
console.log(String(Symbol("シンボルの説明文"))); // => "Symbol(シンボルの説明文)"
// プリミティブ型ではない値の場合
console.log(String([1, 2, 3])); // => "1,2,3"
console.log(String({ key: "value" })); // => "[object Object]"
console.log(String(function () { })); // "function() {}"