"use client"
import React from 'react';

interface ItemProps {
    label: string;
    color: string;
    id: string;
}

const Item: React.FC<ItemProps> = ({ id, color, label }) => {
    return (
        <div
            className={`w-full h-full flex items-center justify-center text-white text-4xl cursor-pointer select-none relative ${color} rounded-[20px]`}
            data-swapy-item={id}
        >
            <div>{label}</div>
        </div>
    );
};

export default Item;