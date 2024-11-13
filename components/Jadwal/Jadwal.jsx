import React, { useEffect } from 'react'
import { useState } from 'react';

const Jadwal = () => {

  const [selectedIdJadwal, setSelectedIdJadwal] = useState("");
  const [inputJadwal, setInputJadwal] = useState({
    judul: "",
    tanggal: ""
  });

  
  const [jadwal, setJadwal] = useState([
    {
      id : "",
      judul : "",
      tanggal : ""
    }
  ]);




useEffect(() => {
  if(!localStorage.getItem("jadwal")){ 
      // Kalau tidak ada data jadwal di localstorage
      // maka buat data jadwal
      const initialJadwal = Array.from({ length: 21 }, () => ({
        "id": crypto.randomUUID(),
        "judul": "",
        "tanggal": ""
      }))

      console.log(initialJadwal);

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
      judul : selectTedJadwal.judul,
      tanggal : selectTedJadwal.tanggal
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
          tanggal : inputJadwal.tanggal
        }
      }

      return item;
    });

    localStorage.setItem("jadwal", JSON.stringify(updateJadwal));

    setJadwal(updateJadwal)
    setSelectedIdJadwal("");
    setInputJadwal({
      judul : '',
      tanggal :''
    });

    document.getElementById('my_modal_1').close();
  }


  return (
    <>
     <section id="jadwalHarian" style={{marginTop : "40px"}}>
        <h1 style={{ textAlign : "center"}}>Jadwal Harian</h1>
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
            {jadwal.map((data, index) => (
              <div className="p-4" key={index} onClick={() => addJadwal(data.id)}>
                <h1 className="text-sm">{data.judul}</h1>
                <p className="text-sm">{data.tanggal}</p>
                {/* <p className="text-sm">ID : {data.id}</p> */}
              </div>
            ))}

          </div>
        </section>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">

            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <div style={{width: "100%"}}>
            <h3 className="font-bold text-lg">Tambah Jadwal</h3>
            <form onSubmit={updateJadwal}>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Judul</span>
                </div>
                <input type="text" value={inputJadwal.judul} placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={
                  (e) => setInputJadwal({...inputJadwal, judul : e.target.value})} 
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
                  (e) => setInputJadwal({...inputJadwal, tanggal : e.target.value})} 
                />
                {/* <div className="label">
                      <span className="label-text-alt">Bottom Left label</span>
                      </div> */}
              </label>
              <button type='submit' className="btn btn-md bg-blue-500" style={{marginTop : "20px"}}>Tambah</button>
            </form>
            </div>
          </div>
        </dialog>
    </>
  )
}

export default Jadwal