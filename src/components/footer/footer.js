import css from './footer.module.css'

function Footer(props) {
    const { tasks } = props
    const activeTasks = tasks.filter(task => task.status === 'backlog')
    const finishedTasks = tasks.filter(task => task.status === 'finished')

    return (
        <footer className={css.footer}>
            <div className={css.status}>
                <p className={css.statusText}>Active tasks: {activeTasks.length}</p>
                <p className={css.statusText}> Finished tasks: {finishedTasks.length}</p>
            </div>
            <div className={css.nameUser}>
                <p>Kanban board by Anatoliy Osmankin, 2023 </p>
            </div>
        </footer>
    )
}

export default Footer;