var movies = [
    {
        id: 1,
        title: 'harry potter',
        desc: 'film o czarodzieju',
        img: './img/potter.jpg'
    },
    {
        id: 2,
        title: 'król lew',
        desc: 'film o lwie',
        img: './img/lew.jpg'
    },
    {
        id: 3,
        title: 'Epoka Lodowcowa',
        desc: 'film o epoce lodowcowej',
        img: './img/epoka.jpg'
    },
    {
        id: 4,
        title: 'Shrek',
        desc: 'film o shreku',
        img: './img/shrek.jpg'
    }
];

var moviesElements = movies.map(function (movie){
    return React.createElement('li', {key:movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.img})
    );
});

var element = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));

