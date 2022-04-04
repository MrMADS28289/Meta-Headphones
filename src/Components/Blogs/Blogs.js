import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-2xl text-center m-7'>QNA</h1>
            <div className='flex flex-col m-4 p-4 items-center bg-[#FAFAFA]'>
                <h1 className='text-2xl'>What is context api?</h1>
                <p>
                    কন্টেক্সট এ,পি,আই প্রতিটি স্তরে ম্যানুয়ালি প্রপস ডাউন না করেই কম্পনেন্ট ট্রির মাধ্যমে ডেটা পাস করার একটি উপায় সরবরাহ করে।
                    একটি সাধারণ রিঅ্যাক্ট অ্যাপ্লিকেশনে, প্রপসের মাধ্যমে ডেটা টপ-ডাউন (প্যারেন্টের কাছে) পাস করা হয়, কিন্তু এই ধরনের ব্যবহার নির্দিষ্ট ধরনের প্রপসের জন্য কষ্টকর হতে পারে (যেমন লোকাল প্রিফারেন্স, UI থিম) যা একটি অ্যাপ্লিকেশনের মধ্যে অনেক কম্পনেন্ট এর জন্য প্রয়োজন। প্রসঙ্গ ট্রির প্রতিটি স্তরের মধ্য দিয়ে স্পষ্টভাবে একটি প্রপস পাস না করে কম্পনেন্ট এর মধ্যে এই জাতীয় মানগুলি ভাগ করার একটি উপায় দিয়ে থাকে।
                </p>
            </div>
            <div className='flex flex-col m-4 p-4 items-center bg-[#FAFAFA]'>
                <h1 className='text-2xl'>what is symantic tag?</h1>
                <p>
                    সিমান্টিক ট্যাগ ব্রাউজার এবং ডেভেলপার উভয়ের কাছে এর অর্থ স্পষ্টভাবে বর্ণনা করে। অ-আর্থিক সিমান্টিক ট্যাগ উদাহরণ: div এবং span - এর বিষয়বস্তু সম্পর্কে কিছুই বলে না।সিমান্টিক ট্যাগের উপাদানের উদাহরণ: form , table , এবং article - স্পষ্টভাবে এর বিষয়বস্তু সংজ্ঞায়িত করে।
                </p>
                <img src="https://www.w3schools.com/html/img_sem_elements.gif" alt="" />
            </div>
            <div className='flex flex-col m-8 p-8 items-center bg-[#FAFAFA]'>
                <h1 className='text-2xl'>Defferent between inline , block , inlineBlock?</h1>
                <p>
                    ১। ইনলাইন সব ইলিমেন্ট এক লাইনে থাকে।
                    ২। ব্লোক সব এলিমেন্ট আলাদা লাইনে থাকে।
                    ৩। ইনলাইন-ব্লোক ইলিমেন্ট সব একলাইনে থাকে কিন্তু হাইট ওয়েড ভিন্ন থাকতে পারে, ইনলাইন থাকে কিন্তু আচরন ব্লোক এর মতো।
                </p>
            </div>
        </div>
    );
};

export default Blogs;