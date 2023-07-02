import { useLocation  } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './description.module.css';


function Descriptions(props) {
    const { pathname } = useLocation()
    const { tasks, setTasks } = props
    const task = tasks.find(task => `/tasks/${task.id}` === pathname)
    const [values, setValues] = useState({
       description: task.description
    })

    const handleChange = e => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}
    
    const save = () => {
        const updatedTasks = tasks.map(t => {
          if (t.id === task.id) {
            return { ...t, description: values.description };
          }
          return t;
        });
        setTasks(updatedTasks);
      };

    return (
        <div className={css.background}>
            <div className={css.head}>
              <p>{task.title}</p>
              <Link to='/'>&#10006;</Link>
            </div>

            <textarea 
            className={css.description} 
            name='description'  
            type='text' 
            value={values.description} 
            onChange={handleChange} 
            placeholder='This task has no description'/>
            <Link to='/' className={css.save} onClick={save}>save</Link>
        </div>
    )
}

export default Descriptions;