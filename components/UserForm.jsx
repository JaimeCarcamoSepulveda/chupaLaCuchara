import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';

export default function UserForm () {
    const [formData, setFormData] = React.useState(
        { firstName: "", 
        lastName: "",
         email: "", 
         comments: "",
         likePage: true,
         recommend: "",
         favPart: ""
        }
    )

    function handleInput(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData =>{
            return {
                ...prevFormData,
                [name]: type === "checkbox"? checked : value
            }
        })
    }
    function handleSubmit(event){
        event.preventDefault() // this will prevent from page being refreshed automatiicaly
        console.log('submit this form to API db')
        console.log(formData)
    }

        return (
            < form onSubmit={handleSubmit}>
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

                   <textarea 
                    className='comment' 
                     placeholder='enter comments here...'
                     onChange={handleInput}
                     name='comments'
                     value={formData.comments}
                  />
                <div>
                    <input 

                        type="checkbox"
                        checked={formData.likePage}
                        onChange={handleInput}
                        id="likePage" 
                        name='likePage'
                      />
                    <label 
                    htmlFor="likePage"
                    >I like this page?</label>
                </div>
                <fieldset>
                    <legend>Would you recommend this page to your friends</legend>
                    <input 
                        type="radio"
                        id='yes'
                        name='recommend'
                        value="yes"
                        onChange={handleInput}
                        checked={formData.recommend === "yes"}
                     />
                         <label htmlFor="yes">yes I would</label>
                     <br />
                         <input 
                        type="radio"
                        id='no'
                        name='recommend'
                        value="no"
                        onChange={handleInput}
                        checked = {formData.recommend=== "no"}
                     />
                     <label htmlFor="no">no, I wouldn't</label>
                     <br />
                     <input 
                        type="radio"
                        id='maybe'
                        name='recommend'
                        value="maybe"
                        onChange={handleInput}
                        checked={formData.recommend === "maybe"}
                     />
                     <label htmlFor="maybe">Maybe, not so sure yet</label>


                </fieldset>
                <label htmlFor="favPart">What was your favorite part of this page?</label>
                <br />
                <select 
                 name="favPart"
                 id="favPart"
                 value={formData.favPart}
                 onChange={handleInput}
                 >
                    <option value="">--choose--</option>
                    <option value="recipes">recipes</option>
                    <option value="ingredients">ingredients list</option>
                    <option value="foodPics">The pictures of food</option>
                    <option value="variety">the vast variety of recipes</option>

                </select>


                  <button>submit</button>
            </form>
        )
}