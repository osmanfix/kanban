import css from './newCard.css'
import { useState } from 'react'

function NewCard (props) {

    const {formSubmit} = props
    const [values, setValues] = useState({
		title: '' 
    })

    const handleSubmit = e => {
		e.preventDefault()
		if (values.title) {
			formSubmit(values.title)
		}
	}

     const handleChange = e => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

    return (
        <form onSubmit={handleSubmit}>
            <input className={css.card} name='title' placeholder='New task title... ' type='text' value={values.title} onChange={handleChange}/>

            {values.title ?  (
                <button type='submit'>Submit</button>
            ) : (
                <p className={css.enter}>enter tasks.</p>
            )}
        </form>
    )
}

export default NewCard;