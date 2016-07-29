import React from 'react';

import styles from './slider.css';
import Checkbox from './checkbox';

const Slider = React.createClass({
  getInitialState() {
    return {
      enabled: false,
      value: "0"
    };
  },
  enable() {
    this.setState({
      enabled: true
    });
    this.props.onChange(this.state.value);
  },
  disable() {
    this.setState({
      enabled: false
    });
    this.props.onChange("0");
  },
  render() {
    return (
      <div>
      <p>{this.props.name}</p>
      <Checkbox
        checked={this.state.enabled}
        onClick={this.state.enabled?
        this.disable: this.enable}/>
      <input
        type="range"
        min="0"
        max={this.props.max}
        step="1"
        value={this.state.value}
        onChange={(e) => {
          this.setState({value: e.target.value});
          this.props.onChange(e.target.value);
        }}
        className={this.state.enabled?
          this.state.value == 0?
          styles.beginning: styles.enabled:
          styles.default}/>
      {this.props.showInfo? this.state.enabled?
        <p className={styles.info}>
          {this.state.value == "0"? "All":
            this.state.value + "+"}
        </p>
        : '': ''
      }
          </div>
        );
      }
    });

export default Slider;
