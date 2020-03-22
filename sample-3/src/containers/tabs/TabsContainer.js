import { connect } from 'react-redux'
import compose from 'recompose/compose'
import withProps from 'recompose/withProps'
import TabsComponent from '../../core/components/tabsComponent/TabsComponent'
import { onTabChange } from '../../actions/tabActions'

export default compose(
    connect(
        state => ({
            tabs: state.tabs,
        }),
        { onTabChange },
    ),
    withProps(props => ({
        data: props.tabs.data.map(element => ({
            ...element,
            onClick: () => props.onTabChange(element.id),
        })),
        activeId: props.tabs.activeId,
    })),
)(TabsComponent)
