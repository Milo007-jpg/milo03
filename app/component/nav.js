import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Nav() {
  return (
    <>
      <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12">
              <nav className="navbar navbar-expand-md">

      <a className="navbar-brand">
        <img src="/img/1.png" alt="" width="50" height="30" /> อันนี้คือโลโก้
      </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link href="/" className="nav-link px-2 link-secondary">หน้าแรก</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about" className="nav-link px-2">เกี่ยวกับเรา</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/Servicee" className="nav-link px-2">บริการของเรา</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/Contact" className="nav-link px-2">ติดต่อเรา</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/user" className="nav-link px-2">จัดการสมาชิก</Link>
                    </li>
                  </ul>
                  <div className="d-flex ms-md-3">
                    <Link href="/signup" type="button" className="btn btn-outline-primary me-2">Sign-up</Link>
                    <button  type="button" className="btn btn-primary">Login</button>
                    <Link href="/login" type="button" className="btn btn-outline-primary me-2">Login</Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}