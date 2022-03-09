import { useState } from 'react';

import Layout from '../components/Layout';
import CoinList from '../components/CoinList';
import SearchBar from '../components/search-bar';

export default function Home({ filteredCoins }) {
  const [search, setSearch] = useState('')

  const allCoins = filteredCoins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())

  )

  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase())
  }

  return (
    <Layout>
      <div className='coin_app'>
        <SearchBar type="text" placeholder="Search" onChange={handleChange} />
        <div className='coins_header'>
          <div className='coins_header_container'>
            <div className='coins_name'>
              <p>Name</p>
            </div>
            <div className='coins_data'>
              <p className='coins_price'>Price</p>
              <p className='coins_volume'>Volume</p>
              <p className='coins_percent' >24h%</p>
              <p className='coin_cap'>Marketcap</p>

            </div>
          </div>
        </div>
        <CoinList filteredCoins={allCoins} />
      </div>

    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');

  const filteredCoins = await res.json()

  return { props: { filteredCoins } }

}
