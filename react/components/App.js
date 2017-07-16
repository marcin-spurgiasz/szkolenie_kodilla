var App = React.createClass({
    render: function (){
        return (
            React.createElement('div', {className: app},
                React.createElement('h2', {className: 'formHeader'}, 'Formularz kontaktowy'),
                React.createElement(ContactForm, {contact: contactForm}),
                React.createElement(Contacts, {items: contacts}, {})
            )
        );
    }
});