import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Types } from '../../../config';
import NewCard from '../../newCard/newCard';
import Select from '../../select/select';
import css from './list.module.css';


function List(props) {
    const { 
        type, 
        status, 
        tasks, 
        addNewTask, 
        noFiltredTasks, 
        setTasks 
    } = props

    const [visible, setVisible] = useState(false)
    const [selectVisible, setSelectVisible] = useState(false)

    const handleAddNewClick = () => {
		setVisible(!visible)
	}
    const formSubmit = (title, description) => {
		addNewTask(title, description)
		setVisible(false)
	}
    const handleSelectVisible = () => {
        setSelectVisible(!selectVisible)
    }
    const CardRemov = (e) => {
        console.log(e.target.value)
        const findTask = noFiltredTasks.find(task => task.id === e.target.value)
        if (findTask) {
            setTasks([...noFiltredTasks.filter(task => task !== findTask)])
        }
    }

    return (
        <div className={css.list}>
            <h3 className={css.header}>{status}</h3>
            {tasks.map(task => {
                return (
                    <div key={task.id} className={css.card}>
                        <Link to={`/tasks/${task.id}`} className={css.link}>
                         <p className={css.title}>{task.title}</p>
                        </Link>
                        <button value={task.id} className={css.button} onClick={CardRemov}>
                          &#10006;
                        </button>
                    </div>
                    )
                }
            )}
            
            {type === Types.BACKLOG && visible && (
                <NewCard formSubmit={formSubmit} />
            )}
            
            {type === Types.BACKLOG && !visible &&
                (<button className={css.button} onClick={handleAddNewClick}>+ Add card</button>)
            }

            <div className={css.selectCard}>
                {type !== Types.BACKLOG && selectVisible && (
                    <Select {...props}  handleSelectVisible={handleSelectVisible}/>
                )}

                {type !== Types.BACKLOG && 
                    <button  className={css.button} onClick={handleSelectVisible}> + Add card </button>
                }
            </div>
        </div>           
)
}

export default List;