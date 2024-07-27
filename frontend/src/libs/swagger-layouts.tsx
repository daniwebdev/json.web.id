import React from "react";
import SwaggerUI from "swagger-ui-react";
import PropTypes from "prop-types";

class OperationsLayout extends React.Component {
  static propTypes = {
    errSelectors: PropTypes.object.isRequired,
    errActions: PropTypes.object.isRequired,
    specSelectors: PropTypes.object.isRequired,
    oas3Selectors: PropTypes.object.isRequired,
    oas3Actions: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
  };

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
