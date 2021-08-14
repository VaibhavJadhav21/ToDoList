
import React from 'react';



import { useState } from 'react';

const Tdlist = () => {


    const [inputData, setinputData] = useState("");
    const [items, setitems] = useState([]);

    const addItem=()=>{
        if(!inputData){

        }else{
            setitems(()=>{
                return[...items,inputData];
            });
            setinputData("");
        }
    }



    
    const delItems=(index)=>{
        console.log("index");
        const updateditems = items.filter((elem,ind)=>{
            return ind !== index;
        });
        setitems(updateditems);
    }


    return (
        <>
        <div className="head">
           <h1>To-Do List App</h1>
           </div>
           <div className="inp"> 
           <input  onChange={(e)=>{
            setinputData(e.target.value) 
           }} value={inputData} placeholder="Enter Items"></input>
           <button onClick={addItem}>Add items</button>
           </div>


            {
                  items.map((itemval,index)=>{
                  return(
                         <>

                         <div className="main_div">
            
                         <h1>{itemval}</h1><button onClick={()=>delItems(index)}>Delete Items</button>
                          </div>
                          </>
                  )
                 })
            }

        </>
    )
}

export default Tdlist
