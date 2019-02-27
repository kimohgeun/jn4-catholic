import React, { Component } from 'react';
import NoticePresenter from './NoticePresenter';

class NoticeContainer extends Component {
	state = {
		notice: '',
	};

	handleChange = e => {
		this.setState({
			notice: e.target.value,
		});
	};

	render() {
		const { notice } = this.state;
		return <NoticePresenter notice={notice} handleChange={this.handleChange} />;
	}
}

export default NoticeContainer;
