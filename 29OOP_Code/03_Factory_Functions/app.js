function hex(r, g, b) {
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
	return `rgb(${r}, ${g}, ${b})`;
}


// 以下のようなファクトリ関数の欠点:colorというオブジェクトが作られるたびに，hexとかrgbとかの関数が新しく定義しなおされている．同じ関数なので使いまさせばいいだけなのに
// それを解決してくれているのがnewというやつ．続きは04のやつで．
function makeColor(r, g, b) {
	const color = {};
	color.r = r;
	color.g = g;
	color.b = b;
	color.rgb = function () {
		const { r, g, b } = this;
		return `rgb(${r}, ${g}, ${b})`;
	}
	color.hex = function () {
		const { r, g, b } = this;
		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}
	return color;
}
// makeColorで定義したオブジェクト同士に入っている関数は異なる．
// color1 = makeColor(1,2,3), color2 = makeColor(2,3,4), とかにしたとき
// color1.rgb === color2.rgb は falseとなるということ．

const firstColor = makeColor(35, 255, 150);
const black = makeColor(0, 0, 0);
// firstColor.rgb === black.rgb は false