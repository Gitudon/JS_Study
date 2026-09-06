// プロパティ名は文字列の"123"
const object = {
    "123": "value"
};
// OK: ブラケット記法では、文字列として書くことができる
console.log(object["123"]); // => "value"
// NG: ドット記法では、数値からはじまる識別子は利用できない
object.123