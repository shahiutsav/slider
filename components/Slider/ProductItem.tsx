import Image from "next/image";
import React from "react";

const ProductItem = ({
    title,
    color,
    description,
    image,
}: {
    title: string;
    color: string;
    description: string;
    image: string;
}) => {
    return (
        <div className={`flex flex-shrink-0 gap-24 bg-${color}-400 w-full`}>
            {/* ------------- Text Section ------------- */}
            <div className="flex flex-col gap-6 p-16">
                <h1 className="text-6xl">{title}</h1>
                <p>{description}</p>
            </div>
            {/* ------------ Image Section ------------ */}
            <Image
                src={image}
                alt="Placeholder Image"
                width={800}
                height={540}
                className="h-full w-auto"
                priority
            />
        </div>
    );
};

export default ProductItem;
