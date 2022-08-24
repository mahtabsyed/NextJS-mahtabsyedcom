// http://localhost:3000/
// Plan
// Lean page which use separate React component and does not use much styling
// 1) Hero section - Welcome section where we present the main product - present myself
// 2) Features Posts - Dummy content to start with which will replace with real blogs

import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    // Fragment since we cant have adjacent JSX components
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800,
  };
}

export default HomePage;
