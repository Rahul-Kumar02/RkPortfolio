import React, { useRef, useState } from "react";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleSubmitForm = (e) => {
    setIsSubmitted(true);

    setTimeout(() => {
      
      setIsSubmitted(false);
     
    }, 10000);
    // formRef.current.reset();

     
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-center md:flex md:items-center md:justify-center lg:flex lg:items-center lg:justify-center px-4 md:px-20 lg:px-20 flex-col lg:flex-col md:flex-col gap-10 py-20">
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-2xl w-full text-white">Contact</h2>
        <h2 className="text-2xl text-white">Let's Connect</h2>

        <p className="text-[15px] md:text-[20px] lg:text-[20px] text-white">
          I'm open to Frontendd Developer intership oppertunities and
          collaborations. Feel free to drop a message - i'd love to connect!
        </p>
      </div>

      {isSubmitted && <div>Message sent successfully</div>}
      <form
        target="_blank"
        ref={formRef}
        onSubmit={handleSubmitForm}
        action="https://formspree.io/f/xovwrppn"
        method="POST"
        className="bg-white flex flex-col w-full gap-15 form"
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          className="p-2 "
          autoComplete="off"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="p-2"
          autoComplete="off"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="p-2"
          required
        />
        <button name="button" type="submit" className="text-white p-2 cursor-pointer">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
