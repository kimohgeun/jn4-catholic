import React, { Component } from 'react';
import HomePresenter from './HomePresenter';
import uuid from 'uuid';

class HomeContainer extends Component {
	state = {
		schedules: [],
	};

	home = React.createRef();

	onCreate = async () => {
		const { schedules } = this.state;
		const schedule = {
			id: uuid(),
			day: '',
			missaNarrator: '',
			oneAltarServer: '',
			twoAltarServer: '',
			oneLector: '',
			twoLector: '',
		};
		await this.setState({
			schedules: schedules.concat(schedule),
		});
		this.home.current.scrollTop = this.home.current.scrollHeight;
	};

	onDelete = async () => {
		const { schedules } = this.state;
		schedules.pop();
		await this.setState({
			schedules: schedules,
		});
		this.home.current.scrollTop = this.home.current.scrollHeight;
	};

	onClear = () => {
		const { schedules } = this.state;
		schedules.pop();
		this.setState({
			schedules: [],
		});
	};

	onUpdate = (id, data) => {
		const { schedules } = this.state;
		this.setState({
			schedules: schedules.map(schedule =>
				schedule.id === id
					? {
							...schedule,
							...data,
					  }
					: schedule
			),
		});
	};

	render() {
		const { schedules } = this.state;
		return (
			<HomePresenter
				schedules={schedules}
				onCreate={this.onCreate}
				onDelete={this.onDelete}
				onUpdate={this.onUpdate}
				onClear={this.onClear}
				home={this.home}
			/>
		);
	}
}

export default HomeContainer;
