// @flow

import React from 'react'
import compose from 'recompose/compose'
import withProps from 'recompose/withProps'
import HeadingComponent from '../../core/components/headingComponent/HeadingComponent'

const Meta = () => (
    <>
        US67021 BAE92<br />
        NII CAPITAL CORP, Telecommunications, NR, till, 01.04.2016
    </>
)

export default compose(
  withProps({
      title: 'NII CAPITAL 7.625 21',
      subTitle: 'USD',
      Meta,
  }),
)(HeadingComponent)
