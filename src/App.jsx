import "./App.scss";

import React from "react";

const Login = () => {
	const onSubmitHandler = (e) => {e.preventDefault()};

	return (
		<form onSubmit={onSubmitHandler}>
			<label htmlFor="email">Email</label>
			<input type="text" htmlFor="email" required/>
			<label htmlFor="password">Password</label>
			<input type="text" htmlFor="password" required/>
			<button type="submit">submit</button>
		</form>
	);
};

const Signup = () => {
	const onSubmitHandler = (e) => {e.preventDefault()};

	return (
		<form onSubmit={onSubmitHandler}>
			<label htmlFor="email">Email</label>
			<input type="text" htmlFor="email" required/>
			<label htmlFor="password">Password</label>
			<input type="text" htmlFor="password" required/>
			<button type="submit">submit</button>
		</form>
	);
};

function App() {
	return (
		<div className="App">
			<h3>Login</h3>
			<Login />
			<h3>Sign Up</h3>
			<Signup />
		</div>
	);
}

export default App;
