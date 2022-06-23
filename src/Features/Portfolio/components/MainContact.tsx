import { useForm } from "@formspree/react";
import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useInViewport } from "react-in-viewport";
import { MailSvg } from "../../../assets/portfolio";
import { css, styles } from "../../Animation";

export const MainContact = () => {
  const myRef = useRef(null);
  const { inViewport, enterCount } = useInViewport(
    myRef,
    {},
    { disconnectOnLeave: false }
  );

  const [state, handleSubmit] = useForm("xpzkrgjb");
  if (state.succeeded) {
    toast.success("Message Sent!");
  }

  return (
    <div id="contact" className="h-screen snap-start">
      <div className="container flex flex-col items-start h-full pt-24 md:flex-row">
        <ToastContainer limit={1} />

        <div className="w-full">
          <img
            src={MailSvg}
            alt="mail"
            className={(inViewport ? css(styles.rollIn) : "") + " w-64 mx-auto"}
          />
        </div>
        <div
          className={
            (inViewport ? css(styles.zoomInUp) : "") +
            " flex flex-col items-center flex-grow w-full gap-1 mx-auto mt-5"
          }
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
              id="inpnt"
              name="name"
              required
            />
            <span ref={myRef}></span>
            <input
              className="contact_input"
              type="email"
              placeholder="Email"
              id="inpnt"
              name="email"
              required
            />
            <input
              className="contact_input"
              type="text"
              placeholder="Subject"
              id="inpnt"
              required
            />{" "}
            <textarea
              className="h-24 contact_input"
              placeholder="Message"
              id="inpnt"
              name="message"
              required
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
