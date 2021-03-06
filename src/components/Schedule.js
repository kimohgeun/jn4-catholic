import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: space-around;
	border-radius: 5px;
	color: #757575;
	font-weight: bold;
	margin-bottom: 20px;
	z-index: 5;
`;

const Input = styled.input`
	all: unset;
	width: 100%;
	margin: 2px;
	font-size: 0.8rem;
	text-align: center;
	border: 1px solid ${props => (props.value === '' ? '#e0e0e0' : 'none')};
	padding: 1em 0;
	border-radius: 5px;
`;

class Schedule extends Component {
	state = {
		day: this.props.schedule.day,
		missaNarrator: this.props.schedule.missaNarrator,
		oneAltarServer: this.props.schedule.oneAltarServer,
		twoAltarServer: this.props.schedule.twoAltarServer,
		oneLector: this.props.schedule.oneLector,
		twoLector: this.props.schedule.twoLector,
	};

	handleChange = e => {
		const data = {
			[e.target.name]: e.target.value,
		};
		this.setState({
			data,
		});
		this.props.onUpdate(this.props.schedule.id, data);
	};

	render() {
		const { day, missaNarrator, oneAltarServer, twoAltarServer, oneLector, twoLector } = this.props.schedule;
		return (
			<Container>
				<Input name="day" value={day} onChange={this.handleChange} />
				<Input name="missaNarrator" value={missaNarrator} onChange={this.handleChange} />
				<Input name="oneAltarServer" value={oneAltarServer} onChange={this.handleChange} />
				<Input name="twoAltarServer" value={twoAltarServer} onChange={this.handleChange} />
				<Input name="oneLector" value={oneLector} onChange={this.handleChange} />
				<Input name="twoLector" value={twoLector} onChange={this.handleChange} />
			</Container>
		);
	}
}

export default Schedule;
