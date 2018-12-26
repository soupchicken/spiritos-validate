const emailValidator = require('email-validator');
const checkEmailAvailability = require('./lib/checkEmailAvailability');

const asyncValidateEmail = async ( email, asyncUrl, errors ) => {
	errors['email'] = [];
	const status = await checkEmailAvailability( email, asyncUrl );
	if ( status !== 200 )
		errors['email'].push('This Email is already assigned to an account');

	if ( !emailValidator.validate( email ))
		errors['email'].push('Not a valid email');

	if ( errors['email'].length === 0 )
		delete errors['email'];
}

module.exports = asyncValidateEmail