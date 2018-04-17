import authorizedRender from 'component/Authorized';

// 通过localStorage来保存从server端发过来的授权信息
export function getAuthority() {
  return localStorage.getItem('idoll-pro-authority') || 'admin';
}

export function setAuthority(authority) {
  return localStorage.setItem('idoll-pro-authority', authority);
}

export default const Authorized = authorizedRender(getAuthority());
