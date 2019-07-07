import React, { Component } from 'react';
import HomePresenter from './HomePresenter';
import { firestore } from '../../firebase';

class HomeContainer extends Component {
	state = {
		schedules: [],
		term: '',
	};

	componentDidMount() {
		const schedules = [...this.state.schedules];
		firestore
			.collection('schedules')
			.get()
			.then(docs => {
				docs.forEach(doc => {
					schedules.push({
						id: doc.id,
						day: doc.data().day,
						missaNarrator: doc.data().missaNarrator,
						oneAltarServer: doc.data().oneAltarServer,
						twoAltarServer: doc.data().twoAltarServer,
						oneLector: doc.data().oneLector,
						twoLector: doc.data().twoLector,
					});
					schedules.sort(function(a, b) {
						return a.day < b.day ? -1 : a.day > b.day ? 1 : 0;
					});
					this.setState({ schedules });
				});
			});
	}

	home = React.createRef();

	onCreate = async () => {
		await firestore
			.collection('schedules')
			.add({
				day: '',
				missaNarrator: '',
				oneAltarServer: '',
				twoAltarServer: '',
				oneLector: '',
				twoLector: '',
			})
			.then(res => {
				const schedules = [
					...this.state.schedules,
					{
						id: res.id,
						day: '',
						missaNarrator: '',
						oneAltarServer: '',
						twoAltarServer: '',
						oneLector: '',
						twoLector: '',
					},
				];
				this.setState({ schedules });
			});
		this.home.current.scrollTop = this.home.current.scrollHeight;
	};

	onDelete = async () => {
		const { schedules } = this.state;
		const id = schedules[0].id;
		if (schedules.length !== 0) {
			await firestore
				.collection('schedules')
				.doc(id)
				.delete()
				.then(() => {
					this.setState({ schedules: schedules.filter(schedule => schedule.id !== id) });
				});
			this.home.current.scrollTop = this.home.current.scrollHeight;
		}
	};

	onUpdate = (id, data) => {
		const { schedules } = this.state;
		firestore
			.collection('schedules')
			.doc(id)
			.update(data);
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

	onClear = async () => {
		const { schedules } = this.state;
		function allDelete() {
			if (schedules.length !== 0) {
				for (let i = 0; i <= schedules.length - 1; i++) {
					firestore
						.collection('schedules')
						.doc(schedules[i].id)
						.delete();
				}
			}
		}
		await allDelete();
		this.setState({ schedules: [] });
	};

	onSearch = e => {
		this.setState({
			term: e.target.value,
		});
	};

	render() {
		const { schedules, term } = this.state;
		const searchSchedule = schedules.filter(schedule => schedule.day.indexOf(term) !== -1);
		return (
			<HomePresenter
				schedules={searchSchedule}
				term={term}
				onSearch={this.onSearch}
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
