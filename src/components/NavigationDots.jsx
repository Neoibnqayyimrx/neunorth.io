import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "schedule", "global", "contact"].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index} 
          className="app__navigation-dot"
          style={active === item ? {backgroundColor: '#5cb2b3'} : {}}
          />
      ))}
    </div>
  );
};

export default NavigationDots;
