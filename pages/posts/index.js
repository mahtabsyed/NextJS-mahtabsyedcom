import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

// http://localhost:3000/posts
function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 1800,
  };
}

export default AllPostsPage;
