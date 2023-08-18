// import menu from '../images/menu.png';
import logo from '../images/logo.png';
import Contact from './Contact';

function NavBar(){
    const handleScrollContact= ()=>{
      const ContactSec=document.getElementById("contact-section");
      if(ContactSec){
        window.scrollTo({
          behavior:'smooth',
          top:ContactSec.offsetTop,
        });
      }
    }
    
    return(
<div className="mt-0 navBar text-white flex justify-between">
   <div className="navBar__logo flex justify-between items-center">
    <span className="text-2xl  text-[#3B7D88]  hover:animate-ping cursor-pointer w-1/2"><img src={logo} alt="" /></span>
   
   
   
   </div>

 <button  className="m-2 rounded-2xl h-auto w-auto px-4 border-2 border-[#3B7D88]  hover:bg-[#3B7D88]  hover:text-white  text-[#3B7D88] font-medium
   font-jura bg-inherit  " onClick={handleScrollContact}>Say Hello!</button>
  
   
</div>
    )
}
export default NavBar;