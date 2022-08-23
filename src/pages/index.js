import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import "../styles/index.scss";
import githubIcon from "../images/icons/github.svg";
import linkedinIcon from "../images/icons/linkedin.svg";
import mailIcon from "../images/icons/mail.svg";

export default function IndexPage() {
	return (
		<Layout>
			<h1>Hi, my name is Jack Lee_</h1>
			<p>I’m an undergraduate majoring in <b>computer science</b> at <span style={{fontWeight:"bold", color:"#8900E1"}}>New York University</span>. I’m interested in learning about software development through new experiences. Currently, I am seeking an internship in this field for the summer of 2023. <br/> <Link to="/about" style={{textDecoration:"none"}}>Read more &gt;</Link></p> <br />
			<p>
				<a href="https://github.com/jacklee5" target="_blank"><img src={githubIcon} className="contact-link"></img></a>
				<a href="https://www.linkedin.com/in/jacklee2003/" target="_blank"><img src={linkedinIcon} className="contact-link"></img></a>
				<a href="mailto:jack200336@gmail.com" target="_blank"><img src={mailIcon} className="contact-link"></img></a>
			</p>

			<h2>Featured Projects <Link to="/projects" id="view-more">View all &gt;</Link></h2>
		</Layout>
	)
}