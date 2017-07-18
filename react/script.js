var Counter = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired
    },
    getInitialState: function () {
        return {
            counter: 0
        }
    },
    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    render: function () {
        return (
            React.createElement('div', {}, 
                React.createElement('span', {}, 'Licznik: ' + this.state.counter),
                React.createElement('br', {}),
                React.createElement('button', {onClick: this.increment}, 'Dodaj 1 - ' + this.props.name),
                React.createElement('button', {onClick: this.decrement}, 'Odejmij 1 - ' + this.props.name)
            )
        )
    }
});

var element = React.createElement('div', {},
    React.createElement(Counter, {name: 'Licznik 1'}),
    React.createElement(Counter, {name: 'Licznik 2'})
)
ReactDOM.render(element, document.getElementById('app'));