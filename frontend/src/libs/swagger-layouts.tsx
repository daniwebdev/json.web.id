import React from "react";

class OperationsLayout extends React.Component<{getComponent: any}, {}>  {

  render() {
    const { getComponent } = this.props;

    const Operations = getComponent("operations", true);

    return (
      <div className="swagger-ui">
        <Operations />
      </div>
    );
  }
}

// Create the plugin that provides our layout component
const OperationsLayoutPlugin = () => {
  return {
    components: {
      OperationsLayout: OperationsLayout,
    },
  };
};
