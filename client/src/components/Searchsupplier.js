import React, { Component } from 'react'
import './Search.css'
class SearchSupplier extends Component {
    render() {
        return (
            <div>
                <div class="line" style={{backgroundColor: "rgb(175, 178, 193)", height: "0.5vw",width:"100%"}}></div>
                <p style={{color: "rgb(18, 77, 81)", fontSize: "1.25em", padding: "1vw", margin: "2vw"}}>
                    <strong>Search&nbsp;/</strong>&nbsp;Search&nbsp;Supplier Requirement
                </p>
                <center>
                    <div style={{width: "100%", color: "rgb(18, 77, 81)", padding: "2vw 10vw"}}>
                        <button class="btn btn-raised" style={{borderRadius: "20px 0px 0px 20px", padding: "1vw", fontSize: "1.2rem", color: "rgb(18, 77, 81)", background: "rgb(255, 255, 255)", border: "2px solid rgb(18, 77, 81)", margin: "0.25vw", width: "30%"}}>Search Supplier Product</button>
                        <button class="btn btn-raised" style={{borderRadius: "0px 20px 20px 0px", padding: "1vw", fontSize: "1.2rem", color: "rgb(18, 77, 81)", background: "rgb(255, 255, 255)", border: "2px solid rgb(18, 77, 81)", margin: "0.25vw", width: "30%"}}>Search Buyer Requirement</button>
                    </div>
                </center>
            </div>
        )
    }
}

export default SearchSupplier;
