// 配列の分割代入

const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

const highScore = scores[0];
const secondScore = scores[1];

const [gold, silver, bronze, ...rest] = scores;
// 上のようにして配列のそれぞれの要素を変数に代入できる．
// restの部分には残りの要素が配列として入っている

// オブジェクトの分割代入．使う機会は多い
// オブジェクトから必要な要素を変数に代入することができた．

const user = {
    email: 'harvey@example.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'stacy@example.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// 上の３行とやってることは同じ．
// const { firstName, lastName, email } = user;

// オブジェクトのプロパティに対して新しい変数名の変数にも代入することができる．
// diedのプロパティのようにもし指定したプロパティが右辺のオブジェクトになかった場合のためにデフォルト値を設定できる
// const { born: birthYear, died: deathYear = 'N/A' } = user;

// const {firstName, lastName, died = 'N/A'} = user2;

// 関数パラメーターの分割代入

// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`;
// }

// 引数に渡す時点で以下のようにプロパティの指定が可能．中括弧はオブジェクトの意味．
function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}



const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

movies.filter(movie => movie.score >= 90);
// 上と下のやつは同じ意味．どのオブジェクトのどのプロパティかの指定に必要な行が減る．
movies.filter(({ score }) => score >= 90);

movies.map(movie => {
    return `${movie.title}(${movie.year}): ${movie.score}/100`;
})

movies.map(({title, year, score}) => {
    return `${title}(${year}): ${score}/100`;
})

// マジでよく見る書き方だから慣れるように