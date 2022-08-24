import PostsGrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css";

function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      {/* A grid of posts */}
      <PostsGrid posts={props.posts} />
    </section>
  );
}
export default FeaturedPosts;
