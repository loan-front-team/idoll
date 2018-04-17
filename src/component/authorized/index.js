/*
* @Author: lulu27753
* @Date:   2018-04-13 19:49:35
* @Last Modified by:   lulu27753
* @Last Modified time: 2018-04-13 21:17:23
*/
import Authorized from './Authorized';
import AuthorizedRoute from './AuthorizedRoute';
import check from './CheckPermissions.js';

/* eslint-disable import/no-mutable-exports */
let CURRENTAUTH = 'NULL';

Authorized.AuthorizedRoute = AuthorizedRoute;
Authorized.check = check;

export default const renderAuthorize = (currentAuthority) => {
	if (currentAuthority) {
		if (currentAuthority.constructor.name === 'Function') {
			CURRENTAUTH = currentAuthority();
		}
		if (currentAuthority.constructor.string === 'String') {
			CURRENTAUTH = currentAuthority;
		} else {
			CURRENTAUTH= 'NULL';
		}
	}
	return Authorized;
};

export { CURRENTAUTH };
export default renderAuthorize;