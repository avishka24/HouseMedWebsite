import React,{useState} from "react";
import {Nav,Navbar,Button,Form,Modal} from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function RouterNavBar(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showw, setShoww] = useState(false);
    const handleShoww = () => setShoww(true);
    const handleClosee = () => setShoww(false);

    var [userObj,setUserObj] = useState({
        uid : "",
        email : "",
        pwd : "",
        mobile : ""
    })
    var doUpdate = (e)=>{
        var {name,value} = e.target;
        setUserObj({
            ...userObj,[name]:value
        })
    }
    async function doSavePost(){
        var url = "/api/react/sign-up";
        var response = await axios.post(url,userObj);
        alert(JSON.stringify(response.data));
    }
    async function doLogin(){
        var url = "/api/react/log-in";
        var response = await axios.post(url,userObj);
        alert(JSON.stringify(response.data));
        window.location.href="/user-dashboard";
    }
    var navbarr={
        color:"#463333",
        boxShadow:"8px 8px 8px rgba(0,0,0,0.1)",
        height:"4.4rem",
        display:"flex",
        alignItems : "center",
        justifyContent : "space-between"
    }
    var navlogo={
        // marginLeft:"2.7rem",
        // marginRight:"26rem",
        fontWeight:"bolder",
        color:"#b7b7b7",
        fontFamily:"sans-serif"
    }
    var modalbtn={
        backgroundColor:"#62B1F6",
        border:"none",
        color:"#FFF"
    }
    var loginbtn={
        color:"#fff",
        padding:"0.5rem 2rem",
        borderRadius:"1.6rem",
        backgroundColor:"#62B1F6"
    }
    var navlink={
       marginRight:"2rem",
       color:"#b7b7b7"
    }
