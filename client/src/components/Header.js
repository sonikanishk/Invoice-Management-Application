import './Header.css';
import Logo  from './usha1.png';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      
      <div className="container-fluid biggeronesearch" style={{padding: "0px",backgroundColor: "white"}}>
      <div className="row d-flex justify-content-between" style={{width: "100%",marginLeft: "0px",marginRight: "0px"}}>
        <div className="col-lg-3">
          <img src={Logo} alt="pretVA" style={{width: "15vw", padding: "1vw"}}></img>
        </div>
        <div className="lead col-lg-6 tabs" style={{marginTop: "2vw"}}>
            <div className="row" style={{width: "100%",marginLeft: "0px",marginRight: "0px",justifyContent: "space-evenly"}}>
              <a href="/" style={{color: "black", fontSize: "1rem"}}>About Us</a>
              <a href="/" style={{color: "black", fontSize: "1rem"}}>Services</a>
              <a href="/search/suppliers/guest" style={{color: "black", fontSize: "1rem"}}>Search</a>
              <a data-toggle="modal" data-target="#feedbackSupport" href="/" style={{color: "black", fontSize: "1rem"}}>Feedback &amp; Support</a>
          </div>
          {/* <a href="/" style={{color: "black", fontSize: "1vw"}}>About Us</a>
          <a href="/" style={{color: "black", fontSize: "1vw"}}>Services</a>
          <a href="/search/suppliers/guest" style={{color: "black", fontSize: "1vw"}}>Search</a>
          <a data-toggle="modal" data-target="#feedbackSupport" href="/" style={{color: "black", fontSize: "1vw"}}>Feedback &amp; Support</a> */}
        </div>
        <div className="col-lg-3 loginreg" style={{padding: "1.8vw"}}>
          <div className="row" style={{width: "100%",marginLeft: "0px",marginRight: "0px",justifyContent: "flex-end"}}>
            <a className="btn btn-primary btn-raised" href="/login" style={{border: "1px solid", backgroundColor: "white", color: "rgb(18, 77, 81)", borderRadius: "10px", boxShadow: "0px 0px", padding: "3%", fontSize: "1rem", width: "7vw"}}> Login </a>
            <a className="btn btn-primary btn-raised" href="/signup" style={{border: "1px solid", backgroundColor: "white", color: "rgb(18, 77, 81)", borderRadius: "10px", boxShadow: "0px 0px", padding: "3%", fontSize: "1rem", width: "7vw",marginLeft: "10px"}}> Register </a>
          </div>
        </div>
        
      </div>
      </div>
      <div className="container-fluid smalleronesearch" style={{padding: "0px",backgroundColor: "white"}}>
      <div className="row d-flex justify-content-between" style={{width: "100%",marginLeft: "0px",marginRight: "0px"}}>
        <div className="col-6">
          <img classname = "logoo" src={Logo} alt="pretVA" style={{width: "12rem", padding: "1vw"}}></img>
        </div>
        
        <Navbar/>
      </div>
      </div>
      
    </div>
  );
}

export default App;
