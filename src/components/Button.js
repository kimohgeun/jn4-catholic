import styled from 'styled-components';
import React, { Component } from 'react';

const Icon = styled.i`
	position: fixed;
	right: 20px;
	bottom: 20px;
	font-size: 35px;
	color: #62b5af;
	cursor: pointer;
	transform: ${props => props.toggle && 'rotate(45deg);'};
	transition: transform 0.2s linear;
`;

const Clear = styled.span`
	position: fixed;
	opacity: ${props => (props.toggle === false ? 0 : 1)};
	bottom: ${props => (props.toggle === false ? '20px' : '200px')};
	transition: all 0.3s linear;
	right: 20px;
	width: 35px;
	height: 35px;
	border-radius: 50%;
	text-align: center;
	line-height: 35px;
	font-size: 10px;
	background: #81c784;
	&:active {
		transform: scale(0.8);
	}
	cursor: pointer;
	color: #fff;
`;

const Add = styled.span`
	position: fixed;
	opacity: ${props => (props.toggle === false ? 0 : 1)};
	bottom: ${props => (props.toggle === false ? '20px' : '80px')};
	transition: all 0.3s linear;
	right: 20px;
	display: inline-block;
	width: 35px;
	height: 35px;
	border-radius: 50%;
	text-align: center;
	line-height: 35px;
	font-size: 10px;
	background: #64b5f6;
	&:active {
		transform: scale(0.8);
	}
	cursor: pointer;
	color: #fff;
`;
const Delete = styled.span`
	position: fixed;
	opacity: ${props => (props.toggle === false ? 0 : 1)};
	bottom: ${props => (props.toggle === false ? '20px' : '140px')};
	transition: all 0.3s linear;
	right: 20px;
	display: inline-block;
	width: 35px;
	height: 35px;
	border-radius: 50%;
	text-align: center;
	line-height: 35px;
	font-size: 10px;
	background: #e57373;
	&:active {
		transform: scale(0.8);
	}
	cursor: pointer;
	color: #fff;
`;

class Button extends Component {
	state = {
		toggle: false,
	};
	handleClick = () => {
		const { toggle } = this.state;
		this.setState({
			toggle: !toggle,
		});
	};
	render() {
		const { toggle } = this.state;
		return (
			<>
				<div>
					<Clear toggle={toggle} onClick={this.props.onClear}>
						클리어
					</Clear>
					<Add toggle={toggle} onClick={this.props.onCreate}>
						행 추가
					</Add>
					<Delete toggle={toggle} onClick={this.props.onDelete}>
						행 삭제
					</Delete>
				</div>
				<Icon toggle={toggle} className="fas fa-plus-circle" onClick={this.handleClick} />
			</>
		);
	}
}

export default Button;
