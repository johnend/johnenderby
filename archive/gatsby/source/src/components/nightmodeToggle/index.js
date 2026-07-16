import React, { Component } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import isString from "lodash/isString"
import isBoolean from "lodash/isBoolean"
import isFunction from "lodash/isFunction"
import toggleStyles from "./nightmodeToggle.module.scss"

class NightmodeToggle extends Component {
  state = { enabled: this.enabledFromProps() }

  isEnabled = () => this.state.enabled

  enabledFromProps() {
    let { enabled } = this.props

    // If enabled is a function, invoke the function
    enabled = isFunction(enabled) ? enabled() : enabled

    // Return enabled if it's a boolean, otherwise false
    return isBoolean(enabled) && enabled
  }

  toggleSwitch = e => {
    e.persist()
    e.preventDefault()
    const { onClick, onStateChanged } = this.props

    this.setState({ enabled: !this.state.enabled }, () => {
      const state = this.state

      // Augment the event object with SWITCH_STATE
      const switchEvent = Object.assign(e, { SWITCH_STATE: state })

      // Execute callback functions
      isFunction(onClick) && onClick(switchEvent)
      isFunction(onStateChanged) && onStateChanged(state)
    })
  }

  render() {
    const { enabled } = this.state

    // Isolate special props and store the remaining as restProps
    const {
      enabled: _enabled,
      theme,
      onClick,
      className,
      onStateChanged,
      ...restProps
    } = this.props

    // Use default as a fallback theme is valid theme is not passed
    const switchTheme = theme && isString(theme) ? theme : "default"

    const switchClasses = classnames(`switch switch--${switchTheme}`, className)

    const togglerClasses = classnames(
      "switch-toggle",
      `switch-toggle--${enabled ? "on" : "off"}`
    )

    return (
      <div className={switchClasses} onClick={this.toggleSwitch} {...restProps}>
        <div className={togglerClasses}></div>
      </div>
    )
  }
}

NightmodeToggle.propTypes = {
  theme: PropTypes.string,
  enabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  onStateChange: PropTypes.func,
}

export default NightmodeToggle
