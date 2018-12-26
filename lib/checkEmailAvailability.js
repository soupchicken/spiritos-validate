const fetch = require('node-fetch');
const checkEmailAvailability = async ( email, url ) => {
	try {
		const res = await fetch( url, {
			method:'POST',
			body:JSON.stringify({ email }),
			headers: { 'Content-Type': 'application/json' }
		})
		return res.status;
	} catch ( error ){
		return 500;
	}
}

module.exports = checkEmailAvailability