import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as contactAction from '../../actions/contactAction';
import EditContact from './Edit';
import {toastr} from 'react-redux-toastr';

class AllContact extends Component {
    constructor(props) {
        super(props);

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
    deleteContact(e, index){
        // this will handle the deleting of a contact list
        e.preventDefault();
        this.props.deleteContact(index);
        this.toggleModal();
        toastr.success("success", "Contact Deleted!")
    }
    showContact(data, index) {
        this.setState({
            data,
            index
        });
        this.toggleModal();
    }
    starContact(data, index) {
        // edit the contact by setting star as true
        data.star = true;
        this.props.starContact(data, index);
        toastr.info(`${data.first_name + " " + data.last_name}`, "Contact Stared!")
    }

    renderList(data, index){
        return(
            <li className="table-row" title="View" key={index}>
                <div className="table-col table-col-0" data-label="index">
                    {data.star}
                </div>
                <div onClick={(e) => this.showContact(data, index)} className="table-col table-col-1" data-label="Image">
                    <img src={"https://robohash.org/" + data.first_name + data.last_name} alt={data.first_name+" "+data.last_name} />
                </div>
                <div onClick={(e) => this.showContact(data, index)} className="table-col table-col-2" data-label="FullName">{data.first_name+" "+data.last_name}</div>
                <div onClick={(e) => this.showContact(data, index)} className="table-col table-col-3" data-label="Email">{data.email}</div>
                <div onClick={(e) => this.showContact(data, index)} className="table-col table-col-4" data-label="Phone">{data.phone}</div>
                <div className="table-col table-col-5" data-label="actions">
                    <i title="Star" onClick={(e) => this.starContact(data, index)} className={ data.star ? "zmdi zmdi-star star-active" : "zmdi zmdi-star-outline" }/>
                    <EditContact data={data} index={index} />                    
                    <i title="View" className="zmdi zmdi-more-vert"/>               
                </div>
            </li>
        )
    }

    render() {
        return(
            <Fragment>
                <ul className="contact__list">
                    {this.props.contacts && this.props.contacts.length < 1 && 
                        <div className="empty-contact">
                            <img src="/images/contact.png" alt="empty contact" />
                            <p>
                                <i className="zmdi zmdi-alert-circle-o"/>
                                It's empty here, click on the plus button to add new contacts...
                            </p>
                        </div>
                    }
                    {this.props.contacts.map((contact, i) => this.renderList(contact, i))}
                </ul>
                <div className={this.state.modal ? "modal show" : "modal"}>
                    {this.state.data && 
                        <div className="modal-content contact-view">
                            <div className="modal-header">
                                <div>
                                    {this.state.data.first_name + " " + this.state.data.last_name}
                                </div>
                                <div>
                                    <i title="Star contact" onClick={(e) => this.starContact(this.state.data, this.state.index)} className={ this.state.data.star ? "zmdi zmdi-star star-active" : "zmdi zmdi-star-outline" }/> 
                                    {/* <EditContact data={this.state.data} index={this.state.index} /> */}
                                    {/* <i title="" className="zmdi zmdi-edit"/>  */}
                                    <i title="Delete contact" onClick={(e) => this.deleteContact(e, this.state.index)} className="zmdi zmdi-more-vert"/> 
                                    <i title="Close modal" onClick={this.toggleModal} className="zmdi zmdi-close"/> 
                                </div>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <h5>Contact details</h5>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="zmdi zmdi-city-alt" />                                    
                                            </span>
                                        </div>
                                        <span>{this.state.data.company}</span>
                                    </div>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="zmdi zmdi-email" />                                    
                                            </span>
                                        </div>
                                        <span>{this.state.data.email}</span>
                                    </div>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="zmdi zmdi-phone" />
                                            </span>
                                        </div>
                                        <span>{this.state.data.phone}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        contacts: state.contacts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteContact: index => dispatch(contactAction.deleteContact(index)),
        starContact: (contact, index) => dispatch(contactAction.starContact(contact, index)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllContact);