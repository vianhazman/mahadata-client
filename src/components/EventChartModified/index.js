// import PropTypes from "prop-types";
import { Event } from "pondjs";
import React from "react";
import _ from "underscore";
import merge from "merge";

export default class EventChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: null,
    };
  }

  /**
   * Continues a hover event on a specific bar of the bar chart.
   */
  onMouseOver(e, event) {
    if (this.props.onMouseOver) {
      this.props.onMouseOver(event);
    }
    this.setState({ hover: event });
  }

  /**
   * Handle mouse leave and calls onMouseLeave callback if one is provided
   */
  onMouseLeave() {
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(this.state.hover);
    }
    this.setState({ hover: null });
  }

  /**
   * Handle click will call the onSelectionChange callback if one is provided
   * as a prop. It will be called with the event selected.
   */
  handleClick(e, event) {
    e.stopPropagation();
    if (this.props.onSelectionChange) {
      this.props.onSelectionChange(event);
    }
  }

  render() {
    const { series, textOffsetX, textOffsetY, hoverMarkerWidth } = this.props;
    const scale = this.props.timeScale;
    const eventMarkers = [];

    // Create and array of markers, one for each event
    let i = 0;
    for (const event of series.events()) {
      const begin = event.begin();
      const end = event.end();
      const beginPos = scale(begin) >= 0 ? scale(begin) : 0;
      const endPos =
        scale(end) <= this.props.width ? scale(end) : this.props.width;

      const transform = `translate(${beginPos},0)`;
      const isHover = this.state.hover
        ? Event.is(event, this.state.hover)
        : false;

      let state;
      if (isHover || this.props.isHover) {
        state = "hover";
      } else {
        state = "normal";
      }

      let barNormalStyle = {};
      let barStyle = {};
      if (this.props.style) {
        barNormalStyle = this.props.style(event, "normal");
        barStyle = this.props.style(event, state);
      }

      let label = "";
      if (this.props.label) {
        if (_.isString(this.props.label)) {
          label = this.props.label;
        } else if (_.isFunction(this.props.label)) {
          label = this.props.label(event);
        }
      }

      const x = this.props.spacing;
      const y = 0;
      let width = endPos - beginPos - 2 * this.props.spacing;
      width = width < 0 ? 0 : width;
      const height = this.props.size;

      const eventLabelStyle = {
        fontWeight: 600,
        fontSize: 11,
      };

      let text = null;
      if (isHover || this.props.isHover) {
        text = (
          <g>
            <rect
              className="eventchart-marker"
              x={x}
              y={y}
              width={hoverMarkerWidth}
              height={height}
              style={merge(true, barNormalStyle, { pointerEvents: "none" })}
            />
            <text
              style={{
                pointerEvents: "none",
                fill: "#444",
                ...eventLabelStyle,
              }}
              x={8 + textOffsetX}
              y={15 + textOffsetY}
            >
              {label}
            </text>
          </g>
        );
      }

      eventMarkers.push(
        <g transform={transform} key={i}>
          <rect
            className="eventchart-marker"
            x={x}
            y={y}
            width={width}
            height={height}
            style={barStyle}
            onClick={(e) => this.handleClick(e, event)}
            onMouseLeave={() => this.onMouseLeave()}
            onMouseOver={(e) => this.onMouseOver(e, event)}
          />
          {text}
        </g>
      );

      i += 1;
    }

    return <g>{eventMarkers}</g>;
  }
}

EventChart.defaultProps = {
  visible: true,
  size: 30,
  spacing: 0,
  textOffsetX: 0,
  textOffsetY: 0,
  hoverMarkerWidth: 5,
  isHover: false,
};
