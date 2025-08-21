import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {        
      translation: {
        logo: "Mohannad",
        home: "Home",
        about: "About",
        reviews: "Customer Reviews",
        projects: "Projects",
        contact: "Contact Us",
        name: "Mohannad Waheeb",
        roles: ["Frontend Developer", "ReactJS Developer"],
        cv: "Download CV",
        contentAbout: "Hello, I'm Mohannad Waheeb, A Frontend Developer specializing in React.js with extensive experience building fast, modern websites and web applications. I provide professional front-end development services using the latest technologies to ensure a seamless user experience and superior performance.",
        skills: "Skills", 
        paraContact: "Feel free to reach out for collaborations or any inquiries.",
        yourname: "Your Name",
        youremail: "Your Email",
        yourmessage: "Your Message",
        send: "Send Message",
        messageSent: "Message sent successfully! ✅",
      }
    },
    ar: {
      translation: {
        logo: "مهند",
        home: "الرئيسية",
        about: "من أنا",
        reviews: "آراء العملاء",
        projects: "المشاريع",
        contact: "تواصل معنا",
        name: "مهند وهيب",
        roles: ["مطور واجهات أمامية", "مطور ReactJS"],
        cv: "تحميل السيرة الذاتية",
        contentAbout: "مرحباً، أنا مهند وهيب، مطور واجهات أمامية متخصص في React.js، ولدي خبرة واسعة في بناء مواقع وتطبيقات ويب سريعة وحديثة. أقدم خدمات تطوير واجهات أمامية احترافية باستخدام أحدث التقنيات لضمان تجربة مستخدم سلسة وأداء فائق.",
        skills: "المهارات",
        paraContact: "لا تتردد في التواصل معنا للحصول على تعاون أو أي استفسارات.",
        yourname: "اكتب اسمك",
        youremail: "اكتب ايميلك",
        yourmessage: "اكتب رسالتك",
        send: "أرسل الرسالة",
        messageSent: "تم إرسال الرسالة بنجاح! ✅"
      }
    }
  },
  lng: "en",  
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;