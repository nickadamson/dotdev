import { useAnimation, m } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const headerVariants = {
  visible: { transform: "translate(0vw)", transition: { duration: 1.5 } },
  hidden: { transform: "translate(-25vw)" },
};

const bodyVariants = {
  visible: {
    opacity: 1,
    transform: "translate(0, 0vh)",
    transition: { duration: 0.75 },
  },
  hidden: { opacity: 0, transform: "translate(0, 125vh)" },
};

const About = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      // only animate in
    }
  }, [control, inView]);

  return (
    <section
      ref={ref}
      id="about"
      className="flex flex-col px-2 w-full lg:flex-row h-center-action portrait:my-16"
    >
      <m.div
        variants={headerVariants}
        initial="hidden"
        animate={control}
        className="flex justify-center h-full lg:justify-end lg:w-1/3"
      >
        <h2 className="justify-self-center self-end my-auto h-full text-2xl font-black text-center lg:rotate-180 lg:text-8xl lg:section-header">
          About
        </h2>
      </m.div>
      <m.div
        variants={bodyVariants}
        initial="hidden"
        animate={control}
        className="p-1 ml-0 space-y-6 lg:my-auto lg:w-3/5 md:p-8 lg:text-xl"
      >
        <p>
          I&apos;m a Full-Stack Engineer with a passion for open-source
          software. I love creating striking experiences, building useful tools,
          and bringing ideas to reality.
        </p>
        <p>
          Previously, I was a freelance Digital Imaging Technician for over 5
          years. I assisted fashion and make-up brands in producing beautiful
          content. The resourcefulness and eye for design I developed is
          especially useful in my programming work now.
        </p>
        <p>
          Check out all my code{" "}
          <a
            href={"https://github.com/nickadamson"}
            rel="noopener noreferrer"
            target="_blank"
            className="underline"
          >
            on github
          </a>
          , add me{" "}
          <a
            href={"https://www.linkedin.com/in/nick-adamson/"}
            rel="noopener noreferrer"
            target="_blank"
            className="underline"
          >
            on linkedin
          </a>
          {/* , follow me{" "}
            <a
              href={"https://twitter.com/nickadams0n"}
              rel="noopener noreferrer"
              target="_blank"
              className="underline"
            >
              on twitter
            </a> */}
          , or reach out{" "}
          <a
            href={"mailto:nickadamson@pm.me"}
            rel="noopener noreferrer"
            className="underline"
          >
            via email
          </a>
          .
        </p>
      </m.div>
    </section>
  );
};

export default About;
