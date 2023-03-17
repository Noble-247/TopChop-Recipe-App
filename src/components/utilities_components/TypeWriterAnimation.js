import { useState, useEffect } from "react";
import Typewriter from "react-typewriter-animate";
import "react-typewriter-animate/dist/Typewriter.css";

function TypeWriterAnimation() {
  const [startTypeWriter, setStartTypeWriter] = useState(false);

  useEffect(() => {
    window.setTimeout(() => {
      setStartTypeWriter(true);
    }, 2000);
  }, []);

  return (
    <div className='mt-4'>
      <h2>
        <Typewriter
          start={startTypeWriter}
          loop
          dataToRotate={[
            [
              { type: "word", text: "OUR WEBSITE IS ALMOST READY" },
              {
                type: "action",
                action: "delete",
                // amount: "simple".length,
              },
              {
                type: "word",
                text: "WE ARE CURRENTLY WORKING ON SOMETHING AWESOME..... ",
                spanClass: "blue",
                cursorColor: "blue",
              },
            ],
            [
              {
                type: "word",
                text: "STAY TUNED!",
                override: {
                  maxTypespeed: 600,
                },
              },
            ],
          ]}
          maxTypeSpeed={150}
          maxDeleteSpeed={100}
          timeBeforeDelete={1300}
        />
      </h2>
    </div>
  );
}

export default TypeWriterAnimation;
