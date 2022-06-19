
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import {Polo} from"./Polo"

import {Select} from "../Select/select"

export function Polopage() {
  const [data,setData] = useState([])
  
useEffect(() => {
    fetchData();
  },[]);

 
  const fetchData = async () => {
    const data = await fetch("https://asosmenbackend.herokuapp.com/polo").then((d) => d.json());
    setData(data)
  };
  return (
    <div className="App">
      <Select/>
      <div id="box">
        
        {data.map((e) => {
          return (
           <Link to = {`/polo/${e._id}`}> <Polo
              
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



