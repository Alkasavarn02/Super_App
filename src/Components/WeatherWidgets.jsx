import { useEffect, useState } from "react";
import styles from "./WeatherWidgets.module.css"
import TodayDate from "./TodayDateComponents";
import TodayTime from "./TodayTimeComponents";
import WeatherCondition from "./WeatherCondition";
import weatherApi from "../Api/WeatherApi";
import VerticalLine from "./VerticalLine";
import TemperatureCondition from "./TemperatureCondition";
import tempMeter from "../assets/tempMeter.png";
import WindAndHumidCondition from "./WindComponents";
import Wind from "../assets/wind.png";
import Drop from "../assets/drop.png";

function WeatherWidgets({
    dateAndTimeHeight,
    dateAndTimeFont,
    dateAndTimeGap,
    weatherSectionHeight,
    verticalLineHeight,
    weatherImgWidth,
    weatherImgHeight,
    weatherFontSize,
    tempSectionGap,
    tempFont,
    degreeFont,
    tempGap,
    tempIconImg,
    tempParaFont,
    tempWidth,
    windAndHumidFont,
    windAndHumidImg,
    windAndHumidContainer,
    windAndHumidGap
    }){

    const [weatherData,setWeatherData] = useState({});

    useEffect(()=>{
        weatherApi("saharsa")
        .then((res)=>{return res.json()})
        .then((data)=>setWeatherData(data))
    },[])
    
    return (
        <>
            <div className={styles.dateAndTimeSection} style={{height:dateAndTimeHeight,fontSize:dateAndTimeFont,gap:dateAndTimeGap}}>
                <div><TodayDate/></div>
                <div><TodayTime/></div>
            </div>

            <div className={styles.weatherSection} style={{height:weatherSectionHeight}}>

                <WeatherCondition
                    condition={weatherData?.current?.condition?.text}
                    image={weatherData?.current?.condition?.icon}
                    weatherImgWidth={weatherImgWidth}
                    weatherImgHeight={weatherImgHeight}
                    weatherFontSize={weatherFontSize}
                />

                <VerticalLine height={verticalLineHeight}/>
                
                <TemperatureCondition
                    temperature={weatherData?.current?.temp_c}
                    image={tempMeter}
                    pressure={weatherData?.current?.pressure_mb}
                    tempSectionGap={tempSectionGap}
                    tempFont={tempFont}
                    degreeFont={degreeFont}
                    tempGap={tempGap}
                    tempIconImg = {tempIconImg}
                    tempParaFont = {tempParaFont}
                    tempWidth = {tempWidth}
                />

                <VerticalLine height={verticalLineHeight}/>

                <div className={styles.windAndHumidCondition} style={{gap:windAndHumidGap}}>
                    <WindAndHumidCondition
                        image={Wind}
                        Condition={`${weatherData?.current?.wind_kph} km/h Wind`}
                        windAndHumidFont={windAndHumidFont}
                        windAndHumidImg={windAndHumidImg}
                        windAndHumidContainer={windAndHumidContainer}
                    />
                    <WindAndHumidCondition
                        image={Drop}
                        Condition={`${weatherData?.current?.humidity} % Humidity`}
                        width="20px" gap="20px"
                        windAndHumidFont={windAndHumidFont}
                        windAndHumidImg={windAndHumidImg}
                        windAndHumidContainer={windAndHumidContainer}
                    />
                </div>
            </div>
        </>
    );
}

export default WeatherWidgets;