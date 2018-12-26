const checkUsernameAvailability = require('./lib/checkUsernameAvailability');

const asyncValidateUsername = async ( username, asyncUrl, errors ) => {
	errors['username'] = [];
	const status = await checkUsernameAvailability( username, asyncUrl );
	if ( status !== 200 )
		errors['username'].push( 'This Username is taken' );

	if ( !username )
		errors['username'].push( 'Username cannot be blank' );

	if ( username.length > 45 )
		errors['username'].push( 'Username must be less than 46 characters ' );

	if ( errors['username'].length === 0 )
		delete errors['username']

}

module.exports = asyncValidateUsername