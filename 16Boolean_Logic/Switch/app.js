const day = 8;

switch (day) {
    case 1:
        console.log('月曜日');
        break;
    case 2:
        console.log('火曜日');
        break;
    case 3:
        console.log('水曜日');
        break;
    case 4:
        console.log('木曜日');
        break;
    case 5:
        console.log('金曜日');
        break;
    case 6:
    case 7:
        console.log('週末');
        break;
    // 土日はどっちも週末で，冗長にしないようにこのように省略できる．breakがなければ以降のcaseも出力される．
    default:
        console.log('無効な数字です');
}

// switch文は1つのcaseにひっかかるとそれ以降が全て出力されるので，breakがある．
// defaultはif文でのelse的な存在．

// const day = 2;
// if (day === 1) {
//     console.log('月曜日');
// } else if (day === 2) {
//     console.log('火曜日');
// } else if (day === 3) {
//     console.log('水曜日');
// } else if (day === 4) {
//     console.log('木曜日');
// } else if (day === 5) {
//     console.log('金曜日');
// }