import React from 'react';
import styled from 'styled-components';

const Icon = styled.i`
	position: fixed;
	right: 20px;
	bottom: 20px;
	font-size: 2rem;
	color: #62b5af;
	cursor: pointer;
	&:active {
		transform: scale(0.8);
	}
	transition: transform 0.1s linear;
`;

const AddButton = ({ onCreate }) => <Icon className="fas fa-plus-circle" onClick={() => onCreate()} />;

export default AddButton;
