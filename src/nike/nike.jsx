// import logo from './logo.svg';
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";

import "./nike.css";
import {Nike} from"./Nikepage"
import { Select } from "../Select/select";

export function Nikepage() {
  const [data,setData] = useState([])
 
  useEffect(() => {
    fetchData();
  }, []);

 

  const fetchData = async () => {
    const data = await fetch("https://asosmenbackend.herokuapp.com/nike").then((d) => d.json());
    setData(data)
    console.log(data);
  };
  return (
    <div className="App">
      
      <Select/>
      <div id="box">
        {data.map((e) => {
          return (
            <Link to = {`/nike/${e._id}`}><Nike
              
              image={e.image}
              description={e.Description}
              price={e.Price}
            />
            </Link>
          );
        })}
      </div>
      
    </div>
  );
}


