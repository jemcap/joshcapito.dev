import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formInputStyle =
  "appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mb-7";

const ContactModal = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1905dfr",
        "template_026c23t",
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success(
            "Email successfully sent! You may now close this form."
          );
          setFormData({
            name: "",
            email: "",
            company: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error(error.text);
        }
      );
  };
  return (
    <>
      <button
        onClick={() => document.getElementById("my_modal_2").showModal()}
        className="hover:text-yellow-500 transition-all 2s ease" aria-label="Open"
      >
        Drop me a message
      </button>
      <dialog id="my_modal_2" className="modal z-50 text-black">
        <div className="modal-box shadow-lg">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col text-start"
          >
            <label className="text-lg">Name</label>
            <input
              type="text"
              name="name"
              className={formInputStyle}
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              required
            />
            <label className="text-lg">Email</label>
            <input
              type="email"
              name="email"
              className={formInputStyle}
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              required
            />
            <label className="text-lg">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  company: e.target.value,
                })
              }
              className={formInputStyle}
            />
            <label className="text-lg">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              className={formInputStyle}
            />
            <button
              type="submit"
              value="Send"
              className="btn text-lg bg-blue-500 text-white hover:shadow-lg hover:bg-blue-700"
            >
              Send
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button aria-label="Close">Close</button>
        </form>
      </dialog>
    </>
  );
};

export default ContactModal;
