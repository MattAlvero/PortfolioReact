import React from "react";
import PortfolioPageTemplate from "../templates/PortfolioPageTemplate";
import ContactForm from "../UI/organisms/ContactForm";

const ContactPage = () => {
  const body = (
    <>
      <h1 className="text-col text-4xl font-bold text-center mb-8 text-black">Contact Me</h1>
      <ContactForm/>
    </>
  );

  return (
    <PortfolioPageTemplate children={body} />
  );
};

export default ContactPage;
