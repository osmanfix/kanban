import uniqid from 'uniqid';
import {Types, LCOPY} from '../../../config';
import List from '../list/list';

function Board(props) {
    const {tasks, setTasks} = props
    const addNewTask = (title, description) => {
		const task = {
			id: uniqid(),
			title,
			description,
			status: 'backlog',
		}
		setTasks([...tasks, task]);
	}
    return (
    Object.values(Types).map(type => {
    const listTasks = tasks.filter(task => task.status === type)
            return (
            <List
                key={LCOPY[type]}
                type={type}
                status={LCOPY[type]}
                tasks={listTasks || []}
                addNewTask={addNewTask}
                noFiltredTasks={tasks}
                setTasks={setTasks}
                />
            )
        })
    )
}

export default Board;