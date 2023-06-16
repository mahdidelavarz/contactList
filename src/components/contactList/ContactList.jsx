import '../../styles/contacts.css'
import Contact from './contact/Contact';
const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className="contacts">
      {contacts ? contacts.map((contact) => {
        return <Contact
          key={contact.id}
          name={contact.name}
          email={contact.email}
          onDelete={() => onDelete(contact.id)} />
      }) : <p> loading ...</p>}
    </div>
  );
}

export default ContactList;