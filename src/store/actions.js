export const openTabState = ({ getters, dispatch }, payload) => {
  let tabState = {}
  switch (payload.id) {
    case 'LightApps':
      tabState = getters.tabMapping.LightApps
      break
    case 'WhiteList':
      tabState = getters.tabMapping.WhiteList
      break
    default:
  }

  if (tabState.id) {
    // 添加tab页
    dispatch('addTabState', tabState)

    // 路由替换
    payload.$router.replace(tabState.path)
  }
}

export const closeTabState = ({ getters, dispatch }, payload) => {
  const path = payload.$router.currentRoute.path
  let tabState = {}
  switch (payload.id) {
    case 'LightApps':
      tabState = getters.tabMapping.LightApps
      break
    case 'WhiteList':
      tabState = getters.tabMapping.WhiteList
      break
    default:
  }

  // 移除tab页
  dispatch('deleteTabState', payload.id)

  // 路由替换为默认页
  if (path === tabState.path) {
    payload.$router.replace(getters.tabMapping.Base.path)
  }
}

export const addTabState = ({ state, commit }, payload = {}) => {
  const tabState = state.tabState || []
  const tab = tabState.find(item => item.id === payload.id)
  if (!tab) {
    tabState.push(payload)
  }
  commit('upTabState', tabState)
}

export const deleteTabState = ({ state, commit }, payload) => {
  const tabState = state.tabState || []
  commit('upTabState', tabState.filter(item => item.id !== payload))
}
