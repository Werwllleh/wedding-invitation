'use client';
import React, {useRef} from 'react';
import {motion} from 'framer-motion';
import useIsVisible from '@/functions/useIsVisible';

const PhotoSec = ({text, url, alt}) => {

  const sectionRef = useRef(null);
  const isVisible = useIsVisible(sectionRef);

  return (
    <motion.section
      ref={sectionRef}
      initial={{opacity: 0}}
      animate={isVisible ? {opacity: 1} : {opacity: 0}}
      transition={{duration: 0.6, ease: 'easeOut'}}
      className="photo-sec"
    >
      {text && (
        <h2 className="photo-sec__text sec-title">{text}</h2>
      )}
      <img className="photo-sec__image" src={url} alt={alt}/>
    </motion.section>

  );
};

export default PhotoSec;
