import { useHistory, useLocation, useParams } from 'react-router';
import AddTodo from './todochild/AddTodo';
 
import TodoList from './todochild/ToDoList';

const TodoMain = () => {
    const user = localStorage.getItem('usernames');
	console.log("User " + user);

    

    return (
        <div>
            <div>
<br/>
				<div className="app-title">💡	Hi, {user}</div>
			</div>
            <AddTodo />
            <TodoList />
        </div>

    );

};

export default TodoMain