import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'

const faqs = [
  { q: "Darslar qanday tashkil qilinadi?", a: "Darslar asosan guruhlarda o'tkaziladi, lekin xohlovchilar uchun individual darslar ham mavjud. Har bir dars 90 daqiqa (1 yarim soat) davom etadi." },
  { q: "Qizlar uchun alohida guruh bormi?", a: "Ha. Qiz va o'g'il bolalar uchun (2-sinfdan boshlab), shuningdek ayollar va erkaklar uchun (yosh chegaralanmagan) alohida guruhlar tashkil etilgan." },
  { q: "Dars jadvalini o'zgartirish mumkinmi?", a: "Ha, o'quv kurslari o'quvchining o'zi istagan vaqtiga moslab qo'yib beriladi." },
  { q: "Qaysi filialga borishim kerak?", a: "Markazimizning Chortoq yo'li (Iftixor ko'cha, 55-a uy) va 1-Axsikent (Imron binosi) filiallari mavjud — sizga yaqinini tanlashingiz mumkin." },
]

function FaqItem({ q, a, open, onClick }) {
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <div className="faq-q" onClick={onClick}>
        <span>{q}</span>
        <span className="plus">+</span>
      </div>
      <div className="faq-a" style={{ maxHeight: open ? '200px' : '0' }}>
        <p>{a}</p>
      </div>
    </div>
  )
}

export default function Aloqa() {
  const [openIndex, setOpenIndex] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
    branch: '',
    note: ''
  })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: 'Yuborilmoqda…' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const text = await response.text()
      let data = null
      try {
        data = text ? JSON.parse(text) : null
      } catch (parseError) {
        data = null
      }

      if (!response.ok) {
        throw new Error(data?.error || response.statusText || 'Xatolik yuz berdi. Iltimos, qaytadan urinib ko‘ring.')
      }

      setStatus({ state: 'success', message: 'Rahmat! Formangiz yuborildi. Tez orada bog‘lanamiz.' })
      setFormData({ name: '', phone: '', course: '', branch: '', note: '' })
    } catch (error) {
      setStatus({ state: 'error', message: error.message || 'Xatolik yuz berdi.' })
    }
  }

  return (
    <>
      <section className="pagehero">
        <div className="wrap">
          <div className="eyebrow" style={{ color: 'var(--gold-l)' }}>Aloqa</div>
          <h1>Bepul sinov darsiga yoziling</h1>
          <p>Formani to'ldiring yoki telefon/Telegram orqali bevosita bog'laning — sizga qulay filial va guruhni birga tanlaymiz.</p>
        </div>
      </section>

      <section className="courses">
        <div className="wrap">
          <Reveal className="shead">
            <div className="eyebrow">Filiallar</div>
            <h2>Ikkita hududda xizmat ko'rsatamiz</h2>
          </Reveal>
          <Reveal className="branch-grid">
            <div className="branch-card">
              <h4>Chortoq yo'li filiali</h4>
              <p>Namangan shahar, Chortoq yo'li, Iftixor ko'cha, 55-a uy</p>
              <p>Tel: +998 91 280 44 34</p>
            </div>
            <div className="branch-card">
              <h4>Axsikent filiali</h4>
              <p>1-Axsikent, Imron binosi</p>
              <p>Tel: +998 99 834 44 34</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="contact">
        <div className="wrap contact-grid">
          <div>
            <Reveal className="shead" style={{ marginBottom: 36 }}>
              <div className="eyebrow" style={{ color: 'var(--gold-l)' }}>Bog'lanish</div>
              <h2>Bizga yozing yoki qo'ng'iroq qiling</h2>
              <p>24 soat ichida siz bilan bog'lanamiz.</p>
            </Reveal>
            <Reveal>
              <div className="cinfo-item">
                <div className="cinfo-ic">☎</div>
                <div><b>+998 91 280 44 34</b><span>+998 99 834 44 34</span></div>
              </div>
              <div className="cinfo-item">
                <div className="cinfo-ic">✈</div>
                <div><b>Telegram</b><span><a href="https://t.me/AYMAN_EDU_NTM" target="_blank" rel="noreferrer" style={{ color: 'var(--gold-l)' }}>t.me/AYMAN_EDU_NTM</a></span></div>
              </div>
              <div className="cinfo-item">
                <div className="cinfo-ic">◎</div>
                <div><b>Instagram</b><span><a href="https://instagram.com/ayman_edu_ntm" target="_blank" rel="noreferrer" style={{ color: 'var(--gold-l)' }}>@ayman_edu_ntm</a></span></div>
              </div>
              <div className="cinfo-item">
                <div className="cinfo-ic">⚑</div>
                <div><b>Namangan shahar</b><span>Chortoq yo'li, Iftixor ko'cha 55-a uy · 1-Axsikent, Imron binosi</span></div>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="contact-form-card">
              <form onSubmit={handleSubmit}>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Ismingiz"
                  required
                />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="+998 90 123 45 67"
                  required
                />
                <select name="course" value={formData.course} onChange={handleChange} required>
                  <option value="" disabled>Qaysi kursga qiziqasiz?</option>
                  <option>Ingliz tili</option>
                  <option>Rus tili</option>
                  <option>Arab tili</option>
                  <option>Koreys tili</option>
                  <option>Matematika</option>
                  <option>Ona tili va adabiyot</option>
                  <option>Maktabga tayyorlov</option>
                  <option>Diniy OTM'ga tayyorlov</option>
                </select>
                <select name="branch" value={formData.branch} onChange={handleChange} required>
                  <option value="" disabled>Qaysi filial qulay?</option>
                  <option>Chortoq yo'li</option>
                  <option>Axsikent</option>
                </select>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  placeholder="Qo'shimcha izoh (ixtiyoriy)"
                ></textarea>
                <button
                  type="submit"
                  className="btn btn-gold"
                  style={{ border: 'none', marginTop: 6 }}
                  disabled={status.state === 'loading'}
                >
                  {status.state === 'loading' ? 'Yuborilmoqda…' : 'Yuborish'}
                </button>
                {status.message && (
                  <div className={`form-feedback ${status.state}`}>
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="faq">
        <div className="wrap">
          <Reveal className="shead">
            <div className="eyebrow">Savollar</div>
            <h2>Ko'p so'raladigan savollar</h2>
          </Reveal>
          <Reveal>
            {faqs.map((f, i) => (
              <FaqItem
                key={f.q}
                q={f.q}
                a={f.a}
                open={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}
