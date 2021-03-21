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
    state={
        data:[],
        costarrow: false,
        leadarrow: false,
        quantityarrow: false,
        filterarrow: false,
        mincost: "",
        maxcost: "",
        minlead: "",
        maxlead: "",
        quantity:"",
        searchname:"",
        filter: "",
        textch: "Apply Filters"
    }
    CoustomCard= ({Name,price,quantity,weight,product,productId,leadtime})=>{
        return(
                            <div className="card toplayer">
                                <div class="d-flex">
                                    <img src={Userimg} alt="user img" style={{width: "5rem", height: "5rem", borderRadius: "10px"}}/>
                                        <div class="nameloc">
                                            <p>Name : {Name} </p>
                                        </div>
                                </div>
                                <div class="layer2">
                                    <p><strong>Requirement : </strong></p>
                                    <p style={{margin: "0px", padding: "0.25vw 0px"}}> <strong>Product : </strong> {product} </p>
                                    <p style={{margin: "0px", padding: "0.25vw 0px"}}> <strong> Product ID : </strong>  {productId} </p>
                                    <p style={{margin: "0px", padding: "0.25vw 0px"}}><strong>Quantity: </strong> {quantity} </p>
                                    <p style={{margin: "0px", padding: "0.25vw 0px"}}><strong>Cost: </strong> {price}<Fa.FaRupeeSign/> </p>
                                    <p style={{margin: "0px", padding: "0.25vw 0px"}}><strong>Weight : </strong>  {weight} Grams </p>
                                    <p style={{margin: "0px", padding: "0.25vw 0px"}}><strong>Lead Time: </strong> {leadtime} Days </p>
                                </div>
                                <div class="d-flex justify-content-between" style={{paddingTop: "1vw", position: "relative"}}>
                                    <a href="/" className="element1">
                                        <Fa.FaRegUser className="element1"/>
                                    </a>
                                        <div className="element1">
                                            <Fa.FaRegComment className="element2"/>
                                        </div>
                                        <div className="element1">
                                            <Fa.FaShareAlt className="element1"/>
                                        </div>
                                        <div className="element1">
                                            <Fa.FaRegBookmark className="element2"/>
                                        </div>
                                </div>
                               
                            </div> 
        )
    }
    componentDidMount(){
        axios.get(`${process.env.REACT_APP_API_URL}/products`).then(res=>{
            this.setState({data:res.data});
            // console.log(this.state.data);
        })
        .catch(err=>{
            console.log(err.response)
        });
    };

    setFilterArrow(curstate) {
        this.setState({filterarrow:!curstate});
        this.setState({leadarrow:false});
        this.setState({quantityarrow:false});
        this.setState({costarrow:false});
        
    }

    setCostArrow(curstate) {
        this.setState({costarrow:!curstate});
        this.setState({leadarrow:false});
        this.setState({quantityarrow:false});
        this.setState({filterarrow:false});
        
    }
    setLeadArrow(curstate){
        this.setState({leadarrow:!curstate});
        this.setState({costarrow:false});
        this.setState({quantityarrow:false});
        this.setState({filterarrow:false});
        
    }
    setQuantityArrow(curstate){
        this.setState({quantityarrow:!curstate});
        this.setState({costarrow:false});
        this.setState({leadarrow:false});
        this.setState({filterarrow:false});
    }
    handleChange(e,props){
        this.setState({[props]:e.target.value});
        if(props==='searchname'){
            this.setState({costarrow:false});
            this.setState({leadarrow:false});
            this.setState({quantityarrow:false});
            this.setState({filterarrow:false});
        }
        if(props==='filter'){
            const keyval=[];
            keyval["Quantity"] = "quantity";
            keyval["Cost"] = "price_rs";
            keyval["Lead Time"] = "lead_time";
            keyval["Weight"] = "weight_gsm";
            
            var arr = this.state.data;
            const filt = keyval[e.target.value];
            console.log(filt);

            const sorted = _.sortBy(arr,filt);
           
            this.setState({data:sorted});
        }
    }
    handleSearch(){
        this.setState({costarrow:false});
        this.setState({leadarrow:false});
        this.setState({quantityarrow:false});
        this.setState({filterarrow:false});
        const Mincost = this.state.mincost;
        const Maxcost = this.state.maxcost;
        const Minlead = this.state.minlead;
        const Maxlead = this.state.maxlead;
        const Quantity = this.state.quantity;
        const Search = this.state.searchname;
        console.log(Search);
        if(!Search){
            toast.error('Please Select a Keyword');
        }
        else if(Search || ((Mincost&&Maxcost) && Quantity==="" && Minlead==="" && Maxlead==="") || (Quantity!=="" && Maxcost===""  && Minlead==="" && Mincost==="" && Maxlead==="") || ((Minlead&&Maxlead) && Quantity==="" && Mincost==="" && Maxcost==="")){
            axios.post(`${process.env.REACT_APP_API_URL}/searchproducts`,{mincost:Mincost,maxcost:Maxcost,quantity:Quantity,maxlead:Maxlead,minlead:Minlead,search:Search}).then(res=>{
                this.setState({data:res.data}); 
                // console.log(this.state.data);
            })
            .catch(err=>{
                console.log(err.response)
                toast.error(err.response.data.errors);
            }) 
        }
         else{
            toast.error('Please Select one fliter');
         }   
        };
    handleSubmit(){
        this.setState({costarrow:false});
        this.setState({leadarrow:false});
        this.setState({filterarrow:false});
        this.setState({quantityarrow:false});
        this.setState({textch:"Applying"});
        const Mincost = this.state.mincost;
        const Maxcost = this.state.maxcost;
        const Minlead = this.state.minlead;
        const Maxlead = this.state.maxlead;
        const Quantity = this.state.quantity;
        const Search = this.state.searchname;
        if( Maxcost==="" && Quantity==="" && Minlead==="" && Mincost==="" && Maxlead==="" && Search!==""){
            axios.post(`${process.env.REACT_APP_API_URL}/searchproducts`,{mincost:Mincost,maxcost:Maxcost,quantity:Quantity,maxlead:Maxlead,minlead:Minlead,search:Search}).then(res=>{
                this.setState({data:res.data}); 
                // console.log(this.state.data);
            })
            .catch(err=>{
                console.log(err.response)
                toast.error(err.response.data.errors);
            })
        }
        if (((Mincost&&Maxcost) && Quantity==="" && Minlead==="" && Maxlead==="") || (Quantity!=="" && Maxcost===""  && Minlead==="" && Mincost==="" && Maxlead==="") || ((Minlead&&Maxlead) && Quantity==="" && Mincost==="" && Maxcost==="")){
                axios.post(`${process.env.REACT_APP_API_URL}/filterproducts`, {mincost:Mincost,maxcost:Maxcost,quantity:Quantity,maxlead:Maxlead,minlead:Minlead,search:Search}).then(res => {
                    this.setState({data:res.data}); 
                    this.setState({textch:'Apply Filter'});
                })
                .catch(err => {
                console.log(err.response)
                toast.error(err.response.data.errors);
                this.setState({textch:'Apply Filter'});
                });
            } else {
            toast.error('Please Select one fliter');
            this.setState({textch:'Apply Filter'});
            }   
        }

    render() {
        return (
            <div>
                <ToastContainer/>
                <div class="line" style={{backgroundColor: "rgb(175, 178, 193)", height: "0.5vw",width:"100%"}}></div>
                <p style={{color: "rgb(18, 77, 81)", fontSize: "1.25em", padding: "1vw", margin: "2vw"}}>
                    <strong>Search&nbsp;/</strong>&nbsp;Search&nbsp;Buyer Requirement
                </p>
                <center>
                    <div className="container-fluid" style={{width: "100%", color: "rgb(18, 77, 81)", padding: "2vw 10vw",margin:"0px"}}>
                        
                        <button class="btn btn-raised button1" style={{borderRadius: "20px 0px 0px 20px", padding: "1vw", color: "rgb(18, 77, 81)", background: "rgb(255, 255, 255)", border: "2px solid rgb(18, 77, 81)", margin: "0.25vw", width: "30%"}}> Search Supplier Product </button>
                        <button class="btn btn-raised button1" style={{borderRadius: "0px 20px 20px 0px", padding: "1vw",  color: "rgb(18, 77, 81)", background: "rgb(253, 236, 148)", border: "2px solid rgb(18, 77, 81)", margin: "0.25vw", width: "30%"}}> Search Buyer Requirement </button> 
                    </div>
                </center>
                <div className="container" style={{ padding: "0px",width: "100%",textAlign: "center"}}>
                    <div style={{paddingLeft: "1rem", paddingRight: "1rem"}}>
                        <div className="card box-shadow" style={{borderRadius: "10px"}}>
                            <div className="row" style={{margin: "0",padding: "0",width: "100%"}}>
                                <div style={{width: "100%"}}>
                                    <h4 style={{color:"rgb(18, 77, 81)",textalign: "left", padding: "1.5rem"}}>Search Filters</h4>
                                </div>
                                <div className="row" style={{margin: "0",padding: "0",width: "100%",textAlign: "center"}}>
                                    <div className="col-lg-2 col-md-4 col-6 filteritem">
                                        Product <Fa.FaCaretUp/>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-6 filteritem">
                                        <div className={this.state.quantityarrow? "costup-inactive":"costup-active"}>
                                            <button class="button2" onClick={() => this.setQuantityArrow(this.state.quantityarrow)}> Quantity <Fa.FaCaretUp/> </button>
                                        </div>
                                        <div className={this.state.quantityarrow? "costdown-active":"costdown-inactive"}>
                                            <button class="button2" onClick={() => this.setQuantityArrow(this.state.quantityarrow)}> Quantity <Fa.FaCaretDown/> </button>
                                            <div class="card dropdown-close dropdown1 quantfix">
                                                <div style={{padding:"0.25vw"}}>
                                                    <ul>
                                                        <h6>Enter Quantity Required</h6>
                                                        <input placeholder="Enter Quantity" class="input1" onChange={(e)=>this.handleChange(e,'quantity')}/>
                                                        
                                                        <p></p>
                                                        <p></p>
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-6 filteritem">
                                    <div className={this.state.costarrow? "costup-inactive":"costup-active"}>
                                        <button class="button2" onClick={() => this.setCostArrow(this.state.costarrow)}> Cost <Fa.FaCaretUp/> </button>
                                    </div>    
                                    <div className={this.state.costarrow? "costdown-active":"costdown-inactive"}>
                                        <button class="button2" onClick={() => this.setCostArrow(this.state.costarrow)}> Cost <Fa.FaCaretDown/> </button>
                                        <div class="card dropdown-close dropdown1">
                                            <div style={{padding:"0.25vw"}}>
                                                <ul>
                                                    <h6>Minimum Cost</h6>
                                                    <input placeholder="Enter Minimum Cost" class="input1" onChange={(e)=>this.handleChange(e,'mincost')}/>
                                                    
                                                    <p></p>
                                                    <p></p>
                                                    <h6>Maximum Cost</h6>
                                                    <input placeholder="Enter Maximum cost" class="input1" onChange={(e)=>this.handleChange(e,'maxcost')}/>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                                                        </div>
                                    <div className="col-lg-2 col-md-4 col-6 filteritem">
                                        <div className={this.state.leadarrow? "costup-inactive":"costup-active"}>
                                            <button class="button2" onClick={() => this.setLeadArrow(this.state.leadarrow)}> Lead Time <Fa.FaCaretUp/> </button>
                                        </div>
                                        <div className={this.state.leadarrow? "costdown-active":"costdown-inactive"}>
                                            <button class="button2" onClick={() => this.setLeadArrow(this.state.leadarrow)}> Lead Time <Fa.FaCaretDown/> </button>
                                            <div class="card dropdown-close dropdown1 leadfix">
                                                <div style={{padding:"0.25vw"}}>
                                                    <ul>
                                                    <h6>Minimum Lead Time</h6>
                                                    <input placeholder="Enter Minimum Lead Time" class="input1" onChange={(e)=>this.handleChange(e,'minlead')}/>
                                                    
                                                    <p></p>
                                                    <p></p>
                                                    <h6>Maximum Lead Time</h6>
                                                    <input placeholder="Enter Maximum Lead Time" class="input1" onChange={(e)=>this.handleChange(e,'maxlead')}/>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        

                                    </div>
                                    <div className="col-lg-2 col-md-4 col-6 filteritem" style={{cursor:"pointer"}}>
                                        Rating <Fa.FaCaretUp/>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-6 filteritem" style={{cursor:"pointer"}}>
                                        Location <Fa.FaCaretUp/>
                                    </div>
                                    <div style={{padding: "1rem", width:"100%",textAlign:"right"}}>
                                        <button onClick={()=> this.handleSubmit()} class="btn btn-raised" style={{fontSize: "1rem", borderRadius: "20px", border: "2px solid rgb(18, 77, 81)", color: "rgb(18, 77, 81)", background: "rgb(255, 255, 255)", margin: "auto 1vw"}}>{this.state.textch}</button>
                                    </div>
                                    
                                </div>
                            </div>  
                        </div>
                        <div className="container" style={{ padding: "0px",width: "100%"}}>
                            <div style={{padding: "3rem"}}>
                                <div className="row" style={{margin: "0",padding: "0",width: "100%"}}>
                                    <div className="col-md-8 col-12" style={{width: "100%",padding: "7px"}}>
                                            <button className="button3"></button>
                                            <input id="keyword_search" placeholder="Search by keyword.." className="input2" onChange={(e)=>this.handleChange(e,'searchname')}/>
                                            <button className="button4" onClick={()=>this.handleSearch()}><Fa.FaSearch style={{fontSize: "1.2em", color: "rgb(18, 77, 81)"}}/> </button>
                                    </div>
                                    <div className="col-md-2 col-12" style={{padding:"5px"}}>
                                        <button style={{cursor:"not-allowed"}} class="btn" className="button5" >My Requirements</button>
                                    </div>
                                    <div className="col-md-2 col-12" style={{padding:"5px"}}>
                                        <button style={{cursor:"not-allowed"}} class="btn" className="button5" >Post Requirements</button>
                                        <br/>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                        <div>
                            <div  style={{textAlign:"left"}}>
                                    
                                <div style={{padding:"0.25vw"}}>
                                        Sort by
                                        <select class="form-control button6" onChange={(e)=>this.handleChange(e,'filter')}>
                                            <option selected>Quantity</option>
                                            <option>Cost</option>
                                            <option>Weight</option>
                                            <option>Lead Time</option>
                                        </select>
                                </div>
                                    
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="container-fluid" style={{ margin: "0px",padding: "0px",width: "100%",textAlign: "center"}}>
                    <div style={{padding:"4vw"}}>
                        <div className="row" style={{margin: "0",padding: "0",width: "100%"}}>
                        {this.state.data.map((item,index)=>{
                            return(
                                <div key = {index} className="col-lg-4 col-sm-6 col-12" style={{padding:"12px"}}>
                                    <this.CoustomCard
                                        Name = {item.buyer_name}
                                        quantity = {item.quantity}
                                        product = {item.product_name}
                                        productId = {item.product_id}
                                        leadtime = {item.lead_time}
                                        weight = {item.weight_gsm}
                                        price = {item.price_rs}
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
