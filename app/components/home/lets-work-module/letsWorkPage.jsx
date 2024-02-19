import React from "react";
import Button from "../../ecyce/buttons";
import EmailForm from "./emailForm";
import Container from "../../ecyce/container";

const LetsWorkPage = () => {
  return (
    <div className="bg-sf-black text-sf-cream py-16 px-20">
      <Container className="min-h-[70vh] flex justify-between items-center">
        <div className="min-h-96">
          <h1 className="bold-neue text-heading leading-tight">Got an idea?</h1>
          <h2 className="reg-neue text-heading leading-tight">
            Let&apos;s work together!
          </h2>
          <Button type="solid" text="Let's Talk" />
        </div>
        <EmailForm />
      </Container>
    </div>
  );
};

export default LetsWorkPage;
