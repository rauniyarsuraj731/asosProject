
import { useEffect,useState } from "react";
import "./Women.css"
import {Women} from"./Women"

import {Select} from "../Select/select"

export function WomenPage() {
  const [data,setData] = useState([])
  
useEffect(() => {
    fetchData();
  },[]);

 

  const fetchData = async () => {
    const data = await fetch("https://asosbackend.herokuapp.com/women").then((d) => d.json());
    setData(data)
  };
  return (
    <div className="App">
        <Select/>
    
      
      <div id="box">
        
        {data.map((e) => {
          return (
            <Women
              
              image={e.image}
              description={e.Description}
              price={e.Price}
            />
            
          );
        })}
      </div>
      
    </div>
  );
}