import css from './select.module.css';
import { Types } from '../../config';


function Select(props) {
    const { noFiltredTasks, type, setTasks, handleSelectVisible } = props

     const handleSelectChange = (e) => {
        const updatedTask = noFiltredTasks.map(task => {
            if (task.id === e.target.value) {
                return { ...task, status: type }
            } 
            return task
        })
        setTasks(updatedTask)
        handleSelectVisible(false)
     }

    return (
        <select key={noFiltredTasks} className={css.select} onChange={handleSelectChange}>

            <option className={css.cT}>choose task</option>
        
            {type === Types.READY && (
                noFiltredTasks.filter(task => task.status === 'backlog').map(tasks => {
                    return (
                        <option className={css.option} key={tasks.id} value={tasks.id}>{tasks.title}</option>
                    )}
                ))
            }

            {type === Types.PROGRESS && (
                noFiltredTasks.filter(task => task.status === 'ready').map(tasks => {
                    return (
                        <option className={css.option} key={tasks.id} value={tasks.id}>{tasks.title}</option>
                    )}
                ))
            }

            {type === Types.FINISHED && (
                noFiltredTasks.filter(task => task.status === 'inProgress').map(tasks => {
                    return (
                        <option className={css.option} key={tasks.id} value={tasks.id}>{tasks.title}</option>
                    )}
                ))
            }
        
        </select>

    )
}


export default Select;