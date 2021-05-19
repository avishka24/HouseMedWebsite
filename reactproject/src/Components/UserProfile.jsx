import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "../styles/userProfile.css";

function UserProfile() {
  var [userrObj, setUserrObj] = useState({
    uid: "",
    uname: "",
    mobile: "",
    city: "",
    address: "",
    myfile: null,
  });
  var doUpdate = (event) => {
    var { name, value } = event.target;
    setUserrObj({
      ...userrObj,
      [name]: value,
    });
  };
  var [fileObj, setFileObj] = useState("./images/imageupload.svg");
  function onPicChange(e) {
    setUserrObj({ ...userrObj, ["myfile"]: e.target.files[0] });
    setFileObj(URL.createObjectURL(e.target.files[0]));
  }
  var [responseMsg, setResponse] = useState("*");
  /*do save post*/
  async function doSave() {
    var url = "http://localhost:7000/react/profile/save-profile";

    /**pic uploading**/
    var formData = new FormData();
    for (var x in userrObj) {
      formData.append(x, userrObj[x]);
    }
    var response = await axios.post(url, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    alert(JSON.stringify(response.data));
    setResponse(response.msg);
  }
  /*do update post */
  async function doUpdatebtn() {
    var url = "http://localhost:7000/react/profile/update-profile";

    var response = await axios.post(url, userrObj);
    alert(JSON.stringify(response.data));
    setResponse(response.data.msg);
  }
  var btn = {
    backgroundColor: "#62B1F6",
    border: "none",
    margin: "0 .3rem",
  };
  return (
    <>
      <Form className="form" method="POST">
        <div className="form-div">
          <div className="img-div">
            <Form.Group>
              <center>
                <img src={fileObj} className="image" alt="userProfile"></img>
              </center>
              <center>
                <Form.File
                  id="exampleFormControlFile1"
                  label="Id proof"
                  onChange={onPicChange}
                />
              </center>
            </Form.Group>
          </div>
          <div className="input-div">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>uid</Form.Label>
              <Form.Control
                type="text"
                placeholder="user id"
                name="uid"
                value={userrObj.uid}
                onChange={doUpdate}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>name</Form.Label>
              <Form.Control
                type="text"
                placeholder="user name"
                name="uname"
                onChange={doUpdate}
                value={userrObj.uname}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>mobile</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. 999-999-9999"
                name="mobile"
                onChange={doUpdate}
                value={userrObj.mobile}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>city</Form.Label>
              <Form.Control
                type="text"
                placeholder="city"
                name="city"
                onChange={doUpdate}
                value={userrObj.city}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>address</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. Bay Area ,san francisco,CA"
                name="address"
                onChange={doUpdate}
                value={userrObj.address}
              />
            </Form.Group>
            <Button type="button" onClick={doSave} style={btn}>
              save
            </Button>
            &nbsp;&nbsp;
            <Button type="button" onClick={doUpdatebtn} style={btn}>
              update
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
}
export default UserProfile;
