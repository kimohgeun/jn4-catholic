import React, { Component } from 'react';
import NoticePresenter from './NoticePresenter';
import { firestore } from '../../firebase';

class NoticeContainer extends Component {
	state = {
		id: '',
		text: '',
	};

	componentDidMount() {
		firestore
			.collection('notice')
			.get()
			.then(docs => {
				docs.forEach(doc => {
					const id = doc.id;
					this.setState({ id });
					this.setState(doc.data());
				});
			});
	}

	handleChange = e => {
		const { id } = this.state;
		firestore
			.collection('notice')
			.doc(id)
			.update({ text: e.target.value });
		this.setState({
			text: e.target.value,
		});
	};

	render() {
		const { text } = this.state;
		return <NoticePresenter text={text} handleChange={this.handleChange} />;
	}
}

export default NoticeContainer;
