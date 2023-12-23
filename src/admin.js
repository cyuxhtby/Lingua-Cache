import { db, collection, addDoc } from './firebase.js'; 

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('phrase-form');
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      
      const foreignPhrase = document.getElementById('foreign-phrase').value;
      const englishTranslation = document.getElementById('english-translation').value;
  
      try {
        const docRef = await addDoc(collection(db, "phrases"), {
          main: foreignPhrase,
          sub: englishTranslation
        });
        console.log("Document written with ID: ", docRef.id);
        form.reset();
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    });
  });
