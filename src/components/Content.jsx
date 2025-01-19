import React, {useRef} from 'react';
import '../css/Content.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Content = () => {
    let sliderRef = useRef(null);

    const numbers = [1, 2, 3, 4, 5, 6];

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        // centerMode: true,
        // centerPadding: '0',
    };

    return (
        <div className="content_container">
            <div className="content_1"></div>
            <img className="img_1"/>
            <div className="point_box">
                <span></span>
            </div>
            <div className="container2">
                <div className="p_div">
                    <p>Menu shortcuts
                        <span
                            style={{display: "block", fontSize: '14px', fontWeight: 'normal', marginTop: '5px'}}>
                        메뉴 바로가기
                        </span>
                    </p>
                </div>
                <div className="img_container">
                    <div className="img_link">
                        <div className="link_div">
                            <a href=""><img/>인사말</a>
                        </div>
                        <div className="link_div">
                            <a href=""><img/>업무소개</a>
                        </div>
                        <div className="link_div">
                            <a href=""><img/>기장대리</a>
                        </div>
                        <div className="link_div">
                            <a href=""><img/>상담신청</a>
                        </div>
                        <div className="link_div">
                            <a href=""><img/>블로그</a>
                        </div>
                        <div className="link_div">
                            <a href=""><img/>오시는길</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="point_box2"></div>

            <div className="container3">
                <div className="p_div2">
                    <p>Consultation review
                        <span
                            style={{display: "block", fontSize: '16px', fontWeight: 'normal', marginTop: '5px'}}>
                        상담후기
                        </span>
                    </p>
                </div>

                <div className="img_container2">

                    <Slider {...settings}>{numbers.map((num, index) => (
                        <div className="img_box">
                            <div className="s_img_" key={index}></div>
                        </div> ))}
                    </Slider>


                    <div className="slide_nav">
                        <button className="btn_1"></button>
                        <button className="btn_2"></button>
                    </div>
                    <div className="slide_dots">
                        <button className="dots_btn"><span></span></button>
                        <button className="dots_btn"><span></span></button>
                        <button className="dots_btn"><span></span></button>
                        <button className="dots_btn"><span></span></button>
                    </div>
                    <div className="plus_btn"><a href="#">상담후기 더보기 +</a></div>
                </div>
            </div>

            <div className="point_box3"></div>

            <div className="container5">
                <div className="img_3">프로세스 이미지</div>
            </div>

            <div className="point_box4"></div>

            <div className="container4">
                <div className="img_4">고객사</div>
            </div>

            <div className="point_box5"></div>

            <div className="container4">
                <div className="img_5">서비스이미지</div>
            </div>
            <div className="point_box6"></div>
            <div className="container3">
                <div className="p_div2">
                    <p>Directions
                        <span
                            style={{display: 'block', fontSize: '16px', fontWeight: 'normal', marginTop: '5px'}}>
                        오시는길
                        </span>
                    </p>
                </div>
                <div className="container6">지도컨테이너
                    <div className="map_"></div>
                </div>
                <span className="empty_line"></span>
                <div className="btm_box">
                    <div className="div_con">
                        <div className="div_1">
                            <div>
                                <div className="title_"><p>성공세무회계</p></div>
                                <div className="text_1"><p>경기도 고양이가 세상을 지배한다 고양이 최고</p></div>
                                <div className="text_1"><p>대표전화 : 000-000-0000</p></div>
                                <div className="text_1"><p>E-mail : asdwe123@asdf.com</p></div>
                            </div>
                        </div>
                    </div>

                    <div className="div_con">
                        <div className="div_2">
                            <div>
                                <div className="title_"><p>평일: 09:30 - 18:00</p></div>
                                <div className="text_1"><p>주말 및 공휴일 휴무</p></div>
                            </div>
                        </div>
                    </div>

                    <div className="div_con">
                        <div className="div_3">
                            <div>
                                <div className="text_2"><p>어쩌구회계사</p></div>
                            </div>
                        </div>
                    </div>

                </div>
                <span className="empty_line2"></span>
                <span className="empty_line"></span>
                <div className="last_container">
                    <div className="last_link"></div>
                    <div className="last_link"></div>
                    <div className="last_link"></div>
                    <div className="last_link"></div>
                    <div className="last_link"></div>
                    <div className="last_link"></div>
                </div>
                <div>아래여백</div>
            </div>

        </div>
    );
};

export default Content;