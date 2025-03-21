class Pet {
	constructor(name, age) {
		console.log('Petコンストラクタ');
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name}がご飯を食べている`;
	}
}

class Cat extends Pet {
	// 子クラスで親クラスのコンストラクタを新しく定義できる．
	constructor(name, age, jumpHeight = 5) {
		console.log('Catコンストラクタ');
		super(name, age);
		// このsuperによって親クラスのコンストラクタ何を継承するかを記述できる．コンストラクタの再利用
		this.jumpHeight = jumpHeight;
		// ここでコンストラクタとして新しい要素を加えている．
	}
	meow() {
		return 'にゃー！！！';
	}
}

class Dog extends Pet {
	bark() {
		return 'ワンワン！！！';
	}
	eat() {
		return `${this.name}がご飯を食い散らかしている`;
	}
}

// 自分のプロトタイプを起点に実行文に書いたメソッドがあるかをさかのぼる．
// 例えばtama = new Cat('ポチ'，10)だとしたとき，eatを呼ぶと，Catクラスの中のeatが先に呼ばれ，Catクラスになければ，その親クラスであるPetクラスの中のeatが呼ばれる．Petにもなければ．．．といったように指定したメソッドが見つかるまで親クラスへ親クラスへと戻りながら参照していく．.