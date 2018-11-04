'use scrict';

var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    image: 'https://1.fwcdn.pl/po/05/71/30571/7529392.6.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    image: 'http://s3.viva.pl/newsy/krol-lew-plakat-filmu-427851-movie_cover.jpg'
  },
  {
  	id: 3,
  	title: 'Świnka Pepa',
  	desc: 'bajka o śwince',
  	image: 'https://eplakaty.pl/img/towary/2/2016_11/43997.jpg'
  },

];
var MovieTitle = React.createClass({
	propTypes: {
		movie: React.PropTypes.string.isRequired,
	},
	render: function() {
		return (
			React.createElement('h2', {}, this.props.movie)
		);
	}
});

var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render: function() {
		return (
			React.createElement('p', {}, this.props.desc)
		);
	}
});

var MovieImage = React.createClass({
	propTypes: {
		image: React.PropTypes.string.isRequired,
	},
	render: function() {
		return (
			React.createElement('img', {src: this.props.image},)
		);
	}
});

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function() {
		return (
			React.createElement('li', {key: this.props.movie.id},
				React.createElement(MovieTitle, {movie: this.props.movie.title}),
				React.createElement(MovieDescription, {desc: this.props.movie.desc}),
				React.createElement(MovieImage, {image: this.props.movie.image})
			)
		);
	}
});

var MoviesList = React.createClass({
	propTypes: {
		list: React.PropTypes.array.isRequired,
	},
	render: function() {
		var moviesElements = this.props.list.map(function (movie) {
			return (
				React.createElement(Movie, {movie: movie, key: movie.id})
			)
		});
			return (
    			React.createElement('ul', {}, moviesElements)
		)
	}
})

var element = 
	React.createElement('div', {},
    	React.createElement('h1', {}, 'Lista filmów'),
    	React.createElement(MoviesList, {list: movies})
    );

ReactDOM.render(element, document.getElementById('app'));
