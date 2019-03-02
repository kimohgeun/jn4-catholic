import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
	width: 100%;
	display: flex;
	align-items: center;
	background: #fff;
	margin-bottom: 1.5em;
	padding: 0 0.5em;
	border-radius: 10px;
	color: #62b5af;
	border: 1px solid #e0e0e0;
	margin-top: 20px;
`;

const Input = styled.input`
	all: unset;
	width: 100%;
	padding: 0.5em;
	font-size: 0.9rem;
`;

const Icon = styled.i`
	color: #62b5af;
`;

const Search = ({ term, onSearch }) => (
	<Form>
		<Input type="search" placeholder="날짜를 입력하세요..." term={term} onChange={onSearch} />
		<Icon className="fas fa-search" />
	</Form>
);

export default Search;
