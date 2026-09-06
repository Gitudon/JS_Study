function fn() {
    const undefined = "独自の未定義値"; // undefinedという名前の変数をエラーなく定義できる
    console.log(undefined); // => "独自の未定義値"
}
fn();