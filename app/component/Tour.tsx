"use client";
import React, { useState } from "react";
import Joyride, { Step } from "react-joyride";

const Tour = () => {
  const [run, setRun] = useState(true); // Controls the tour state

  // Define the steps for the tour
  const steps: Step[] = [
    {
      target: ".middle-box", // Start with the middle box
      content: "This is the first tip. Click Next to continue.",
      placement: "top", // Tooltip appears above the target
    },
    {
      target: ".left-box", // Move to the left box
      content: "Now, check out this feature!",
      placement: "top",
    },
    {
      target: ".right-box", // End with the right box
      content: "Finally, here's another important feature!",
      placement: "top",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full h-screen space-x-2 md:space-x-4">
      {/* Left Box */}
      <div className="left-box  box bg-gray-200 p-8 rounded cursor-pointer">
        Left Box
      </div>

      {/* Middle Box */}
      <div className="middle-box  box bg-gray-300 p-8 rounded cursor-pointer">
        Middle Box
      </div>

      {/* Right Box */}
      <div className="right-box box bg-gray-200 p-8 rounded cursor-pointer">
        Right Box
      </div>

      {/* React Joyride */}
      <Joyride
        steps={steps} // Pass the steps
        run={run} // Start the tour
        continuous // Enable automatic transition to the next step
        scrollToFirstStep // Scroll to the first step if not in view
        showSkipButton // Show "Skip" button
        // showProgress // Show step progress (e.g., "1/3")
        styles={{
          options: {
            arrowColor: "#fff",
            backgroundColor: "#000",
            textColor: "#fff",
            primaryColor: "#007bff",
            zIndex: 10000,
          },
        }}
        callback={(data) => {
          // Handle Joyride lifecycle events
          console.log(data);
          if (data.status === "finished" || data.status === "skipped") {
            setRun(false); // Stop the tour when finished or skipped
          }
        }}
      />
    </div>
  );
};

export default Tour;
