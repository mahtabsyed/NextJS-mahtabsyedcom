import Image from "next/image";
import SocialIcons from "../ui/social-icons";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div>
        <Image
          src="/images/site/MahtabSyed3-cropped.png"
          alt="Mahtab Syed"
          width={250}
          height={250}
        />
      </div>
      <h1>Hi, I am Mahtab...</h1>
      <p>
        I code and blog on Data Engineering, MLOps and Machine Learning, with a
        focus on business use cases, where we can get measurable operational and
        commercial benefits. At work, I lead Data IoT and AI team and like being
        at the intersection of Technology, People and Revenue, with Leadership
        across all. My posts are on varied subjects and projects are on MLOps
        and Machine Learning.
      </p>
      <SocialIcons />
    </section>
  );
}
export default Hero;
