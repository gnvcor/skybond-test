import {
    TAB_ID_MAX,
    TAB_ID_MONTH,
    TAB_ID_QUARTER,
    TAB_ID_WEEK,
    TAB_ID_YEAR,
} from '../constants/tabsIdsConstants'
import { ACTION_CHANGE_TAB } from '../constants/tabActionNamesConstants'

const initialState = {
    data: [
        {
            id: TAB_ID_WEEK,
            value: 'Week'
        },
        {
            id: TAB_ID_MONTH,
            value: 'Month'
        },
        {
            id: TAB_ID_QUARTER,
            value: 'Quarter'
        },
        {
            id: TAB_ID_YEAR,
            value: 'Year'
        },
        {
            id: TAB_ID_MAX,
            value: 'Max'
        },
    ],
    activeId: TAB_ID_MONTH,
}

export default (state = initialState, { type, payload }) => {
    if (type === ACTION_CHANGE_TAB) {
        return {
            ...state,
            activeId: payload.id,
        }
    }

    return state
}
