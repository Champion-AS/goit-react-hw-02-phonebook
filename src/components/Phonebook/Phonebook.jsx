export const Phonebook = ({handleAddContact,onChangeName,contacts}) => {
    return (
        <form onSubmit={handleAddContact}>
             <label>Name</label>
        <input
                
        type="text"
        name="name"
        onChange={onChangeName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        />
        <label>Number</label>
        <input
        type="tel"
        name="number"
        onChange={onChangeName}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        />
            
        <button type="submit">Add contact</button>
        <h2>Contacts</h2>
        <ul>
        {contacts.map(contact => (
        <li key={contact.id}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
        </li>
        ))}

        </ul>
    </form>
)
}