import { fetch } from './fetch'

const apiPrefix = '/api'

export function getAuthorizedMenus () {
  return fetch({
    url: apiPrefix + '/w/authorizations/myAuthorizedMenus',
    method: 'get'
  })
}

export function getListData (params) {
  return fetch({
    url: apiPrefix + '/w/table',
    params: params,
    method: 'get'
  })
}

export function getDetail (id) {
  return fetch({
    url: apiPrefix + '/w/table/' + id,
    method: 'get'
  })
}

/* echart-component */
export function getHebeiData () {
  return fetch({
    url: apiPrefix + '/w/hebei',
    method: 'get'
  })
}

export function saveData (model) {
  let flag = model.id ? ('/' + model.id) : ''
  return fetch({
    url: apiPrefix + '/w/table' + flag,
    method: model.id ? 'put' : 'post',
    data: model
  })
}

/* tree-component-树 */
/* tree-component-树-组织机构 */
export function getOrganization () {
  return fetch({
    url: apiPrefix + '/w/organization',
    method: 'get'
  })
}

/* tree-component-树-表格 */
export function getTreeTableList () {
  return fetch({
    url: apiPrefix + '/w/table',
    method: 'get'
  })
}

export function getTreeTableDetail (id) {
  return fetch({
    url: apiPrefix + '/w/table/' + id,
    method: 'get'
  })
}

export function saveTreeTableDetail (model) {
  let flag = model.id ? ('/' + model.id) : ''
  return fetch({
    url: apiPrefix + '/w/table' + flag,
    method: model.id ? 'put' : 'post',
    data: model
  })
}
