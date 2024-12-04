import './App.css'
import Tabungan from '../components/Tabungan/Tabungan'
import Jadwal from '../components/Jadwal/Jadwal';
import ListProduct from '../components/ListProduct/ListProduct';
import HeroHeader from '../components/Header/Header';

function App() {

  return (
    <>
      <HeroHeader />

      <div className="container">
        <Jadwal />

        {/* <section id='catatan' className='catatan'>
          <div className='catatanContainer'>
            <h1>Catatan</h1>
            <div className='wrapContainerCatatan'></div>
          </div>

          <div className='quotes'>
            <h1>Quotes Of The Day</h1>
            <div className='wrapContainerQuotes'></div>
          </div>
        </section> */}


        <Tabungan />



        <ListProduct />
      </div>
    </>
  )
}

export default App
