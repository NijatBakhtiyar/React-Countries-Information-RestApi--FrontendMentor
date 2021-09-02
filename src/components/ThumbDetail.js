import React from 'react'

function ThumbDetail ({title, image_url, population, region, capital}) {
    return (
        <div className="container rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white pb-4">
            <img className="h-1/2 w-full rounded-tl-lg rounded-tr-lg" alt={title} src={image_url} />
            <div className="p-4">
                <h3 className="font-bold mb-4">{title}</h3>
                <p className="text-xs">Əhali: <span className="text-gray-700 dark:textgra">{population}</span></p>
                <p className="text-xs">Region: <span className="text-gray-700 dark:textgra">{region}</span></p>
                <p className="text-xs">Paytaxt: <span className="text-gray-700 dark:textgra">{capital}</span></p>
            </div>
        </div>
    )
}

export default ThumbDetail
