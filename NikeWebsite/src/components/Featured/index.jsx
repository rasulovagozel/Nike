import React from "react";
import "./featured.scss";
import  { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';
const Featured = () => {
  return (
    <>
      <div className="container featured">
        <div className="row">
          <div className="col-12">
            <h2>Featured</h2>
          </div>
          <div className="col-12">
            <Swiper  navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="swiper-img">
          <div className="image">
          <img
              src="https://s3-alpha-sig.figma.com/img/e2dc/c6d3/9919e22b7774f67a62318bf7479e3944?Expires=1692576000&Signature=NhtqAFEgs0Hg5r6Cd3HG7ySv6oR2nJeyOxR8GW6xWTntB~NeMW2IU15SSgXwcHaC8WvcRZSYVDzCZC0KTzb1jQ~-BlGNfK-i7C5bQsf5A-gXU95BbKa7olTjQrcdJIUgxVCATZ7JEHN1GUByDmrPatK9v193ycpCwjlQE7bn9WqtXfhQs8lUxBU6fCOycHQg6h8Kb0cwiFoijT5MxLZvJW0zoaKBpzk3r~oQsXck0cXCn19qxojac79Mlxr3pO--h2dRPmVFzr0osRIri9NOKGwaqxK4d-aK38Qq-3UAoptOVZvcjiLHx4akr--g3vPpWJ6X0JAnhLNSDRPeG1TSIw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <img src="https://s3-alpha-sig.figma.com/img/f6da/e293/2359541876dcc5055a05f58a4051d66a?Expires=1692576000&Signature=guCYgwCcdPRZEsh-kvxL~Vs5TMURhWhauDKMA6uMOdHSRl7vHjY2z4LufHjj-WnTD4TN23oakk8tZDx5kE4CEG4~k3lV0JRtrPWg8KrVCkZfXLU9X5PUNIr75vsG~Ow1jNB1BraTOOVfxcZadkgpWHVlFg4NF14ymPAgTdRbU8sAqRqBolx6n4gk0j1REGoP8sVcLzPXTrS7HJALbPD8IDLHvsLXLDrgYW5bJPZOssI4~isu6BEZ092n-YJOfomJqiukhhsA9n6Pki-aq2~wOcAsrBHj3ADLx82ErJcH3cxr90dCCL-Dw-EUijXLxnjNNUFLIGOBziB9TrIEecXabQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
          <img
              src="https://s3-alpha-sig.figma.com/img/e2dc/c6d3/9919e22b7774f67a62318bf7479e3944?Expires=1692576000&Signature=NhtqAFEgs0Hg5r6Cd3HG7ySv6oR2nJeyOxR8GW6xWTntB~NeMW2IU15SSgXwcHaC8WvcRZSYVDzCZC0KTzb1jQ~-BlGNfK-i7C5bQsf5A-gXU95BbKa7olTjQrcdJIUgxVCATZ7JEHN1GUByDmrPatK9v193ycpCwjlQE7bn9WqtXfhQs8lUxBU6fCOycHQg6h8Kb0cwiFoijT5MxLZvJW0zoaKBpzk3r~oQsXck0cXCn19qxojac79Mlxr3pO--h2dRPmVFzr0osRIri9NOKGwaqxK4d-aK38Qq-3UAoptOVZvcjiLHx4akr--g3vPpWJ6X0JAnhLNSDRPeG1TSIw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
