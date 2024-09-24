/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
import styles from './page.module.css';
import { Chelsea_Market } from 'next/font/google';
import ImageModal from './image-modal';
import SubscribeToNewsletter from './subscribe-to-newsletter';

const sections = [
  {
    title: 'Around the farm',
    images: [
      {src: '/images/al-with-calf.jpg', alt: 'Al with Calf'},
      {src: '/images/chicks.jpg', alt: 'Chicks'},
      {src: '/images/smiling-calf.jpg', alt: 'Smiling Calf'},
      {src: '/images/goat.jpg', alt: 'Goat'},
      {src: '/images/al-feeding-calf.jpg', alt: 'Al Feeding Calf'},
      {src: '/images/angela-and-al.jpg', alt: 'Angela and Al'},
    ]
  },
  {
    title: 'Fresh free range eggs and our own farm raised beef!!',
    images: [
      {src: '/images/ribs.jpg', alt: 'Al with Calf'},
      {src: '/images/egg-stack.jpg', alt: 'Chicks'},
      {src: '/images/farm-fresh-eggs.jpg', alt: 'Smiling Calf'},
      {src: '/images/stir-fry.jpg', alt: 'Goat'},
    ]
  },
]

const chelseaMarket = Chelsea_Market({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {


  const [isOpen, setIsOpen] = useState(false);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [startingImageIndex, setStartingImageIndex] = useState(0);


  const openModal = (sectionIndex: number, imageIndex: number) => {
    setActiveSectionIndex(sectionIndex);
    setStartingImageIndex(imageIndex);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={chelseaMarket.className}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          Hillbilly Heaven
        </div>
        <div className={styles.subheaderText}>
          <div>124 Murphy Rd.</div>
          <div>Schoharie, NY 12157</div>
        </div>
      </div>
      <span className={styles.topImageWrapper}>
        <img  src="/images/hilllbilly-heaven-card.webp" alt={'Hillbilly Heaven Card'} className={styles.topImage}/>
      </span>
      <div className={styles.body}>
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} >
            <div className={styles.bodyText}>{section.title}</div>
            <div className={styles.gridContainer}>
              {section.images.map((image, imageIndex) => (
                <div className={styles.gridItem} key={imageIndex}>
                  <img src={image.src} alt={image.alt} onClick={() => openModal(sectionIndex, imageIndex)}/>
                </div>
              ))}
            </div>
            {isOpen && activeSectionIndex === sectionIndex && (
              <ImageModal imageList={section.images} closeModal={closeModal} startingImageIndex={startingImageIndex}></ImageModal>
            )}
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <div className={styles.footerText}>
          Hillbilly Heaven
        </div>
        <div className={styles.footerInfoWrapper}>
          <div className={styles.contact}>
            <div className={styles.contactText}>518.994.0768 - Ang</div>
            <div>607.349.2249 - Al</div>
          </div>
          <div className={styles.address}>
            <div className={styles.addressText}>124 Murphy Road</div>
            <div>Schoharie, NY 12157</div>
          </div>
          {/* <div className={styles.subscribeWrapper}>
            <SubscribeToNewsletter />
          </div> */}
        </div>
      </div>
    </div>
  );
}

