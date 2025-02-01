import React from 'react';
import {Map} from "react-kakao-maps-sdk";

const KakaoMap = () => {

    return (
        <Map center={{lat: 37.2691, lng: 131.8650}}
             style={{width: '100%', height: '100%'}}
             level={3}
        />
    );
};

export default KakaoMap;