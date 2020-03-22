import compose from 'recompose/compose'
import withProps from 'recompose/withProps'
import GraphComponent from '../../core/components/graphComponent/GraphComponent'

export default compose(
    withProps({
        data: [
            { date: '15.02', value: 22.50 },
            { date: '16.02', value: 23.50 },
            { date: '17.02', value: 29.75 },
            { date: '18.02', value: 33.25 },
            { date: '19.02', value: 33.75 },
            { date: '20.02', value: 33.50 },
            { date: '21.02', value: 32.50 },
            { date: '22.02', value: 32.50 },
            { date: '23.02', value: 32.75 },
            { date: '24.02', value: 34.75 },
            { date: '25.02', value: 35.25 },
        ],
    }),
)(GraphComponent)
