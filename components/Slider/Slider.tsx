"use client";

import React, { useEffect, useRef, useState } from "react";
import NavigationButton from "./NavigationButton";
import ProductItem from "./ProductItem";
import { products } from "@/data/ProductData";
import style from "./slider.module.css";

const Slider = () => {
    // Lifespan of a slide in seconds
    const slideDuration = 5;

    // Set active index to initially be 0
    const [activeIndex, setActiveIndex] = useState(0);

    // Reference value to check if the slider area is hovered or not
    const [isHovered, setIsHovered] = useState(false);

    // Use to display the seconds in the slide
    const [seconds, setSeconds] = useState(slideDuration);

    // Store the slider container's reference later on
    const containerRef = useRef(null);

    // Scroll the slides once there is change in active index
    useEffect(() => {
        setSeconds(slideDuration);
        // Calculate the scroll offset based on the width of a ProductItem
        if (containerRef.current != null) {
            const container = containerRef.current as any;
            const scrollOffset = activeIndex * container.offsetWidth;

            // Scroll the container to the selected item
            container.scrollTo({
                left: scrollOffset,
                behavior: "smooth",
            });
        }
    }, [activeIndex]);

    // Used for automatically changing the active index and checking hover as well
    useEffect(() => {
        if (!isHovered) {
            // Only automatically change index if not hovered
            const interval = setInterval(() => {
                setActiveIndex((activeIndex + 1) % products.length);
            }, slideDuration * 1000);

            return () => clearInterval(interval);
        }
    }, [activeIndex, isHovered]);

    // Used for count down timer
    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setSeconds((second) => second - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [activeIndex, isHovered]);

    return (
        <div className="flex flex-col gap-10 max-w-full">
            {/* ------------ Product Navigation Buttons ------------ */}
            <ul className="flex justify-around w-full">
                {products.map((product, index) => {
                    return (
                        <NavigationButton
                            key={index}
                            title={product.title}
                            color={product.color}
                            onClick={() => {
                                setActiveIndex(index);
                                setSeconds(slideDuration);
                            }}
                            isActive={activeIndex === index}
                        />
                    );
                })}
            </ul>

            {/* ------------ Product Slider ------------ */}
            <div
                className={`flex flex-nowrap overflow-x-hidden w-full cursor-default ${style.container}`}
                ref={containerRef}
                onMouseEnter={() => {
                    setIsHovered(true);
                }}
                onMouseLeave={() => {
                    setIsHovered(false);
                    setSeconds(slideDuration);
                }}
            >
                <span className="absolute">
                    {isHovered ? "||" : `${seconds} seconds`}
                </span>
                {products.map((product, index) => {
                    return (
                        <ProductItem
                            key={index}
                            title={product.title}
                            color={product.color}
                            image={product.image}
                            description={product.description}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Slider;
