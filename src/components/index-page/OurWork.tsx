import React, { useRef } from 'react';
import Link from "next/link";
import { useState } from "react";
import ImageFrame from "./ImageFrame";

type Image = {
  src: string,
  title: string,
  brand: string,
  sort: string[],
  width: number,
  height: number
}

const Gallery: Image[] = [
  { src: 'images/img-07.jpg', title: 'AMBER BOTTLE', brand: 'Branding Identity', sort: ['webdesign', 'illustration'], width: 390, height: 292 },
  { src: 'images/img-08.jpg', title: 'AMBER BOTTLE', brand: 'Branding Identity', sort: ['photography', 'motiongraphic'], width: 390, height: 292 },
  { src: 'images/img-09.jpg', title: 'AMBER BOTTLE', brand: 'Branding Identity', sort: ['photography', 'webdesign'], width: 780, height: 291 },
  { src: 'images/img-10.jpg', title: 'AMBER BOTTLE', brand: 'Branding Identity', sort: ['branding', 'illustration'], width: 390, height: 583 },
  { src: 'images/img-11.jpg', title: 'AMBER BOTTLE', brand: 'Branding Identity', sort: ['branding', 'illustration'], width: 390, height: 292 },
  { src: 'images/img-12.jpg', title: 'AMBER BOTTLE', brand: 'Branding Identity', sort: ['photography', 'motiongraphic'], width: 780, height: 292 },
]

const Filters: string[] = ['all', 'photography', 'branding', 'webdesign', 'motiongraphic', 'illustration']

const OurWork = () => {
  const [filterState, setFilter] = useState('all');
  const [modalState, setModal] = useState('');
  const modalRef = useRef(null);
  function checkClickModal(e) {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModal('');
    }
  }
  return (
    <React.Fragment>
      <div id="our-work">
        <div className="info">
          <ImageFrame id="3" title="OUR WORKS" >
            <ul className="filter">
              {Filters.map((filter, idx) => {
                return (
                  <li key={idx} className={`${filterState == filter ? 'active' : ''}`}><a className="filter-choice" onClick={() => { setFilter(filter) }}>{filter}</a></li>
                )
              })}
            </ul>
            <Link href="#">
              <a className="more">view all</a>
            </Link>
          </ImageFrame>
          <div className="gallery">
            <div className="grid-layout">
              {Gallery.map((image, idx) => {
                const ratio = image.width / image.height;
                let spanType = undefined;
                if (ratio < 1.0) spanType = 'span-12';
                else if (ratio < 2.0) spanType = 'span-11';
                else spanType = 'span-21';

                let displayMode = 'show';
                if (filterState !== 'all' && !image.sort.includes(filterState)) displayMode = 'not-show'
                return (
                  <div key={idx} className={`gallery-item ${spanType} ${displayMode}`}>
                    <img src={image.src} />
                    <div className="caption">
                      <div className="caption-container">
                        <strong className="title">{image.title}</strong>
                        <p>{image.brand}</p>
                        <ul className="icons">
                          <li onClick={() => {setModal(image.src)}}><span className="icon"><i className="fas fa-arrows-alt"></i></span></li>
                          <li><span className="icon"><i className="fas fa-paperclip"></i></span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={`modal ${modalState !== '' ? 'show' : ''}`}>
        <div onClick={checkClickModal} className="modal-container">
          <div ref={modalRef} className="image">
            <i onClick={() => {setModal('')}} className="close fas fa-cut"></i>
            <img src={modalState} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default OurWork;