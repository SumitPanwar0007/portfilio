
function Services() {
  return (
    <div className=" w-full h-auto font-jura  py-14 px-10 text-white md:h-auto   mb-48  border-solid border-t-2 border-slate-400">
      <h1 className="p-2 text-black text-3xl">What I Do ?</h1>
          <h1 className="text-[#3B7D88] text-5xl my- ">Services</h1>
<div className="flex  sm:flex-row my-6">
      {/* -----------------service 1------------------------------- */}
   <div className="relative w-full sm:mx-4">
      <div className=" bg-[#3b7d88] bg-cover bg-80%_50% bg-blend-normal bg-no-repeat overflow-hidden p-2 sm:p-6 md:p-8 relative my-2  sm:mx-2 z-10   rounded-t-xl text-black border-solid border-[#0f3e45] border-t-0 border-x-0  border-b-4">
      <img src="https://file.rendit.io/n/UH2n56AJYew2HamjEiND.svg"alt="" className="w-18 mx-2" />
       
        <h1 className="text-[1.75rem] py-2 ">Web Development</h1>
       
      </div>
      <div className="rounded-xl  absolute hover:translate-y-28 transition-all ease-in-out -bottom-10 z-0 duration-300 sm:mx-2 text-black  ">
        <div className="bg-[#cfdee0]  border-2 border-[#3b7d88] rounded-b-xl h-48 w-full">
          <ul className=" p-6 text-xs sm:text-base gap-2">
            <li className="flex gap-4  sm:py-2 text-left">
              <img  src="https://file.rendit.io/n/ThtQawH4v42uUhOVLVyF.svg" alt="" />
              <p>Custom Website Development</p>
            </li>
            <li className="flex gap-4 sm:py-2 text-left">
              <img  src="https://file.rendit.io/n/ThtQawH4v42uUhOVLVyF.svg" alt="" />

              <p>Responsive Design Implementation</p>
            </li>
            <li className="flex gap-4  text-left py-2">
              <img src="https://file.rendit.io/n/ThtQawH4v42uUhOVLVyF.svg" alt="" />
              <p>E-commerce Solutions</p>
            </li>
          
          </ul>
          <img   src="https://file.rendit.io/n/mb9DmAu23VH0XyxjFCFK.svg"
 alt="" className=" w-4  mx-auto mb-4" />
        </div>
      </div>
      </div>
      {/* --------service two-------------------- */}

      <div className="relative w-full sm:mx-4">
      <div className="bg-[#3b7d88] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat p-2 sm:p-6 md:p-8 relative my-2  sm:mx-2  z-10 border-solid border-[#0f3e45] border-t-0 border-x-0  border-b-4 rounded-t-xl text-black">
      <img   src="https://file.rendit.io/n/QSiRBYOucJu5ZHFkwOp0.svg" alt="" className="w-18 mx-2" />

        <h1 className="text-[1.75rem] py-2 font-['Jura'] font-bold text-[#19192d] ">Web Design</h1>
    
      </div>
      <div className=" bg-[#dae5e7] rounded-xl  absolute hover:translate-y-28 transition-all ease-in-out -bottom-10 z-0 duration-300 sm:mx-2 text-black">
        <div className="bg-inherit border-2 border-[#3b7d88] rounded-b-xl h-48 w-full">
          <ul className=" text-xs sm:text-base gap-2 p-6">
            <li className="flex gap-4 sm:py-2 text-left">
              <img src="https://file.rendit.io/n/ThtQawH4v42uUhOVLVyF.svg" alt="" />
              <p> Responsive Web Design </p>
            </li>
            <li className="flex gap-4 sm:py-2 text-left">
              <img src="https://file.rendit.io/n/ThtQawH4v42uUhOVLVyF.svg" alt="" />

              <p>User-Centered Design</p>
            </li>
            <li className="flex gap-4 sm:py-2 text-left">
              <img src="https://file.rendit.io/n/ThtQawH4v42uUhOVLVyF.svg" alt="" />

              <p>Visual Design and Branding</p>
            </li>
          </ul>
          <img   src="https://file.rendit.io/n/mb9DmAu23VH0XyxjFCFK.svg"
 alt="" className=" w-4  mx-auto " />
        </div>
      </div>
      </div>

      </div>
    </div>
  );
}
export default Services;
