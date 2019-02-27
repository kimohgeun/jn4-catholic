import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
	display: flex;
	align-items: center;
	background: #fff;
	margin-bottom: 2em;
	padding: 0 0.5em;
	border-radius: 10px;
	color: #424242;
	border: 1px solid #e0e0e0;
`;

const Input = styled.input`
    all:unset;
    width:100%;
    padding: 0.5em;
    font-size: 0.9rem;
`;

const Icon = styled.i`
	color: #62b5af;
`;

const Search = () => (
	<Form>
		<Input type="search" placeholder="날짜를 입력하세요..." />
		<Icon className="fas fa-search" />
	</Form>
);

export default Search;
