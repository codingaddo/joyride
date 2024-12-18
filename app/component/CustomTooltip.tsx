
import { TooltipRenderProps } from 'react-joyride';

interface CustomTooltipProps extends TooltipRenderProps {
  isLastIndex:boolean
}

function CustomTooltip(props: CustomTooltipProps) {
  const { backProps, closeProps, continuous, index, primaryProps, skipProps, step, tooltipProps,isLastIndex } =
    props;

  return (
    <div
      className="relative bg-white rounded-lg shadow-lg p-4 max-w-[200px] "
      // data-tooltip
      {...tooltipProps}
    >
      {/* Close Button */}
      <button
        className="absolute top-0 right-2 text-blue-400 hover:text-gray-600 text-xl"
        {...closeProps}
      >
        &times;
      </button>

      {/* Content Section */}
      <div className="space-y-2">
        {step.title && <h4 className="font-semibold text-lg  text-gray-800">{step.title}</h4>}
        <div className="text-gray-600">{step.content}</div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4">
        {/* Skip Button */}
        <button
          className="text-sm text-gray-500 hover:text-gray-700"
          {...skipProps}
        >
          Skip
        </button>

        {/* Navigation Buttons */}
        <div className="space-x-2">
          {index > 0 && (
            <button
              className="px-3 py-1 rounded-md text-sm bg-gray-200 hover:bg-gray-300"
              {...backProps}
            >
              Back
            </button>
          )}
          {continuous && (
            <button
              className="px-3 py-1 rounded-md text-sm bg-blue-500 text-white hover:bg-blue-600"
              {...primaryProps}
            >
               {isLastIndex ? "Finished" : "Next"}
            </button>
          )}
        </div>
      </div>
      {/* <div className="arrowhead"></div> */}
    </div>
  );
}

export default CustomTooltip;
