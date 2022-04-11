import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTask, refreshTask, updateTask, deleteTask } from "../../redux/taskSlices";

import { insertTodo } from '../../services/todos.service';
import Modal from "react-bootstrap/Modal";
import { getTaskById, modifyTodo } from '../../services/todos.service';
import "bootstrap/dist/css/bootstrap.min.css";

import { setDataId } from "../../redux/dataSlice";
import ReactTooltip from 'react-tooltip';
import { useHistory } from 'react-router-dom';


const AddTodo = () => {

	const user = localStorage.getItem('usernames');
	console.log("User " + user);

	const [value, setValue] = useState('');
	const [content, setContent] = useState('');

	const [todotitle, setTodoTitle] = useState('');
	const [totdocontent, setTodoContent] = useState('');

	const [itemId, setItemId] = useState('');

	const [disabled, setDisabled] = useState(true);

	const [insertData, setInsertData] = useState(true);

	const [isOpen, setIsOpen] = React.useState(false);

	const clicksid = useSelector((state) => state.click.value)

	const history = useHistory();

	const showModal = () => {
		setIsOpen(true);
	};


	const hideModal = () => {
		setIsOpen(false);
	};

	const dispatch = useDispatch();


	var click = useSelector((state) => {
		return state.click;
	});

	useEffect(() => {

		if (click.length > 0) {

			console.log(click[0].id);
			setItemId(click[0].id);
			getTaskById({ id: click[0].id })
				.then((res) => {
					setTodoTitle(res.data.title);
					setTodoContent(res.data.content);
					setInsertData(false);
					showModal();

				})
				.catch((err) => {
					console.log(err);
				});



		};
	}, [click])


	const updateTodo = () => {
		modifyTodo({ id: itemId, title: todotitle, content: totdocontent, username: user })
			.then((res) => {
				console.log(res.data);
				dispatch(
					refreshTask({
						id: itemId
					})
				)

				dispatch(
					setDataId({
						id: itemId,
					})
				);

				hideModal();
				setDisabled(true);

			})
			.catch((err) => {
				console.error(err.response.data.errors);
			});

	};

	const logout = () => {
		localStorage.setItem('usernames', '');
		history.push("/😃");
	}

	const onSubmit = (event) => {
		event.preventDefault();

		if (value.trim().length === 0) {
			alert("Enter a task before adding !!");
			setValue("");
			return;
		}

		insertTodo({ title: value, content: content, username: user })
			.then((res) => {
				console.log("res " + JSON.stringify(res.data.title));
				dispatch(
					addTask({
						id: res.data.id,
						title: res.data.title,
						content: res.data.content,
						username: res.data.username,
						status: res.data.status,
						modified: res.data.modified
					})
				);
				hideModal();

			})
			.catch((err) => {
				console.log(err);
			});

		setValue("");

	};
	const addNewData = () => {
		setInsertData(true);
		showModal();
	}
	return (
		<div className="add-todo">
			{/* <button onClick={showModal}>Display Modal</button> */}
			<ReactTooltip />

			<span style={{ color: "#9aa0a6" }}>Need to keep task ? dont worry </span>
			<button data-tip="Create a new task" className="task-button-create" onClick={addNewData}>
				🥪
			</button>
			<button data-tip="Logout" className="task-button-logout" onClick={logout}>
				✖️
			</button>


			<Modal show={isOpen} onHide={hideModal}>

				{insertData ?

					<div>
						<Modal.Header>

							<Modal.Title>Create a new task</Modal.Title>

						</Modal.Header>
						<Modal.Body>
							<input
								type="text"
								className="task-input"
								placeholder="Task Goal"
								value={value}
								style={{ margin: "10px" }}
								maxLength={10} 
								onChange={(event) => setValue(event.target.value)}
							></input>

							<textarea

								className="task-input"
								placeholder="What for?"

								style={{ margin: "10px" }}
								onChange={(event) => setContent(event.target.value)}
							>{content}</textarea>
						</Modal.Body>
						<Modal.Footer>
							<button className="task-button" style={{ margin: "10px" }} onClick={onSubmit}>
								Save
							</button>

							<button className="task-button" style={{ margin: "10px" }} onClick={hideModal}>
								Cancel
							</button>
						</Modal.Footer>
					</div> : <div><Modal.Header>

						<Modal.Title><input value={todotitle} className="task-input"
							onChange={(event) => setTodoTitle(event.target.value)} type="text" style={{ border: 0, color: 'black' }} disabled={disabled} ></input></Modal.Title>

					</Modal.Header>

						<Modal.Body><textarea className="task-input"
							onChange={(event) => setTodoContent(event.target.value)} style={{ border: 0, color: 'black' }} disabled={disabled}>{totdocontent}</textarea></Modal.Body>

						<Modal.Footer>
							Edit<input type="checkbox" onChange={() => setDisabled(!disabled)} />

							<button className='task-button' onClick={updateTodo} disabled={disabled}>Update</button>

							<button className='task-button' onClick={hideModal} disabled={!disabled}>Looking good</button>

						</Modal.Footer>
					</div>}


			</Modal>

		</div>
	);
};

export default AddTodo;