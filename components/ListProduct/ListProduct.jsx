import React from 'react';

const ListProduct = () => {
  const products = [
    {
      name: "Rice Cooker",
      link: "https://id.shp.ee/M7JXbxN",
      foto: "0.jpg"
    },
    {
      name: "Handuk",
      link: "https://id.shp.ee/r4AsYZC",
      foto: "1.jpg"
    },
    {
      name: "Hanger",
      link: "https://id.shp.ee/oNFY4Zf",
      foto: "2.jpg"
    },
    {
      name: "Laundry Bag",
      link: "https://id.shp.ee/qu22cbS",
      foto: "3.jpg"
    },
    {
      name: "Panci Elektrik",
      link: "https://id.shp.ee/uidTuvW",
      foto: "4.jpg"
    },
    {
      name: "Kompor Portable",
      link: "https://id.shp.ee/jXeqkF6",
      foto: "5.jpg"
    },
    {
      name: "Lemari",
      link: "https://id.shp.ee/wy6zkG1",
      foto: "6.jpg"
    },
    {
      name: "Rak Susun",
      link: "https://id.shp.ee/educP3c",
      foto: "7.jpg"
    },
    {
      name: "Rak Sepatu",
      link: "https://id.shp.ee/a5Sk7tj",
      foto: "8.jpg"
    },
    {
      name: "Sprei",
      link: "https://id.shp.ee/WqWYgzo",
      foto: "9.jpg"
    },
    {
      name: "Stand Laptop",
      link: "https://id.shp.ee/Bhaj5Kw",
      foto: "10.jpg"
    },
    {
      name: "Rak Kamar Mandi",
      link: "https://id.shp.ee/t1r5xxe",
      foto: "11.jpg"
    }
  ];

  return (
    <section id='infoSako' className='infoSako'>
          <h1>Info Sako</h1>
          <div className='containerCard'>
            {products.map((item, key) => (
              
              <div className="card" key={key}>
                <div className='imageCard'>
                  <img src={`../../asset/fotoGambar/${item.foto}`} alt="" />
                </div>
                <div className='linkCardContainer'>
                  <a className='linkCard' href={item.link} target='_blank'>{item.name}</a>
                </div>
              </div>
            ))}


          </div>
        </section>
  )
}

export default ListProduct