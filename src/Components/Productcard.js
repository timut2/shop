import React, { useState, useEffect } from 'react';
import './Styles/Main.css';

const ProductCard = () => {
    const images = [
        require('./image1.jpg'),
        require('./image2.jpg'),
        require('./image3.jpg'),
        require('./image4.jpg'),
        require('./image5.jpg'),
        require('./image6.jpg')
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setSelectedImage(images[index]);
    };


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval); 
    }, [images.length]);
    
    useEffect(() => {
        setSelectedImage(images[currentIndex]);
    }, [currentIndex, images]);

    return (
        <div className="product-card">
            <div className="product-gallery">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Товар ${index + 1}`}
                        className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => handleImageClick(index)}
                    />
                ))}
            </div>
            <img src={selectedImage} alt="Выбранное изображение" className="full" />
        </div>
    );
};

export default ProductCard;
