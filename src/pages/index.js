import React, { useEffect, useState } from "react";
import { Link, graphql } from "gatsby";
import TypeWriter from "typewriter-effect";

import Layout from "../components/Layout";
import Feature from "../components/Feature";

import "../styles/index.scss";

import githubIcon from "../images/icons/github.svg";
import linkedinIcon from "../images/icons/linkedin.svg";
import mailIcon from "../images/icons/mail.svg";
import resumeFile from "../files/Resume.pdf";


export default function IndexPage( { data } ) {
	const message = "Hi, I'm Jack Lee";
	const [display, setDisplay] = useState("none");
	const [animate, setAnimate] = useState(true);

	// run animation only once
	useEffect(() => {
		if (!sessionStorage.getItem("animated")) {
			// animate title and hide content at first
			setAnimate(true);
			setDisplay("none");
			sessionStorage.setItem("animated", true);
		} else {
			// if already shown animation, just show everything
			setAnimate(false);
			setDisplay("block");
		}
	}, []);

	// get featured project data
	const features = data.allMarkdownRemark.edges.map(x => 
		<Feature  
			slug={x.node.frontmatter.slug}
			title={x.node.frontmatter.title}
			desc={x.node.frontmatter.desc}
			tags={x.node.frontmatter.tags}
	/>);
	
	return (
		<Layout>
			<h1>{ animate ?  
				<TypeWriter
					onInit={(typewriter) => {
						typewriter
						.typeString("Hi, I'm Jack Lee")
						.callFunction(() => {
							setDisplay("block");
						})
						.start();
					}}
					options={{
						cursor: "_"
					}}
				/> : 
				<span className="float-in">{message}</span> }
				</h1>
			<main style={{display: display}} className="float-in">
				<p>
					I’m an undergraduate majoring in <b>computer science</b> at <span style={{fontWeight:"bold", color:"#8900E1"}}>New York University</span>. Some relevant classes I've taken are <b>Data Structures</b>, <b>Basic Algorithms</b>, and <b>Applied Internet Technology</b>. I’m interested in learning about software development through new experiences. Currently, I am seeking an internship in this field for the summer of 2023. <br/> 
					<a href={resumeFile} style={{textDecoration:"none", cursor: "pointer"}} target="_blank">Download Resume <span className="moving-arrow">&gt;</span></a>
				</p> <br />
				<p>
					<a href="https://github.com/jacklee5" target="_blank"><img src={githubIcon} className="contact-link"></img></a>
					<a href="https://www.linkedin.com/in/jacklee2003/" target="_blank"><img src={linkedinIcon} className="contact-link"></img></a>
					<a href="mailto:jack200336@gmail.com" target="_blank"><img src={mailIcon} className="contact-link"></img></a>
				</p>

				<h2>Featured Projects </h2>
				{/* <Link to="/projects" id="view-more">View all <span className="moving-arrow">&gt;</span></Link> */}
				{ features }
				
				<br />
				<center><a href="https://github.com/jacklee5/websitev3" target="_blank" className="built-by">Built with ❤️ by Jack Lee</a></center>
				<br />
			</main>
		</Layout>
	)
}

export const pageQuery = graphql`
	{
		allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/src/content/features/"}}) {
			edges {
				node {
					frontmatter {
						slug
						title
						desc
						tags
					}
				}
			}
		}
  }
`;