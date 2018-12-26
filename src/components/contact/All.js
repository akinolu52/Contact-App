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
           modal: false,
        };
    }
    toggleModal() {
        this.setState({
        modal: !this.state.modal
        });
    }
    deleteContact(e, index){
        e.preventDefault();
        this.props.deleteContact(index);
        this.toggleModal();
        toastr.success("success", "Contact Deleted!")
    }
    showContact(data, index) {
        // this.setState(data, (e)=>consol.log(this.state))
        this.setState({
            name: data.first_name + " " +data.last_name,
            company: data.company,
            email: data.email,
            phone: data.phone,
            index
        });
        this.toggleModal();
    }
    starContact(data, index) {
        // star the contact from the ui and then edit the contact by setting star as true
        // this.setState(data, (e)=>consol.log(this.state))
        this.setState({
            name: data.first_name + " " +data.last_name,
            company: data.company,
            email: data.email,
            phone: data.phone,
            index
        });
        this.toggleModal();
    }

    renderList(data, index){
        return(
            <li className="table-row" title="View" key={index}>
                <div className="table-col table-col-0" data-label="index">
                    {data.group}
                </div>
                <div onClick={(e) => this.showContact(data, index)} className="table-col table-col-1" data-label="Image">
                    <img src={"https://robohash.org/" + data.first_name} alt={data.first_name+" "+data.last_name} />
                </div>
                <div onClick={(e) => this.showContact(data, index)} className="table-col table-col-2" data-label="FullName">{data.first_name+" "+data.last_name}</div>
                <div onClick={(e) => this.showContact(data, index)} className="table-col table-col-3" data-label="Email">{data.email}</div>
                <div onClick={(e) => this.showContact(data, index)} className="table-col table-col-4" data-label="Phone">{data.phone}</div>
                <div className="table-col table-col-5" data-label="actions">
                    <i title="Star" onClick={(e) => this.starContact(data, index)} className="zmdi zmdi-star-outline"/>               
                    {/* <i title="Edit" className="zmdi zmdi-edit"/> */}
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
                    <div className="modal-content contact-view">
                        <div className="modal-header">
                            <div>
                                {this.state.name}
                            </div>
                            <div>
                                <i title="" className="zmdi zmdi-star"/> 
                                {/* <EditContact data={this.state.data} index={this.state.index} /> */}
                                <i title="" className="zmdi zmdi-edit"/> 
                                <i title="" onClick={(e) => this.deleteContact(e, this.state.index)} className="zmdi zmdi-more-vert"/> 
                                <i title="" onClick={this.toggleModal} className="zmdi zmdi-close"/> 
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
                                    <span>{this.state.company}</span>
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="zmdi zmdi-email" />                                    
                                        </span>
                                    </div>
                                    <span>{this.state.email}</span>
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="zmdi zmdi-phone" />
                                        </span>
                                    </div>
                                    <span>{this.state.phone}</span>
                                </div>
                            </div>
                        </div>
                    </div>
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
        deleteContact: index => dispatch(contactAction.deleteContact(index))
    }
  };


export default connect(mapStateToProps, mapDispatchToProps)(AllContact);