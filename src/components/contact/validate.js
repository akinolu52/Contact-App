/**
 * @summary get a tring and validate it 
 * @param {string} values
 * @return {string} - returns an error if validation fails errors
 */
export const validate = val => {
    const errors = {};
    /**
     * @summary check if first name is submitted
     * @param {string} first_name
     * @return {string} - returns an error if validation fails
     */
    if (!val.first_name) {
        errors.first_name_error = 'First name is a required field';
        errors.first_name_title = 'Required';
    }
    /**
     * @summary check if last name is submitted
     * @param {string} last_name
     * @return {string} - returns an error if validation fails
     */
    if (!val.last_name) {
        errors.last_name_error = 'Last name is a required field';
        errors.last_name_title = 'Required';
    }
    /**
     * @summary check if email address is submitted
     * @param {string} email
     * @return {string} - returns an error if validation fails
     */
    if (!val.email) {
        errors.email_error = 'Email is a required field';
        errors.email_title = 'Required';
    } 
    /**
     * checks phone nummber format
     * @param {string} email
     * @return {string} - returns an error if validation fails
     */
    else if (!/\S+@\S+\.\S+/.test(val.email)) {
        errors.email_error = 'Email format is incorrect';
        errors.email_title = 'Invalid';
    }
    /**
     * @summary check if phone number is submitted
     * @param {string} phone
     * @return {string} - returns an error if validation fails
     */
    if (!val.phone) {
        errors.phone_error = 'Phone number is a required field';
        errors.phone_title = 'Required';
    }
    return errors;
};