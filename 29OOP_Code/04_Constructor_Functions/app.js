function Color(r, g, b) {
	// this = {};  // 1,3
	this.r = r;
	this.g = g;
	this.b = b;
	// return this;  // 4
}
// 関数名が大文字から始まると，オブジェクトを作ってくれるコンストラクタ関数だという意味を持つ．
// だが，上の状態だと，なかの引数のデータはwindowの入ってしまっている．
// new演算子は上のコメント部分のような役割を暗黙的に行っている

Color.prototype.rgb = function () {
	const { r, g, b } = this;
	return `rgb(${r}, ${g}, ${b})`;
}

Color.prototype.rgba = function(a = 1.0) {
	const { r, g, b } = this;
	return `rgba(${r}, ${g}, ${b}, ${a})`;
}

Color.prototype.hex = function () {
	const { r, g, b } = this;
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// コンストラクタ，クラスを作ることで，03_Factoryのフォルダのようなメソッド不一致の問題がなくなる．定義されたオブジェクト自体に関数が定義されてるわけではなくなり，プロトタイプに共通してメソッドが入ることになる．

// new 演算子
// 1. 空白のプレーンな JavaScript オブジェクトを作成します。
// 2. 他のオブジェクトを親プロトタイプとすることで、新しく作成されたオブジェクトと他のオブジェクトをリンク（コンストラクターを設定）します。
// 3. ステップ 1 で新しく作成されたオブジェクトを this コンテキストとして渡します。
// 4. 関数がオブジェクトを返さない場合は this を返します。
const color1 = new Color(40, 255, 60);
const color2 = new Color(0, 0, 0);
