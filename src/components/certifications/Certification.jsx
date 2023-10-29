import React from 'react';
import './certification.css';
import { Data } from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Certification = () => {
  return (
    <section className="certification container section" id="certification">
      <h2 className="section__title">Certifications</h2>
      <span className="section__subtitle">Credentials of Excellence and Professional Development</span>

      <Swiper
        className="certification__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          350: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
        }}
        modules={[Autoplay, Pagination]}
      >
        <div className="swiper-wrapper">
        {Data.map(({ id, title, imageSrc, verify }) => {
          return (
          <SwiperSlide className="certification__content" key={id}>
            <div className="certification__item">
              <img src={imageSrc} alt="" className="certification__img" />
                <div className="certification__overlay">
                  <a href={verify} className="certification__button">
                      Verify <i className="fa-solid fa-external-link"></i>
                  </a>
                </div>
            </div>
            <h2 className="certification__title">{title}</h2>
          </SwiperSlide>
          );
          })}
        </div>
      </Swiper>

    </section>
  );
};

export default Certification;