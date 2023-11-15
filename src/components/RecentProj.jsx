import warehouse from "../images/gym.png";
import ssyoutube from '../images/ss-youtube.png'

function RecentProj() {
  const handleScrollContact=()=>{
    const ContactScroll=document.getElementById("contact-section");
    if(ContactScroll){
      window.scrollTo({
        behave:'smooth',
        top:ContactScroll.offsetTop,
      })
    }
  }

  function redirectToGitHub() {
    window.location.href = "https://github.com/SumitPanwar0007/youtubeClone";
  }
  function warehouseGithub(){
    window.location.href="https://github.com/SumitPanwar0007/Warehouseweb";
  }
  
  return (
    <>
      <div className="text-black h-auto pt-14 font-jura pb-10">
        <h1>My Recent <span className="text-[#3B7D88]"> Works</span> </h1>
        <h2 className="p-4">
          Here are a few past design projects I've worked on. Want to see more?
          Email me.
        </h2>

        <div className="flex flex-row justify-evenly w-full my-4">
          

        
            {/* ----------------------project -1 ----------------------*/}
            <div className="bg-white/30 text-black shadow-[6px_6px_6px_0px_#3b7d88] p-2 w-1/3 h-auto flex flex-col  items-center  rounded-lg hover:transition-all hover:scale-110 duration-300">
       
                <img src={ssyoutube} alt="" className="rounded-xl  " />
        
             
              <h1 className="mx-auto  p-2 text-2xl">YouTubeClone</h1>

              <div className=" h-auto flex justify-center space-x-2 ">
                <button className="bg-[#3b7d88]  rounded-lg  px-4   p-2 text-white visited:text-white " onClick={redirectToGitHub}>
                  
                  Get Code!
                </button>
                <button className="bg-[#3b7d88] rounded-lg px-4 p-2 ">
                  <a href="https://sumityoutubepro.netlify.app/" className="text-white visited:text-white">
                       See Live!
                  </a>
                </button>
              </div>
            </div>

            {/*------------------------------- project -2----------------------- */}
            <div className="bg-white/30 text-black shadow-[6px_6px_6px_0px_#3b7d88]   p-2 w-1/3 mx-4 h-auto flex flex-col  items-center bg-[#31325E] rounded-lg hover:transition-all hover:scale-110 duration-300">
          
                <img src={warehouse} alt="" className="rounded-xl "  />
        
          
                <h1 className=" text-center mx-auto p-2 text-3xl">Warehouse</h1>

                <div className=" h-auto flex justify-center space-x-2 ">
                  <button className="bg-[#3b7d88] text-white rounded-lg   px-4  p-2 " onClick={warehouseGithub}>
                    Get Code!
                  </button>
                  <button className="bg-[#3b7d88] rounded-lg px-4 p-2 ">
                  <a href="https://sumitwarehouse.netlify.app/" className="text-white visited:text-white">
                       See Live!
                  </a>
                </button>
               
              </div>
            </div>

           
          
        </div>

        <div className=" relative py-10 px-4">
          <div className="bg-[#3A7B86]   h-20 z-0  translate-y-6 mx-10 rounded-lg ">
            <p></p>
          </div>
          <div className="bg-[linear-gradient(176deg,_#8fc7d2_1%,#a3cbd3_69%,rgba(218,_229,_231,_0)_125%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat relative z-10 rounded-lg h-auto p-12 ">
            <h2 className="text-4xl text-black font-normal ">
              Interested in collaborating with me?
            </h2>
            <p className="p-4 text-sm">
              I’m always open to discussing product design work or partnership
              opportunities.
            </p>
            <button  className=" rounded-lg px-4 text-xl py-2 bg-inherit border-2 border-[#3A7B86] hover:bg-[#3A7B86] hover:border-transparent
             hover:text-white border-[#3A7B86] cursor-pointer" onClick={handleScrollContact} >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default RecentProj;
