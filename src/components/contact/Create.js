import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as contactAction from '../../actions/contactAction';

class CreateContact extends Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
           modal: false 
        };
    }

    resetForm() {
        for (var member in this.state) {
            if(member !== "modal") 
                this.setState({member: ''});
        }
    }

    toggleModal() {
        this.setState({
          modal: !this.state.modal
        });
        this.resetForm();
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        // perfomr validation
        let contact = {...this.state};
        delete contact.modal;
        // contact.key = this.state.first_name.charAt(0)
        this.toggleModal();
        this.props.createContact(contact);
    }

    render() {
        return(
            <Fragment>
                <div className={this.state.modal ? "modal show" : "modal"}>
                    <div className="modal-content">
                        <div className="modal-header">Create Contact</div>
                        <div className="modal-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">@</span>
                                    </div>
                                    <input type="text" name="first_name" placeholder="First name" onChange={this.handleChange} />
                                    <input type="text" name="last_name" placeholder="Last name" onChange={this.handleChange} />                           
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">@</span>
                                    </div>
                                    <input type="text" name="company" placeholder="Company" onChange={this.handleChange} />                                
                                    <input type="text" name="job_title" placeholder="Job title" onChange={this.handleChange} />
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="zmdi zmdi-email" />                                    
                                        </span>
                                    </div>
                                    <input type="email" name="email" placeholder="Email" onChange={this.handleChange} />
                                    <label>Email</label>
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="zmdi zmdi-phone" />
                                        </span>
                                    </div>
                                    <input type="tel" name="phone" placeholder="Phone" onChange={this.handleChange} />
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="zmdi zmdi-comment-text" />
                                        </span>
                                    </div>
                                    <textarea name="note" placeholder="Notes" onChange={this.handleChange}></textarea>
                                </div>
                                <div className="btn-style">
                                    <button type="button" onClick={this.toggleModal}>CANCEL</button> {" "}
                                    <button type="submit" onClick={this.handleSubmit}>SAVE</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
                <a href="#" onClick={this.toggleModal} className="float-btn">
                    <i className="zmdi zmdi-plus"></i>
                </a>
            </Fragment>
           
        )   
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createContact: contact => dispatch(contactAction.createContact(contact))
    }
}

export default connect(null, mapDispatchToProps)(CreateContact);