import React from 'react';
import styled from 'styled-components';
import Search from '../../components/Search';
import AddButton from '../../components/AddButton';
import Schedule from '../../components/Schedule';

const Container = styled.div`
	padding: 1em 0;
	width: 95%;
	margin: 0 auto;
`;

const TitleContainer = styled.div`
	display: flex;
	justify-content: space-around;
	border-bottom: 1px solid #e0e0e0;
	padding-bottom: 1em;
	color: #9e9e9e;
`;

const Title = styled.span`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 0.7rem;
`;

const Icon = styled.i`
	font-size: 1.1rem;
	margin-bottom: 0.5em;
`;

const ScheduleContainer = styled.div`
	background: #fff;
	min-height: 50vh;
	margin-top: 1em;
	border-radius: 10px;
`;

const Home = ({ schedules, onCreate, onUpdate }) => (
	<Container>
		<Search />
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
		<ScheduleContainer>
			{schedules.map(schedule => (
				<Schedule schedule={schedule} key={schedule.id} onUpdate={onUpdate} />
			))}
		</ScheduleContainer>
		<AddButton onCreate={onCreate} />
	</Container>
);

export default Home;
