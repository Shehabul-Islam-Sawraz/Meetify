'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

interface FeatureCardProps {
    className?: string;
    img: string;
    title: string;
    description: string;
    handleClick?: () => void;
    bgImage?: string;
}

const FeatureCard = ({ className, img, title, description, handleClick, bgImage }: FeatureCardProps) => {
    return (
        <section
            className={cn(
                'bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer relative overflow-hidden',
                className
            )}
            onClick={handleClick}
        // style={{
        //     backgroundImage: `url('./images/meeting-4.jpeg')`, // Replace 'image.png' with your image path
        //     backgroundSize: 'cover',
        //     backgroundRepeat: 'no-repeat',
        //     backgroundPosition: 'center',
        //     backgroundBlendMode: 'multiply',
        //     opacity: 0.8, // Adjust this value to make the image less prominent
        // }}
        >
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${bgImage})`, // Replace with your image path
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    opacity: 0.8, // Adjust transparency
                    mixBlendMode: 'multiply', // For blending effect
                }}
            ></div>
            {/* <div className="absolute inset-0 z-0 bg-black/10"></div> */}
            <div className="flex-center glassmorphism size-12 rounded-[10px] z-10">
                <Image src={img} alt="meeting" width={27} height={27} />
            </div>

            <div className="flex flex-col gap-2 z-10">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-lg font-normal">{description}</p>
            </div>
        </section>
    );
};

export default FeatureCard;