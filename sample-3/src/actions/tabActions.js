import { ACTION_CHANGE_TAB } from '../constants/tabActionNamesConstants'

export const onTabChange = id => dispatch => {
    const onChange = () => ({ type: ACTION_CHANGE_TAB, payload: { id } })

    dispatch(onChange())
}
