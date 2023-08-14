// language.js

// Language Translation Objects
const imgtranslations = {
    english: {
      // ... Your existing translations ...
      image1: './assets/b1-en.ecabce76.png',
    },
    chinese: {
      // ... Your existing translations ...
      image1: './assets/b1.dd296a6a.png',
    },
    // Add other languages ...
  };
  
  // Function to Change Language
  function changeLanguage(language) {
    const elements = Object.keys(imgtranslations[language]);
    elements.forEach((element) => {
      if (element === 'image1') {
        const image1 = document.getElementById('image1');
        image1.getElementsByTagName('img')[0].src = imgtranslations[language][element];
      } else {
        const translation = imgtranslations[language][element];
        document.getElementById(element).textContent = translation;
      }
    });
  }
  
  // ... Your existing language toggle functions ...
  
  // Trigger Language Change on Page Load
  document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = getLanguagePreference();
    const languageToApply = preferredLanguage || 'chinese'; // Set default language here
    changeLanguage(languageToApply);
  });
  