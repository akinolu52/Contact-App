import * as actionTypes from './actionType';

export const createContact = contact => {
    return {
        type: actionTypes.CREATE_CONTACT,
        contact
    };
};

export const editContact = (contact, id) => {
    return {
        type: actionTypes.EDIT_CONTACT,
        contact, id
    };
};

export const deleteContact = id => {
    return {
        type: actionTypes.DELETE_CONTACT,
        id
    };
};

export const starContact = (contact, id) => {
    return {
        type: actionTypes.STAR_CONTACT,
        contact, id
    };
};

export const searchContact = name => {
    return {
        type: actionTypes.SEARCH_CONTACT,
        name
    };
};