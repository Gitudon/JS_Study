function fn() {
    // `arguments`はインデックスを指定して各要素にアクセスできる
    console.log(arguments[0]); // => "a"
    console.log(arguments[1]); // => "b"
    console.log(arguments[2]); // => "c"
}
fn("a", "b", "c");