import travelia from '../images/travelia.jpg';
import potholes from '../images/potholes.jpg';
import '../components/Project.css'

function Projects(){
    return(
<>
<div className="text-white h-auto pt-14 font-jura pb-10">
<h1>My Recent Works</h1>
<h2 className="p-4">Here are a few past design projects Ive worked on. Want to see more? Email me.</h2>
<div className="p-10  grid sm:grid-cols-3 ">
    <div  className= " container  m-auto my-4 sm:my-2 w-2/3 h-60  border-transparent  border-2 relative ">
        <img src={travelia}  alt="a tarvel website" className=" img  rounded-xl" />
        <div className="middle p-2  ">
          <p className="font-lg text-green-400 p-2">this is a travel website for package deisgn</p>
          <button className="bg-purple-600 rounded-lg px-1"> Want to See!</button>
        </div>  
    </div>
    <div className="container m-auto my-4 sm:my-2 w-2/3 h-60  border-transparent relative">
        <img src={potholes} alt="" className="img w-full rounded-xl"/>
        <div  className="middle p-2  ">
          <p className="font-lg text-green-400 p-2">this is a travel website for package deisgn</p>
          <button className="bg-purple-600 rounded-lg  px-1"> Want to See!</button>
        </div> 
    </div>
    <div  className="container m-auto my-4 sm:my-2 w-2/3 h-60  border-transparent  relative">
      
        <img src={travelia}  alt="a tarvel website" className="img w-full h-full rounded-xl" />
        <div className="middle p-2  ">
          <p className="font-lg text-green-400 p-2">this is a travel website for package deisgn</p>
          <button className="bg-purple-600 rounded-lg px-1"> Want to See!</button>
        </div> 
    </div>
    
</div>


<div className="py-10 px-4">
<div className="bg-slate-700 h-20 z-0  translate-y-6 mx-10 rounded-lg ">
    <p></p>
</div>
    <div className="bg-gradient-to-br from-strike-purple to-purple-800 relative z-10 rounded-lg h-auto p-12 ">
        <h2 className="text-4xl text-black font-normal font-mulish">Interested in collaborating with me?</h2>
        <p className="p-4">I’m always open to discussing product design work or partnership opportunities.</p>
<button className="btn rounded-lg px-4 text-xl py-2 bg-inherit border-2 hover:bg-slate-700 hover:border-transparent hover:text-white border-slate-700 cursor-pointer"><a href="/" >Start a Conversation</a></button>
    </div>

    </div>
</div>

</>

    )
}
export default Projects;