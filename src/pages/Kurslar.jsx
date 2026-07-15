import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

const courses = [
  { tag: "Til · GB", title: "Ingliz tili", text: "IELTS va CEFR standartlariga mos dastur, boshlang'ich darajadan yuqori darajagacha." },
  { tag: "Til · RU", title: "Rus tili", text: "DTM formatiga moslashtirilgan dastur, kundalik muloqotdan grammatikagacha." },
  { tag: "Til · SA", title: "Arab tili", text: "CEFR standartida, diniy va umumiy maqsadlar uchun arab tili darslari." },
  { tag: "Til · KR", title: "Koreys tili", text: "Asosiy grammatika va lug'at boyligidan boshlab bosqichma-bosqich o'qitiladi." },
  { tag: "Aniq fanlar", title: "Matematika", text: "Maktab dasturi va kirish imtihonlariga tayyorlov uchun mustahkam dastur." },
  { tag: "Ona tili", title: "Ona tili va adabiyot", text: "Savodxonlik, ijodiy yozuv va adabiy tahlil ko'nikmalarini rivojlantirish." },
  { tag: "Kichik yoshlilar", title: "Maktabga tayyorlov", text: "Maktabgacha yoshdagi bolalarni o'qish, yozish va sonlarga tayyorlash dasturi." },
  { tag: "Diniy OTM", title: "Diniy oliy ta'lim muassasalariga tayyorlov", text: "O'zbekiston xalqaro islom akademiyasi, islom bilim yurtlari, islom instituti va boshqa diniy oliy ta'lim muassasalarining kirish imtihonlariga tayyorlov kursi." },
]

export default function Kurslar() {
  return (
    <>
      <section className="pagehero">
        <div className="wrap">
          <div className="eyebrow" style={{ color: 'var(--gold-l)' }}>Kurslar</div>
          <h1>Har bir yo'nalish uchun aniq dastur</h1>
          <p>Darslar guruhlarda, shuningdek individual tarzda ham o'tkaziladi. Har bir dars 90 daqiqa (1 yarim soat) davom etadi.</p>
        </div>
      </section>

      <section className="courses">
        <div className="wrap">
          <div className="course-grid">
            {courses.map((c) => (
              <Reveal className="course-card" as="div" key={c.title}>
                <div className="course-tag">{c.tag}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="info-strip">
            <div className="info-card">
              <h4>Dars davomiyligi</h4>
              <p>Har bir dars 90 daqiqa (1 yarim soat) davomida o'tkaziladi.</p>
            </div>
            <div className="info-card">
              <h4>Guruhlar</h4>
              <p>Qiz va o'g'il bolalar uchun (2-sinfdan boshlab), ayol va erkaklar uchun (yosh chegaralanmagan) alohida guruhlar mavjud.</p>
            </div>
            <div className="info-card">
              <h4>Jadval</h4>
              <p>O'quv kurslari o'quvchining o'zi istagan vaqtiga moslab qo'yib beriladi. Individual darslar ham tashkil qilinadi.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="why">
        <div className="wrap" style={{ textAlign: 'center', padding: 0 }}>
          <h2 style={{ marginBottom: 16 }}>O'zingizga mos kursni tanlashga yordam beraylik</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 28 }}>Bepul sinov darsiga yozilib, ustoz va dars formatini ko'rib chiqing.</p>
          <Link to="/aloqa" className="btn btn-gold">Bog'lanish</Link>
        </div>
      </section>
    </>
  )
}
