import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Row, Col } from 'react-bootstrap';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../components/SwiperCustom.css';

export default function App(prop) {
  return (
    <>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="item">
            <Row className=" align-items-center">
              <Col lg={6} md={6} sm={12}>
                <div className="BannerContent">
                  {/* <h1>
                    Best Way To Buy And Sell <br /> Your Trades
                  </h1> */}
                  <p>
                  Once SPOT broke this level, it rallied$3.00
                  </p>
                  <div className="theme-btn">
                    <a className="vc_general" href="#">
                      See Details <img src="assets/images/btn-bf.png" />
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="BannerImage">
                  <img src="assets/images/01.png" />
                </div>
              </Col>
            </Row>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <Row className=" align-items-center">
              <Col lg={6} md={6} sm={12}>
                <div className="BannerContent">
                  {/* <h1>
                    Best Way To Buy And Sell <br /> Your Trades
                  </h1> */}
                  <p>
                  NIKE offered a strong sell opportunity on the daily charts, that same level was revisited and held multiple other times
                   </p>
                  <div className="theme-btn">
                    <a className="vc_general" href="#">
                      See Details <img src="assets/images/btn-bf.png" />
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="BannerImage">
                  <img src="assets/images/02.png" />
                </div>
              </Col>
            </Row>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="BannerContent">
                  {/* <h1>
                    Best Way To Buy And Sell <br /> Your Trades
                  </h1> */}
                  <p>
                  A great short term scalping tool is the
convergence of multiple Moving
Averages. The below example in DELL
led to a move of over $1.5. The stop
loss can be trailed with one of the
averages
                  </p>
                  <div className="theme-btn">
                    <a className="vc_general" href="#">
                      See Details <img src="assets/images/btn-bf.png" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="BannerImage">
                  <img src="assets/images/03.png" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
