// 文字列をラップしたStringラッパーオブジェクト
const str = new String("文字列");
// ラッパーオブジェクトは"object"型のデータ
console.log(typeof str); // => "object"
// Stringオブジェクトの`length`プロパティは文字列の長さを返す
console.log(str.length); // => 3