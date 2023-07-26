import Head from "next/head";
import { Fragment } from "react";
import AllProjects from "../../components/projects/all-projects";
import { getAllProjects } from "../../lib/posts-util";

// http://localhost:3000/projects
function AllProjectsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Projetcs</title>
        <meta name="description" content="A list of all projects" />
      </Head>
      <AllProjects projects={props.projects} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allProjects = getAllProjects();

  return {
    props: {
      projects: allProjects,
    },
    revalidate: 1800,
  };
}

export default AllProjectsPage;
