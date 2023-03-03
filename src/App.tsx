import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import EventsExample from './components/EventsExample';
import List from './components/List';
import TodoItem from './components/TodoItem';
import UserItem from './components/UserItem';
import { IUser, ITodo } from './types/types';

const App = () => {
	const [users, setUsers] = useState<IUser[]>([]);
	const [todos, setTodos] = useState<ITodo[]>([]);
	
	useEffect(() => {
		fetchUsers();
		fetchTodos();
	}, []);
	
	async function fetchUsers() {
		try {
			const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
			setUsers(response.data);
		} catch (e) {
			alert(e);
		}
	}
	
	async function fetchTodos() {
		try {
			const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
			setTodos(response.data);
		} catch (e) {
			alert(e);
		}
	}
	
	return (
		<div>
			Working
			<EventsExample/>
			<Card
				width={'120px'}
				height={'120px'}
			>
				<button>123</button>
			</Card>
			
			<List
				items={users}
				renderItem={(user: IUser) => (
					<UserItem
						key={user.id}
						user={user}
					/>
				)}
			/>
			
			<List
				items={todos}
				renderItem={(todo: ITodo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
					/>
				)}
			/>
		</div>
	);
};

export default App;