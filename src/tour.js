import React, { useState } from "react";
import JoyRide from "react-joyride";

// Tour steps
const TOUR_STEPS = [
  {
    target: ".tour-header",
    content: "This is where you can search the dashboard.",
    disableBeacon: true,
  },
  {
    target: ".tour-orders",
    content:
      "Bar chart for total order. You can see beautiful graphs here, thanks to creative tim for such UI."
  },
  {
    target: ".tour-external-links",
    content: "This is where you can find the external links."
  },
  {
    target: ".tour-footer",
    content: "This is where you can see the footer links."
  },
  
];

// Tour component
const Tour = () => {

    const [run, setRun] =useState(false);

    const handleRun =(e) => {
     
        e.preventDefault();
        setRun({run:true})
    }

  return (

    <>
      <div className="tour-header">
            <h1>Header</h1>
      </div>
      <div className="tour-orders">
          <h1>Products</h1>
      </div>
      <div className="tour-external-links">
            <h1>External links</h1>
      </div>
      <div className="tour-footer">
            <h1>Footer</h1>
      </div>
      <button className="button" onClick={handleRun}>button</button>
      <JoyRide 
       steps={TOUR_STEPS} 
       continuous={true} 
       run={run}
       showSkipButton={true}
      //  locale={{
      //   last: "End tour",
      //   skip: "Close tour"
      // }}
      
      styles={{
        tooltipContainer: {
          textAlign: "left"
        }}}
      />
    </>
  );
};

export default Tour;