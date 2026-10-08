# Crunchyuz

Crunchyroll uslubidagi anime ilova (muzdek ko'k mavzu). Bitta `index.html` fayl.

## 1. GitHub'ga yuklash
1. github.com da yangi repository oching (masalan `crunchyuz`).
2. Shu papkadagi hamma fayllarni (`.github` papkasi bilan) yuklang.
3. Branch nomi `main` bo'lsin.

## 2. Sayt + o'rnatiladigan ilova (PWA)
1. Repository -> Settings -> Pages -> Source: **GitHub Actions**.
2. Actions bo'limida "Deploy to GitHub Pages" tugaguncha kuting.
3. Sayt manzili: `https://<login>.github.io/crunchyuz/`
4. Telefonda Chrome'da oching -> menyu -> **Ilovani o'rnatish** (Bosh ekranga qo'shish). Ilova ikonkasi paydo bo'ladi.

## 3. APK fayl (Android)
1. Repository -> Actions -> **Build APK** -> Run workflow.
2. Tugagach, sahifa pastidagi **Artifacts** -> `crunchyuz-apk` ni yuklab oling.
3. Zip ichidagi `app-debug.apk` ni telefonga o'rnating (noma'lum manbalarga ruxsat bering).

## Eslatma
- Hozircha ma'lumotlar har bir qurilma brauzerida (localStorage) saqlanadi. Hammaga umumiy baza uchun backend (Firebase/Supabase) kerak.
- `kazutokvf@gmail.com` developer + admin. Haqiqiy himoya uchun email tasdiqlash backendda bo'lishi shart.


## 4. V4 yangi funksiyalar
- Developer panel: 10 ta ilova iconi, ulardan 3 tasi noyob; maxsus rasmni icon qilish ham mumkin.
- Admin va Developer panel: faqat ularga ko‘rinadigan Glow menyusi va sozlamalari.
- Developer: foydalanuvchini admin qilish.
- Anime: publish/yashirish va qismga video URL yoki video fayl tanlash.
- Foydalanuvchilar: do‘st qo‘shish, chat va birga ko‘rish xonasi.

### Muhim: umumiy (real-time) ishlash
Hozirgi loyiha original arxitektura kabi brauzer `localStorage`/IndexedDB asosida ishlaydi. Shuning uchun do‘stlar, chat, xona va publish ma’lumotlari turli telefonlarda avtomatik umumiy bo‘lishi uchun Firebase/Supabase kabi backend va xavfsiz rules kerak. Frontend funksiyalari tayyor, lekin backend kalitlari/rules loyiha egasining hisobiga bog‘liq.

### Publish
GitHub repository'ga yangilangan fayllarni `main` branchga push qiling. `pages.yml` GitHub Pages'ni, `apk.yml` esa Android debug APK'ni Actions orqali yig‘adi.
