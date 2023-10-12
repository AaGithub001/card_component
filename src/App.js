import './App.css';
import Card from './components/card';
import contacts from './data/contacts';

function SingleContact(contact){
  return (
    <div>
      <Card
      name={contact.name}
      img = {contact.imgURL}
      tel={contact.phone}
      email={contact.email}

      />
    </div>
  );

}

function App() {
 
  return (
    <div>
    {contacts.map}
    </div>
  );
}

export default App;
