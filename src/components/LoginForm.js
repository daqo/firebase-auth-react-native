import React, { Component } from 'react';
import { Button, Card, CardItem, Input } from './common';

class LoginForm extends Component {
	state = { email: '', password: '' };

	render() {
		return (
			<Card>
				<CardItem>
					<Input
						label="Email"
						placeholder="john@smith.com"
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardItem>

				<CardItem>
					<Input
						secureTextEntry
						label="Password"
						placeholder="password"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardItem>

				<CardItem>
					<Button>Log in</Button>
				</CardItem>
			</Card>
		);
	}
}

export default LoginForm;
