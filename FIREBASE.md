# Firebase ulash (real-time + Google/Telegram kirish)

1. console.firebase.google.com -> **Add project**.
2. **Build -> Firestore Database** -> Create (production mode).
3. **Build -> Authentication** -> Sign-in method -> **Google** ni yoqing. Settings -> Authorized domains ga `<login>.github.io` ni qo'shing.
4. Project settings -> **Your apps -> Web (</>)** -> config ni `firebase-config.js` ga qo'ying.
5. **Build -> Storage** -> Get started (video fayllar uchun). Storage -> Rules ga `storage.rules` mazmunini joylang.
5b. Firestore -> **Rules** ga `firestore.rules` mazmunini joylang -> Publish.
6. GitHub'ga push qiling (Pages avtomatik joylaydi).
7. **Developer emailingiz (kazutokvf@gmail.com) bilan Google orqali kiring.** Keyin "+" tugmasi bilan anime/qism joylasangiz, hamma qurilmada real time chiqadi.

## Telegram (ixtiyoriy)
- @BotFather -> bot yarating, `/setdomain` ga sayt domeningizni bering.
- Firebase **Blaze** tarifi kerak (funksiyalar uchun): `firebase functions:secrets:set TG_BOT_TOKEN` -> `firebase deploy --only functions`.
- `firebase-config.js` ga `TELEGRAM_BOT` (username, @siz) va `TELEGRAM_FN` (funksiya URL) yozing.

## Eslatma
- Hozir faqat **anime va qismlar** umumiy (real time). Hisoblar, ro'yxatlar, izohlar hali qurilmada saqlanadi.
- Admin qilish: developer foydalanuvchini admin qilsa, `admins` kolleksiyasiga yoziladi; admin Google email bilan kirishi shart.
- Bitta anime hujjati 1 MB dan oshmasin (katta rasmlarni data-URL qilmay, URL ishlating).
