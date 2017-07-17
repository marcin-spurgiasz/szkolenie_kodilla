var App = React.createClass({
    render: function (){
        return (
            <div className='app'>
                <h2 className='formHeader'>Formularz Kontaktowy</h2>
                <ContactForm contact={contactForm}></ContactForm>   
                <Contacts items={contacts}></Contacts>
            </div>
        );
    }
});