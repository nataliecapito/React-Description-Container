import React, { PureComponent } from 'react'

export default class FancyHoverContainerMobile extends PureComponent {
  render() {
    const { data, count, mode } = this.props
    const { header, url, target, image } = data

    if (mode === 'two') {
      return (
        <div
          className='projectImageStyleTwoMobile'
          id={`${header}-two-container-project-child`}
          key={count}
        >
          <a
            className='linkFullWrapperStyle'
            href={url}
            target={target}
            style={{ backgroundColor: 'black', opacity: '.2' }}
            id='link-two-container-project-child'
          />

          <img
            src={image}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            id='image-two-container-project-child'
          />

          <div className='projectImageMobileContainerTwo'>
            <h3
              style={{ color: 'white', fontWeight: 'bold', zIndex: '1000', textAlign: 'center' }}
              id='header-two-container-project-child'
            >
              {header}
            </h3>
          </div>
        </div>
      )
    }

    return (
      <div
        className='projectImageStyleOneMobile'
        key={count}
        id={`${header}-one-container-project-child`}
      >
        <a
          className='linkFullWrapperStyle'
          href={url}
          target={target}
          id='link-one-container-project-child'
        />

        <img
          src={image}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          id='image-one-container-project-child'
        />

        <div className='projectImageMobileContainer'>
          <h3
            style={{ color: 'black', fontWeight: 'bold' }}
            id='header-one-container-project-child'
          >
            {header}
          </h3>
        </div>
      </div>
    )
  }
}
