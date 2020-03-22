import {
    TAB_ID_MAX,
    TAB_ID_MONTH,
    TAB_ID_QUARTER,
    TAB_ID_WEEK,
    TAB_ID_YEAR,
} from '../constants/tabsIdsConstants'

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

export default (state = initialState, action) => {
    return state
}
