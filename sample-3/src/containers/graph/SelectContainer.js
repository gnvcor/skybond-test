import { connect } from 'react-redux'
import compose from 'recompose/compose'
import withProps from 'recompose/withProps'
import SelectComponent from '../../core/components/selectComponent/SelectComponent'

export default compose(
    connect(
        state => ({
            select: state.select,
        }),
    ),
    withProps(props => ({
        data: props.select.data.map(element => ({
            ...element,
            onClick: () => console.log(element.id),
        })),
        activeId: props.select.activeId,
    })),
)(SelectComponent)
