export const validateUserLoginForm = (values) => {
  let errors = {};

  // Check if username exists
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length < 6 || values.username.length > 15) {
    errors.username = "Username must be between 6 and 15 characters";
  }

  // Check if password exists
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  return errors;
};
