import React, { useState, useEffect } from 'react';
import './gallery.css';
import GalleryItem from './GalleryItem';

const Gallery = () => {
  const [curr, setCurr] = useState(0);

  const images = [
  {
    image:1,
    text:"This is the first picture"},
  {
    image:2,
    text:"This is the second"},
  {
    image:3,
    text:"This is ur mom"},
  {
    image:4,
    text:"This is sommadeez"},
  {
    image:5,
    text:"This is world domination"},
  ];

  const galleryItems = images.map((image, idx) => 
    <GalleryItem id={idx} image={image.image} key={idx}/>
  );

  const handleOnClick = (e) => {
      e.preventDefault()
      e.stopPropagation()
      setCurr(parseInt(e.target.value))
    }
  useEffect(() => {
    const time = 4000;
    const interval = setInterval(() => {
      setCurr((prev) => (prev + 1) % images.length);
    }, time);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="gallery-cont">
      {galleryItems[curr]}
      <h2 className='gallery-item-name'>{images[curr].text}</h2>
      <div className='gallery-slider'>
        {images.map((_ , idx) => 
          <button 
            value={idx} 
            onClick={handleOnClick}
            className={`gallery-slider-btn ${curr === idx ? 'active-slider-btn': ''}`}  
          />
        )}
      </div>
    </div>
  );
};

export default Gallery;
