import React from "react";
import PropTypes from "prop-types";
import { bounceInLeft } from "react-animations";
import styled, { keyframes } from "styled-components";


const Wrapper = styled.p`
	width: 70%;
	line-height: 1.6;
	animation: ${props => (props.active ? keyframes`${bounceInLeft}` : "")} 1s;
	@media (max-width: 876px) {
		width: 100%;
		order: 1;
	}
`;



const Paragraph = props => (
	<Wrapper active={props.active}>
		<p>
			I'm <strong>Oscar Luna</strong>. I'm a <strong>San Francisco</strong>-based web developer trying to
			get uthat great big hill of hope for a destination. My life has led
			me through an array of experiences(ha), and so my interests are
			quite diverse. I'm a lover of music, dance, gay culture, travel, and
			life-long learning. Life has led me here to the web-- where every
			facet of my identity can come <em>together</em> in one place. I'm
			excited to have finally found a career that fulfills my intellectual
			needs as well as my personal needs.
		</p>
		<p class="text-dark text-center px-2 py-3">
			<i class="fas fa-crown" /> TL;DR, this queen thanks you for your
			time and for becoming part of this journey.{" "}
			<i class="fas fa-crown" />
		</p>{" "}
		<a
			href="https://github.com/oaluna"
			target="_blank"
			rel="noopener noreferrer"
			style={{ color: "dodgerblue" }}
		>
			Github
    </a>{" "}
    {" "}
		<a
			href="https://codepen.io/rocketnumbr9"
			target="_blank"
			rel="noopener noreferrer"
			style={{ color: "dodgerblue" }}
		>
			Codepen
		</a>{" "} Come check out what else I'm working on!
	</Wrapper>
);

Paragraph.propTypes = {
	active: PropTypes.bool.isRequired
};

export default Paragraph;