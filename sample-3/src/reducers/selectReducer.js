import {
    SELECT_ID_YIELD,
    SELECT_ID_SPREAD,
    SELECT_ID_PRICE,
} from '../constants/selectIdsConstants'

const initialState = {
    data: [
        {
            id: SELECT_ID_YIELD,
            value: 'Yield'
        },
        {
            id: SELECT_ID_SPREAD,
            value: 'Spread'
        },
        {
            id: SELECT_ID_PRICE,
            value: 'Price'
        },
    ],
    activeId: SELECT_ID_PRICE,
}

export default (state = initialState, action) => {
    return state
}
