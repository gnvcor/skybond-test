import { connect } from 'react-redux'
import compose from 'recompose/compose'
import withProps from 'recompose/withProps'
import TabsComponent from '../../core/components/tabsComponent/TabsComponent'

export default compose(
    connect(
        state => ({
            tabs: state.tabs,
        }),
    ),
    withProps(props => ({
        data: props.tabs.data.map(element => ({
            ...element,
            onClick: () => console.log(element.id),
        })),
        activeId: props.tabs.activeId,
    })),
)(TabsComponent)
