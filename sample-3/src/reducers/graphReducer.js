import { ACTION_GRAPH_DATA_LOAD } from '../constants/graphActionNamesConstants'

const DEFAULT_ISIN = 'US67021BAE92'

const initialState = {
    activeISINId: DEFAULT_ISIN,
}

export default (state = initialState, { type, payload }) => {
    if (type === ACTION_GRAPH_DATA_LOAD) {
        return {
            ...state,
            data: payload.data,
        }
    }

    return state
}
