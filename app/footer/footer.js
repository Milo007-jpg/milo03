import Link from "next/link";

export default function Nav() {
  return (
    <div className="container bg-white">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link href="/" legacyBehavior>
              <a className="nav-link px-2 text-muted">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/features" legacyBehavior>
              <a className="nav-link px-2 text-muted">Features</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/pricing" legacyBehavior>
              <a className="nav-link px-2 text-muted">Pricing</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/faqs" legacyBehavior>
              <a className="nav-link px-2 text-muted">FAQs</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" legacyBehavior>
              <a className="nav-link px-2 text-muted">About</a>
            </Link>
          </li>
        </ul>
        <p className="text-center text-muted">© 2022 Company, Inc</p>
      </footer>
    </div>
  );
}
