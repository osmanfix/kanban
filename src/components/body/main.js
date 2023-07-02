import { Route, Routes } from 'react-router-dom';
import Board from './board/board';
import Description from '../descriptionForm/description';
import css from './main.module.css';


function Body(props) {

    return (
        <body className={css.main}>
			<Routes>
				<Route exact path={'/'} element={<Board {...props} />} />
				<Route path={'/tasks/:taskId'} element={<Description  {...props } />} />
			</Routes>
        </body>
    )
}

export default Body;