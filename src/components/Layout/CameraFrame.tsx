import CameraOverlay from "./CameraOverlay";
import { m, Transition } from "framer-motion";
import useWindowDimensions from "../../hooks/useWindowDimensions";

// shoutout https://supercolorpalette.com/
const colors = ["#f2c1c0", "#ea99b4", "#e273c1", "#d14ddb", "#882acf"];

const CameraFrame = (): JSX.Element => {
  // sets variable in stylesheet
  useWindowDimensions();

  // random colors on every load
  const initialDegrees = 75;
  const endDegrees = initialDegrees + 360;
  const colorsInitial = {
    filter: `hue-rotate(${initialDegrees}deg)`,
  };
  const colorsAnimate = {
    filter: `hue-rotate(${endDegrees}deg)`,
  };

  // as animation goes on, colors will drift further and further apart, then back again
  const colorsTransitionWithDelay = (delay: number): Transition => {
    return {
      duration: 30,
      delay: delay,
      repeatDelay: 2.5 - delay,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
      type: "keyframes",
    };
  };

  return (
    <div className="overflow-y-hidden fixed top-0 w-screen h-screen font-mono -z-10 lg:h-screen text-zinc-900 no-pointer">
      <CameraOverlay />

      {/* + */}
      <div className="fixed top-1/2 left-1/2 z-10 w-px h-2 -translate-x-1/2 -translate-y-1/2 md:h-4 bg-zinc-900" />
      <div className="fixed top-1/2 left-1/2 z-10 w-2 h-px -translate-x-1/2 -translate-y-1/2 md:w-4 bg-zinc-900" />

      {/* outer */}
      <m.div
        className="-z-20 frame-container frame-edge-outline [--b:3px]   [--w:32px]  [--vw:100.1vw] [--vh:100.1]"
        style={{ backgroundColor: colors[4] }}
        initial={colorsInitial}
        animate={colorsAnimate}
        transition={colorsTransitionWithDelay(0)}
      />

      {/* action */}
      <m.div
        className="-z-20 frame-container frame-edge-outline [--b:3px]   [--w:60%]  [--vw:88vw]  [--vh:88.2]"
        style={{ backgroundColor: colors[3] }}
        initial={colorsInitial}
        animate={colorsAnimate}
        transition={colorsTransitionWithDelay(0.5)}
      />
      <div className="-z-20 frame-container frame-edge-outline [--b:1.5px]   [--w:1rem]  [--vw:87.9vw]  [--vh:0.25]" />
      <div className="-z-20 frame-container frame-edge-outline [--b:1.5px]   [--w:1rem]  [--vw:1px]  [--vh:88]" />

      {/* title */}
      <m.div
        className="-z-20 frame-container frame-edge-outline [--b:2px]   [--w:50%]  [--vw:76vw]  [--vh:76.1]"
        style={{ backgroundColor: colors[2] }}
        initial={colorsInitial}
        animate={colorsAnimate}
        transition={colorsTransitionWithDelay(1)}
      />
      <m.div
        className="-z-20 frame-container frame-edge-outline [--b:2px]   [--w:50%]  [--vw:72vw]  [--vh:76.1]"
        style={{ backgroundColor: colors[1] }}
        initial={colorsInitial}
        animate={colorsAnimate}
        transition={colorsTransitionWithDelay(1.5)}
      />
      <m.div
        className="-z-20 frame-container frame-edge-outline [--b:2px]   [--w:50%]  [--vw:68vw]  [--vh:76.1]  "
        style={{ backgroundColor: colors[0] }}
        initial={colorsInitial}
        animate={colorsAnimate}
        transition={colorsTransitionWithDelay(2)}
      />
    </div>
  );
};

export default CameraFrame;
