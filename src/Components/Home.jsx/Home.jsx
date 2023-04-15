import React from 'react';

import Lottie from "lottie-react";
import anme from "./aname.json";
import Card from '../Card.jsx/Card';


const Home = () => {
    return (
        <div>

            <div className='flex h-screen items-center'>
                <div className='w-1/2 ml-10'>
                    <h1 className='text-4xl'>Hi there I am Mahedi </h1>
                    <p className='py-5 w-11/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt placeat illo eligendi! Ratione consequatur, quos ut suscipit veritatis sunt ea? Harum assumenda blanditiis perspiciatis voluptate laboriosam odit non autem nesciunt sunt. Autem accusantium corporis illum dolore, temporibus veritatis illo aut incidunt animi placeat facilis quisquam nesciunt, unde quo alias cumque!</p>
                    <button>Read more</button>
                </div>

                <div className='w-1/2'>
                    <Lottie animationData={anme} />
                </div>
            </div>

            <div>
                <Card> </Card>

            </div>

        </div>
    );
};

export default Home;