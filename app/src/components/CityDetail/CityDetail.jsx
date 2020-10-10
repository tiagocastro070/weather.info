import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RiSendPlaneLine } from 'react-icons/ri';
import { AiOutlineBarChart, AiOutlineLineChart } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import Chart from 'react-apexcharts';
import api from '../../api';

import { 
  BackBtn,
  CityMain,
  CityTitle,
  ChartToggle,
  ChartBarTitle,
  ChartBar,
  ChartBarItem,
  ChartBarColumn
} from './style';

function CityDetail() {

  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState([]);
  const [details, setDetails] = useState({});
  
  const { city } = useParams()

  useEffect(() => {
    setLoading(true);
    async function getInfo() {
      const { data } = await api.get(`/weather/${city}`)
      setDetails(data.data);
      setDays(data.data.forecast.forecastday);
      setLoading(false);
    }
    getInfo()
  }, [city]);
  
  const [chartType, setChartType] = useState(true);

  const settings = {
    options: {
      chart: {
        id: "basic-bar",
        width: '100%',
        toolbar: {
          show: false
        },
      },
      colors : ['#ffc107', '#007bff'],
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: days.map(({ date }) => date)
      }
    },
    series: [
      {
        name: "Max Temp",
        data: days.map(({ day }) => day.maxtemp_c)
      },
      {
        name: "Min Temp",
        data: days.map(({ day }) => day.mintemp_c)
      }
    ],
    
  }
  
  return (
    <React.Fragment>
      {loading ? 'Fetching Data...' : (
        <React.Fragment>
          <BackBtn to="/"><IoIosArrowBack /> All Cities</BackBtn>
          <CityMain>
            <span>
              <img src={details.current.condition.icon} alt={details.current.condition.text} />
              {details.current.temp_c}
            </span>
            <div>
              <CityTitle>{details.location.name}</CityTitle>
              <a href={`http://www.google.com/maps/place/${details.location.lat},${details.location.lon}`} target="_blank" rel="noopener noreferrer">
                <RiSendPlaneLine />{details.location.country}
              </a>
            </div>
          </CityMain>

          <ChartBarTitle>
            Next {details.forecast.forecastday.length} Days
            <ChartToggle onClick={() => setChartType(!chartType)}>{chartType ? <AiOutlineLineChart /> : <AiOutlineBarChart />}</ChartToggle>
          </ChartBarTitle>

          <div style={{ display: chartType ? 'block' : 'none' }}>
            <ChartBar>
            {details.forecast.forecastday.map((day, index) => (
              <ChartBarItem key={index}>
                <p>{String(new Date(day.date)).split(' ')[0]}</p>
                <img src={day.day.condition.icon} alt={day.day.condition.text} />
                <ChartBarColumn>
                  <span style={{ width: `${(day.day.maxtemp_c * 100) / 50}%` }}></span>
                  <p>{day.day.maxtemp_c}º</p>
                </ChartBarColumn>
              </ChartBarItem>
            ))}
            </ChartBar>
          </div>

          <div style={{ display: !chartType ? 'block' : 'none' }}>
            <Chart
              options={settings.options}
              series={settings.series}
              type="area"
            />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default CityDetail;