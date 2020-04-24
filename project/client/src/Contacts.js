import React from 'react';

function Contacts(props) {
    const contacts = props.contacts;
    const contactsList = contacts.map(contact =>
        {
            return <div key={contact.key}>
                
                <p>
                {contacts.text}
                </p>
            </div>
        })
    return(
        <div>
            {contactsList}
        </div>
    )
}

export default Contacts;