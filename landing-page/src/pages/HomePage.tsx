import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogOutButton from '../components/LogOutButton';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import styles from '../styles/styles.module.css';
import apiRequest from '../api/api';

const HomePage = () => {
    const [city, setCity] = useState('');
    const [cityFound, setCityFound] = useState(false);
    const [noErrors, setNoErrors] = useState(true);
    const [apiNoBadRequest, setApiNoBadRequest] = useState(false)
    const [weatherInfo, setWeatherInfo] = useState(0);
    const isMounted = useRef(false);

    useEffect(() => {
        async function apiHandler() { 
            try{
                const weather = await apiRequest(city);
                setWeatherInfo(parseFloat((weather - 273.15).toFixed(2)));
                setApiNoBadRequest(true);
            } catch(e){
                setNoErrors(false);
            }
        }
        if (isMounted.current){
            apiHandler();
        } else {
            isMounted.current = true;
        }
    }, [cityFound]);

    return (
        <div>
            <NavLink 
            to={"/survey"} 
            className={styles.toSurvey}
            > 
            Take a survey
            </NavLink>
            <form className={styles.weather}>
                {cityFound == true && apiNoBadRequest == true || noErrors == false ?
                    noErrors == true ?
                        <p>Average temperature today in {city} is: {weatherInfo}°C</p>
                        :
                        <p>City not found!</p>
                :
                [
                    <TextInput 
                    type='text' 
                    placeholder='Write your city to check weather' 
                    classStyle={styles.cityFind} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setCity(e.target.value)}} 
                    />,
                    <Button 
                    type="button" 
                    text='Check' 
                    classStyle={styles.cityFindButton}
                    onClick={() => {
                        setCityFound(true);
                    }}
                    />
                ]
                }
            </form>
            <LogOutButton />
        </div>
    );
};

export default HomePage;