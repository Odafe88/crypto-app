import Coins from "./coins"


export default function CoinList({ filteredCoins }) {
    return (
        <div>
            {
                filteredCoins.map(coin => {
                    return <Coins
                        key={coin.id}
                        name={coin.name}
                        id={coin.id}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        marketcap={coin.market_cap}
                        volume={coin.total_volume}
                        image={coin.image}
                        pricechange={coin.price_change_percentage_24h}
                    />
                })
            }
        </div>
    )
}