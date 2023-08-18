import './about.css'
import dot from '../images/dot.png'
function About(){

    return(
       <div className="ContainerAbout font-jura  p-6 h-auto
        border-slate-400   text-lg text-black">
    <h1 className="text-[#3B7D88] font-jura text-4xl font-semibold p-3 ">Hey, I’m <span className="text-5xl">Sumit</span>, Nice to meet you.</h1>
    <p className=" font-mulish text-lg">Welcome to my corner of the web!</p>
    

    <p className="aboutText p-6 font-mulish text-lg"> I am a versatile web developer and designer specializing in MERN technology with a passion for crafting exceptional digital experiences. With a solid foundation in Java programming, I bring a dynamic skill set to the table. From responsive websites to interactive web applications, I thrive on building innovative projects that captivate users and deliver tangible results. </p>
        <p className=" font-mulish text-lg">Let's collaborate and transform your online presence into something truly remarkable.</p>

<div className="m-6 p-4 text-sm  flex sm:flex-row  flex-col justify-center">
    <div className="border-t-0 w-1/4  sm:ml-4 "> 
    <div className="content-center"> 
    <img   src="https://file.rendit.io/n/EgTiOGcBOdxcjVfsqt03.svg" alt="" className="block ml-auto mr-auto w-1/4 " /></div>
    <p>Full Name</p>
    <p className="text-xs">Sumit Panwar</p>
    </div>
    <div className="border-t-0 w-1/4 "> 
    <div className="content-center"> 
    <img   src="https://file.rendit.io/n/EgTiOGcBOdxcjVfsqt03.svg" alt="" className="block ml-auto mr-auto w-1/4 " /></div>
    <p>Email</p>
    <p className="text-xs">Sumitgurjar2373@gmail.com</p>
    </div>
    <div className="border-t-0 w-1/4 ">
    <div className="content-center"> 
    <img src="https://file.rendit.io/n/EgTiOGcBOdxcjVfsqt03.svg" alt="" className="block ml-auto mr-auto w-1/4 " /></div>
    <p>Addres</p>
    <p className="text-xs"> UttarPradesh(India)</p>
    </div>
    <div className="border-t-0 w-1/4 "> 
    <div className="content-center"> 
    <img src="https://file.rendit.io/n/EgTiOGcBOdxcjVfsqt03.svg" alt="" className="block ml-auto mr-auto w-1/4 " /></div>
    <p>Contact no.</p>
    <p className="text-xs">+91 9911995970</p>
    </div>

    
</div>

       </div>

    )
}
export default About;