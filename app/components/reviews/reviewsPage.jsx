import React from 'react'
import Container from '../ecyce/container';
import Image from 'next/image';

const ReviewsPage = () => {
    return (
        <div className="w-full bg-sf-black text-sf-cream flex flex-col justify-center">
          <Container className={"w-full px-20 py-72 grid grid-cols-12"}>
            <div className='bg-red-500/20 col-span-12'>
                <div className='flex space-x-16'>
                    <h1 className='text-heading bold-neue'>Expert allies</h1>
                    <Image/>
                    <h1 className='text-heading bold-neue'>Shaping future success</h1>
                </div>

                <div id='logos-container'></div>
            </div>

            <div className='col-span-12'>
                <h2 className='text-smallHeading bold-neue'>Hear it from them!</h2>
                <div id='bento-grid' className='bg-blue-500/20 h-96'>
                </div>
            </div>
          </Container>
        </div>
      );
}

export default ReviewsPage