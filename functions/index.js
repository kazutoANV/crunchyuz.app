const { onRequest } = require('firebase-functions/v2/https');
const admin = require('firebase-admin');
const crypto = require('crypto');
admin.initializeApp();

// Telegram Login Widget ma'lumotini tekshirib, Firebase custom token qaytaradi.
exports.telegramAuth = onRequest({ cors: true, secrets: ['TG_BOT_TOKEN'] }, async (req, res) => {
  const d = { ...req.body };
  const hash = d.hash; delete d.hash;
  const str = Object.keys(d).sort().map(k => `${k}=${d[k]}`).join('\n');
  const key = crypto.createHash('sha256').update(process.env.TG_BOT_TOKEN).digest();
  const h = crypto.createHmac('sha256', key).update(str).digest('hex');
  if (h !== hash || Date.now() / 1000 - Number(d.auth_date) > 86400) return res.status(401).json({ error: 'bad' });
  const token = await admin.auth().createCustomToken('tg' + d.id, { tg: true });
  res.json({ token, id: d.id, name: d.first_name || d.username || '' });
});
