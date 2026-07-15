import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-logo">AYMAN <span>TA'LIM</span></div>
            <p style={{ maxWidth: 260, fontSize: 13.5 }}>Namangan shahridagi chet tillari va fanlar o'quv markazi.</p>
          </div>
          <div className="foot-cols">
            <div className="foot-col">
              <b>Sahifalar</b>
              <Link to="/">Bosh sahifa</Link>
              <Link to="/kurslar">Kurslar</Link>
              <Link to="/biz-haqimizda">Biz haqimizda</Link>
              <Link to="/aloqa">Aloqa</Link>
            </div>
            <div className="foot-col">
              <b>Ijtimoiy tarmoq</b>
              <a href="https://instagram.com/ayman_edu_ntm" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://t.me/AYMAN_EDU_NTM" target="_blank" rel="noreferrer">Telegram</a>
            </div>
            <div className="foot-col">
              <b>Aloqa</b>
              <a href="tel:+998912804434">+998 91 280 44 34</a>
              <a href="tel:+998998344434">+998 99 834 44 34</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Ayman Ta'lim. Barcha huquqlar himoyalangan.</span>
          <span>Namangan, O'zbekiston</span>
        </div>
      </div>
    </footer>
  )
}
