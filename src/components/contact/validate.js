export const validate = val => {
    const errors = {};
    if (!val.first_name) {
        errors.first_name_error = 'First name is a required field';
        errors.first_name_title = 'Required';
    }
    if (!val.last_name) {
        errors.last_name_error = 'Last name is a required field';
        errors.last_name_title = 'Required';
    }
    if (!val.email) {
        errors.email_error = 'Email is a required field';
        errors.email_title = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(val.email)) {
        errors.email_error = 'Email format is incorrect';
        errors.email_title = 'Invalid';
    }
    if (!val.phone) {
        errors.phone_error = 'Phone number is a required field';
        errors.phone_title = 'Required';
    } else if (!val.phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
        errors.phone_error = 'Phone format is incorrect';
        errors.phone_title = 'Required';
    } 
    return errors;
};