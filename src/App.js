
import './App.css';

import  {Routes,Route} from "react-router-dom"
import {Menspage} from "../src/mens_main/src/components/men";
import {Landingpage} from "./homepage/landing"
import {Womenspage} from "../src/mens_main/src/components/women"
import {Bergpage} from "./bergpage/bergpage"
import {Holidaypage} from "./holiday/holiday1"
import {Nikepage} from "./nike/nike"
import {Polopage} from "./polo/polopage"
import {Navbar} from "./homepage/components/Navbar"
import {Footer} from "./homepage/components/Footer"
import {WomenPage} from "./womens/womenpage"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Landingpage/>}></Route>
        <Route path = "/mens" element = {<Menspage/>}></Route>
        <Route path = "/berghaus" element = {<Bergpage/>}></Route>
        <Route path = "/holiday" element = {<Holidaypage/>}></Route>
        <Route path = "/womens" element = {<Womenspage/>}></Route>
        <Route path = "/nike" element = {<Nikepage/>}></Route>
        <Route path = "/polo" element = {<Polopage/>}></Route>
        <Route path = "/women" element = {<WomenPage/>}></Route>
      </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
