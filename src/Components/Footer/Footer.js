import React from 'react';
import { HeartIcon } from '@heroicons/react/solid'

const Footer = () => {

    return (
        <div className='bg-[#275ec2] flex items-center justify-center h-24 mt-72'>
            <h1 className='flex text-yellow-50'>Created With <HeartIcon className='h-6 w-6' /> By Mr.Mads</h1>
        </div>
    );
};

export default Footer;