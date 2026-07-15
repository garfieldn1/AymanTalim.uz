import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000
const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env

app.use(express.json({ limit: '20kb' }))

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character])
}

function isValidText(value, maxLength) {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= maxLength
}

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    telegramConfigured: Boolean(TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID)
  })
})

app.post('/api/contact', async (req, res) => {
  const { name, phone, course, branch, note } = req.body ?? {}

  if (
    !isValidText(name, 100) ||
    !isValidText(phone, 40) ||
    !isValidText(course, 100) ||
    !isValidText(branch, 100) ||
    (note && !isValidText(note, 1000))
  ) {
    return res.status(400).json({ error: 'Iltimos, barcha majburiy maydonlarni to‘ldiring.' })
  }

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('Telegram sozlamalari topilmadi.')
    return res.status(500).json({ error: 'Server sozlamalari topilmadi. .env faylini tekshiring.' })
  }

  const message = [
    '📩 <b>Yangi aloqa formasi</b>',
    '',
    `Ism: <b>${escapeHtml(name)}</b>`,
    `Telefon: <b>${escapeHtml(phone)}</b>`,
    `Kurs: <b>${escapeHtml(course)}</b>`,
    `Filial: <b>${escapeHtml(branch)}</b>`,
    `Izoh: <b>${escapeHtml(note || '—')}</b>`
  ].join('\n')

  let timeout
  try {
    const controller = new AbortController()
    timeout = setTimeout(() => controller.abort(), 99_000)
    const telegramResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    })
    const telegramData = await telegramResponse.json().catch(() => null)
    if (!telegramResponse.ok || !telegramData.ok) {
      console.error('Telegram xatosi:', telegramData)
      return res.status(502).json({ error: 'Telegramga xabar yuborilmadi.' })
    }

    return res.json({ ok: true })
  } catch (error) {
    console.error('Telegramga yuborishdagi xato:', error.message)
    const message = error.name === 'AbortError'
      ? 'Telegram javobi kechikdi. Iltimos, qaytadan urinib ko‘ring.'
      : 'Serverda kutilmagan xatolik yuz berdi.'
    return res.status(500).json({ error: message })
  } finally {
    clearTimeout(timeout)
  }
})

app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} manzilida ishga tushdi.`)
})
