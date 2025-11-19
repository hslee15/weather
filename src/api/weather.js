import axios from "axios"
const API_KEY=import.meta.env.VITE_OPENWEATHER_API_KEY

export const fetchWeatherByCoords = async (lat,lon)=>{
    if (!API_KEY) {
        throw new Error('API 키가 설정되지 않았습니다. .env 파일에 VITE_OPENWEATHER_API_KEY를 설정해주세요.')
    }

    const res = await axios.get('https://api.openweathermap.org/data/2.5/weather',{
        params:{
            lat,
            lon,
            units:'metric',
            lang:'kr',
            appid:API_KEY
        }
    })

    return res.data
}