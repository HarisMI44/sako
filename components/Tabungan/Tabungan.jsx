import React, { useEffect, useState } from 'react'
import DetailTabungan from './DetailTabungan'
import catatan_keuangan from "../../public/asset/header/catatan_keuangan.png";
const Tabungan = () => {

  const [dataTabungan, setDataTabungan] = useState([]);

  const [inputNominal, setInputNominal] = useState();
  const [inputTanggal, setInputTanggal] = useState();
  const [inputKategori, setInputKategori] = useState("pemasukan");
  const [inputKeterangan, setInputKeterangan] = useState();

  const [totalPemasukan, setTotalPemasukan] = useState()
  const [totalPengeluaran, setTotalPengeluaran] = useState(0)


  useEffect(() => {
    if (localStorage.getItem("tabungan")) {
      setDataTabungan(JSON.parse(localStorage.getItem("tabungan")));
    }
  }, [])



  function simpanTabungan() {
    console.log(inputNominal);

    const newData = [
      ...dataTabungan,
      {
        id: getRandomInt(),
        nominal: inputNominal,
        tanggal: inputTanggal,
        kategori: inputKategori,
        keterangan: inputKeterangan
      }
    ]

    console.log(newData);
    localStorage.setItem("tabungan", JSON.stringify(newData));
    setDataTabungan(newData);


    setInputNominal("");
    setInputTanggal("");
    setInputKeterangan("");
  }

  function hitungTotal() {
    return dataTabungan.reduce((acc, value) => acc + parseInt(value.nominal), 0);
  }


  function hapusData(id) {
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

  const dataTotalPemasukan = dataTabungan.reduce((acc, value) => value.kategori === "pemasukan" ?  acc + parseInt(value.nominal) : acc, 0);
  const dataTotalPengeluaran = dataTabungan.reduce((acc, value) => value.kategori === "pengeluaran" ?  acc + parseInt(value.nominal) : acc, 0);
  return (
    <section id='tabungan' className='tabungan'>
      <img src={catatan_keuangan} className='m-auto mb-10' />


      <div className='flex gap-10 mb-10'>
        <div className="bg-white px-4 py-2 rounded shadow w-max font-bold text-left">
          <div>Pemasukan</div>
          <div className='text-xl text-start text-green-400'>Rp. {formatNumber(dataTotalPemasukan)}</div>
        </div>
        <div className="bg-white px-4 py-2 rounded shadow w-max font-bold text-left">
          <div>Pengeluaran</div>
          <div className='text-xl text-red-400'>Rp. {formatNumber(dataTotalPengeluaran)}</div>
        </div>
        <div className="bg-white px-4 py-2 rounded shadow w-max font-bold text-left">
          <div>Tabungan</div>
          <div className='text-xl'>Rp. {formatNumber(dataTotalPemasukan - dataTotalPengeluaran)}</div>
        </div>
      </div>


      <div className='containerTabungan'>

        <div className='inputTabunganContainer'>
          <div className=''>
            <div>Nominal</div>
            <div><input type="text" value={formatNumber(inputNominal ?? "")} onChange={(e) => handleInputChange(e.target.value)} className="input input-bordered w-full max-w-xs" /></div>
          </div>

          <div className=''>
            <div>Tanggal</div>
            <div>
              <input type="date"
                value={inputTanggal || ''} // Bind the input value to state
                className="input input-bordered w-full max-w-xs" onChange={(e) => {
                  setInputTanggal(e.target.value)
                }}
              />

            </div>
          </div>


          <div className=''>
            <div>Kategori</div>
            <div>
              <select className="select select-bordered w-full max-w-xs" onChange={(e) => {
                setInputKategori(e.target.value)
              }} defaultValue={inputKategori}>
                <option value="pemasukan">Pemasukan</option>
                <option value="pengeluaran">Pengeluaran</option>
              </select>

            </div>
          </div>

          <div className=''>
            <div>Keterangan</div>
            <div>
              <input type="text"
                value={inputKeterangan || ''} // Bind the input value to state
                className="input input-bordered w-full max-w-xs" onChange={(e) => {
                  setInputKeterangan(e.target.value)
                }}
              />

            </div>
          </div>

          <button className='simpanTabungan' onClick={simpanTabungan}>Simpan</button>

        </div>

        <div className='tampilanCatatanContainer'>

          <div className='tampilanCatatan overflow-y-scroll'>
            <ul className='listTabunganContainer'>
              {dataTabungan.map((data, index) => (
                <li key={index} className='bg-white px-4 rounded shadow'>
                  <div className='list-tabungan flex justify-between py-2'>

                    <div>
                      <div>{data.keterangan}</div>
                      <div className='text-sm'>{data.tanggal}</div>
                    </div>

                    <div className='text-xl flex items-center gap-2'>
                      <div className={`${data.kategori === 'pemasukan' ? 'text-green-500' : 'text-red-500'}`}> Rp. {formatNumber(data.nominal)} </div>
                      <button type='button' className="btn btn-ghost" onClick={() => hapusData(data.id)}>X</button>
                    </div>
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