import React from 'react';
import styled from 'styled-components';
import Search from '../../components/Search';
import Button from '../../components/Button';
import Schedule from '../../components/Schedule';

const Container = styled.div`
	width: 100%;
	height: calc(100vh - 50px);
	overflow: auto;
	padding: 0 2%;
`;

const TitleContainer = styled.div`
	display: flex;
	justify-content: space-around;
	color: #757575;
	margin-bottom: 20px;
`;

const Title = styled.span`
	width: 100%;
	font-size: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Icon = styled.i`
	padding-bottom: 5px;
	font-size: 1.3rem;
`;

const Home = ({ schedules, onCreate, home, onDelete, onSearch, onClear, onUpdate, term }) => (
	<Container ref={home}>
		<Search term={term} onSearch={onSearch} />
		<TitleContainer>
			<Title>
				<Icon className="fas fa-calendar-alt" />
				<span>날짜</span>
			</Title>
			<Title>
				<Icon className="fas fa-microphone-alt" />
				<span>주송</span>
			</Title>
			<Title>
				<Icon className="fas fa-praying-hands" />
				<span>대복</span>
			</Title>
			<Title>
				<Icon className="fas fa-praying-hands" />
				<span>소복</span>
			</Title>
			<Title>
				<Icon className="fas fa-book-open" />
				<span>1독</span>
			</Title>
			<Title>
				<Icon className="fas fa-book-open" />
				<span>2독</span>
			</Title>
		</TitleContainer>
		{schedules.map(schedule => (
			<Schedule schedule={schedule} key={schedule.id} onUpdate={onUpdate} />
		))}
		<Button onCreate={onCreate} onDelete={onDelete} onClear={onClear} />
	</Container>
);

export default Home;
