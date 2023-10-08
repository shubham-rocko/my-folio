import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function EmailForm() {
  const form = useRef();
  const [error, setError] = useState("");
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const validateForm = (target) => {
    const eleList = target.querySelectorAll(".form-control");
    for (let i = 0; i < eleList.length; i++) {
      const currElementValue = eleList[i].value;
      const currElementName = eleList[i].name;
      if (!currElementValue) {
        const errorMsg = `${currElementName} is required.`;
        setError(errorMsg);
        return false;
      }
      if (
        currElementName === "email" &&
        !currElementValue.toLowerCase().match(emailRegex)
      ) {
        const errorMsg = "email is invalid.";
        setError(errorMsg);
        return false;
      }
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm(e.target) && process.env.REACT_APP_YOUR_PUBLIC_KEY) {
      emailjs
        .sendForm(
          `${process.env.REACT_APP_YOUR_SERVICE_ID}`,
          `${process.env.REACT_APP_YOUR_TEMPLATE_ID}`,
          form.current,
          `${process.env.REACT_APP_YOUR_PUBLIC_KEY}`
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
    }
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="form-group">
      <div>
        <label>Name:</label>
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="form-control"
        />
      </div>
      <div>
        <label>Email address:</label>
        <input
          name="email"
          type="email"
          placeholder="email"
          className="form-control"
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          name="message"
          cols="30"
          rows="10"
          className="form-control"
        ></textarea>
      </div>
      {error && <div className="error-msg">{error}</div>}
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}

export default EmailForm;
