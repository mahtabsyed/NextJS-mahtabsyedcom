import Link from "next/link";
import Logo from "./logo";
import classes from "./main-navigation.module.css";

// TODO: Check on Social icon for Linkedin and Twitter and decide where it goes
// npm install react-social-icons
// import { SocialIcon } from "react-social-icons";
// <SocialIcon url="https://au.linkedin.com/in/mahtabsyed" />

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        {/* If the child of Link is not plain text but a component we need to use "<a>" for anchor tag*/}
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
