import { ACTION_CHANGE_SELECT } from '../constants/selectActionNamesConstants'

export const onSelectChange = id => dispatch => {
    const onChange = () => ({ type: ACTION_CHANGE_SELECT, payload: { id } })

    dispatch(onChange())
}
