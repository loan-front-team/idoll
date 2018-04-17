import React from 'react';
import PromiseRender from './PromiseRender';
import { CURRENTAUTH } from './index';

function isPromise(obj) {
	return !!obj && (typeof obj === 'object' || typeof obj === 'function' && typeof obj.then === 'function')
}

/**
 * 通用权限检查方法
 * Common check permissions method
 * @param { 权限判定 Permission judgment type string |array | Promise | Function } authority
 * @param { 你的权限 Your permission description  type:string} currentAuthority
 * @param { 通过的组件 Passing components } target
 * @param { 未通过的组件 no pass components } Exception
 */

export const checkPermissions = (authority, currentAuthority, target, Exception) => {
 	// authority不存在，则没有判定权限.默认查看所有
 	if (!authority) {
	    return target;
	}
	// authority为数组
  if (Array.isArray(authority)) {
    if (authority.indexOf(currentAuthority) >= 0) {
      return target;
    }
    return Exception;
  }
  // authority为string
  if (typeof authority === 'string') {
	  if (authority === currentAuthority) {
	    return target;
	  }
	  return Exception;
  }
  // authority为Promise
  if (isPromise(authority)) {
    return () => (
      <PromiseRender ok={target} error={Exception} promise={authority} />
    );
  }
  // authority为Function,该Function返回布尔值
  if (typeof authority === 'function') {
  	try {
  		const bool = authority();
  		if (bool) {
  			return target;
  		}
  		return Exception;
  	} catch (error) {
  		throw error;
  	}
  }
  throw new Error('不支持的参数对象！！！')
 }

 export default const check = (authority, target, Exception) => {
 	return checkPermissions(authority, CURRENTAUTH, target, Exception)
 }
