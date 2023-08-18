import React, { useRef } from "react";
import Close from '../images/Close.svg'


import emailjs from "@emailjs/browser";

function Projectplanner(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_24kan0j",
        "template_y3gkaa9",
        form.current,
        "YQa2PJohg29NXC9Sb"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("thanks for sending email !!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return( props.trigger ?(  
    <div className="w-screen h-fit  absolute -translate-y-96 bg-[#3B7D88]/[0.5]  flex justify-center my-6 ">

         <div id="contact-section" className="text-black p-5 font-jura bg-white w-2/3  m-6 rounded-xl">
<img src={Close} alt="" onClick={()=>props.setTrigger(false)} className="right-2 float-right p-2 rounded-lg w-16"/>

      <h2 className="font-semibold text-4xl text-[#3B7D88] py-6">
        I’m excited to learn about your project. 
      </h2>
      <h1>Ready to get started?</h1> 

      <div className="flex flex-col sm:flex-row justify-between content-center w-full">
     
          <form ref={form} onSubmit={sendEmail} className="w-full px-16 py-8">
            <div className="one flex">
              <input
                type="text"
                placeholder="Full Name"
                name="user_name"
                className="border-solid border-2 border-[#3B7D88] rounded-md m-3 p-2 bg-transparent w-full"
              />
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Email"
                className="border-solid border-2 border-[#3B7D88] rounded-md p-2 m-3 w-full bg-transparent"
              />
            </div>
            <div className="two flex text-gray-500">
              <select name="project" id="project"  className="border-solid border-2 border-[#3B7D88] rounded-md p-2 m-3
               w-full bg-transparent"  >
              <option value="" disabled selected>Type of Project </option>

                <option value="design">Responsive Design</option>
                <option value="web">Web Application</option>
              </select>

              <select name="budget" id="budget"   className="border-solid border-2 border-[#3B7D88] rounded-md p-2 m-3 w-full bg-transparent">
              <option value="" disabled selected>Budget? </option>
                <option value="les"> &lt; ₹5000 </option>
                <option value="web"> &lt;  ₹10000</option>
                <option value="web"> &lt;  ₹15000</option>

              </select>
            </div>
            <textarea
              name="message"
              placeholder="message...."
              className="border-solid border-2 border-[#3B7D88] w-10/12 rounded-md m-3 bg-inherit"
              id=""
              cols="auto"
              rows="10"
            ></textarea>
            <br />
            <button
              type="submit"
              value="send"
              className=" px-4 py-2 first-letter  rounded-md border-2 border-[#3B7D88] bg-[#3B7D88] text-white hover:bg-inherit font-bold hover:text-black hover:border-[#3B7D88]"
            
            >
              Submit
            </button>
          </form>
        </div>
  
    </div>
    </div>
  ): " "
  )
}
export default Projectplanner;
