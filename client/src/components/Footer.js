import React from 'react'

function Footer() {
    return (
        <div>
            <div>
                <div id="footer" style={{backgroundColor: "rgb(18, 77, 81)", color: "white", padding: "5%"}}>
                    <div className="container">
                        <div className="row"><div className="col-4">
                            <strong style={{fontSize: "3vw"}}>Get in Touch!</strong><br/><br/><br/>
                        </div>
                        <div className="col-2" style={{fontSize: "1.5vw"}}>Address</div>
                        <div className="col-3" style={{fontSize: "1.5vw"}}>Contact</div>
                        <div className="col-3" style={{fontSize: "1.5vw"}}>Follow</div>
                    </div>
                    <div className="row" style={{marginTop: "-60px"}}><div className="col-4" style={{fontSize: "2vw"}}></div>
                    <a id="mail" href="mailto:support@pretva.com" style={{color: "rgb(180, 194, 196)", display: "none"}}><em>Share by email</em></a>
                    <div className="col-3" style={{fontSize: "1.5vw"}}>
                        <i className="fab fa-facebook-f" aria-hidden="true" style={{cursor: "pointer"}}></i>
                        <i className="fab fa-instagram" aria-hidden="true" style={{cursor: "pointer", margiLeft: "2vw"}}></i>
                        <i className="fab fa-linkedin-in" aria-hidden="true" style={{cursor: "pointer", margiLeft: "2vw"}}></i>
                    </div>
                </div>
            </div>
        </div>
        <div style={{backgroundColor: "rgb(220, 220, 220)", padding: "1%"}}>
            <div className="container"><div className="row"><div className="col-4" style={{fontSize: "1vw"}}>
                <i className="fa fa-copyright fa-lg" aria-hidden="true"></i>2020 by Usha Electricals</div>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Footer
