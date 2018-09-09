import React, { PureComponent } from 'react'
import { isMobile } from './differentiate'
import FancyHoverContainer from './FancyHoverContainer'
import FancyHoverContainerMobile from './FancyHoverContainerMobile'
import StylesCSS from '../public/styles/styles.css'

export default class Container extends PureComponent {
  render() {
    let containerStyle = 'containerStyle'
    if (isMobile()) {
      containerStyle = 'containerStyleMobile'
    }

    const { projectArray } = this.props
    const projects = []
    let count = 0

    for (const array of projectArray) {
      if (isMobile()) {
        projects.push(
          <FancyHoverContainerMobile
            data={array}
            count={count++}
            mode='two'
          />
        )
      } else {
        projects.push(
          <FancyHoverContainer data={array} count={count++} />
        )
      }
    }

    return (
      <div className={`flexRowStyle ${containerStyle}`}>
        {projects}
      </div>
    )
  }
}
