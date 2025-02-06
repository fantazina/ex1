import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const KakaoMap = () => {
    const [mapReady, setMapReady] = useState(false);

    useEffect(() => {
        // 카카오맵 API 스크립트가 로드되었는지 확인
        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=7757807c5a1c4c787e7289559e33b6d5`;

        // 스크립트가 정상적으로 로드되었을 때 실행
        script.onload = () => {
            if (window.Kakao) {
                console.log("카카오맵 API 로드 성공");
                setMapReady(true); // mapReady 상태를 true로 변경
            } else {
                console.error("카카오맵 API 로드 실패 - Kakao 객체가 없음");
            }
        };

        // 스크립트 로드 에러 처리
        script.onerror = () => {
            console.error("카카오맵 API 로드 실패 - 네트워크 오류");
        };

        // 스크립트를 head에 삽입하여 로드
        document.head.appendChild(script);

        // 컴포넌트가 언마운트되면 스크립트 제거
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div>
            {mapReady ? (
                <Map
                    center={{ lat: 33.5563, lng: 126.79581 }} // 지도 중심 좌표
                    style={{ width: '100%', height: '460px' }} // 지도 크기
                    level={3} // 지도 확대 레벨
                >
                    <MapMarker position={{ lat: 33.55635, lng: 126.795841 }} /> {/* 마커 추가 */}
                </Map>
            ) : (
                <div>카카오맵을 로드 중입니다...</div> // API가 로드되지 않았다면 로딩 메시지 출력
            )}
        </div>
    );
};

export default KakaoMap;