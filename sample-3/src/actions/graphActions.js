import { ACTION_GRAPH_DATA_LOAD } from '../constants/graphActionNamesConstants'
import graphService from '../services/graphService'

export const onLoadData = () => (dispatch, getState) => {
    const { activeISINId } = getState().graph

    const onChange = data => ({ type: ACTION_GRAPH_DATA_LOAD, payload: { data } })

    graphService.loadData({ activeISINId })
        .then(response => dispatch(onChange(response)))
}
