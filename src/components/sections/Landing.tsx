import { useAnimation, m } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const headerVariants = {
  visible: { transform: "translate(0vw)", transition: { duration: 1.5 } },
  hidden: { transform: "translate(100vw)" },
};

const bodyVariants = {
  visible: {
    transform: "translate(0vw)",
    transition: { duration: 1 },
  },
  hidden: { transform: "translate(-100vw)" },
};

const Landing = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <section id="home" className="max-w-full">
      <div
        ref={ref}
        className="flex flex-row w-full lg:h-safe-action h-center-action"
      >
        <m.div
          variants={bodyVariants}
          initial="hidden"
          animate={control}
          className="flex justify-center w-1/3 h-full portrait:justify-end lg:w-1/2 landscape:items-start portrait:items-center lg:p-32"
        >
          <p className="text-2xl font-extrabold tracking-tighter text-center lg:text-6xl xl:text-7xl portrait:rotate-180 portrait:section-header">
            NICK ADAMSON
          </p>
        </m.div>
        <m.h2
          variants={headerVariants}
          initial="hidden"
          animate={control}
          className="flex justify-center items-center pb-16 w-2/3 h-full lg:w-1/2"
        >
          <p className="text-2xl font-black tracking-tighter text-left landscape:rotate-180 landscape:section-header lg:text-6xl xl:text-8xl">
            FULL
            <br />
            STACK
            <br />
            DEVELOPER
          </p>
        </m.h2>
      </div>
    </section>
  );
};

export default Landing;
