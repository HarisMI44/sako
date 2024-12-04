import React, {useEffect, useState} from 'react'
import DetailTabungan from './DetailTabungan'
import TabunganHeader from "../../public/asset/header/tabungan.png";
const Tabungan = () => {

  const [dataTabungan, setDataTabungan] = useState([]);

  const [inputNominal, setInputNominal] = useState();
  const [inputTanggal, setInputTanggal] = useState();


  useEffect(() => {
    if(localStorage.getItem("tabungan")){
      setDataTabungan(JSON.parse(localStorage.getItem("tabungan")));
    }
  }, [])
  


  function simpanTabungan(){
    console.log(inputNominal);

    const newData = [
      ...dataTabungan,
      {
        id : getRandomInt(),
        nominal : inputNominal,
        tanggal : inputTanggal,
      }
    ]
    localStorage.setItem("tabungan", JSON.stringify(newData));
    setDataTabungan(newData);


    setInputNominal("");
    setInputTanggal("");
  }

  function hitungTotal(){
    return dataTabungan.reduce((acc, value) => acc + parseInt(value.nominal), 0);
  }


  function hapusData(id){
    const newData = dataTabungan.filter(data => data.id !== id);

    localStorage.setItem("tabungan", JSON.stringify(newData));
    setDataTabungan(newData);
  }

  function getRandomInt() {
    return Math.floor(Math.random() * 5000);
  }

  const formatNumber = (value) => {
    
    // Remove any non-digit characters
    const numberString = value.toString().replace(/\D/g, '');
    // Format the number with a thousands separator
    return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const handleInputChange = (value) => {
  // Remove any non-digit characters to keep input clean
  const numberString = value.replace(/\D/g, '');
  setInputNominal(numberString); // Update the state with the raw number
};



  return (
    <section id='tabungan' className='tabungan'>
      <img src={TabunganHeader} className='m-auto mb-10'/>
      <div className='containerTabungan'>
        <div className='inputTabunganContainer'>

          <div className=''>
            <div>Nominal</div>
            <div><input type="text" value={formatNumber(inputNominal ?? "")} onChange={(e) => handleInputChange(e.target.value) } className="input input-bordered w-full max-w-xs" /></div>
          </div>

          <div className=''>
            <div>Tanggal</div>
            <div><input type="date" 
             value={inputTanggal || ''} // Bind the input value to state
            className="input input-bordered w-full max-w-xs" onChange={(e) => {
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
                <div className='list-tabungan flex justify-between py-2'>

                  {/* <input type="checkbox" name="" id="" /> */}
                  <div>
                    <label htmlFor="">Rp. {formatNumber(data.nominal)}</label>
                    <div>{data.tanggal}</div>
                  </div>
                  <button type='button' className="btn btn-ghost"  onClick={() => hapusData(data.id)}>X</button>
                </div>
              </li>
              ))}
              
            </ul>
          </div>
          <div className='tampilanTotal'>
            <h2>Total : </h2>
            <h2>Rp. {hitungTotal().toLocaleString('id-ID')}</h2>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Tabungan