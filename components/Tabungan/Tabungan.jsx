import React, {useState} from 'react'
import DetailTabungan from './DetailTabungan'

const Tabungan = () => {

  const [dataTabungan, setDataTabungan] = useState([
    {
      id : getRandomInt(),
      nominal : 20000,
      tanggal : "14 Desember 2024"
    }
  ]);

  const [inputNominal, setInputNominal] = useState();
  const [inputTanggal, setInputTanggal] = useState();


  function simpanTabungan(){
    console.log(inputTanggal);

    const newData = [
      ...dataTabungan,
      {
        id : getRandomInt(),
        nominal : inputNominal,
        tanggal : inputTanggal,
      }
    ]

    setDataTabungan(newData);


    setInputNominal("");
    setInputTanggal("");
  }

  function hitungTotal(){
    let total = 0;
    dataTabungan.map(data => {
      total += parseInt(data.nominal);
    });

    return total;
  }


  function hapusData(id){

    const newData = dataTabungan.filter(data => data.id !== id);
    setDataTabungan(newData);
  }

  function getRandomInt() {
    return Math.floor(Math.random() * 5000);
  }
  return (
    <section id='tabungan' className='tabungan'>
      <h1>Tabungan</h1>
      <div className='containerTabungan'>
        <div className='inputTabunganContainer'>

          <div className=''>
            <div>Nominal</div>
            <div><input type="text" onChange={(e) => setInputNominal(e.target.value) }/></div>
          </div>

          <div className=''>
            <div>Tanggal</div>
            <div><input type="text" onChange={(e) => {
              // console.log(e.target.value);
              setInputTanggal(e.target.value)
            } }/></div>
          </div>

          <button className='simpanTabungan' onClick={simpanTabungan}>Simpan</button>

        </div>

        <div className='tampilanCatatanContainer'>

          <div className='tampilanCatatan'>
            <ul className='listTabunganContainer'>
              {dataTabungan.map((data, index) => (
                <li key={index}>
                <div className='list-tabungan'>

                  <input type="checkbox" name="" id="" />
                  <div>
                    <label htmlFor="">Rp. {data.nominal.toLocaleString('id-ID')}</label>
                    <div>{data.tanggal}</div>
                  </div>
                  <button type='button' onClick={() => hapusData(data.id)}>Hapus</button>
                </div>
              </li>
              ))}
              
            </ul>
          </div>
          <div className='tampilanTotal'>
            <h2>Total : </h2>
            {/* <input type="number" /> */}
            <h2>Rp. {hitungTotal().toLocaleString('id-ID')}</h2>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Tabungan