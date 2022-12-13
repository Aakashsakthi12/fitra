import React ,{ useEffect, useState }from 'react'
 function HooksEx() {
    const [count,setCount]=useState(15)
    useEffect(()=>
    setCount(count+1)
    console.log({count})
})
     

    return (
    <div><h1>{count}</h1>
         <button onClick={()=>{setCount(count+1)}}>ClickMe</button>
         <button onClick={()=>{setCount(count-1)}}>Clickme</button>
         <button onClick={()=>{setCount(count+5)}}>Clickme</button>
    </div>
  )
    }


 export default HooksEx