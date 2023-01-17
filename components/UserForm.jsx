import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';

export default function UserForm () {
    const [formData, setFormData] = React.useState(
        { firstName: "", lastName: "", email: "", comments: ""}
    )

    function handleInput(event) {
        setFormData(prevFormData =>{
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

        return (
            < form >
                <input 
                    type="text"
                    placeholder="first name"
                    onChange={handleInput}
                    name="firstName"
                    value={formData.firstName}
                 />

                <input 
                     type="text"
                     placeholder='last name'
                     onChange={handleInput}
                     name='lastName'
                    value={formData.lastName}
                  />
                   <input 
                     type="email"
                     placeholder='email'
                     onChange={handleInput}
                     name='email'
                     value={formData.email}
                  />

                   <input 
                    className='comment' 
                     type="text"
                     placeholder='comments'
                     onChange={handleInput}
                     name='comments'
                     value={formData.comments}
                  />
                  <button type="submit">submit</button>
            </form>
        )
}