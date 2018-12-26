import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as contactAction from '../../actions/contactAction';
import {validate} from './validate';
import {toastr} from 'react-redux-toastr';

class EditContact extends Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
           modal: false 
        };
    }

    toggleModal() {
        this.setState({
          modal: !this.state.modal
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        // perfomr validation
        const contact = {};
        for (const field in this.refs) {
        contact[field] = this.refs[field].value;
        }
        // console.log(contact)
        let errors = validate(contact);
        this.setState(errors);
        if(Object.keys(errors).length === 0 && errors.constructor === Object) {        
            this.toggleModal();
            this.props.editContact(contact, this.props.index);
            toastr.info('Contact', `${contact.first_name + " " + contact.last_name} edited successfully`)
        } else {
            if(errors.first_name_error){
                toastr.error(errors.first_name_title, errors.first_name_error);
            }
            if(errors.last_name_error){
                toastr.error(errors.last_name_title, errors.last_name_error);
            }
            if(errors.email_error){
                toastr.error(errors.email_title, errors.email_error);
            }
            if(errors.phone_error){
                toastr.error(errors.phone_title, errors.phone_error);
            }
        }
    }

    render() {
        return(
            <Fragment>
                <div className={this.state.modal ? "modal show" : "modal"}>
                    <div className="modal-content">
                        <div className="modal-header">Edit Contact</div>
                        <div className="modal-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">@</span>
                                    </div>
                                    <input type="text" ref="first_name" placeholder="First name" className={ this.state.first_name_error ? "error" : ""} defaultValue={this.props.data.first_name} onChange={this.handleChange} />
                                    <input type="text" ref="last_name" placeholder="Last name" className={ this.state.last_name_error ? "error" : ""} defaultValue={this.props.data.last_name} onChange={this.handleChange} />                           
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                        <i className="zmdi zmdi-city-alt" />                                                                            
                                        </span>
                                    </div>
                                    <input type="text" ref="company" placeholder="Company" defaultValue={this.props.data.company} onChange={this.handleChange} />                                
                                    <input type="text" ref="job_title" placeholder="Job title" defaultValue={this.props.data.job_title} onChange={this.handleChange} />
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="zmdi zmdi-email" />                                    
                                        </span>
                                    </div>
                                    <input type="email" ref="email" placeholder="Email" className={ this.state.email_error ? "error" : ""} defaultValue={this.props.data.email} onChange={this.handleChange} />
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="zmdi zmdi-phone" />
                                        </span>
                                    </div>
                                    <input type="tel" ref="phone" placeholder="Phone" className={ this.state.phone_error ? "error" : ""} defaultValue={this.props.data.phone} onChange={this.handleChange} />
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="zmdi zmdi-comment-text" />
                                        </span>
                                    </div>
                                    <textarea ref="note" placeholder="Notes" onChange={this.handleChange}></textarea>
                                </div>
                                <div className="btn-style">
                                    <button type="button" onClick={this.toggleModal}>CANCEL</button> {" "}
                                    <button type="submit" onClick={this.handleSubmit}>SAVE</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
                 <i title="Edit" onClick={this.toggleModal} className="zmdi zmdi-edit"/> 
            </Fragment>
        )   
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editContact: (contact, index) => dispatch(contactAction.editContact(contact, index))
    }
}

export default connect(null, mapDispatchToProps)(EditContact);