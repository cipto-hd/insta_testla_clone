import { useForm, ValidationError } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import { MailSvg } from "../assets/portfolio";

export const MainContact = () => {
  const [state, handleSubmit] = useForm("mgedbqaj");

  if (state.succeeded) {
    toast.success("Message Sent!", { type: "success", position: "top-right" });
  }

  return (
    <div id="contact" className="h-screen snap-start">
      <div className="container flex flex-col items-start h-full pt-24 md:flex-row">
        <ToastContainer limit={1} autoClose={3000} />

        <div className="w-full">
          <img
            src={MailSvg}
            alt="mail"
            className="w-64 mx-auto"
            data-aos="zoom-out-up"
            data-anchor="#contact"
          />
        </div>
        <div
          className="flex flex-col items-center flex-grow w-full gap-1 mx-auto mt-5"
          data-aos="zoom-in-down"
          data-anchor="#contact"
        >
          <h2 className="font-semibold">Contact Me</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-full"
          >
            <input
              className="contact_input"
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <input
              className="contact_input"
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <input
              className="contact_input"
              type="text"
              placeholder="Subject"
              name="subject"
              id="subject"
              required
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />

            <textarea
              className="h-24 contact_input"
              placeholder="Message"
              name="message"
              id="message"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              type="submit"
              className="px-4 py-2 mt-2 bg-gray-300 rounded-lg dark:text-gray-700 hover:font-bold first-letter:uppercase"
              disabled={state.submitting}
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
