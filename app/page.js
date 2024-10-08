import Navbar from '../app/component/nav';  // เส้นทางของ Navbar ควรตรวจสอบให้แน่ใจว่าอยู่ในตำแหน่งที่ถูกต้อง
import Footer from '../app/footer/footer';  // อัปเดตเส้นทางตามตำแหน่งที่ถูกต้องของไฟล์ Footer
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" src="/img/2.png" alt="Slide 1" />
    </div>
    <div className="carousel-item">
      <img className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" src="/img/3.png" alt="Slide 2" />
    </div>
    <div className="carousel-item">
      <img className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" src="/img/1.png" alt="Slide 3" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      <br /><br />

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {[1, 2, 3].map((index) => (
          <div className="col" key={index}>
            <div className="card">
              <img src="/img/F1.png" className="card-img-top" alt={`Card image ${index}`} />
              <div className="card-body">
                <h5 className="card-title">Card title {index}</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br /><br /><br />

      <Footer />
    </>
  );
}
