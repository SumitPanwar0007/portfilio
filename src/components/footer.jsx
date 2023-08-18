


function footer(){
    return(
        // <!-- Footer container -->
<footer
  className=" text-center p-10 pt-20   rounded-xl text-gray-900  bg-[linear-gradient(176deg,_#8fc7d2_1%,#a3cbd3_69%,rgba(218,_229,_231,_0)_125%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-end gap-16 h-[459px] pb-0">
 

  {/* <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
  <div className="mx-6 py-10 text-center md:text-left ">
    <div className=" grid gap-8  lg:grid-cols-4">
      {/* <!-- Tailwind Elements section --> */}
     
        <h2 className="mb-4 flex items-center justify-center font-semibold font-jura text-6xl uppercase ">
        
            Sumit Panwar
        </h2>
     
      <div className="flex flex-col items-center justify-center border-t-2 border-neutral-200 p-6 dark:border-neutral-500 ">
   
       <h2 className="text-xl font-jura font-bold py-4">Let's connect on Social apps</h2>
       
    
    <div className=" flex  justify-center  m-2 gap-2  ">
                <a href="https://www.instagram.com/sumitgurjar0019/"  className="hover:scale-125 duration-200 mx-2 min-w-0 w-8"><img   src="https://file.rendit.io/n/wkCduw6hTWVCMGvgybSn.svg" alt="" /></a>
                {/* <a href="" className="hover:scale-125 duration-200 w-6 mx-2"><img src={hack} alt="" /></a> */}
                <a href="https://www.linkedin.com/in/sumit-panwar-854b871b3/" className="hover:scale-125 duration-200 mx-2 min-w-0 w-6"><img   src="https://file.rendit.io/n/qqqnmmtTfRZFZhsSuppW.svg" alt="" /></a>
                <a href="https://github.com/SumitPanwar0007" className="hover:scale-125 duration-200  mx-2 min-w-0 w-8"><img   src="https://file.rendit.io/n/Hi2JhAjHrfLuRvACYTc6.svg" alt="" /></a>
            </div>
  </div>
     
      {/* <!-- Products section --> */}
     
      {/* <div>
        <h6
          className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Contact:
        </h6>

      </div> */}
    </div>
  </div>
</footer>
    )
}
export default footer;