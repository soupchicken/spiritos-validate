const validateSignUp = async ( form, validate, endpoints ) => {
	const errors = {};
	await validate.async['username']( form['username'], endpoints['username'], errors );
	await validate.async['email']( form['email'], endpoints['email'], errors );
	validate['passwords']( form['password1'], form['password2'], errors );
	return {
		isValid: Object.keys( errors ).length === 0,
		errors
	}
};

module.exports = validateSignUp