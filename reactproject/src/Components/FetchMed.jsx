import React,{useEffect, useState} from "react";
import {Container,Row,Button,Table, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Loader from "./Loader";

function FetchMed(){
    var [medObj,setMedObj] = useState({
        uid : ""
});
var [loading,setLoading]=useState();

      var doUpdate=(e)=>{
          var {name,value} = e.target;
          setMedObj({
              ...medObj,
              [name]:value
          })
      }
    var [jsonAry, fillJsonArray] = useState([{"uid":""}]);
    useEffect(async()=>{
      setTimeout(async()=>{
        setLoading(true);
        await doFetch();
      },1000)
    },[])
    async function doFetch(){
      
      var url = "/api/react/profile/medicine/fetchMed";
      var response = await axios.post(url,medObj);
      fillJsonArray(response.data);
      console.log(response.data);
    fillJsonArray(response.data);
    }
   
    async function doDelete(uid,medname){
      var url= "/api/react/profile/medicine/delete-medicine/"+uid+"/"+medname;
      var response = await axios.post(url,medObj);
      // alert(medObj.data);
      await alert(JSON.stringify(response.data));
    }
   var btn={
     backgroundColor:"#62B1F6",
     border:"none",
     margin:"0 .3rem"
   }
   var row={
     boxShadow:"2px 2px 2px 2px rgba(0,0,0,0.1)",
     margin:"4rem",
     padding:".5rem"
   }
   var tablee={
     width:"100%"
   }
    return(
        <>
       
        <Form>
        <Form.Group controlId="formBasicPassword">
        {/* <Form.Label>uid</Form.Label> */}
        <p><Form.Control type="text" placeholder="enter uid" name="uid" onChange={doUpdate} value={medObj.address} style={{width:"20%",margin:"1rem auto",display:"inline-block"}}/>
        <Button type="button" onClick={doFetch} style={{textAlign:"center"}} style={btn}>fetch</Button></p>
        </Form.Group>
        </Form>
        {loading ?(
        <Container>
        <Row>
         <Table style={tablee}>
              <thead>             
                  <tr>
                  <th>Uid</th>
                    <th>medicine name</th>
                    <th>company</th>
                    <th>exp date</th>
                    <th>quantity</th>
                    <th>units</th>
                    <th>city</th>
                    <th>picname</th>
                    <th>delete</th>
                  </tr>                  
                </thead>
                {
                  jsonAry.map((obj) => {
                   return (
                   <tr style={row}>
                    <td>{obj.uid}</td>
                    <td>{obj.medname}</td>
                    <td>{obj.company}</td>
                    <td> {obj.expdate}</td>
                    <td> {obj.quantity}</td>
                    <td> {obj.units}</td>
                    <td> {obj.city}</td>
                    <td> {obj.mpic}</td>
                     <td><Button style={btn} onClick={()=>doDelete(obj.uid,obj.medname)}>Delist</Button></td>
                    </tr>
              );
            })}
          </Table>
        </Row>
      </Container>)
      :
      (
        <center>
         <Loader/>
        </center>
      )
        }
        </>
    )
}
export default FetchMed;