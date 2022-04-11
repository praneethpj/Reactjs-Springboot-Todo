import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import TodoItems from './ToDoItems';
import { setDataId } from "../../redux/dataSlice";
import { addTask , refreshTask} from "../../redux/taskSlices";
import axios from 'axios';
import { getAll } from '../../services/todos.service';
 
import { setPageId,getPageId } from "../../redux/pageSlice";

const TodoList = () => {

	const dispatch = useDispatch([]);
	const [elements, setElements] = useState([]);
	const [newpage, setNewPage] = useState(0);

	const user = localStorage.getItem('usernames');


	const todos = useSelector((state) => {
		return state.tasks;
	});

	var data = useSelector((state) => {
		return state.data;
	});

	var page = useSelector((state) => {
		return state.page;
	});

	//console.log("todo "+todos);
	useEffect(() => {
		dispatch(
			refreshTask({
			  id: 0
			})
		  )
		getAll({ username: user,page:newpage })
			.then((res) => {
				//console.log(res.data);

				//dataitems.push(JSON.stringify(res.data));
				setElements(res.data);
				//  console.log("Items "+elements);
				//update(res.data);
				//e.target.reset(); //FORM RESET
			})
			.catch((err) => {
				console.log(err);
				alert("Seems to be Backend not found");
			});


	}, [data]);

	useEffect(() => {
		console.log(elements);
		for (const x of elements) {


			dispatch(
				addTask({
					id: x.id,
					title: x.title,
					content: x.content,
					username: x.username,
					status: x.status,
					modified: x.modified
				})
				// todos=res.data
			);

		}
	}, [elements])

	var page = useSelector((state) => {
		return state.page;
	});

	const nextPage = () => {
		let npage=page+1;
		setNewPage(npage);
		
		dispatch(
			setPageId({
				page: npage,
			})
		);
		dispatch(
			setDataId({
				id: 0,
			})
		);
	}



	return (
		<div> 
		<ul className="app">
			{todos.length <= 0 ? <div><h2>Folk, 😞 No Task found</h2></div> : todos.map((todo) => (
			   // console.log("Items "+JSON.stringify(todo))
			  <TodoItems id={todo.id} title={todo.title}   statustext={todo.status?"enable-text":"disable-text" } modifiedDate={todo.date} />
			))}



		</ul>
		<div>
	<button onClick={nextPage}>Next</button>
</div>
		</div>

	);
};

export default TodoList;