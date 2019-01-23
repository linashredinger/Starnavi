import { createReducer } from 'redux-act'
import { loop, Cmd } from 'redux-loop'

import {
    getHouses,
    getHousesSuccess,
    getHousesError,
    getAllTemplates,
    getAllTemplatesSuccess,
    getAllTemplatesError,
    setTemplateView,
} from './actions'

import { getHousesApi, getTemplatesApi } from './api'

const initialState = {
    houses: [],
    templates: [],
    templateView: 1,
}

//GET ALL DATA

const handleGetHouses = state => loop(
    {...state},
    Cmd.run(getHousesApi,{
        successActionCreator: getHousesSuccess,
        failActionCreator: getHousesError
    })
)

const handleGetHousesSuccess = (state, payload) => ({
    ...state,
    houses: payload,
})

//GET ALL TEMPLATES

const handleGetAllTemplates = state => loop(
    {...state},
    Cmd.run(getTemplatesApi, {
        successActionCreator: getAllTemplatesSuccess,
        failActionCreator: getAllTemplatesError,
    })
)

const handleGetAllTemplatesSuccess = (state, payload) => ({
    ...state,
    templates: payload,
})

const handleSetTemplateView = (state, payload) => ({
    ...state,
    templateView: payload,
})

const actions = {
    [getHouses]: handleGetHouses,
    [getHousesSuccess]: handleGetHousesSuccess,
    [getAllTemplates]: handleGetAllTemplates,
    [getAllTemplatesSuccess]: handleGetAllTemplatesSuccess,
    [setTemplateView]: handleSetTemplateView,
}

const reducer = createReducer(actions, initialState)

export default reducer
