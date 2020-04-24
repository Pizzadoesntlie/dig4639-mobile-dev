import React from 'react';
//import logo from './logo.svg';
import './styles.css';
//import Contacts from './Contacts';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
       currentContact: { 
        name: '',
        number:''
      }
    }
   this.nameInput = this.nameInput.bind(this);
   this.numberInput = this.numberInput.bind(this);
   this.addContact = this.addContact.bind(this);
  }

  componentDidMount() {
    window.fetch("http://plato.mrl.ai:8080/contacts", {
      headers: {
        API: "gordon"
      }
    })
    .then((res) => res.json())
    .then((body) => {
      this.setState({contacts: body.contacts});
    });
  }

  nameInput(e) {
    this.setState({
      currentContact: {
        name: e.target.value
      }
    })
  }
  numberInput(e) {
    this.setState({
      currentContact: {
        number: e.target.value
      }
    })
  }
  
  addContact(e) {
    window.fetch('http://plato.mrl.ai:8080/contacts/add', {
      method: "POST",
      headers: {
        API: "gordon",
        'Content-Type': "application/json",
        'Accept': "application/json"
      }
    })
    .then((res) => res.json())
    .then((body) => {
      const newContact = this.state.currentContact;
      if(body.added !== undefined) {
        const newContacts =[...this.state.contacts, newContact];
        this.setState({
          contacts: newContacts,
          currentContact: {
            name: '',
            number:'',
          }
        })
      /*const newContact = {name: this.state.name, number: this.state.number}
        this.setState({contacts:[...this.state.contacts], newContact})*/
        //let contacts = this.state.contacts
        /*contacts.push(
          {"name":this.value.name, "number":this.value.number}
        )
        this.setState({contacts})*/
     }
   });
    console.log("added")
   // console.log(this.state.contacts)
    }

  removeContact(position) {
    fetch('http://plato.mrl.ai:8080/contacts/remove', {
      method: "POST",
      headers: {
        API: "gordon",
        'Content-Type': "application/json",
        'Accept': "application/json"
      },
      body: JSON.stringify({position:position})
    })
    .then((res) => res.json())
    .then((body) => {
      if(body.removed !== undefined) {
        const noContact = this.state.contacts.filter((v,i) => 
        (i !== position))
      this.setState({contacts: noContact});
      }
    });
    console.log("POST a request to the server with the contact here")
  }

  profile() {
    fetch('http://plato.mrl.ai:8080/profile', {
      method: "GET",
      headers: {
        API:"gordon"
      }
    })
    .then((res) => res.json())
    .then((body) => {
      this.setState({contacts:body.contacts.length})
    })
  }
  ///if(body.removed != undefined) {const newContact this.state.contacts.filter(v,i) => (i !== position))}
  //<input type="button" className="addButton" value="Add Contact" onClick={this.addContact} />
//profile create a component and show the server output to the user that is logged in so they can see what contacts they have or create a separate page that shows that output
  render() {
    return(  
      <>
      <div>
        <form onSubmit={this.addContact()}>
      <p>Name: <input type="text" name="name" value={this.state.currentContact.text} onChange={this.nameInput} /> 
       Number: <input type="text" name="number" value={this.state.currentContact.text} onChange={this.numberInput} /></p>
       <button type='submit'>Add Contact</button>
       <input type="button" className="removeButton" value="Remove Contact" onClick={this.removeContact()} />
       </form>
      </div>
        <div className="contacts">
         <p>CONTACTS:</p>
          { 
            this.state.contacts.map((value, index) => {
            return <p key={index}><input type="checkbox" onClick={this.removeContact()}/>
             {value.name} {value.number}{this.state.currentContact.text}</p>;
            })
         }
        </div>
     </>
     );
  }
}

export default App;