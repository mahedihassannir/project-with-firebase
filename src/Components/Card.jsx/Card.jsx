import React from 'react';

const Card = () => {
    return (
        <div>
            <div className='w-[400px] ml-5 h-[500px] relative  border-2 shadow-lg p-2'>

                <div>
                    <div>

                        <img className='h-[200px] w-full' src="data:image/jpeg;base64,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" alt="" />

                    </div>

                    <div className='pl-5 pt-5'>
                        <h1>my name is mahedi hassan</h1>
                        <p className='py-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt labore perspiciatis nulla. Placeat, excepturi officiis. Dolorum deleniti a impedit, illum voluptas recusandae enim blanditiis mollitia ipsam doloremque aperiam suscipit hic!</p>
                    </div>

                    
                    <div>
                        <button className=' hover:bg-red-200 hover:font-bold hover:text-white   absolute bottom-0 w-full py-5 bg-green-300 '>Add to cart</button>

                    </div>



                </div>
                

            </div>
        </div>
    );
};

export default Card;