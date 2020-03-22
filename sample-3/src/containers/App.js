import React from 'react'
import LayoutComponent from '../core/components/layoutComponent/LayoutComponent'
import HeadingContainer from './heading/HeadingContainer'
import TabsContainer from './tabs/TabsContainer'
import GraphContainer from './graph/GraphContainer'

export default () => (
    <LayoutComponent>
        <HeadingContainer />
        <TabsContainer />
        <GraphContainer />
    </LayoutComponent>
)
