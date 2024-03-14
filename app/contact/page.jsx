"use client"
import Container from "../components/ecyce/container"
import EmailForm from "../components/home/lets-work-module/emailForm"
import Button from "../components/ecyce/buttons"
import { useState } from "react"


const ContactPage = () => {
    return (
        <div className="h-[110vh] flex justify-center items-center bg-sf-black text-sf-cream">
        <Container className="w-full min-h-[70vh] py-16 px-20 flex justify-between items-center">
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
    )
}

export default ContactPage