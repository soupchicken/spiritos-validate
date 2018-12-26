const fetch = require('node-fetch');
const checkUsernameAvailability = async ( username, url ) => {
	try {
		const res = await fetch( url, {
			method:'POST',
			body:JSON.stringify({ username }),
			headers: { 'Content-Type': 'application/json' }
		})
		return res.status;
	} catch ( error ){
		return 500;
	}
}

module.exports = checkUsernameAvailability