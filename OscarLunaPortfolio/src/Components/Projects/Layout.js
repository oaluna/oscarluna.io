import React from "react";
import styled, { keyframes } from "styled-components";
import Waypoint from "react-waypoint";
import PropTypes from "prop-types";
import { bounceInRight } from "react-animations";
import Card from "./Card";

const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 3% 0;
	animation: ${props => (props.active ? keyframes`${bounceInRight}` : "")} 1s;
`;

const Projects = [
	{
		title: "Lady Gaga Quiz App",
		description:
			"My first project as part of Thinkful's Web Engineering Course. I've created a web-app, that renders a 10-question multiple-choice test (HTML5)on a subject of my choice, to demonstrate my knowledge of jQuery event listeners and styling with CSS. If my reputation precedes me, then it's clear what subject I chose. Rah-Rah.",
		link:
			"file:///C:/Users/Capor/Documents/WebDevProjects/RahRah-master/RahRah-master/Interactive-Quiz-Prod-Repo/index.html"
	},
	{
		title: "Capstone Project",
		description:
			"My first full-stack web-app! For this one I had to write the route paths with Express.js, and create/read/update/delete database tables with SQLite all in relation to given front-end documents. I was given a Node test suite to check my work during this project",
		link: "https://github.com/oaluna/fictional-octo-garbanzo.git"
	},
	{
		title: "Quote Machine",
		description:
			"Unit and Integration Testing Project completed at CodeCademy Pro. Here I created a random quote generator webapp using a test-driven approach. Here, I demonstrate standard model-testing patterns, server testing, HTML responses, error handling, etc, all without touching the front-end.",
		link: "https://github.com/oaluna/radio-googoo"
	}
];

const Cards = Projects.map(project => (
	<Card
		title={project.title}
		description={project.description}
		link={project.link}
		key={project.title}
	/>
));

const Layout = props => (
	<Waypoint onEnter={props.onEnter} onLeave={props.onLeave}>
		<Wrapper active={props.active}>{Cards}</Wrapper>
	</Waypoint>
);

Layout.propTypes = {
	active: PropTypes.bool.isRequired,
	onEnter: PropTypes.func.isRequired,
	onLeave: PropTypes.func.isRequired
};

export default Layout;