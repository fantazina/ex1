import React, {useState} from 'react';
import '../css/Content.css';

const Content = () => {

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
                        style={{ display: "block", fontSize: '14px', fontWeight: 'normal', marginTop: '5px'}}>
                        메뉴 바로가기
                        </span>
                    </p>
                </div>
                <div className="img_container">
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
                <div className="img_box">
                    <img className="s_img_"/>
                    <img className="s_img_"/>
                    <img className="s_img_"/>

                    <div className="slide_nav">
                        <button className="btn_1"></button>
                        <button className="btn_2"></button>
                    </div>
                    <div className="slide_dots"></div>
                </div>
            </div>
        </div>
    );
};

export default Content;