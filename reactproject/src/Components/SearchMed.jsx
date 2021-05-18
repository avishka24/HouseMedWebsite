import React, { useState,useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button,Card,Col} from "react-bootstrap";

function MedicineFinder() {
  //all cities
    var [jsonAryCity,filljsonAryCity]=useState(["city"]);
 
    var[mobile,setmobile]=useState("");
    //Medicines according to city selected
    var [medicineObj,fillMedicine]=useState([]);
   //Provider on basis of city and medicine selected
    var [providerObj,fillProviderObj]=useState([]);

    var[finder,fetchfinder]=useState(
        {
            cityy:"",
            medname:""
        }
    )

    var doUpdate = (event) => {
        var { name, value } = event.target;
        fetchfinder({
          ...finder,
          [name]: value,
        });
      };

//FETCH ALL DISTINCT CITIES
useEffect(async() => {
    var url="http://localhost:7000/react/profile/medicine/fetch-all";
    var response=await axios.post(url);
    filljsonAryCity(response.data);
}, [])

//fetching medicines acc to city
async function doFill(e)
{    
    doUpdate(e);
    var url="http://localhost:7000/react/profile/medicine/fetch-medicine/"+e.target.value;
    var response=await axios.post(url);
    fillMedicine(response.data);
    //alert(JSON.stringify(response.data));
}

//fetching all details in card
async function showCard(finder)
{
    
    var url="http://localhost:7000/react/profile/medicine/fetch-provider/"+finder.cityy+"/"+finder.medname;
    var response=await axios.post(url);
    fillProviderObj(response.data);
    //alert(JSON.stringify(response.data));
}

//fetching mobile number
async function doFetchProviderDetails(obj){
    // alert(JSON.stringify(obj));
    var url="http://localhost:7000/react/profile/fetch-details";
    var response=await axios.post(url,obj);
    // alert(JSON.stringify(response.data));
    var {mobile}=response.data[0];
    alert(mobile);
    setmobile(mobile);
}
var btn={
  backgroundColor:"#62B1F6",
  border:"none",
  margin:"0 .3rem"
}
var picture;
    return (
        <div><center>

    {/* city */}
    City:<select id='template-select' value={finder.cityy} name="cityy"  onChange={doFill}>
      <option>Select City</option>
      {jsonAryCity.map((obj)=>{
          return (
              <option value={obj}>{obj}</option>
          )
      })}
    </select>
    &nbsp;&nbsp;
   {/*medicine */} 

    Medicine:
    <select id='template-select' value={finder.medname} name="medname"  onChange={doUpdate} >
      <option>Select Medicine</option>
      {medicineObj.map((obj)=>{
          return (
              <option value={obj}>{obj}</option>
          )
      })}
    </select>
    <br>
    </br>
   
    {/* FIND MEDICINE PROVIDERS */}

    <br></br>
    <Button style={btn} onClick={()=>showCard(finder)}>Find Medicine Providers</Button>
    </center>
    
    
      {/*SHOW IN CARDS*/}

    {
    providerObj.map((obj) => {
              return (
                <Col md={2}>
                <Card style={{width:"20rem",height:"27rem",margin:"2.7rem"}}>
                  <Card.Body>   
                    <Card.Title>
                    <noscript>{picture="/uploads/"+obj.mpic}</noscript>
                      <p><img src={picture} style={{width:"100%",height:"11rem"}}></img></p> </Card.Title>
                    <Card.Text>                    
                       <p>Uid : {obj.uid}</p>
                      <p>Medicine:{obj.medname}</p> 
                      <p>Company:{obj.company}</p>
                      <p>Expiry Date:{obj.expdate}</p> 
                    </Card.Text>
                        
             <Button style={btn} onClick={()=>doFetchProviderDetails(obj)}>Show  Details</Button>

                  </Card.Body>
                </Card>
                </Col>
              );
            })}
    </div>
    )
}

export default MedicineFinder;
