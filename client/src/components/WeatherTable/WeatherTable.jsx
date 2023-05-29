import styles from './WeatherTable.module.css'

const TableRow = ({item, index}) => {
  const {dt, humidity, wind_speed, temp, weather} = item
  const {icon, description} = weather[0]

  const date = new Date(dt * 1000).toDateString()
  const windSpeed = Math.round(wind_speed * 3.6)
  const weatherIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`

  return (
    <tr>
      <td>{date}</td>
      <td className={styles.temperature}>
        <div className={styles.weatherIconContainer}>
          <img
            alt='weather icon'
            src={weatherIcon}
            className={styles.weatherIcon}
          />
          <span className={styles.description}>{description}</span>
        </div>
        <div className={styles.tempContainer}>
          <div>
            <span className={styles.highTemp}>{temp.max}&deg;C</span>
            <span className={styles.lowTemp}>/ {temp.min}&deg;C</span>
          </div>
        </div>
      </td>
      <td>{windSpeed} km/hr</td>
      <td>{humidity}%</td>
    </tr>
  )
}

function WeatherTable({ data, city }) {
  if (Object.keys(data).length === 0) return <></>

  return (
    <div className={styles.weatherDetailContainer}>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temperature</th>
            <th>Wind Speed</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {data[city]?.map((item, index) => (
            <TableRow key={item.dt} item={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default WeatherTable
