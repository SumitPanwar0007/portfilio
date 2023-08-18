import focal from '../images/dp.png';
import './HomeStyle.css';

import resume from '../images/resume.pdf';
function Home(){

    return(
        <>
        
        <div className="mb-8 mt-0 font-jura flex-col sm:flex-row sm:justify-center text-black ">

            <div className="detail-left mt-10 relative  text-black">
            <div className="text-2xl sm:text-5xl ">
                <p className=" my-10 font-semibold font-jura"> Designer & <span className="text-[#3B7D88]">Full Stack</span> <br />
                 Developer </p>
            </div>
            <p className=" font-thin w-auto">I design and code beautifully simple things, and I love what I do.</p>

            <div className="m-6">
                <button  className="btn-hero m-2 bg-[#122F33]  relative transition delay-200 ease-out hover:ease-in duration-200 hover:-translate-y-1 hover:scale-120"><a href={resume} className="text-white hover:text-white hover:duration-150"
                  > Download Resume</a></button>

            </div>
            <div className=" flex flex-row sm:flex-col sm:absolute justify-center m-2 px-6 gap-8  ">
                <a href="https://www.instagram.com/sumitgurjar0019/" className="hover:scale-125 duration-200 w-6 mx-2"><img   src="https://file.rendit.io/n/wkCduw6hTWVCMGvgybSn.svg" alt="" /></a>
                {/* <a href="" className="hover:scale-125 duration-200 w-6 mx-2"><img src={hack} alt="" /></a> */}
                <a href="https://www.linkedin.com/in/sumit-panwar-854b871b3/" className="hover:scale-125 duration-200 w-6 mx-2"><img   src="https://file.rendit.io/n/qqqnmmtTfRZFZhsSuppW.svg" alt="" /></a>
                <a href="https://github.com/SumitPanwar0007" className="hover:scale-125 duration-200 w-6 mx-2"><img   src="https://file.rendit.io/n/Hi2JhAjHrfLuRvACYTc6.svg"
alt="" /></a>
            </div>
            </div>
            <div className="mt-10 bg-[linear-gradient(179deg,_rgba(41,_114,_126,_0.91)_0%,rgba(41,_114,_126,_0)_141%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat   bg-opacity-40 rounded-full  mx-auto h-auto   w-1/3 ">

                <img src={focal} className="p-auto h-auto rounded-full  " alt="this is the photo" />
            </div>
            
            
        </div>
        
        
        
        
        </>

    )
}
export default Home;