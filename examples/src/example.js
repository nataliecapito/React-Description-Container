import React, { PureComponent } from 'react'
import Container from 'react-fancy-hover-container'

// object to send.
const contentArray = [
  {
    header: 'Header 1',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean \
    commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus \
    et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, \
    ultricies nec, pellentesque eu, pretium quis, sem.',
    url: '<website url here>',
    image: '<image url here>',
    target: '_blank',
    hoverState: true,
    color: 'red',
    backgroundColor: 'blue',
  },
  {
    header: 'Header 2',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean \
    commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus \
    et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, \
    ultricies nec, pellentesque eu, pretium quis, sem.',
    url: '<website url here>',
    image: '<image url here>',
    target: '_self',
    hoverState: true,
    color: 'white',
    backgroundColor: '#1b2955',
  },
  {
    header: 'Header 3',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean \
    commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus \
    et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, \
    ultricies nec, pellentesque eu, pretium quis, sem.',
    url: '<website url here>',
    image: '<image url here>',
    target: '_blank',
    hoverState: false,
    color: '',
    backgroundColor: '',
  },
]

export default class example extends PureComponent {
  render() {
    return (
      <Container projectArray={contentArray} mode='two' />
    )
  }
}
