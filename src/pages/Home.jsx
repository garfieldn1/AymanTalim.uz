import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-inner">
          <div>
            <div className="eyebrow" style={{ color: 'var(--gold-l)' }}>O'QUV MARKAZI · NAMANGAN</div>
            <h1>Bilim yo'lida <em>ishonchli</em> hamrohingiz</h1>
            <p>Ayman Ta'lim — ingliz, rus, arab, koreys tillari, matematika, ona tili va adabiyot hamda maktabga tayyorlov bo'yicha dars beradi. Har bir o'quvchiga individual yondashuv bilan ishlaymiz.</p>
            <div className="hero-actions">
              <Link to="/aloqa" className="btn btn-gold">Bepul sinov darsiga yozilish</Link>
              <Link to="/kurslar" className="btn btn-outline">Kurslarni ko'rish</Link>
            </div>
            <div className="hero-path">
              <svg className="path-svg" viewBox="0 0 420 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="O'quvchining boshlang'ich darajadan maqsadga yetguncha bosqichlari">
                <path className="path-line" d="M40,300 C120,300 100,220 180,210 C260,200 240,120 320,110 C360,105 360,60 380,40" />
                <path className="path-line-solid" d="M40,300 C120,300 100,220 180,210 C260,200 240,120 320,110 C360,105 360,60 380,40" />
                <g className="node" style={{ animationDelay: '.6s' }}>
                  <circle cx="40" cy="300" r="9" fill="#E3B655" />
                  <text x="40" y="325" textAnchor="middle" className="path-num" fill="#E3B655">01</text>
                  <text x="40" y="340" textAnchor="middle" className="path-label">Kirish testi</text>
                </g>
                <g className="node" style={{ animationDelay: '1.1s' }}>
                  <circle cx="180" cy="210" r="9" fill="#4C9686" />
                  <text x="180" y="235" textAnchor="middle" className="path-num" fill="#4C9686">02</text>
                  <text x="180" y="250" textAnchor="middle" className="path-label">Guruhga joylashuv</text>
                </g>
                <g className="node" style={{ animationDelay: '1.6s' }}>
                  <circle cx="320" cy="110" r="9" fill="#E3B655" />
                  <text x="320" y="135" textAnchor="middle" className="path-num" fill="#E3B655">03</text>
                  <text x="320" y="150" textAnchor="middle" className="path-label">Muntazam darslar</text>
                </g>
                <g className="node" style={{ animationDelay: '2.1s' }}>
                  <circle cx="380" cy="40" r="11" fill="#C9962C" stroke="#fff" strokeWidth="2" />
                  <text x="380" y="18" textAnchor="middle" className="path-num" fill="#fff">MAQSAD</text>
                </g>
              </svg>
            </div>
            <div className="hero-strip">
              <div className="hstrip-item"><b>90 daqiqa</b><span>har bir dars davomiyligi</span></div>
              <div className="hstrip-item"><b>2 filial</b><span>Chortoq yo'li va Axsikent</span></div>
              <div className="hstrip-item"><b>Alohida guruhlar</b><span>qizlar va o'g'il bolalar uchun</span></div>
              <div className="hstrip-item"><b>Moslashuvchan jadval</b><span>o'zingiz istagan vaqtga</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="courses">
        <div className="wrap">
          <Reveal className="shead">
            <div className="eyebrow">Yo'nalishlar</div>
            <h2>Markazimizdagi asosiy kurslar</h2>
            <p>To'liq ro'yxat va tafsilotlar uchun Kurslar sahifasiga o'ting.</p>
          </Reveal>
          <div className="course-grid">
            <Reveal className="course-card" as="div">
              <div className="course-tag">Til</div>
              <h3>Ingliz tili (IELTS, CEFR)</h3>
              <p>Boshlang'ich darajadan xalqaro sertifikat darajasigacha.</p>
            </Reveal>
            <Reveal className="course-card" as="div">
              <div className="course-tag">Til</div>
              <h3>Arab tili (CEFR)</h3>
              <p>Diniy va umumiy yo'nalishdagi arab tili darslari.</p>
            </Reveal>
            <Reveal className="course-card" as="div">
              <div className="course-tag">Aniq fanlar</div>
              <h3>Matematika</h3>
              <p>Maktab dasturi va kirish imtihonlariga tayyorlov.</p>
            </Reveal>
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/kurslar" className="btn btn-outline-navy">Barcha kurslarni ko'rish</Link>
          </div>
        </div>
      </section>

      <section className="why">
        <div className="wrap">
          <Reveal className="shead">
            <div className="eyebrow" style={{ color: 'var(--gold-l)' }}>Nega Ayman Ta'lim</div>
            <h2>O'qishni har bir o'quvchiga moslab quramiz</h2>
          </Reveal>
          <Reveal className="why-grid">
            <div className="why-item">
              <div className="why-num">01</div>
              <h4>Alohida guruhlar</h4>
              <p>Qiz va o'g'il bolalar uchun (2-sinfdan boshlab), ayol va erkaklar uchun (yosh chegarasiz) alohida guruhlar mavjud.</p>
            </div>
            <div className="why-item">
              <div className="why-num">02</div>
              <h4>90 daqiqalik darslar</h4>
              <p>Har bir dars 1 yarim soat davomida to'liq amaliyot bilan o'tkaziladi.</p>
            </div>
            <div className="why-item">
              <div className="why-num">03</div>
              <h4>Moslashuvchan jadval</h4>
              <p>O'quv kurslari o'quvchining o'zi istagan vaqtiga moslab qo'yib beriladi.</p>
            </div>
            <div className="why-item">
              <div className="why-num">04</div>
              <h4>Individual darslar</h4>
              <p>Guruh darslaridan tashqari, xohlovchilar uchun individual mashg'ulotlar ham mavjud.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal as="section" className="cta-band">
        <div className="wrap">
          <h2>Bepul sinov darsiga yozilishga tayyormisiz?</h2>
          <p>Bugun bog'laning, darajangizga mos guruhni birga tanlaymiz.</p>
          <Link to="/aloqa" className="btn btn-navy">Biz bilan bog'lanish</Link>
        </div>
      </Reveal>
    </>
  )
}
