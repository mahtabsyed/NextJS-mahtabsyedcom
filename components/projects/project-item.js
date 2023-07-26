import classes from "./project-item.module.css";
import Link from "next/link";
import Image from "next/image";

function ProjectItem(props) {
  const { title, image, excerpt, date, slug, applink } = props.project;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/projects/${slug}/${image}`;
  // const linkPath = `/projects/${slug}`;
  const linkPath = "/projects/" + applink;
  // console.log(linkPath);

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive" // this will make the image fill the parent container div and shrink and grow with that
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default ProjectItem;
