import { createAction } from 'redux-act'

export const getHouses = createAction('getHouses')

export const getHousesSuccess = createAction('getHousesSuccess')

export const getHousesError = createAction('getHousesError')

export const getAllTemplates = createAction('getAllTemplates')

export const getAllTemplatesSuccess = createAction('getAllTemplatesSuccess')

export const getAllTemplatesError = createAction('getAllTemplatesError')

export const setTemplateView = createAction('setTemplateView')
