import React from 'react'
import Container from '../../ecyce/container'
import Image from "next/image";
import benCollins from "@/app/images/logos/BenCollins.svg";
import kia from "@/app/images/logos/Kia.svg";
import oracle from "@/app/images/logos/Oracle.svg";
import sandbox from "@/app/images/logos/Sandbox.svg";
import slack from "@/app/images/logos/Slack.svg";
import Testimonials from './testimonials';
import Button from '../../ecyce/buttons';

const SecondSec = () => {
    const images = [benCollins, kia, oracle, sandbox, slack];

  return (
    <div className="w-full bg-sf-black text-sf-cream flex flex-col pb-48">
        <Container className={'flex flex-col justify-center items-center'}>
            <h1 className='text-heading bold-neue text-center'>Fostering success <b className='text-sf-lime'>&</b> Shaping the future</h1>
            <h2 className='text-2xl mt-8 mb-16 text-center'>We take our clients seriously and work in partnership, valuing their trust and commitment to us.</h2>
            <div className='flex items-center justify-center gap-24 mb-16'>
                {images.map((image, index) => (
                    <Image key={index} src={image}/>
                ))}
            </div>
            <Testimonials/>
            <Button type={'outline'} text={'Check out their experience!'}/>
        </Container>
    </div>
  )
}

export default SecondSec