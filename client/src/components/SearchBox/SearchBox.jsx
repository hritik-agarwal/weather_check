import styles from './SearchBox.module.css'

const Suggestion = ({item, onClick}) => {
  const {name, state = '', country = ''} = item
  const search_result = `${name}, ${state}, ${country}`
  return (
    <div className={styles.suggestion} onClick={() => onClick(item)}>
      {search_result}
    </div>
  )
}

function SearchBox({value, suggestions, onChange, onSuggestionClick}) {
  return (
    <div className={styles.searchBox}>
      <input
        type='text'
        value={value}
        onChange={onChange}
        placeholder='Search your city...'
      />
      <div className={styles.searchSuggestionBox}>
        {suggestions.map((item, index) => (
          <Suggestion key={index} item={item} onClick={onSuggestionClick} />
        ))}
      </div>
    </div>
  )
}
export default SearchBox
