import React, { useEffect, useRef} from 'react';
import './gallery.css';

const GalleryItem = ({id, image}) => {
    const itemRef = useRef(null)

    useEffect(()=>{
        const timeout = setTimeout(() => {
            itemRef.current.classList.add('visible');
          }, 1000);
        return () => {
            clearTimeout(timeout);
        };    
    }, [])
            
    return (
       <div id={`gallery-itm-${id}`} className='gallery-item' ref={itemRef}>
            {image}
        
        </div>
    );
};

export default GalleryItem;