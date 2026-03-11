# Dr S.C. Santra Clinic — Website

A modern, mobile-first, SEO-optimized website for Prof. (Dr.) S.C. Santra's Gynecology & Obstetrics clinic in Kolkata.

## 📁 Folder Structure

```
clinic/
├── index.html          → Home page
├── about.html          → Doctor profile
├── services.html       → Services offered
├── timings.html        → Weekly schedule
├── book.html           → Appointment booking (WhatsApp redirect)
├── reviews.html        → Patient testimonials
├── contact.html        → Contact info + Google Maps
├── css/
│   └── style.css       → Complete design system
├── js/
│   └── main.js         → All interactivity
├── images/
│   ├── doctor-1.jpg    → Doctor photo (writing at desk)
│   ├── doctor-2.jpg    → Doctor photo (secondary)
│   └── clinic.jpg      → Clinic exterior photo
└── README.md           → This file
```

## 🖼️ Images Setup

Place your images in the `images/` folder with these exact filenames:
- `doctor-1.jpg` — Main doctor photo (used in Hero and About page)
- `doctor-2.jpg` — Secondary doctor photo (used in Home page doctor teaser)
- `clinic.jpg`   — Clinic exterior photo (used in About and Contact pages)

## ✏️ How to Change Clinic Details

### Phone Numbers
Search and replace these phone numbers across all HTML files:
- `+917001999079` / `+91 70019 99079` — Primary phone
- `+919331018801` / `+91 93310 18801` — Secondary phone
- `+919474896555` / `+91 94748 96555` — Third phone

### WhatsApp Number
Search for `917001999079` in all WhatsApp URLs (`wa.me/917001999079`) and replace with the new number (without + sign).

### Email
Search for `swapancoomar@yahoo.com` and replace everywhere.

### Address
Search for `6, Picnic Garden 3rd Lane, Kolkata - 700039` and replace everywhere.

### Doctor Name & Qualifications
Search for:
- `Prof. (Dr.) S.C. Santra`
- `M.B.B.S., DGO., MS. (Cal)`
- `NRS Medical College & Hospital`
- `35322 (WBMC)`

### Clinic Timings
Edit the `<table>` inside `timings.html` and `index.html`.

## 🚀 Deployment on Netlify

### Option 1: Drag & Drop
1. Go to [app.netlify.com](https://app.netlify.com)
2. Sign up / Log in
3. Click **"Add new site"** → **"Deploy manually"**
4. Drag the entire `clinic/` folder into the upload area
5. Your site will be live instantly at a Netlify URL
6. (Optional) Add a custom domain in **Domain settings**

### Option 2: Git Deployment
1. Push the `clinic/` folder to a GitHub repository
2. Connect the repo to Netlify
3. Set build command to _empty_ (no build needed)
4. Set publish directory to `/` (root)
5. Deploy!

## 🚀 Deployment on Hostinger

1. Log in to [hpanel.hostinger.com](https://hpanel.hostinger.com)
2. Go to **File Manager**
3. Navigate to `public_html/`
4. Upload all files from the `clinic/` folder
5. Ensure `index.html` is at the root of `public_html/`
6. Your site should be live at your domain!

## 🔧 Features

- ✅ 7 fully responsive pages
- ✅ Mobile hamburger menu
- ✅ Floating WhatsApp & Call buttons
- ✅ Emergency contact banner
- ✅ Appointment booking → WhatsApp redirect
- ✅ FAQ accordion
- ✅ Testimonial slider with touch/swipe
- ✅ Today's timing highlighted automatically
- ✅ Scroll animations (fade-in)
- ✅ SEO meta tags + Local Business schema markup
- ✅ Google Maps embed
- ✅ Smooth scroll navigation
- ✅ Fast loading (no frameworks, pure HTML/CSS/JS)

## 📱 SEO Keywords Targeted

- Gynecologist in Kolkata
- Best lady doctor in Picnic Garden
- Pregnancy doctor Kolkata
- PCOS treatment Kolkata
- Women health doctor Tiljala
- Dr SC Santra
- NRS Medical College doctor
