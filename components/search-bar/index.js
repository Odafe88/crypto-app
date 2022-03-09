import styles from './Search.module.css'

const SearchBar = ({ ...otherProps }) => {
    return (
        <div className={styles.coin_search}>
            <input className={styles.coin_input} {...otherProps} />
        </div>
    )
}

export default SearchBar