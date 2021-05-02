import React from "react";
import axios from "axios";
import {Button,Card} from "react-bootstrap";
import "../styles/cards.css";    
function UserDashboard(){
    async function openProfile(){
        window.location.href="/profile";
    }
    async function openPostMed(){
        window.location.href="/post-medicine";
    }
    async function openTable(){
        window.location.href="/fetch-medicine";
    }
    async function searchMed(){
        window.location.href="/search-medicine";
    }
    async function logOut(){
        window.location.href="/";
        console.log("logout");
    }
    var cardbtn={
         backgroundColor:"#62B1F6",
            border:"none",
            margin:"1 1rem",
            borderRadius:"3rem",
            padding:".5rem 1rem"    
    }
    return(
        <>
             <h1 class="user">USER</h1>
        <div class="cards">
        <div class="card1">
        <Card.Header>cards</Card.Header>
        <hr/>
        <div><img src="./images/profile.svg" style={{width:"80%",margin:"1rem"}}></img></div>
        <center><Button onClick={openProfile} style={cardbtn}>profile</Button></center>
        </div>

        <div class="card2">
        <Card.Header>cards</Card.Header>
        <hr/>
        <div><img src="./images/imageupload.svg" style={{width:"80%",margin:"1rem"}}></img></div>
        <center><Button style={cardbtn} onClick={openPostMed}>Post Medicine</Button></center>
        </div>
        <div class="card3">
        <Card.Header>cards</Card.Header>
        <hr/>
        <div><img src="./images/manager.svg" style={{width:"55%",margin:"1rem"}}></img></div>
        <center><Button style={cardbtn} onClick={openTable}>Post Manager</Button></center>
        </div>
        <div class="card4">
        <Card.Header>cards</Card.Header>
        <hr/>
        <div><img src="./images/search.svg" style={{width:"80%",margin:"1rem"}}></img></div>
        <center><Button style={cardbtn} onClick={searchMed}>Search</Button></center>
       </div>
       <div class="card4">
        <Card.Header>cards</Card.Header>
        <hr/>
        <div><img src="./images/search.svg" style={{width:"80%",margin:"1rem"}}></img></div>
        {/* <form action="http://localhost:7000/react/logout" method="post"><center><Button style={cardbtn} type="submit" onClick={logOut}>logout</Button></center></form> */}
        <center><Button style={cardbtn} onClick={logOut}>logout</Button></center>
       </div>
        </div>
      </>
    )
}
export default UserDashboard;