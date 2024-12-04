import React, { useEffect } from 'react'
import { useState } from 'react';
import JadwalHeader from "../../public/asset/header/jadwal_harian.png";

const Jadwal = () => {

  const [selectedIdJadwal, setSelectedIdJadwal] = useState("");
  const [inputJadwal, setInputJadwal] = useState({
    judul: "",
    tanggal: ""
  });


  const [jadwal, setJadwal] = useState([
    {
      id: "",
      judul: "",
      tanggal: ""
    }
  ]);




  useEffect(() => {
    if (!localStorage.getItem("jadwal")) {
      // Kalau tidak ada data jadwal di localstorage
      // maka buat data jadwal
      const initialJadwal = Array.from({ length: 35 }, () => ({
        "id": crypto.randomUUID(),
        "judul": "",
        "tanggal": ""
      }))

      localStorage.setItem("jadwal", JSON.stringify(initialJadwal));
    }

    // console.log(JSON.parse(localStorage.getItem("jadwal")))

    setJadwal(JSON.parse(localStorage.getItem("jadwal")));

    // return () => {
    //   second
    // }
  }, [])



  const addJadwal = (id) => {
    setSelectedIdJadwal(id);

    const selectTedJadwal = jadwal.filter((item) => item.id == id)[0];

    setInputJadwal({
      judul: selectTedJadwal.judul,
      tanggal: selectTedJadwal.tanggal
    });


    document.getElementById('my_modal_1').showModal();
  }

  const updateJadwal = (e) => {
    e.preventDefault();


    const updateJadwal = jadwal.map((item) => {
      if (item.id == selectedIdJadwal) {
        return {
          ...item,
          judul: inputJadwal.judul,
          tanggal: inputJadwal.tanggal
        }
      }

      return item;
    });

    localStorage.setItem("jadwal", JSON.stringify(updateJadwal));

    setJadwal(updateJadwal)
    setSelectedIdJadwal("");
    setInputJadwal({
      judul: '',
      tanggal: ''
    });

    document.getElementById('my_modal_1').close();
  }


  return (
    <>
      <section id="jadwalHarian" className='mt-48'>
        <img src={JadwalHeader} className='m-auto mb-10'/>
        {/* <div className="nama_hari"> */}
        <div className="grid grid-cols-7 gap-4 mb-4 mt-4">
          {["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"].map( (hari, index) => (
            <div key={index} className="border bg-[#bfb4f8] font-bold text-3xl text-center py-4 rounded-full">{hari}</div>
          ))}
        </div>


        {/* <div className="input_catetan_hari grid grid-cols-5 grid-rows-5 gap-4"> */}
        <div className="grid grid-cols-7 grid-rows-3 gap-4">
          {jadwal.map((data, index) => (
            <div className={`border-4 border-gray-400 hover:cursor-pointer rounded-full ${data.judul ? "bg-black text-white" : null} p-5`} key={index} onClick={() => addJadwal(data.id)}>
              <p className="text-sm">{data.judul}</p>
              <p className="text-sm">{data.tanggal}</p>
              {/* <p className="text-sm">ID : {data.id}</p> */}
            </div>
          ))}

        </div>
      </section>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">

          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div style={{ width: "100%" }}>
            <h3 className="font-bold text-lg">Tambah Jadwal</h3>
            <form onSubmit={updateJadwal}>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Judul</span>
                </div>
                <input type="text" value={inputJadwal.judul} placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={
                  (e) => setInputJadwal({ ...inputJadwal, judul: e.target.value })}
                />
                {/* <div className="label">
                      <span className="label-text-alt">Bottom Left label</span>
                      </div> */}
              </label>


              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Waktu</span>
                </div>
                <input type="time" value={inputJadwal.tanggal} className="input input-bordered w-full max-w-xs" onChange={
                  (e) => setInputJadwal({ ...inputJadwal, tanggal: e.target.value })}
                />
                {/* <div className="label">
                      <span className="label-text-alt">Bottom Left label</span>
                      </div> */}
              </label>
              <button type='submit' className="btn btn-md bg-blue-500" style={{ marginTop: "20px" }}>Tambah</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default Jadwal