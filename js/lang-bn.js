/* ============================================
   DR S C SANTRA CLINIC — Bengali Language Toggle
   ============================================ */

const translations = {
    en: {
        callClinic: '📞 Call Clinic',
        bookWhatsApp: '💬 Book on WhatsApp',
        yearsExp: 'Years Experience',
        patientsTreated: 'Patients Treated',
        patientRating: 'Patient Rating',
        servicesTitle: "Comprehensive Women's Healthcare",
        bookBtn: '📅 Book Appointment',
        openNow: 'Open Now',
        closedMsg: 'Closed',
        emergencyOnly: 'Emergency Only',
        clinicAddress: 'Clinic Address',
        workingHours: 'Working Hours',
        callNow: '📞 Call Now',
        bookApptNav: 'Book Appointment',
        whatsappUs: '💬 WhatsApp Us',
        viewServices: 'View All Services →',
        readReviews: 'Read All Reviews →',
    },
    bn: {
        callClinic: '📞 ক্লিনিকে ফোন করুন',
        bookWhatsApp: '💬 হোয়াটসঅ্যাপে বুক করুন',
        yearsExp: 'বছরের অভিজ্ঞতা',
        patientsTreated: 'রোগী চিকিৎসা করা হয়েছে',
        patientRating: 'রোগীর রেটিং',
        servicesTitle: 'সম্পূর্ণ মহিলা স্বাস্থ্যসেবা',
        bookBtn: '📅 অ্যাপয়েন্টমেন্ট বুক করুন',
        openNow: 'এখন খোলা',
        closedMsg: 'বন্ধ',
        emergencyOnly: 'শুধুমাত্র জরুরি',
        clinicAddress: 'ক্লিনিকের ঠিকানা',
        workingHours: 'কাজের সময়',
        callNow: '📞 এখনই ফোন করুন',
        bookApptNav: 'অ্যাপয়েন্টমেন্ট করুন',
        whatsappUs: '💬 হোয়াটসঅ্যাপ করুন',
        viewServices: 'সব সেবা দেখুন →',
        readReviews: 'সব রিভিউ পড়ুন →',
    }
};

let currentLang = localStorage.getItem('preferred-lang') || 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'bn' : 'en';
    localStorage.setItem('preferred-lang', currentLang);
    applyTranslations();
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = currentLang === 'en' ? 'বাং' : 'ENG';
}

function applyTranslations() {
    const t = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerHTML = t[key];
    });
    // Update <html> lang attribute
    document.documentElement.lang = currentLang === 'bn' ? 'bn' : 'en';
}

document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = currentLang === 'bn' ? 'ENG' : 'বাং';
});
