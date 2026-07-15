import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

const values = [
  { title: "Alohida guruhlar", text: "Qiz va o'g'il bolalar uchun (2-sinfdan boshlab), shuningdek ayollar va erkaklar uchun (yosh chegaralanmagan) alohida guruhlar tashkil qilamiz." },
  { title: "Moslashuvchan format", text: "Guruh darslari bilan bir qatorda individual darslar ham mavjud, jadval o'quvchining o'ziga moslab tuziladi." },
  { title: "Keng yo'nalishlar", text: "Til kurslaridan tashqari matematika, ona tili va adabiyot, maktabga tayyorlov va diniy oliy ta'lim muassasalariga tayyorlov kurslari ham mavjud." },
  { title: "Ikkita qulay filial", text: "Namanganning Chortoq yo'li va 1-Axsikent hududlarida joylashgan filiallarimiz orqali xizmat ko'rsatamiz." },
]

export default function BizHaqimizda() {
  return (
    <>
      <section className="pagehero">
        <div className="wrap">
          <div className="eyebrow" style={{ color: 'var(--gold-l)' }}>Biz haqimizda</div>
          <h1>Namanganlik oilalar ishonadigan o'quv markazi</h1>
          <p>Ayman Ta'lim — chet tillari, aniq fanlar va maktabga tayyorlov bo'yicha dars beradigan o'quv markazi. Har bir o'quvchiga alohida yondashuvni muhim deb bilamiz.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="shead">
            <div className="eyebrow">Yondashuvimiz</div>
            <h2>Nima uchun aynan Ayman Ta'lim</h2>
          </Reveal>
          <Reveal className="val-grid">
            {values.map((v) => (
              <div className="val-card" key={v.title}>
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="courses">
        <div className="wrap">
          <Reveal className="shead">
            <div className="eyebrow">Ustozlar</div>
            <h2>Sohasini yaxshi biladigan o'qituvchilar</h2>
          </Reveal>
          <Reveal className="teach-card">
            <div className="teach-photo">МО</div>
            <div>
              <h4>Mahmudov Osimxon</h4>
              <span>Arab tili o'qituvchisi | Direktor</span>
              <p>Arab tilini CEFR standartlariga mos tarzda, boshlang'ich darajadan boshlab o'rgatadi. Darslarni tushunarli va amaliyotga yo'naltirilgan tarzda olib boradi.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="why">
        <div className="wrap" style={{ textAlign: 'center', padding: 0 }}>
          <h2 style={{ marginBottom: 16 }}>Bizni yaqindan tanishtirib beramiz</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 28 }}>Filiallarimizdan biriga tashrif buyuring yoki bepul sinov darsiga yoziling.</p>
          <Link to="/aloqa" className="btn btn-gold">Bog'lanish</Link>
        </div>
      </section>
    </>
  )
}
