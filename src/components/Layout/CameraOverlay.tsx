/* eslint-disable @next/next/no-img-element */ // should not use SVG's with next/image
import { useState, useEffect } from "react";

const CameraOverlay = () => {
  const [counter, setCounter] = useState<number>(0);

  const increaseCounter = (currentVal: number) => {
    setCounter(currentVal + 1);
    if (currentVal < 100000) {
      setTimeout(() => increaseCounter(currentVal + 1), 42);
    }
  };

  const startRecording = () => {
    setTimeout(() => increaseCounter(counter), 42);
  };

  const hours = counter > 86400 ? counter / 86400 : 0;
  const minutes =
    counter > 1440 ? (counter > 86400 ? counter % 86400 : counter) / 1440 : 0;
  const seconds =
    counter > 24 ? (counter > 1440 ? counter % 1440 : counter) / 24 : 0;
  const frames = counter % 24;

  const zeroPad = (num: number) => String(num).padStart(2, "0");

  // 00:00:00;00
  const CameraOverlayString = `${zeroPad(parseInt(hours.toString()))}:${zeroPad(
    parseInt(minutes.toString())
  )}:${zeroPad(parseInt(seconds.toString()))};${zeroPad(
    parseInt(frames.toString())
  )}`;

  useEffect(() => {
    startRecording();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="overflow-y-hidden fixed top-0 w-full h-full -z-10 no-pointer">
      <div className="flex fixed h-screen max-w-unsafe">
        <img
          className="m-auto w-full h-auto lg:-translate-y-0.5 2xl:-translate-y-1 translate-x-1.5 xl:translate-x-4 2xl:translate-x-6"
          src="/exposure.svg"
          alt="Camera Auto Exposure Slider Icon"
        />
      </div>
      <div className="flex flex-col justify-between w-full h-full max-h-screen text-xl font-extralight tracking-wide max-w-screen xl:text-xl 2xl:text-4xl md:py-1 xl:py-1.5 2xl:py-2">
        <div className="flex justify-between">
          <div className="flex space-x-8 mt-88vh ml-88vw">
            {/* <img src="/flash.svg" alt="Camera Flash Icon" /> */}
            <img
              className="m-auto 2xl:h-14 xl:h-12 lg:h-10 md:h-8"
              src="/camera.svg"
              alt="Video Camera Icon"
            />
          </div>
          <p className="mt-88vh mr-88vw">
            F-Log
            <span className="portrait:hidden"> - ProRes 4:2:2</span>
          </p>
        </div>
        <div className="flex justify-between">
          <p className="mb-88vh ml-88vw">
            <span className="portrait:hidden">UHD23.97</span>
            {` ${CameraOverlayString}`}
          </p>
          <p className="mb-88vh mr-88vw">
            <span className="portrait:hidden"> 1/48 | F5.6 |</span> ISO L50
          </p>
        </div>
      </div>
    </div>
  );
};

export default CameraOverlay;
