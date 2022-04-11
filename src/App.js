import logo from './logo.svg';
import './App.css';
 
import Welcome from './components/Welcome';
 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import MainPage from './components/MainPage';
import TodoMain from './components/TodoMain';


function App() {

	return (
		<div className="App">
			<BrowserRouter>
				<div>
					<Switch>
						<Route exact path="/" >
						<MainPage />
						</Route>
						<Route path="/😃">
							<Welcome />
						</Route>
						<Route path="/💡">
							<TodoMain/>
						</Route>
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
 
}

export default App;
