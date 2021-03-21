import React, { Component } from 'react';
import axios from 'axios';
import * as _ from "lodash";
// import {Link} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Userimg from './Useimg.png'
import './Search.css'
import * as Fa from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

class SearchBuyer extends Component {
    state = {
        data: [],
        quantity: "",
        searchname: "",
        filter: "",
        textch: "Apply Filters"
    }
    CoustomCard = ({ Name, baseline_create_date, buisness_year, business_code, clear_date, cust_number, cust_payment_terms, doc_id, document_create_date, document_type, due_in_date, invoice_currency, invoice_id, isOpen, posting_date, posting_id, total_open_amount }) => {
        return (
            <div className="card toplayer">
                <div class="d-flex">
                    <img src={Userimg} alt="user img" style={{ width: "5rem", height: "5rem", borderRadius: "10px" }} />
                    <div class="nameloc">
                        <p>Name : {Name} </p>
                    </div>
                </div>
                <div class="layer2">
                    <p style={{ margin: "0px", padding: "0.25vw 0px" }}><strong>Invoice ID: </strong> {invoice_id} </p>
                    <p style={{ margin: "0px", padding: "0.25vw 0px" }}> <strong>Business Code : </strong> {business_code} </p>
                    <p style={{ margin: "0px", padding: "0.25vw 0px" }}> <strong> Buisness Year : </strong>  {buisness_year} </p>
                    <p style={{ margin: "0px", padding: "0.25vw 0px" }}><strong> Clear Date: </strong> {clear_date} </p>
                    <p style={{ margin: "0px", padding: "0.25vw 0px" }}><strong>Amount: </strong> {total_open_amount} {invoice_currency} </p>
                    <p style={{ margin: "0px", padding: "0.25vw 0px" }}><strong>Customer Number : </strong>  {cust_number} </p>
                    <p style={{ margin: "0px", padding: "0.25vw 0px" }}><strong>Customer Payment Terms: </strong> {cust_payment_terms} </p>
                    <p style={{ margin: "0px", padding: "0.25vw 0px" }}><strong>Document ID: </strong> {doc_id} </p>
                </div>
                <div class="d-flex justify-content-between" style={{ paddingTop: "1vw", position: "relative" }}>
                    <a href="/" className="element1">
                        <Fa.FaRegUser className="element1" />
                    </a>
                    <div className="element1">
                        <Fa.FaRegComment className="element2" />
                    </div>
                    <div className="element1">
                        <Fa.FaShareAlt className="element1" />
                    </div>
                    <div className="element1">
                        <Fa.FaRegBookmark className="element2" />
                    </div>
                </div>

            </div>
        )
    }
    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/products`).then(res => {
            this.setState({ data: res.data });
            console.log(this.state.data);
        })
            .catch(err => {
                console.log(err.response)
            });

    };

    handleChange(e, props) {
        this.setState({ [props]: e.target.value });
        if (props === 'searchname') {}
        if (props === 'filter') {
            const keyval = [];
            keyval["Customer Number"] = "cust_number";
            keyval["Business Year"] = "buisness_year";
            keyval["Amount"] = "total_open_amount";

            var arr = this.state.data;
            const filt = keyval[e.target.value];

            const sorted = _.sortBy(arr, filt);

            this.setState({ data: sorted });
        }
    }
    handleSearch() {
        const Search = this.state.searchname;
        console.log(Search);
        if (Search) {
            axios.post(`${process.env.REACT_APP_API_URL}/searchproducts`, {search: Search }).then(res => {
                this.setState({ data: res.data });
                // console.log(this.state.data);
            })
                .catch(err => {
                    console.log(err.response)
                    toast.error(err.response.data.errors);
                })
        }
        else {
            axios.get(`${process.env.REACT_APP_API_URL}/products`).then(res => {
                this.setState({ data: res.data });
                console.log(this.state.data);
            })
                .catch(err => {
                    console.log(err.response)
            });
        }
    };
    handleSubmit() {
        this.setState({ textch: "Applying" });
        const Search = this.state.searchname;
        if (Search !== "") {
            axios.post(`${process.env.REACT_APP_API_URL}/searchproducts`, {search: Search }).then(res => {
                this.setState({ data: res.data });
                // console.log(this.state.data);
            })
                .catch(err => {
                    console.log(err.response)
                    toast.error(err.response.data.errors);
                })
        }
        else{
            // toast.error('Please Select one fliter');
            // this.setState({ textch: 'Apply Filter' });
            axios.get(`${process.env.REACT_APP_API_URL}/products`).then(res => {
                this.setState({ data: res.data });
                console.log(this.state.data);
            })
                .catch(err => {
                    console.log(err.response)
            });
        }
    }

    render() {
        return (
            <div>
                <ToastContainer />
                <div class="line" style={{ backgroundColor: "rgb(175, 178, 193)", height: "0.5vw", width: "100%" }}></div>
                <div className="container" style={{ padding: "0px", width: "100%", textAlign: "center" }}>
                    <div style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
                        <div className="container" style={{ padding: "0px", width: "100%" }}>
                            <div style={{ padding: "3rem" }}>
                                <div className="row" style={{ margin: "0", padding: "0", width: "100%", alignItems: "flex-end" }}>
                                    <div className="col-md-8 col-12" style={{ width: "100%", padding: "7px" }}>
                                        <button className="button3"></button>
                                        <input id="keyword_search" placeholder="Search by Name.." className="input2" onChange={(e) => this.handleChange(e, 'searchname')} />
                                        <button className="button4" onClick={() => this.handleSearch()}><Fa.FaSearch style={{ fontSize: "1.2em", color: "rgb(18, 77, 81)" }} /> </button>
                                    </div>
                                    <div className="col-md-4 col-12" style={{ width: "100%", padding: "7px", textAlign: "-webkit-center" }}>
                                        Sort By
                                        <select class="form-control button6" onChange={(e) => this.handleChange(e, 'filter')}>
                                            <option selected>Amount</option>
                                            <option>Business Year</option>
                                            <option>Customer Number</option>
                                        </select>
                                    </div>


                                </div>
                            </div>

                        </div>
                        {/* <div>
                            <div  style={{textAlign:"left"}}>
                                    
                                
                                    
                            </div>
                        </div> */}
                    </div>


                </div>
                <div className="container-fluid" style={{ margin: "0px", padding: "0px", width: "100%", textAlign: "center" }}>
                    <div style={{ padding: "4vw" }}>
                        <div className="row" style={{ margin: "0", padding: "0", width: "100%" }}>
                            {this.state.data.map((item, index) => {
                                return (
                                    <div key={index} className="col-lg-4 col-sm-6 col-12" style={{ padding: "12px" }}>
                                        <this.CoustomCard
                                            Name={item.name_customer}
                                            baseline_create_date={item.baseline_create_date}
                                            buisness_year={item.buisness_year}
                                            business_code={item.business_code}
                                            clear_date={item.clear_date}
                                            cust_number={item.cust_number}
                                            cust_payment_terms={item.cust_payment_terms}
                                            doc_id={item.doc_id}
                                            document_create_date={item.document_create_date}
                                            document_type={item.document_type}
                                            due_in_date={item.due_in_date}
                                            invoice_currency={item.invoice_currency}
                                            invoice_id={item.invoice_id}
                                            isOpen={item.isOpen}
                                            posting_date={item.posting_date}
                                            posting_id={item.posting_id}
                                            total_open_amount={item.total_open_amount}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default SearchBuyer
