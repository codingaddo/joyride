// "use client";
// import React, { useState } from "react";
// import dynamic from 'next/dynamic';
// import type { Step } from "react-joyride";
// import CustomTooltip from "./CustomTooltip";

// // Dynamically import Joyride  and disable SSR
// // Another way is to import Joyride directly and use a side effect to delay it before mounting
// const JoyrideComponent = dynamic(() => import('react-joyride'), {
//   ssr: false,
// });

// const Tour = () => {
//   const [run, setRun] = useState(true);

//   // Define the steps for the tour
//   const steps: Step[] = [
//     {
//       target: ".middle-box", // Start with the middle box
//       content: "This is the first tip. Click Next to continue.",
//       placement: "top", // Tooltip appears above the target
//     },
//     {
//       target: ".left-box", // Move to the left box
//       content: "Now, check out this feature!",
//       placement: "top",
//     },
//     {
//       target: ".right-box", // End with the right box
//       content: "Finally, here's another important feature!",
//       placement: "top",
//     },
//   ];

//   return (
//     <div className="flex justify-center items-center w-full h-screen space-x-2 md:space-x-4">
//       {/* Left Box */}
//       <div className="left-box  box bg-gray-200 p-8 rounded cursor-pointer">
//         Left Box
//       </div>

//       {/* Middle Box */}
//       <div className="middle-box  box bg-gray-300 p-8 rounded cursor-pointer">
//         Middle Box
//       </div>

//       {/* Right Box */}
//       <div className="right-box box bg-gray-200 p-8 rounded cursor-pointer">
//         Right Box
//       </div>

//       {/* React Joyride */}
//       <JoyrideComponent
//       tooltipComponent={CustomTooltip}
//         steps={steps} // Pass the steps
//         run={run} // Start the tour
//         continuous // Enable automatic transition to the next step
//         scrollToFirstStep // Scroll to the first step if not in view
//         showSkipButton // Show "Skip" button
//         // showProgress // Show step progress (e.g., "1/3")
//         styles={{
//           options: {
//             arrowColor: "#fff",
//             backgroundColor: "#000",
//             textColor: "#fff",
//             primaryColor: "#007bff",
//             zIndex: 10000,
//           },
//         }}
//         callback={(data) => {
//           // Handle Joyride lifecycle events
//           console.log(data);
//           if (data.status === "finished" || data.status === "skipped") {
//             setRun(false); // Stop the tour when finished or skipped
//           }
//         }}
//       />
//     </div>
//   );
// };

// export default Tour;


"use client";
import React, { useState } from "react";
import dynamic from 'next/dynamic';
import type { Step } from "react-joyride";
import CustomTooltip from "./CustomTooltip";

// Dynamically import Joyride
const JoyrideComponent = dynamic(() => import('react-joyride'), { ssr: false });

const Tour = () => {
  const [run, setRun] = useState(true);

  // Tour Steps
  const steps: Step[] = [
    {  target: ".middle-box",
      content: "You can set your talent pool up here later",
      placement: "top",
    },
    {
      target: ".left-box",
      content: "Check out this feature to explore candidates.",
      placement: "top",
    },
    {
      target: ".right-box",
      content: "Discover more powerful tools here.",
      placement: "top",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full h-screen space-x-4 bg-gray-100">
      {/* Left Box */}
      <div className="left-box box bg-blue-500 text-white p-8 rounded cursor-pointer">

        Left Box
      </div>

      {/* Middle Box */}
      <div className="middle-box box bg-blue-500 text-white p-8 rounded cursor-pointer">
        <p className="text-sm opacity-80">Middle Box</p>
      </div>

      {/* Right Box */}
      <div className="right-box box bg-blue-500 text-white p-8 rounded cursor-pointer">

        Right Box
      </div>

      {/* React Joyride */}
      <JoyrideComponent
        steps={steps}
        tooltipComponent={CustomTooltip}
        run={run}
        continuous
        scrollToFirstStep
        showSkipButton
        disableScrolling
        
        styles={{
          options: {
            arrowColor: "none",
            backgroundColor: "#007bff",
            textColor: "#333",
            primaryColor: "#007bff",
            zIndex: 10000,
            
          },
          
        }}
        callback={(data) => {
          if (data.status === "finished" || data.status === "skipped") setRun(false);
        }}
      />
    </div>
  );
};

export default Tour;

