import styles from './Coins.module.css'
import Link from 'next/link'


const Coins = ({ name,
    price,
    symbol,
    marketcap,
    volume,
    image,
    pricechange,
    id }) => {
    return (

        <Link href='/coin/[id]' as={`/coin/${id}`}>
            <a>
                <div className={styles.coin_container}>
                    <div className={styles.coin_row}>
                        <div className={styles.coin}>
                            <img src={image} alt={name} className={styles.coin_image} />
                            <h1 className={styles.coin_name}>{name}</h1>
                            <p className={styles.coin_symbol}>{symbol}</p>
                        </div>
                        <div className={styles.coin_data}>
                            <div className={styles.coin_price_container}>
                                <p className={styles.coin_price}>${price}</p>
                            </div>
                            <div className={styles.coin_volume_container}>
                                <p className={styles.coin_volume}>${volume.toLocaleString()}</p>
                            </div>
                            <div className={styles.coin_percent_container}>
                                {
                                    pricechange < 0 ? (
                                        <p className={styles.coin_percent_red}>{pricechange.toFixed(2)}%</p>
                                    ) : (
                                        <p className={styles.coin_percent_green}>{pricechange.toFixed(2)}%</p>
                                    )
                                }
                            </div>

                            <div className={styles.coin_cap_container}>
                                <p className={styles.coin_cap}>
                                    ${marketcap.toLocaleString()}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Coins