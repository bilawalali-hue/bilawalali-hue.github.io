const langData = {
  en: {
    hire: "HIRE ME",
    about: "ABOUT",
    resume: "RESUME",
    portfolio: "PORTFOLIO",
    skills: "SKILLS",
    contact: "CONTACT"
  },
  de: {
    hire: "MIETEN SIE MICH",
    about: "ÜBER MICH",
    resume: "LEBENSLAUF",
    portfolio: "PORTFOLIO",
    skills: "FÄHIGKEITEN",
    contact: "KONTAKT"
  },
  fr: {
    hire: "EMBAUCHEZ-MOI",
    about: "À PROPOS",
    resume: "CV",
    portfolio: "PORTFOLIO",
    skills: "COMPÉTENCES",
    contact: "CONTACT"
  },
  ar: {
    hire: "وظفني",
    about: "من أنا",
    resume: "السيرة الذاتية",
    portfolio: "أعمالي",
    skills: "المهارات",
    contact: "تواصل"
  },
  ur: {
    hire: "مجھے ملازم رکھیں",
    about: "میرے بارے میں",
    resume: "سی وی",
    portfolio: "پورٹ فولیو",
    skills: "مہارتیں",
    contact: "رابطہ"
  },
  es: {
    hire: "CONTRÁTAME",
    about: "SOBRE MÍ",
    resume: "CURRÍCULUM",
    portfolio: "PORTAFOLIO",
    skills: "HABILIDADES",
    contact: "CONTACTO"
  }
};

document.getElementById("language-select").addEventListener("change", function () {
  const selectedLang = this.value;
  const elements = document.querySelectorAll("[data-key]");

  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    if (langData[selectedLang][key]) {
      el.textContent = langData[selectedLang][key];
    }
  });

  // Handle RTL direction for Arabic/Urdu
  if (selectedLang === "ar" || selectedLang === "ur") {
    document.body.setAttribute("dir", "rtl");
  } else {
    document.body.setAttribute("dir", "ltr");
  }
});


// HERO TRANSLATION
  const heroTranslations = {
    en: {
      heroName: "Bilawal Ali",
      heroTitle: "Fullstack Developer",
      heroCTA: "Hire Me"
    },
    de: {
      heroName: "Bilawal Ali",
      heroTitle: "Fullstack-Entwickler",
      heroCTA: "Stellen Sie mich ein"
    },
    fr: {
      heroName: "Bilawal Ali",
      heroTitle: "Développeur Fullstack",
      heroCTA: "Embauchez-moi"
    },
    ar: {
      heroName: "بلال علي",
      heroTitle: "مطور برمجيات شامل",
      heroCTA: "وظفني"
    },
    es: {
      heroName: "Bilawal Ali",
      heroTitle: "Desarrollador Fullstack",
      heroCTA: "Contrátame"
    }
  };

  function updateHeroLanguage(lang) {
    const heroText = heroTranslations[lang] || heroTranslations.en;
    document.getElementById("hero-name").textContent = heroText.heroName;
    document.getElementById("hero-title").textContent = heroText.heroTitle;
    document.getElementById("hero-cta").textContent = heroText.heroCTA;
  }

  document.getElementById("language-select").addEventListener("change", function () {
    const selectedLang = this.value;
    updateHeroLanguage(selectedLang);
  });

  // Default load
  document.addEventListener("DOMContentLoaded", () => {
    const defaultLang = document.getElementById("language-select").value || "en";
    updateHeroLanguage(defaultLang);
  });


  // ABOUT US HEADING
  const aboutLang = {
  en: {
    title: "About Me",
    description: "I’m a passionate software engineer with a focus on crafting responsive, scalable, and user-centric web applications.",
    nameLabel: "Name:",
    name: "Bilawal Ali",
    expLabel: "Experience:",
    experience: "3+ Years",
    specLabel: "Specialty:",
    specialty: "Angular, .NET, MERN Stack",
    basedLabel: "Based In:",
    location: "Pakistan",
    html: "HTML / CSS",
    js: "JavaScript / TypeScript",
    angular: "Angular / SPA",
    dotnet: ".NET Core / API"
  },
  de: {
    title: "Über Mich",
    description: "Ich bin ein leidenschaftlicher Softwareentwickler mit Fokus auf reaktionsschnelle, skalierbare und benutzerzentrierte Webanwendungen.",
    nameLabel: "Name:",
    name: "Bilawal Ali",
    expLabel: "Erfahrung:",
    experience: "3+ Jahre",
    specLabel: "Spezialität:",
    specialty: "Angular, .NET, MERN Stack",
    basedLabel: "Wohnort:",
    location: "Pakistan",
    html: "HTML / CSS",
    js: "JavaScript / TypeScript",
    angular: "Angular / SPA",
    dotnet: ".NET Core / API"
  },
  // Add more languages...
};
// Example when language changes
function switchLanguage(lang) {
  updateHeroLang(lang);    // already implemented
  updateAboutLang(lang);   // new
  // add updateContactLang(lang) later...
}


