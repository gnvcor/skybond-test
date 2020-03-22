import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import withProps from 'recompose/withProps'
import GraphComponent from '../../core/components/graphComponent/GraphComponent'
import SelectContainer from './SelectContainer'
import { onLoadData } from '../../actions/graphActions'
import { getGraphDataSelector } from '../../selectors/graphSelector'

export default compose(
    connect(
        state => ({
            data: getGraphDataSelector(state),
        }),
        { onLoadData },
    ),
    withProps({
        Controls: <SelectContainer />,
    }),
)(({ data, onLoadData, Controls }) => {
    useEffect(() => {
        onLoadData()
    }, [])

    return <GraphComponent data={data} Controls={Controls} />
})
