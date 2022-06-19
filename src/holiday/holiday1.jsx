
import { useEffect,useState } from "react";
import { Select } from "../Select/select";

import {Holiday} from"./Holiday"

export function Holidaypage() {
  const [data,setData] = useState([])
 
  useEffect(() => {
    fetchData();
  }, []);

  

  const fetchData = async () => {
    const data = await fetch("https://asosmenbackend.herokuapp.com/holiday").then((d) => d.json());
    setData(data)
    
  };
  return (
    <div className="App">
       <Select/>
      <div id="box">
        {data.map((e) => {
          return (
            <Holiday
              
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



