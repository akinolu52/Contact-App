import * as actionTypes from '../actions/actionType';

const formatOutput = (data) => {
    let result = data.reduce((r, e) => {
        let group = e.first_name[0];
        if(!r[group]) r[group] = {group, children: [e]};
        else r[group].children.push(e);
        return r;
    }, {});

    return Object.values(result);
};

const deleteContact = (state, id) => {
    return state.filter((data, i) => i !== id )
};

const createContact = (prevState, newState) => {
    return [
        ...prevState, Object.assign({}, newState) 
    ];
}

export default (state = [], action) => {
    
    // let initial = {
    //     email: "akinolu52@gmail.com",
    //     first_name: "Emmanuel",
    //     last_name: "Akinyemi",
    //     phone: "9055685712",
    // }
    // state.push(initial);

    switch (action.type) {
        case actionTypes.CREATE_CONTACT:
            return createContact(state, action.contact);

        case actionTypes.EDIT_CONTACT:
            let newState = deleteContact(state, action.id);
            console.log(newState);
            return createContact(newState, action.contact);

        case actionTypes.DELETE_CONTACT:
            return deleteContact(state, action.id);
            
        default:
        // console.log(formatOutput(state))
            return state;
    }
};
