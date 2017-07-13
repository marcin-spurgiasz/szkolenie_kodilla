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


var moviesElements = movies.map(function (movie){
    return React.createElement('li', {key:movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.img})
    );
});

var MoviesList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired
    },
    render: function () {
        var movies = this.props.movies.map(function(movie){
            return React.createElement(Movie, {key: movie.id, movieElement: movie})
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
        movieElement: React.PropTypes.object.isRequired
    },
    render: function () {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, {titleElement: this.props.movieElement.title}),
                React.createElement(MovieDescription, {descElement: this.props.movieElement.desc}),
                React.createElement(MovieImg, {imgElement: this.props.movieElement.img})
           
            )
        )
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        titleElement: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            React.createElement('h2', {}, this.props.titleElement)
        )
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        descElement: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            React.createElement('p', {}, this.props.descElement)
        )
    }
});

var MovieImg = React.createClass({
    propTypes: {
        imgElement: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            React.createElement('img', {src: this.props.imgElement})
        )
    }
})

var allMovies = React.createElement(MoviesList, {movies: movies});
ReactDOM.render(allMovies, document.getElementById('app'));
