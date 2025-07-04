import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.theory': 'Theory Explorer',
      'nav.lab': 'Interactive Lab',
      'nav.courses': 'Courses',
      'nav.publications': 'Publications',
      'nav.blog': 'Blog',
      'nav.community': 'Community',
      
      // Home page
      'home.title': 'Discrete-Lattice Physics: A Unified Framework from Planck Scales to Cosmology',
      'home.subtitle': 'Space-time is a cubic-diamond lattice of Planck-scale spheres; discrete time steps between collisions explain photons, electrons and gravity as velocity-field phenomena.',
      'home.cta.explore': 'Explore the Theory',
      'home.cta.download': 'Download White-Paper (PDF)',
      
      // Theory features
      'feature.electron.title': 'Figure-8 Electron Knot',
      'feature.electron.desc': 'Four spheres looping in harmonic motion define charge & spin.',
      'feature.photon.title': 'Photon Spiral Motion',
      'feature.photon.desc': 'Disturbance of N_photon spheres yields energy E=m_P c²/N_photon.',
      'feature.time.title': 'Discrete Time Dilation',
      'feature.time.desc': 'Collision density slows local "ticks", reproducing SR/GR limits.',
      'feature.gravity.title': 'Gravity as a Velocity Gradient',
      'feature.gravity.desc': 'Mass arises from slowed background spheres; pressure-field force ∝ v₀²/r².',
      'feature.redshift.title': 'No Expansion Needed for Redshift',
      'feature.redshift.desc': 'Wavelength grows as photon adds spheres traversing slower-time regions.',
      
      // Common
      'common.next': 'Next',
      'common.previous': 'Previous',
      'common.loading': 'Loading...',
      'common.explore': 'Explore',
      
      // Theory pages
      'theory.lattice.title': 'Cubic-Diamond Lattice Structure',
      'theory.discrete-time.title': 'Discrete Time Evolution',
      'theory.photon.title': 'Photon Mechanics',
      'theory.electron.title': 'Electron Dynamics',
      'theory.gravity.title': 'Gravity & Pressure Field',
      'theory.predictions.title': 'Testable Predictions',
      'theory.cmb.title': 'CMB Power Spectrum'
    }
  },
  he: {
    translation: {
      // Navigation
      'nav.home': 'בית',
      'nav.theory': 'חקר התיאוריה',
      'nav.lab': 'מעבדה אינטראקטיבית',
      'nav.courses': 'קורסים',
      'nav.publications': 'פרסומים',
      'nav.blog': 'בלוג',
      'nav.community': 'קהילה',
      
      // Home page
      'home.title': 'פיזיקת רשת בדידה: מסגרת מאוחדת מקנה המידה של פלאנק לקוסמולוגיה',
      'home.subtitle': 'המרחב-זמן הוא רשת קובית-יהלום של כדורי פלאנק; צעדי זמן בדידים בין התנגשויות מסבירים פוטונים, אלקטרונים וכבידה כתופעות שדה מהירות.',
      'home.cta.explore': 'חקור את התיאוריה',
      'home.cta.download': 'הורד מאמר לבן (PDF)',
      
      // Theory features
      'feature.electron.title': 'קשר אלקטרון בצורת 8',
      'feature.electron.desc': 'ארבעה כדורים בתנועה הרמונית מגדירים מטען וספין.',
      'feature.photon.title': 'תנועת פוטון ספירלית',
      'feature.photon.desc': 'הפרעה של N_photon כדורים מניבה אנרגיה E=m_P c²/N_photon.',
      'feature.time.title': 'הרחבת זמן בדידה',
      'feature.time.desc': 'צפיפות התנגשויות מאטה "טיקים" מקומיים, משחזרת גבולות SR/GR.',
      'feature.gravity.title': 'כבידה כשיפוע מהירות',
      'feature.gravity.desc': 'מסה נוצרת מכדורי רקע מואטים; כוח שדה לחץ ∝ v₀²/r².',
      'feature.redshift.title': 'אין צורך בהתרחבות להסטה אדומה',
      'feature.redshift.desc': 'אורך הגל גדל כאשר פוטון מוסיף כדורים החוצים אזורי זמן איטיים.',
      
      // Common
      'common.next': 'הבא',
      'common.previous': 'הקודם',
      'common.loading': 'טוען...',
      'common.explore': 'חקור',
      
      // Theory pages
      'theory.lattice.title': 'מבנה רשת קובית-יהלום',
      'theory.discrete-time.title': 'התפתחות זמן בדיד',
      'theory.photon.title': 'מכניקת פוטונים',
      'theory.electron.title': 'דינמיקת אלקטרונים',
      'theory.gravity.title': 'כבידה ושדה לחץ',
      'theory.predictions.title': 'תחזיות הניתנות לבדיקה',
      'theory.cmb.title': 'ספקטרום הספק CMB'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;