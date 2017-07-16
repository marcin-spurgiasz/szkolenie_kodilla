var movies = [
    {
        id: 1,
        title: 'Harry potter',
        desc: 'film o czarodzieju',
        img: './img/potter.jpg'
    },
    {
        id: 2,
        title: 'Król lew',
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

var MoviesList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired
    },
    render: function () {
        var movies = this.props.movies.map(function(movie) {
            return React.createElement(Movie, {key: movie.id, movie: movie})
        });
        
        return (
            React.createElement('div', {},
                React.createElement('h1', {}, 'Lista Filmów'),
                React.createElement('ul', {}, movies)
            )
        )
    }
});

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },
    render: function () {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, {title: this.props.movie.title}),
                React.createElement(MovieDescription, {desc: this.props.movie.desc}),
                React.createElement(MovieImg, {img: this.props.movie.img})
           
            )
        )
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            React.createElement('p', {}, this.props.desc)
        )
    }
});

var MovieImg = React.createClass({
    propTypes: {
        img: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            React.createElement('img', {src: this.props.img})
        )
    }
})

var allMovies = React.createElement(MoviesList, {movies: movies});
ReactDOM.render(allMovies, document.getElementById('app'));
