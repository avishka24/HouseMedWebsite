import React from "react";
import {Switch,Route} from "react-router-dom";
import UserDashboard from "./Components/UserDashboard";
import RouterNavBar from "./RouterNavBar";
import UserProfile from "./Components/UserProfile";
import PostMed from "./Components/PostMed";
import Footer from "./Components/Footer";
import FetchMed from "./Components/FetchMed";
import SearchMed from "./Components/SearchMed";
import FrontPage from "./Components/FrontPage";
// import Services from "./Components/Services";
function Routerr(){
    return(
        <>        
        <Switch>
            <Route path="/" exact component={FrontPage}></Route>
            <Route path="/user-dashboard" exact component={UserDashboard}></Route>
            <Route path="/profile" exact component={UserProfile}></Route>
            <Route path="/post-medicine" exact component={PostMed}></Route>
            <Route path="/fetch-medicine" exact component={FetchMed}></Route>
            <Route path="/search-medicine" exact component={SearchMed}></Route>
        </Switch>
        </> 
    )
}
// function frontPage(){
//     return(
//         <>
//         <FrontPage/>
//        </>
//     )
// }
export default Routerr;