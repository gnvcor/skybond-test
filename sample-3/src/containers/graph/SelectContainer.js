import { connect } from 'react-redux'
import compose from 'recompose/compose'
import withProps from 'recompose/withProps'
import SelectComponent from '../../core/components/selectComponent/SelectComponent'
import { onSelectChange } from '../../actions/selectActions'

export default compose(
    connect(
        state => ({
            select: state.select,
        }),
        { onSelectChange },
    ),
    withProps(props => ({
        data: props.select.data.map(element => ({
            ...element,
            onClick: () => props.onSelectChange(element.id),
        })),
        activeId: props.select.activeId,
    })),
)(SelectComponent)