return(
 <>
   <Navbar style={navbarr}>
   {/* <Navbar.Brand href="/" style={navlogo}>HOUSE<span style={{color:"#1976D2",fontFamily:"'Montserrat', sans-serif"}}>MED</span></Navbar.Brand> */}
   <Navbar.Brand href="/">
   <svg width="200" height="25" viewBox="0 0 288 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M64.8203 40H57.7891V25.375H44.0781V40H37.0469V5.875H44.0781V19.7031H57.7891V5.875H64.8203V40ZM99.0156 23.7109C99.0156 27.0703 98.4219 30.0156 97.2344 32.5469C96.0469 35.0781 94.3438 37.0312 92.125 38.4062C89.9219 39.7812 87.3906 40.4688 84.5312 40.4688C81.7031 40.4688 79.1797 39.7891 76.9609 38.4297C74.7422 37.0703 73.0234 35.1328 71.8047 32.6172C70.5859 30.0859 69.9688 27.1797 69.9531 23.8984V22.2109C69.9531 18.8516 70.5547 15.8984 71.7578 13.3516C72.9766 10.7891 74.6875 8.82812 76.8906 7.46875C79.1094 6.09375 81.6406 5.40625 84.4844 5.40625C87.3281 5.40625 89.8516 6.09375 92.0547 7.46875C94.2734 8.82812 95.9844 10.7891 97.1875 13.3516C98.4062 15.8984 99.0156 18.8438 99.0156 22.1875V23.7109ZM91.8906 22.1641C91.8906 18.5859 91.25 15.8672 89.9688 14.0078C88.6875 12.1484 86.8594 11.2188 84.4844 11.2188C82.125 11.2188 80.3047 12.1406 79.0234 13.9844C77.7422 15.8125 77.0938 18.5 77.0781 22.0469V23.7109C77.0781 27.1953 77.7188 29.8984 79 31.8203C80.2812 33.7422 82.125 34.7031 84.5312 34.7031C86.8906 34.7031 88.7031 33.7812 89.9688 31.9375C91.2344 30.0781 91.875 27.375 91.8906 23.8281V22.1641ZM129.953 5.875V28.3516C129.953 32.0859 128.781 35.0391 126.438 37.2109C124.109 39.3828 120.922 40.4688 116.875 40.4688C112.891 40.4688 109.727 39.4141 107.383 37.3047C105.039 35.1953 103.844 32.2969 103.797 28.6094V5.875H110.828V28.3984C110.828 30.6328 111.359 32.2656 112.422 33.2969C113.5 34.3125 114.984 34.8203 116.875 34.8203C120.828 34.8203 122.836 32.7422 122.898 28.5859V5.875H129.953ZM153.414 31.0469C153.414 29.7188 152.945 28.7031 152.008 28C151.07 27.2812 149.383 26.5312 146.945 25.75C144.508 24.9531 142.578 24.1719 141.156 23.4062C137.281 21.3125 135.344 18.4922 135.344 14.9453C135.344 13.1016 135.859 11.4609 136.891 10.0234C137.938 8.57031 139.43 7.4375 141.367 6.625C143.32 5.8125 145.508 5.40625 147.93 5.40625C150.367 5.40625 152.539 5.85156 154.445 6.74219C156.352 7.61719 157.828 8.85937 158.875 10.4688C159.938 12.0781 160.469 13.9062 160.469 15.9531H153.438C153.438 14.3906 152.945 13.1797 151.961 12.3203C150.977 11.4453 149.594 11.0078 147.812 11.0078C146.094 11.0078 144.758 11.375 143.805 12.1094C142.852 12.8281 142.375 13.7812 142.375 14.9688C142.375 16.0781 142.93 17.0078 144.039 17.7578C145.164 18.5078 146.812 19.2109 148.984 19.8672C152.984 21.0703 155.898 22.5625 157.727 24.3438C159.555 26.125 160.469 28.3438 160.469 31C160.469 33.9531 159.352 36.2734 157.117 37.9609C154.883 39.6328 151.875 40.4688 148.094 40.4688C145.469 40.4688 143.078 39.9922 140.922 39.0391C138.766 38.0703 137.117 36.75 135.977 35.0781C134.852 33.4062 134.289 31.4688 134.289 29.2656H141.344C141.344 33.0312 143.594 34.9141 148.094 34.9141C149.766 34.9141 151.07 34.5781 152.008 33.9062C152.945 33.2188 153.414 32.2656 153.414 31.0469ZM185.781 25.2109H172.281V34.3516H188.125V40H165.25V5.875H188.078V11.5703H172.281V19.7031H185.781V25.2109Z" fill="#B7B7B7"/>
<path d="M198.977 5.875L210.133 33.7188L221.289 5.875H227.125V40H222.625V26.7109L223.047 12.3672L211.844 40H208.398L197.219 12.4375L197.664 26.7109V40H193.164V5.875H198.977ZM254.359 24.2266H239.57V36.3203H256.75V40H235.07V5.875H256.516V9.57812H239.57V20.5469H254.359V24.2266ZM262.352 40V5.875H271.984C274.953 5.875 277.578 6.53125 279.859 7.84375C282.141 9.15625 283.898 11.0234 285.133 13.4453C286.383 15.8672 287.016 18.6484 287.031 21.7891V23.9688C287.031 27.1875 286.406 30.0078 285.156 32.4297C283.922 34.8516 282.148 36.7109 279.836 38.0078C277.539 39.3047 274.859 39.9688 271.797 40H262.352ZM266.852 9.57812V36.3203H271.586C275.055 36.3203 277.75 35.2422 279.672 33.0859C281.609 30.9297 282.578 27.8594 282.578 23.875V21.8828C282.578 18.0078 281.664 15 279.836 12.8594C278.023 10.7031 275.445 9.60937 272.102 9.57812H266.852Z" fill="#1976D2"/>
<path d="M30.1972 12.7932C31.2821 10.8969 31.6072 8.62174 31.1017 6.46475C30.5961 4.30777 29.3009 2.44423 27.4989 1.28122V1.28122C25.6906 0.129282 23.5264 -0.225411 21.4791 0.294651C19.4317 0.814712 17.6676 2.16726 16.5721 4.05682L8.87104 17.4285L22.4961 26.1649L30.1972 12.7932Z" fill="#3F3D56"/>
<path d="M15.4279 38.4375L22.918 25.4321L9.29297 16.6957L1.80283 29.7011C0.717916 31.5975 0.392751 33.8726 0.898312 36.0296C1.40387 38.1866 2.69907 40.0501 4.50105 41.2131V41.2131C6.3094 42.3651 8.47365 42.7197 10.521 42.1997C12.5683 41.6796 14.3324 40.3271 15.4279 38.4375V38.4375Z" fill="#62B1F6"/>
</svg>
   </Navbar.Brand>
   

   <Nav class="mr-4 d-flex">
   {/* <Nav.Link href="/" style={navlink}>Home</Nav.Link> */}
   <Nav.Link href="" onClick={handleShow} style={navlink}>Signup</Nav.Link>
   <Nav.Link href="" onClick={handleShoww} style={loginbtn}>Login</Nav.Link>
   </Nav>
   </Navbar>
   {/* ******SIGNUP MODAL******* */}
   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Form.Text className="text-muted">
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We'll never share your information with anyone else.
        </Form.Text>
        <Modal.Body>
        <Form method="post" action="/api/react/sign-up"> 
        <Form.Group controlId="formBasicUid">
        <Form.Label>User name</Form.Label>
        <Form.Control type="text" name="uid" value={userObj.uid} placeholder="Enter user name" onChange={doUpdate}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={userObj.email} placeholder="Enter email" onChange={doUpdate} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="pwd" value={userObj.pwd} placeholder="Password" onChange={doUpdate} />
        </Form.Group>
        <Form.Group controlId="formBasicMobile">
        <Form.Label>Mobile number</Form.Label>
        <Form.Control type="text" name="mobile" value={userObj.mobile} placeholder="Enter Mobile" onChange={doUpdate} />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button type="button" onClick={doSavePost} style={modalbtn}>
        Signup
        </Button>
        </Form>
        </Modal.Body>
    </Modal>
        {/* *********SIGNUP MODAL************ */}

        {/* ******LOGIN MODAL******* */}
    <Modal show={showw} onHide={handleClosee}>
        <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Form.Text className="text-muted">
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login with your registered data..
        </Form.Text>
        <Modal.Body>
        <Form method="post" action="http://localhost:7000/react/log-in"> 
         <center><img src="./images/user.svg" style={{width:"30%",textAlign:"center"}}></img></center>
        <Form.Group controlId="formBasicUid">
        <Form.Label>User name</Form.Label>
        <Form.Control type="text" name="uid" value={userObj.uid} placeholder="Enter user name" onChange={doUpdate} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="pwd" value={userObj.pwd} placeholder="Password" onChange={doUpdate} />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me" />
        {/* <a href="#">Forgot password?</a> */}
        </Form.Group>
        <Button type="button" onClick={doLogin} style={modalbtn}>
        Login
        </Button>
        </Form>
        </Modal.Body>
    </Modal>
        {/* *********LOGIN MODAL************ */}
 </>
    )
}

export default RouterNavBar;