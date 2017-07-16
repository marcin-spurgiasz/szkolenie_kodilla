var contacts = [
  {
    id: 1,
    firstName: 'Jan',
    lastName: 'Nowak',
    email: 'jan.nowak@example.com',
  },
  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Kowalski',
    email: 'adam.kowalski@example.com',
  },
  {
    id: 3,
    firstName: 'Zbigniew',
    lastName: 'Koziol',
    email: 'zbigniew.koziol@example.com',
  }
];

var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};

var Contacts = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired
    },
    render: function () {
        var contacts = this.props.items.map(function (contact){
            return React.createElement(Contact, {key: contact.id, item: contact});
        });
        return (
            React.createElement('ul',{className: 'contactsList'}, contacts)
        );
    }
});