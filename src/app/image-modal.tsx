/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import styles from './image-modal.module.css';

import { useState } from "react";

interface ImageModalProps {
    imageList: { src: string; alt: string }[];
    closeModal: () => void;
    startingImageIndex: number;
  }

export default function ImageModal({ imageList, closeModal, startingImageIndex }: ImageModalProps) {

  const [currentIndex, setCurrentIndex] = useState(startingImageIndex);


    const handleNext = (e: any) => {
        e.stopPropagation();
        setCurrentIndex((prevIndex) =>
          prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      const handlePrevious = (e: any) => {
        e.stopPropagation();
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
        );
      };
    
      const handleKeyPress = (e: any) => {
        if (e.key === 'ArrowRight') {
          handleNext(e);
        } else if (e.key === 'ArrowLeft') {
          handlePrevious(e);
        } else if (e.key === 'Escape') {
          closeModal();
        }
      };

    return (
        
        <div
          className={styles.modal}
          onClick={closeModal}
          onKeyDown={handleKeyPress}
          tabIndex={0}
        >
          <span className={styles.close} onClick={closeModal}>
            &times;
          </span>
          <button className={styles.prev} onClick={handlePrevious}>
            &#10094;
          </button>
          <img
            className={styles.modalContent}
            src={imageList[currentIndex].src}
            alt={imageList[currentIndex].alt}
          />
          <button className={styles.next} onClick={handleNext}>
            &#10095;
          </button>
        </div>
          
    )
}
