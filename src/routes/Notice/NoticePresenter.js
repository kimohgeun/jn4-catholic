import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h2`
	font-size: 0.8rem;
	font-weight: bold;
	margin: 2em 0;
	color: #9e9e9e;
`;

const Textarea = styled.textarea`
	display: block;
	all: unset;
	background: #fff;
	width: 90%;
	min-height: 75vh;
	border-radius: 5px;
	padding: 2% 3%;
`;

const Notice = ({ notice, handleChange }) => (
	<Container>
		<Title>공 지 사 항</Title>
		<Textarea value={notice} onChange={handleChange} />
	</Container>
);

export default Notice;
