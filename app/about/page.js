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
    </div><br />
    <p class="text-center fs-1">1914 translation by H. Rackham</p><br />
    <p class="text-center">"But I must explain to you how all this mistaken idea of denouncing pleasure and
         praising pain was born and I will give you a complete account of the system, and expound the actual 
         teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, 
         dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to 
         pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone 
         who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally 
         circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example,
          which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who 
          has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, 
          or one who avoids a pain that produces no resultant pleasure?"</p>
    <Footer />
      </>
    );
  }
  