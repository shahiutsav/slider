"use client";

import React, { useEffect, useRef, useState } from "react";
import NavigationButton from "./NavigationButton";
import ProductItem from "./ProductItem";
import { products } from "@/data/ProductData";
import style from "./slider.module.css";

const Slider = () => {
    const [slideDuration, setSlideDuration] = useState(10000);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [seconds, setSeconds] = useState(0);

    const containerRef = useRef(null);

    // Used for scrolling animation
    useEffect(() => {
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

    // Used for automatically setting the active index and checking hover as well
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                setActiveIndex((activeIndex + 1) % products.length);
            }
        }, slideDuration);
        console.log("I am changing in ", slideDuration);

        return () => clearInterval(interval);
    }, [activeIndex, isHovered]);

    // Checker function for count up timer
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((seconds) => 10 - (seconds + 1));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col gap-10">
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
                            }}
                            active={activeIndex === index}
                        />
                    );
                })}
            </ul>

            {/* ------------ Product Slider ------------ */}
            <div
                className={`flex flex-nowrap overflow-x-hidden w-full ${style.container}`}
                ref={containerRef}
                onMouseEnter={() => {
                    setIsHovered(true);
                }}
                onMouseLeave={() => {
                    setIsHovered(false);
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
