import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

export default function ProjectsPage( { data } ) {
	return (
		<Layout>
			<main className="float-in">
				<h1 style={{marginBottom:0}}>Projects</h1>
				<p>A list of things I've worked on. </p> <br/>
				<table width="100%">
					<tr>
						<th>Year</th>
						<th>Title</th>
						<th>Built With</th>
						<th>Link</th>
					</tr>
					{
						data.allProjectsCsv.edges.map(x => 
							<tr>
								<td>{x.node.year}</td>
								<td>{x.node.title}</td>
								<td>{x.node.techs}</td>
								<td>{x.node.page}</td>
							</tr>
						)
					}
				</table>
			</main>
		</Layout>
	)
}

export const query = graphql`
{
	allProjectsCsv {
		edges {
			node {
				github
				link
				page
				techs
				title
				year
			}
		}
	}
}
`