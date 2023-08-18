import { useState } from "react";
import Home from "./Home";
import Projectplanner from "./Projectplanner";

// import ProjectPlanner from './Projectplanner'

function ContactBox(){
//   const [showPlanner,setShowPlanner]=useState(false)
//  const handleClick=()=>{
//   setShowPlanner(!showPlanner);
//    }
const [popupPlanner,setPopupPlanner]= useState(false);
 
 
    return(
        <>
        <div className="flex font-jura flex-col md:flex-row justify-center align-middle h-auto p-4 rounded-3xl text-white relative mx-20 -mb-20   border-2 border-[#35354E] bg-[#3a7b86]">
      <div className="p-2 px-0">
        <h2 className="md:text-3xl text-black font-semibold ">Start a project</h2>
      </div>
      <div>
      <p className="text-sm md:py-4  content-center py-auto">
        Interested in working together? We should queue up a time to chat. I’ll buy the coffee.
        </p>  
        </div>
        <div className="p-4 ">
          
            <button  className=" rounded-xl text-white px-4  bg-[#0f3e45]  hover:text-black hover:bg-inherit border-[#0f3e45] hover:border-[#0f3e45] border-2 hover:font-bold" 
           onClick={()=>setPopupPlanner(true)} >
             Let's Start a Project
           </button>
        </div>
        </div>
        <Projectplanner trigger={popupPlanner} setTrigger={setPopupPlanner} />
    
        </>
 
)
}
export default ContactBox;