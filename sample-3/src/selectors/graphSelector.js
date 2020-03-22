import { createSelector } from 'reselect'

const getActiveSelectId = state => state.select.activeId
const getActiveTabId = state => state.tabs.activeId
const getGraphData = state => state.graph.data

export const getGraphDataSelector = createSelector(
    [getActiveSelectId, getActiveTabId, getGraphData],
    (activeSelectId, activeTabId, graphData) =>
        graphData ? graphData[activeTabId][activeSelectId] : [],
)
