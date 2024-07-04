import Navbar from '../app/component/nav';
import Footer from '../app/footer/footer';
import React from 'react';

export default function Home() {
  return (
    <>
      <Navbar />
      
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" src="/img/2.png" alt="Third slide" width="700" height="700" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" src="/img/3.png" alt="Third slide" width="700" height="700" />
          </div>
          <div className="carousel-item">
            <img className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" src="/img/1.png" alt="Third slide" width="700" height="700" />
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
      <div className="col">
        <div className="card">
          <img src="/img/F1.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to 
              additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="/img/F1.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a 
              natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="/img/F1.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a
               natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
    </div>
      <br /><br /><br />
      
      <Footer />
    </>
  );
}
