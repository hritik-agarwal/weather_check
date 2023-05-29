import styles from './SelectedItemList.module.css'

const Item = ({item, active, onClick}) => {
  const {name} = item
  return (
    <div
      onClick={item => onClick(name)}
      className={styles.selectedCity}
      style={name === active ? {backgroundColor: '#ec6e4c'} : {}}>
      {name}
    </div>
  )
}

function SelectedItemList({data, active, onClick}) {
  if (data.length === 0) return <></>

  return (
    <div className={styles.selectedCitiesContainer}>
      <div className={styles.selectedCitiesBox}>
        {data.map(item => {
          return (
            <Item
              key={item.name}
              item={item}
              onClick={onClick}
              active={active}
            />
          )
        })}
      </div>
    </div>
  )
}
export default SelectedItemList
