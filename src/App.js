import React, {useState} from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = React.useState(
    {firstName: "", lastName: "", Email: ""}
)

/**
 * Challenge: add an email field/state to the form
 */

// i just added  an email to the object set above and below added another email input form 

console.log(formData)

function handleChange(event) {
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    })
}

return (
    <form>
        <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
        />
        <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
        />

<input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="Email"
        />
    </form>
)
}

export default App;
