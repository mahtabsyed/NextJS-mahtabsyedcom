import Link from "next/link";
import Image from "next/image";
import classes from "./social-icons.module.css";

function SocialIcons() {
  return (
    <section className={classes.social}>
      <div>
        <span>
          <Link href="https://au.linkedin.com/in/mahtabsyed">
            <a target="_blank">
              <Image
                src="/images/site/linkedin.png"
                alt="Mahtab Syed"
                width={30}
                height={30}
              />
            </a>
          </Link>
        </span>
        <span>
          <Link href="https://twitter.com/MahtabSyed">
            <a target="_blank">
              <Image
                src="/images/site/twitter.png"
                alt="Mahtab Syed"
                width={30}
                height={30}
              />
            </a>
          </Link>
        </span>
      </div>
    </section>
  );
}
export default SocialIcons;
