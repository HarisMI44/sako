import React from 'react'
import hero from '../../public/asset/header/hero.png'
import hero_info_sako from '../../public/asset/header/hero_info_sako.png'
import hero_jadwal_harian from '../../public/asset/header/hero_jadwal_harian.png'
import hero_catatan_keuangan from '../../public/asset/header/hero_catatan_keuangan.png'


const Header = () => {
  return (
    <header className='header-hero flex'>
    <div className='flex flex-1 items-center'>
      <img src={hero} width="900px" />
    </div>
    <div className='flex flex-1 flex-col gap-10 items-end px-10 justify-center'>
      <a href="#jadwalHarian"><img src={hero_jadwal_harian} width="400px" /></a>
      <a href="#tabungan"><img src={hero_catatan_keuangan} width="400px" /></a>
      <a href="#infoSako"><img src={hero_info_sako} width="400px" /></a>
    </div>
  </header>
  )
}

export default Header