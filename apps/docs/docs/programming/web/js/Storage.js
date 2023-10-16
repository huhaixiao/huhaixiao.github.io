/**
 * Storage
 * localStorage
 * 
 * sessionStorage
 * survivies in same browsing context(usually a tab)
 * 需求记录刷新状态的时候使用？
 * 
 * Application Tab
 */

window.localStorage.setItem('keyName', 'keyValue')
window.localStorage.getItem('keyName')
window.localStorage.removeItem('keyName')
window.localStorage.clear()

// returns the name of the nth, U should not rely on it.
window.localStorage.key(0)