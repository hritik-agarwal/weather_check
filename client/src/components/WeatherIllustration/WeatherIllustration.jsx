import styles from './WeatherIllustration.module.css'

function WeatherIllustration({display}) {
  if (!display) return <></>

  return (
    <div className={styles.weatherIllustration}>
      <img src={require('../../assets/weather.png')} alt='' />
    </div>
  )
}
export default WeatherIllustration
