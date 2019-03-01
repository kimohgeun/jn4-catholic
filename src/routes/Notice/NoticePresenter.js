import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Textarea = styled.textarea`
	display: block;
	border: none;
	resize: none;
	outline: none;
	background: #fff;
	width: calc(100%);
	height: calc(100vh - 50px);
	padding: 0.5em 1em;
	font-size:1rem;
`;

const Notice = ({ notice, handleChange }) => (
	<Container>
		<Textarea value={notice} onChange={handleChange} placeholder="공지사항..."/>
	</Container>
);

export default Notice;
