export const validate = val => {
    const errors = {};
    if (!val.first_name) {
        // check if first name is submitted
        errors.first_name_error = 'First name is a required field';
        errors.first_name_title = 'Required';
    }
    if (!val.last_name) {
        // check if last name is submitted
        errors.last_name_error = 'Last name is a required field';
        errors.last_name_title = 'Required';
    }
    if (!val.email) {
        // check if email address is submitted
        errors.email_error = 'Email is a required field';
        errors.email_title = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(val.email)) {
        // checks phone nummber format
        errors.email_error = 'Email format is incorrect';
        errors.email_title = 'Invalid';
    }
    if (!val.phone) {
        // check if phone number is submitted
        errors.phone_error = 'Phone number is a required field';
        errors.phone_title = 'Required';
    }
    return errors;
};