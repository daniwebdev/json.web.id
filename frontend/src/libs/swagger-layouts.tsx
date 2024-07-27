'use client'

import React from "react";

interface PropsTypes {
  getComponent: Function,
};

// class OperationsLayout extends React.Component<PropsTypes, {}>  {

//   render() {
//     const { getComponent } = this.props;

//     const Operations = getComponent("operations", true);

//     return (
//       <div className="swagger-ui">
//         <Operations />
//       </div>
//     );
//   }
// }

function OperationsLayout({getComponent}: PropsTypes) {

  const Operations = getComponent("operations", true);

  return (
    <div className="swagger-ui">
      <Operations />
    </div>
  );
}

// Create the plugin that provides our layout component
export const OperationsLayoutPlugin = () => {
  return {
    components: {
      OperationsLayout: OperationsLayout,
    },
  };
};
