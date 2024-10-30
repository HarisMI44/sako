// import { useState } from 'react'
import headerImage from './assets/header.jpg'
// import viteLogo from '/vite.svg'
import './App.css'
import Tabungan from '../components/Tabungan/Tabungan'

function App() {

  return (
    <>
      <header>
        <img className="header" src={headerImage} />
      </header>

      <div className="container">
        <section id="jadwalHarian">
          <div className="nama_hari">
            <div>Senin</div>
            <div>Selasa</div>
            <div>Rabu</div>
            <div>Kamis</div>
            <div>Jum'at</div>
            <div>Sabtu</div>
            <div>Minggu</div>
          </div>


          <div className="input_catetan_hari">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>


        <section id='catatan' className='catatan'>
          <div className='catatanContainer'>
            <h1>Catatan</h1>
            <div className='wrapContainerCatatan'></div>
          </div>

          <div className='quotes'>
            <h1>Quotes Of The Day</h1>
            <div className='wrapContainerQuotes'></div>
          </div>
        </section>


        <Tabungan />



        <section id='infoSako' className='infoSako'>
          <h1>Info Sako</h1>
          <div className='containerCard'>

            <div className="card">
              <div className='imageCard'>
                <img src="https://images.tokopedia.net/img/cache/700/VqbcmM/2022/10/3/7adc4532-5cb1-45b4-bbc6-b02246693615.jpg" alt="" />
              </div>
              <div className='linkCardContainer'>
                <a className='linkCard'>Laundry Bag</a>
              </div>
            </div>


            <div className="card">
              <div className='imageCard'>
                <img src="https://images.tokopedia.net/img/cache/700/VqbcmM/2022/10/3/7adc4532-5cb1-45b4-bbc6-b02246693615.jpg" alt="" />
              </div>
              <div className='linkCardContainer'>
                <a className='linkCard'>Laundry Bag</a>
              </div>
            </div>


            <div className="card">
              <div className='imageCard'>
                <img src="https://images.tokopedia.net/img/cache/700/VqbcmM/2022/10/3/7adc4532-5cb1-45b4-bbc6-b02246693615.jpg" alt="" />
              </div>
              <div className='linkCardContainer'>
                <a className='linkCard'>Laundry Bag</a>
              </div>
            </div>


            <div className="card">
              <div className='imageCard'>
                <img src="https://images.tokopedia.net/img/cache/700/VqbcmM/2022/10/3/7adc4532-5cb1-45b4-bbc6-b02246693615.jpg" alt="" />
              </div>
              <div className='linkCardContainer'>
                <a className='linkCard'>Laundry Bag</a>
              </div>
            </div>


            <div className="card">
              <div className='imageCard'>
                <img src="https://images.tokopedia.net/img/cache/700/VqbcmM/2022/10/3/7adc4532-5cb1-45b4-bbc6-b02246693615.jpg" alt="" />
              </div>
              <div className='linkCardContainer'>
                <a className='linkCard'>Laundry Bag</a>
              </div>
            </div>


            <div className="card">
              <div className='imageCard'>
                <img src="https://images.tokopedia.net/img/cache/700/VqbcmM/2022/10/3/7adc4532-5cb1-45b4-bbc6-b02246693615.jpg" alt="" />
              </div>
              <div className='linkCardContainer'>
                <a className='linkCard'>Laundry Bag</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
