import React, { Component } from 'react'

// inline styles
const projectImageContainer = {
  position: 'absolute',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'black',
  lineHeight: '20px',
  transition: 'all 0.3s ease',
  zIndex: '99999'
}
//

export default class FancyHoverContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
    }
  }

  state: {
    hover: boolean,
  }

  props: Props

  render() {
    let topHover = '160px'

    const { data, count } = this.props
    const { hoverState, header, url, target, image, text } = data
    let { color, backgroundColor } = data
    const { hover } = this.state

    if (backgroundColor === '' || backgroundColor === undefined) {
      backgroundColor = 'white'
    }

    if (color === '' || color === undefined) {
      color = 'black'
    }

    if (hover) {
      topHover = '85px'
    }
    const currentStyle = Object.assign({}, projectImageContainer,
      { top: topHover, backgroundColor: backgroundColor })

    return (
      <div
        onMouseEnter={() => {
          this.setState({ hover: hoverState, })
        }}
        onMouseLeave={() => {
          this.setState({ hover: false, })
        }}
        className='projectImageStyle'
        style={{ backgroundColor: backgroundColor }}
        key={count}
        id={`${header}-container-project-child`}
      >
        <a
          className='linkFullWrapperStyle'
          href={url}
          target={target}
          id='link-container-project-child'
        />

        <img
          src={image}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          id='image-container-project-child'
        />

        <div style={currentStyle}>
          <h3
            style={{ color: color, marginTop: '10px', fontWeight: 'bold' }}
            id='header-container-project-child'
          >
            {header}
          </h3>
          <span
            style={{ color: color, padding: '5px', textAlign: 'center' }}
            id='description-container-project-child'
          >
            {text}
          </span>
        </div>
      </div>
    )
  }
}
