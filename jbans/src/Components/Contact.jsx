import React from "react";


export default function Contact(){
    return(
       <div className="bg-black grid grid-cols-2">
        <img src="https://i.postimg.cc/1RnY7r1Z/pexels-karolina-grabowska-4210559.webp" className=" -cover opacity-45 h-dvh w-dvw"></img>
        <div className="flex flex-col items-center absolute text-white top-48 left-44">
        <h1 className="text-3xl text-white">Contact Us</h1>
        <div className="relative top-8 flex flex-col items-left justify-center gap-4">
            <div className="bg-inherit px-32 py-8 w-max rounded-xl shadow-xl backdrop-blur-xl"><a href="mailto:someone@example.com">Mail Us</a></div>
            <div className="bg-inherit px-32 py-8 w-max rounded-xl shadow-xl backdrop-blur-xl"><a href="tel:+91 8838930093">Call Us</a></div>
            <div className="bg-inherit px-32 py-8 w-max rounded-xl shadow-xl backdrop-blur-xl"><a href="tel:+91 8838930093">Call us</a></div>
        </div>
        </div>
        
        <div>

           <div className="text-white flex flex-col items-center gap-24">
            <div className="text-3xl">Address</div>
            <div className="bg-green-500 ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010.774188300784!2d77.30705629098777!3d28.60896894883983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce54451876d6b%3A0x5f64743f390cac66!2sJ%20-BANS%20ICU%20CARE%20PRIVATE%20LIMITED-%20DELHI!5e0!3m2!1sen!2sin!4v1719031884366!5m2!1sen!2sin" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
         
           </div>
        </div>

       </div>
    );
}