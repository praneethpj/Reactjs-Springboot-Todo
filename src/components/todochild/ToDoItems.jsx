import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, refreshTask } from "../../redux/taskSlices";
import { setClickId } from "../../redux/clickSlice";
import { removeTodo, doneTodo } from '../../services/todos.service';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setDataId } from "../../redux/dataSlice";
import { faCheck, faTrash, faBan } from '@fortawesome/free-solid-svg-icons'
import Moment from 'moment';


const TodoItems = ({ id, title, statustext, modifiedDate }) => {

	const dispatch = useDispatch();

	const click = useSelector((state) => {
		return state.click;
	});

	
	

	const doneTask = () => {

		doneTodo({ id: id })
			.then((res) => {
				console.log("res " + JSON.stringify(res.data.title));
				dispatch(
					setDataId({
						id: id,
					})
				);

			})
			.catch((err) => {
				console.log(err);
			});
	}

	const removeTask = () => {

		removeTodo({ id: id })
			.then((res) => {
				console.log("res " + JSON.stringify(res.data.title));
				dispatch(
					deleteTask({
						id: id
					})
				);

			})
			.catch((err) => {
				console.log(err);
			});


		//console.log(click+" ");
	}

	const clickLable = () => {
		dispatch(
			setClickId({
				id: id,
			})
		);
	}


	return (
		<div>
			<ReactTooltip />
			<li className="task-item" >
				<div className='modifiedDate'>{Moment(modifiedDate).format('YYYY-DD-MMM HH:MM')} </div>

				<div data-tip="View me" className={'task-item-title ' + statustext} onClick={() => clickLable()}>
					{title}
				</div>

				{/* <div>
				{content}
			</div> */}

				{statustext === "disable-text" ? <div>
					<button data-tip="Already done" disabled style={{ marginLeft: "300%", "height": "100%", color: "#b94949" }} className="remove-task-button" onClick={() => {

					}}>

						<FontAwesomeIcon icon={faBan} /></button>
				</div> : <div>
					<button data-tip="Make this done" style={{ marginLeft: "300%", "height": "100%", color: "#b94949" }} className="remove-task-button" onClick={() => {
						doneTask();
					}}>

						<FontAwesomeIcon icon={faCheck} /></button>
				</div>}

				<div>
					<button data-tip="Remove this task" style={{ marginLeft: "300%", "height": "100%" }} className="remove-task-button" onClick={() => {
						removeTask();
					}}>

						<FontAwesomeIcon icon={faTrash} /></button>
				</div>
			</li>


		</div>
	);
};

export default TodoItems;