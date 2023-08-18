import './Skills.css'
import html from '../images/html.svg'
import js from '../images/Group36.png'
import css from '../images/css.svg'
import mdb from '../images/Mongodb.svg'
import node from '../images/node.svg'
import react from '../images/react.svg'
import express from '../images/express.svg'

function Skills(){

    return(
       <div className="p-10  containerSkill text-black  border-slate-400 md:h-auto">
<div className="text-center py-8 text-5xl font-['Jura'] font-bold text-[#3b7d88] w-full">
  What <div className="text-[#19192d] contents">Skills</div>
  <div className="contents"> I have</div>
</div>       
         
      

  <div className="flex flex-col sm:justify-center items-center content-center gap-4 sm:flex-row font-jura w-full">
         
    <div className="bg-white hover:bg-[rgba(152,_184,_189,_0.36)] duration-300 text-black  rounded-xl p-2 sm:p-6 md:p-8 shadow-[6px_6px_6px_0px_#3b7d88]  my-2  sm:mx-2 w-2/3">
        <div className="text-center text-4xl font-['Jura'] font-bold text-[#19192d] h-auto">
              Frontend <br />
                Development
        </div>
            <div className="grid sm:grid-cols-2">

              <div className="flex my-4">
                <img  src="https://file.rendit.io/n/vjQr6tOPmu9HdqVjdifF.svg" alt="" className="w-10 mx-2" />
                <div className="flex-col text-left">
                  <h2 className="text-xl">HTML</h2>
                  <p className="font-mulish font-light text-sm">Experienced</p>
                </div>
                 
              </div>
              <div className="flex my-4 ">
                <img  src="https://file.rendit.io/n/zqPuLqkBVSkHArHmaJxT.svg" alt="" className="w-10 mx-2"  />
                <div className="flex-col text-left">
                  <h2 className="text-xl">CSS</h2>
                  <p className="font-mulish font-light text-sm">Experienced</p>
                </div>
                 
              </div>
              <div className="flex my-4">
                <img   src="https://file.rendit.io/n/U3NemRSe80sp3z6WrYav.svg" alt=""  className="w-8 mx-2" />
                <div className="flex-col text-left">
                  <h2 className="text-xl">Js</h2>
                  <p className="font-mulish font-light text-sm">Experienced</p>
                </div>
                 
              </div>
              <div className="flex my-4">
                <img  src="https://file.rendit.io/n/C7UV06yMAl1pC4rwsN9S.svg" alt=""  className="w-12 mx-2" />
                <div className="flex-col text-left">
                  <h2 className="text-xl">React</h2>
                  <p className="font-mulish font-light text-sm">Experienced</p>
                </div>
                 
              </div>
            </div>
          </div>

      {/* ----------------------------------backend */}


      <div className="shadow-[6px_6px_6px_0px_#3d7e89] hover:bg-[rgba(152,_184,_189,_0.36)] duration-300 bg-white/30 rounded-xl p-2 sm:p-6 md:p-8 text-black my-2  sm:mx-2 w-2/3">
      <div className="text-center text-4xl font-['Jura'] font-bold text-[#19192d] h-[55.02%]">
        Backend <br />
        Development
      </div>   
       <div className="grid sm:grid-cols-2">

              <div className="flex my-4">
                <img   src="https://file.rendit.io/n/zkZwA6aDaedwR3VkPExf.svg" alt="" className="w-10 mx-2" />
                <div className="flex-col text-left">
                  <h2 className="text-xl">NODE Js</h2>
                  <p className="font-mulish font-light text-sm">Intermediate</p>
                </div>
                 
              </div>
              <div className="flex my-4 ">
                <img src="https://file.rendit.io/n/oMi6sj7hIk5YFYB0X3EW.svg" alt="" className="w-10 mx-2"  />
                <div className="flex-col text-left">
                  <h2 className="text-xl">MongoDB</h2>
                  <p className="font-mulish font-light text-sm">Intermediate</p>
                </div>
                 
              </div>
              <div className="flex my-4">
                <img  src="https://file.rendit.io/n/8LR4QyK4SbqwGzvjGrzP.svg" alt=""  className="w-8 mx-2" />
                <div className="flex-col text-left">
                  <h2 className="text-xl">Express</h2>
                  <p className="font-mulish font-light text-sm">Experienced</p>
                </div>
                 
              </div>
            
            </div>
          </div>





         </div>
       </div>

    )
}
export default Skills;