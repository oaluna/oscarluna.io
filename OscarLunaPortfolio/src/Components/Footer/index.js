import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	min-height: 200px;
	background: url("https://www.wallpaperbetter.com/wallpaper/333/740/1004/galaxy-milky-way-night-stars-reflection-hd-1080P-wallpaper.jpg")
		center center no-repeat fixed;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CopyRightText = styled.p`
	color: #fff;
	font-size: 1rem;
	text-align: center;
`;

const LinksWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin: 20px 0;
`;

const Link = styled.a`
	text-decoration: none;
	color: #fff;
	transition: 0.2s;
	margin: 0 15px;
	&:hover {
		transform: scale(1.1);
	}
	@media (max-width: 580px) {
		font-size: 2rem;
	}
`;

const Footer = () => (
	<Wrapper>
		<div>
			<CopyRightText>
				&copy; 2020 Oscar Armando Luna. All rights reserved.
			</CopyRightText>
			<LinksWrapper>
				<Link href="#" className="fa fa-twitter fa-3x" />
				<Link href="#" className="fa fa-instagram fa-3x" />
				<Link href="#" className="fa fa-codepen fa-3x" />
				<Link href="#" className="fa fa-github fa-3x" />
			</LinksWrapper>
		</div>
	</Wrapper>
);

export default Footer;