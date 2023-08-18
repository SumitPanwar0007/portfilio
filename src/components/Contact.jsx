import React, { useRef } from 'react';


import emailjs from '@emailjs/browser';
import './contact.css'

function Contact(){

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_24kan0j', 'template_y3gkaa9', form.current, 'YQa2PJohg29NXC9Sb')
      .then((result) => {
          console.log(result.text);
          alert("thanks for sending email !!")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
    return(
      <div id="contact-section" className="text-black p-5  font-jura ">
        <h2  className="font-semibold text-4xl  py-6">GET IN TOUCH</h2>
        <h2  className="font-semibold text-[#3B7D88] text-5xl py-6">Contact !</h2>

      <div className="flex  flex-col sm:flex-row justify-between w-full">
        <div className="flex-col  w-1/2  ">

          <div className=" px-2 py-2  w-10/12 h-48  my-4 shadow-[6px_6px_6px_0px_#3b7d88] bg-[#fffdfd] hover:bg-[rgba(152,_184,_189,_0.36)] duration-300 rounded-xl ">
            <img   src="https://file.rendit.io/n/BhjxAWfkOWTzAvRtDIb4.svg" alt="img" className="w-12 " />
            <div className="text-center text-2xl font-['Jura'] font-bold w-full ">Email</div>
            <h2 className="font-mulish py-2 text-center text-xl  font-bold w-full py-4">Sumitgurjar2373@gmail.com</h2>
            <button className=" p-2 rounded-xl bg-[url(https://file.rendit.io/n/QTr2mEwOmtMW3nZqTaAB.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat" > <a href="mailto:Sumitgurjar2373@gmail.com"className="text-white visited:text-white ">
             Send Mail
           </a>
          </button>

         
          </div>
          <div className=" px-2 py-2  w-10/12 h-48  my-6 shadow-[6px_6px_6px_0px_#3b7d88] bg-[#fffdfd] hover:bg-[rgba(152,_184,_189,_0.36)] duration-300  rounded-xl ">
            <img   src="https://file.rendit.io/n/LAhgg9A8uDoLHhYNxTBR.svg" alt="img" className="w-12 " />
            <div className="text-center text-2xl font-['Jura'] font-bold w-full py-4">Whatsapp</div>
            <button className=" p-2 rounded-xl bg-[url(https://file.rendit.io/n/QTr2mEwOmtMW3nZqTaAB.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat" 
            >
              <a href="https://wa.me/9911995970" className="text-white visited:text-white">Send Message!</a>
            </button>

         
          </div>        </div>


        <form ref={form} onSubmit={sendEmail} className="w-1/2 ">
            <div className="one">


           
            <input type="text" placeholder="Last Name" name="user_name" className=" border-2  rounded-md m-3 p-2 w-full border-t-0 border-b-2 border-x-0 border-solid border-[#3b7d88] bg-[rgba(152,_184,_189,_0.36)]"
        />
            

            </div>
            <div className="two">
            <input type="email" id="email" name="user_email" placeholder="Email" className="border-2  rounded-md p-2 m-3 w-full border-t-0 border-b-2 border-x-0 border-solid border-[#3b7d88] bg-[rgba(152,_184,_189,_0.36)]"/>

            
            </div>
            <textarea name="message" placeholder='message....' className="border-t-0 border-b-2 border-x-0 border-solid border-[#3b7d88] bg-[rgba(152,_184,_189,_0.36)] w-full rounded-md m-3" id="" cols="30" rows="10"></textarea><br />


            <button type="submit" value="send" className=" px-4  text-lg rounded-md border-2 border-[#3b7d88] text-[#3b7d88] bg-transparent hover:bg-[#3b7d88] hover:text-white hover:border-[#3b7d88]">Submit</button>

        </form>
        </div>
      </div>


    )
}
export default Contact;