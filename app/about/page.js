import Navbar from '/app/component/nav';
import Footer from '/app/footer/footer';

export default function about() {
    return (
      <>
      <Navbar />

      <p class="fs-1"> About </p>
      <br />
      <br />
        <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card mb-3">
                    <img src="/img/m.png" class="card-img-top custom-img"
                        alt="Card Image"></img>
                    <div class="card-body text-center">
                        <h5 class="card-title">แกนนำเซเว่น 5555</h5>
                        <p class="card-text">ชื่อ : เขียวหน้าปากซอย</p>
                        <a href="#" class="btn btn-primary">Button</a>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card mb-3">
                    <img src="/img/a.png" class="custom-img"
                        alt="Card Image"></img>
                    <div class="card-body text-center">
                        <h5 class="card-title">ผู้นำจ่าฝูง</h5>
                        <p class="card-text">ชื่อ : แดงข้างวัด</p>
                        <a href="#" class="btn btn-primary">Button</a>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card mb-3">
                    <img src="/img/r.png" class="card-img-top custom-img"
                        alt="Card Image"></img>
                    <div class="card-body text-center">
                        <h5 class="card-title">ลูกกระจอก</h5>
                        <p class="card-text">ชื่อ : ดำเซเว่น</p>
                        <a href="#" class="btn btn-primary">Button</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
      </>
    );
  }
  