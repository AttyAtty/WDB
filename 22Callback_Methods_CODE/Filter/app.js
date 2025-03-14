const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// filterメソッドは，その引数にある条件を満たす者のみを新しい関数の要素として加えていくのものである．まあ,filterっていうくらいだからね
numbers.filter((num) => {
    return num < 10;
})

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
];

// const goodMovies = movies.filter(movie => movie.score > 80);
const goodMovieTitles = movies
    .filter(movie => movie.score > 80)
    .map(movie => movie.title);

//評価が高い映画をfilterで選抜して，mapでそのタイトルを順に表示している 


const badMovies = movies.filter(movie => movie.score < 70);

const recentMovies = movies.filter(movie => movie.year > 2010);