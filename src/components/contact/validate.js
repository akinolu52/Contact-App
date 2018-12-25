export const validate = val => {
    const errors = {};
    if (!val.first_name) {
        errors.first_name_error = 'true';
    }
    if (!val.last_name) {
        errors.last_name_error = 'true';
    }
    if (!val.email) {
        errors.emai_errorl = 'true';
    } else if (!/^.+@.+$/i.test(val.email)) {
        errors.email_error = 'true';
    }
    if (!val.phone) {
        errors.phone = 'true'
    } else if (!val.phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
        errors.phone = 'true'
    } 
    return errors;
};