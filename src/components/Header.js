import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 50px;
	padding: 0 2%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-image: linear-gradient(to right, #77d8a0, #62b5af);
	color: #fff;
`;

const Title = styled.h1`
	letter-spacing: 0.5em;
	font-weight: 700;
`;

const Icon = styled.i`
	cursor: pointer;
	&:active {
		transform: scale(0.8);
	}
	transition: transform 0.1s linear;
	visibility: ${props => props.pathname && 'hidden'};
`;

const Header = withRouter(({ location: { pathname } }) => (
	<Container>
		<Link to="/">
			<Icon className="fas fa-arrow-left" pathname={pathname !== '/notice'} />
		</Link>
		<Title>{pathname === '/' ? '배당표' : '공지사항'}</Title>
		<Link to="/notice">
			<Icon className="fas fa-bell" pathname={pathname === '/notice'} />
		</Link>
	</Container>
));

export default Header;
