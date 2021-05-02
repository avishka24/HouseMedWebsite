import React,{useState} from "react";
import {Form,Button} from "react-bootstrap";
import axios from "axios";

function PostMed(){
    var [medObj,setMedObj] = useState({
        uid : "",
        medname : "",
        company : "",
        expdate : "",
        quantity : "",
        units : "",
        city : "",
        myfilee : null,
      });
      var doUpdate = (event)=>{
        var {name,value} = event.target;
        setMedObj({
          ...medObj,[name]:value,
        });
      }
      var [fileeObj,setFileObj] = useState("./images/imageupload.svg");
      function onPicChange(e){
        setMedObj({...medObj,["myfile"]:e.target.files[0]});
          setFileObj(URL.createObjectURL(e.target.files[0]))
      }
      var [responseMsg,setResponse] = useState("*");
      /*do save post*/
      async function saveMed(){
        var url = "/api/react/profile/medicine/save-medicine";
        
        /**pic uploading**/
        var formData = new FormData();
        for(var x in medObj){
          formData.append(x,medObj[x]);
        }
        var response = await axios.post(url,formData,{headers:{'Content-Type':'multipart/form-data'}});
        alert(JSON.stringify(response.data));
        setResponse(response.msg);
      }
    var btn={
      backgroundColor:"#62B1F6",
      border:"none",
      margin:"0 .3rem"
    }
    return(
        <>
          <Form class="form" method="POST">
        <div class="form-div">
        <div class="img-div">
        <Form.Group>
        <center><img src={fileeObj} class="image"></img></center>
    <center><Form.File id="exampleFormControlFile1" label="pic of medicine" onChange={onPicChange} /></center>
  </Form.Group>
  </div>
  <div class="input-div">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>uid</Form.Label>
    <Form.Control type="text" placeholder="user id" name="uid" value={medObj.uid} onChange={doUpdate}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Medicine name</Form.Label>
    <Form.Control type="text" placeholder="user name" name="medname" onChange={doUpdate} value={medObj.medname}/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>company</Form.Label>
    <Form.Control type="text" placeholder="e.g. 999-999-9999" name="company" onChange={doUpdate} value={medObj.company}/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>exp date</Form.Label>
    <Form.Control type="date" placeholder="city" name="expdate" onChange={doUpdate} value={medObj.expdate}/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>quantity</Form.Label>
    <Form.Control type="number" placeholder="quantity" name="quantity" onChange={doUpdate} value={medObj.quantity}/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>units</Form.Label>
    <Form.Control type="number" placeholder="units" name="units" onChange={doUpdate} value={medObj.units}/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>city</Form.Label>
    <Form.Control type="text" placeholder="city" name="city" onChange={doUpdate} value={medObj.city}/>
  </Form.Group>
  
  <Button type="button" onClick={saveMed} style={btn}>Post</Button>
  </div>
  </div>
</Form>
        </>
    )
}
export default PostMed;