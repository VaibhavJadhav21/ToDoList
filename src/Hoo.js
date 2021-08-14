// import { useState } from "react"
// import React  from 'react'

// const Hoo = () => {

//     const [count, setcount] = useState(1)

//     const inc=()=>{
//         setcount(count+1)
//     }

//     const dec=()=>{
//         setcount(count-1)
//     }
//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={inc}>+++++++</button>
//             <button onClick={dec}>-------</button>


//         </>
//     )
// }

// export default Hoo


import React from 'react';
import { useState } from "react";

const Hoo = () => {
    const [inputData, setinputData] = useState("");
    const [items, setitems] = useState([]);


    const delItems=(index)=>{
        console.log("index");
        const updateditems = items.filter((elem,ind)=>{
            return ind !== index;
        });
        setitems(updateditems);
    }

    const addItem=()=>{
        if(!inputData){

        }else{
            setitems(()=>{
                return[...items,inputData];
            });
            setinputData("");
        }
        // setitems((oldItems)=>{
        //     return[...oldItems,inputData];
        // });
    }
    return (
        <>
            <h1>ToDo List</h1>
            <input value={inputData} onChange={(e)=>{
            setinputData(e.target.value)}} type="text" value={inputData}></input>
            <button onClick={addItem} className="btn">+</button>
            
            <div className="listes">
            
              
               
                
                        <div className="mylist">
                        
                    
                        {/* {
                            items.map((itemval,index)=>{
                                return(<> <h2>{itemval}</h2><button onClick={delItems}>Remove</button></>) 
                            })
                        } */}
                        {/* <button>Remove</button> */}

                        {items.map((itemval,index)=>{
                            return(
                            <>
                               <div key={index}>
                                <h2>{itemval}</h2><button onClick={()=>delItems(index)}>Remove</button>
                                </div>
                            </>
                            )
                        })}
                       
                        
                        </div>
                    
                    
                        
                    
                 
              
                    
            
            
            </div>
            
            {/* <div className="rmvall">
                <button className="rmv">Remove All</button>
            </div> */}
        </>
    )
}

export default Hoo




