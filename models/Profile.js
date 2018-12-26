const validateProfile = async ( profile, validate ) => {
  const errors = {};
  // await validate.async['username']( profile['username'], endpoints['username'], errors );
  // await validate.async['email']( profile['email'], endpoints['email'], errors );
  return {
    isValid: Object.keys( errors ).length === 0,
    errors
  }
};

module.exports = validateProfile
