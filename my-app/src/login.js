import React, {Component} from 'react';
import "./login.css"

class Login extends Component {
	render() {
		return (
			<div>
				<form>
					<input type="text" placeholder="Username" className="inputText" />
					<input type="text" placeholder="Password" className="inputText" />
					<input type="submit" id="submitButton" value="Log In" />
				</form>
			</div>
		);
	}
}

export default Login;