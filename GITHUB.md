# GitHub'da build qilish

## 1. Repository yaratish
1. github.com -> **New repository** -> nomi `crunchyuz` -> Public -> Create.
2. **uploading an existing file** havolasini bosing.
3. Zipni oching va **papka ichidagi hamma narsani** (`.github` papkasi bilan) sudrab tashlang. Papkaning o'zini emas, ichidagilarni.
4. **Commit changes** (branch: `main`).

## 2. Sayt (GitHub Pages)
1. Repository -> **Settings -> Pages -> Source: GitHub Actions**.
2. **Actions** bo'limida "Deploy to GitHub Pages" yashil bo'lguncha kuting (1-2 daqiqa).
3. Manzil: `https://<login>.github.io/crunchyuz/`
4. Telefonda Chrome'da oching -> menyu -> **Ilovani o'rnatish**.

## 3. APK (Android)
1. **Actions -> Build APK -> Run workflow**.
2. Tugagach (5-10 daqiqa) sahifa pastidagi **Artifacts -> crunchyuz-apk** ni yuklang.
3. Zip ichidagi `app-debug.apk` ni telefonga o'rnating (noma'lum manbalarga ruxsat bering).

## 4. Yangilash
Faylni repositoryda almashtirib (Add file -> Upload files) commit qiling. Sayt va APK qayta yig'iladi.

## Muhim
- `firebase-config.js` ni to'ldirmaguncha ilova real time ishlamaydi (qo'llanma: `FIREBASE.md`).
- Google kirish ishlashi uchun Firebase -> Authentication -> Settings -> Authorized domains ga `<login>.github.io` qo'shing.
- APK ichida Google oyna orqali kirish ishonchsiz bo'lishi mumkin: kirish uchun saytning o'zidan (PWA) foydalaning yoki email/parol ishlating.
