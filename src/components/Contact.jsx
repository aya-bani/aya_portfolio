const Contact = () => {
  return (
    <div className="w-screen h-4/5 flex flex-col items-center justify-center space-y-8 rounded-t-[100px] bg-white p-8">
      <div className="w-32 h-32 flex items-center justify-center bg-[#f2f1f0] rounded-full overflow-hidden">
        <img src="/assets/images/contact.png" alt="Contact" className="w-24 h-auto" />
      </div>

      <p
        className="text-5xl max-w-[600px] mx-auto text-center font-bold"
        style={{
          background: "linear-gradient(to left, #686868, black)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
        }}
      >
        Get in touch
      </p>

      <div>
        <a href="mailto:Khalifa.kais.it@gmail.com">
          <button className="btn bg-black text-white border rounded-[26px] w-24 h-10 text-sm font-bold ">
            Email Me
          </button>
        </a>
        <a href="https://wa.me/21652346664" className="text-gray-600">
          <button className="btn mx-2 bg-white text-black border border-black rounded-[26px] w-24 h-10 text-sm font-bold">
          Whats Up
          </button> 
        </a>


       
        
      </div>

      <div className="mt-6 w-full  border-t border-gray-300 pt-4 flex justify-between p-8 ">

        <p className="text-gray-600">© 2024 All rights reserved.</p>
        <a href="https://www.linkedin.com/in/kais-khalifa/" className="hidden md:block text-gray-600">LinkedIn</a>

      </div>
    </div>
  );
};

export default Contact;
