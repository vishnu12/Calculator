
import React,{useState} from 'react'


function App() {

  const numArray=["1","2","3","4","5","6","7","8","9","0","clear","."]
  const operArray=["+","-","*","/","="]

  const [value, setValue] = useState("0")



  const handleClick=(args)=>{
    if(args==="clear"){
       setValue("0")
    }else if(args==="="){
     try {
      setValue(eval(value))
     } catch (error) {
       setValue(error.message)
     }
    }
    else{
      setValue(prev=>{
        if(prev==="0"){
          return args
        }else{
          return prev+args
        }
       })
    }
   
  }

  return (
     <div className='calc-container'>
     <div className='screen-container'>
     <p>{value}</p>
     </div>

     <div className='btn-container'>
       <div className='numbers'>
      {
        numArray.map(itm=>{
          return <div className='num-child' onClick={()=>handleClick(itm)}>
                  <h6>{itm}</h6>
                </div>
        })
      }
       </div>
       <div className='operators'>
         {
           operArray.map(itm=>{
             return <div className='op-child' onClick={()=>handleClick(itm)}>
                      <h6>{itm}</h6>
                    </div>
           })
         }
       </div>
     </div>
    </div>
  );
}

export default App;
