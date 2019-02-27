import React, { Component } from 'react';
import HomePresenter from './HomePresenter';
import uuid from 'uuid';

class HomeContainer extends Component {
	state = {
		schedules: [],
	};

	onCreate = () => {
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
		this.setState({
			schedules: schedules.concat(schedule),
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
		return <HomePresenter schedules={schedules} onCreate={this.onCreate} onUpdate={this.onUpdate} />;
	}
}

export default HomeContainer;
