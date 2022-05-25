import React from 'react';
import { NavLink } from 'react-router-dom';
import LogOutButton from '../components/LogOutButton';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import styles from '../styles/styles.module.css';
import apiRequest from '../api/api';

class HomePage extends React.Component {
    state = {
        city : '',
        cityFound : false,
        noErrors : true,
        apiNoBadRequest : false,
        weatherInfo : 0,
    }

    componentDidUpdate() {
        const city = this.state.city
        const setWeatherInfo = (weatherInfo: number) => {
            this.setState({ weatherInfo: weatherInfo })
        }
        const setApiNoBadRequest = (apiNoBadRequest: boolean) => {
            this.setState({ apiNoBadRequest: apiNoBadRequest })
        }
        const setNoErrors = (noErrors: boolean) => {
            this.setState({ noErrors: noErrors })
        }
        async function apiHandler() { 
            try{
                const weather = await apiRequest(city);
                setWeatherInfo(parseFloat((weather - 273.15).toFixed(2)));
                setApiNoBadRequest(true);
            } catch(e){
                setNoErrors(false);
            }
        }
        if (this.state.cityFound) {
            apiHandler()
        }
    }
    render() {
        return (
            <div>
                <NavLink 
                to={"/survey"} 
                className={styles.toSurvey}
                > 
                Take a survey
                </NavLink>
                <form className={styles.weather}>
                    {this.state.cityFound == true && this.state.apiNoBadRequest == true || this.state.noErrors == false ?
                        this.state.noErrors == true ?
                            <p>Average temperature today in {this.state.city} is: {this.state.weatherInfo}°C</p>
                            :
                            <p>City not found!</p>
                    :
                    [
                        <TextInput 
                        type='text' 
                        placeholder='Write your city to check weather' 
                        classStyle={styles.cityFind} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {this.setState({city: e.target.value})}} 
                        />,
                        <Button 
                        type="button" 
                        text='Check' 
                        classStyle={styles.cityFindButton}
                        onClick={() => {
                            this.setState({cityFound: true});
                        }}
                        />
                    ]
                    }
                </form>
                <LogOutButton />
            </div>
        );
    }
};

export default HomePage;