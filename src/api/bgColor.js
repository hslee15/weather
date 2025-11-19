// weatherId: OpenWeather 코드 (예: 500, 801, 611, 800 등)
export const getColorByWeatherId = (weatherId) => {
    if (weatherId === 800) return 'linear-gradient(180deg,rgba(34, 193, 195, 1) 0%, rgba(45, 204, 253, 1) 100%)'; // 맑음: 따뜻한 노랑(amber-300)

    const group = Math.floor(weatherId / 100); // 2,3,5,6,7,8...

    switch (group) {
        case 2: // 뇌우: 어두운 하늘 + 인디고 번쩍
            return 'linear-gradient(180deg,rgba(8, 0, 0, 1) 0%, rgba(15, 73, 143, 1) 70%)';
        case 3: // 이슬비: 옅은 청록 → 연한 하늘
            return 'linear-gradient(180deg,rgba(0, 60, 77, 1) 9%, rgba(66, 157, 255, 0.68) 70%)';
        case 5: // 비: 블루 톤 딥 → 라이트
            return 'linear-gradient(180deg,rgba(77, 77, 77, 1) 9%, rgba(60, 143, 195, 1) 70%)';
        case 6: // 눈: 화이트에 살짝 아이스블루
            return 'linear-gradient(180deg, #E0F7FA 0%, #FFFFFF 70%)';
        case 7: // 안개/먼지: 소프트 그레이 → 블루그레이
            return 'linear-gradient(180deg, #BFC7CE 0%, #E4EBF0 80%)';
        case 8: // 구름: 라이트 슬레이트 → 미드 슬레이트
            return 'linear-gradient(180deg,rgba(161, 161, 161, 1) 41%, rgba(104, 160, 179, 1) 100%)';
        default: // 예외
            return 'linear-gradient(135deg, #CBD5E1 0%, #64748B 100%)';
    }
};
