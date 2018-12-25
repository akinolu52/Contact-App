import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from '../../actions/contactAction';
import EditContact from './Edit';

class AllContact extends Component {
    constructor(props) {
        super(props);
    }
    renderList(data, index){
        return(
            <li className="table-row" key={index}>
                <div className="table-col table-col-0" data-label="index">
                    {data.group}
                </div>
                <div className="table-col table-col-1" data-label="Image">
                    <img src={"https://robohash.org/" + data.first_name} alt={data.first_name+" "+data.last_name} />
                </div>
                <div className="table-col table-col-2" data-label="FullName">{data.first_name+" "+data.last_name}</div>
                <div className="table-col table-col-3" data-label="Email">{data.email}</div>
                <div className="table-col table-col-4" data-label="Phone">{data.phone}</div>
                <div className="table-col table-col-5" data-label="actions">
                    <i title="Star" className="zmdi zmdi-star-outline"/>               
                    {/* <i title="Edit" className="zmdi zmdi-edit"/> */}
                    <EditContact data={data} index={index} />                    
                    <i title="View" className="zmdi zmdi-more-vert"/>               
                </div>
            </li>
        )
    }
    render() {
        return(
            <ul className="contact__list">
                {/* <li class="table-header">
                    <div class="col table-col-1">Job Id</div>
                    <div class="table-col table-col-2">Customer Name</div>
                    <div class="table-col table-col-3">Amount Due</div>
                    <div class="table-col table-col-4">Payment Status</div>
                </li> */}
                {this.props.contacts.map((contact, i) => this.renderList(contact, i))}
                
            </ul>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        contacts: state.contacts
    }
}


export default connect(mapStateToProps)(AllContact);