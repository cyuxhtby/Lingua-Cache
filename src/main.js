import { db, collection, getDocs } from './firebase.js';

let phrases = [];
let states = []; 

const updateText = () => {
  const clickableBoxes = document.querySelectorAll('.clickable');
  if (clickableBoxes.length === 0) {
    return;
  }
  clickableBoxes.forEach((box, index) => {
    const text = box.querySelector('.foreign-text');
    if (phrases[index]) {
      text.setAttribute('value', phrases[index].main);
      states[index] = 'main';  // Initialize state as 'main'

      box.addEventListener('click', () => {
        if (states[index] === 'main') {
          text.setAttribute('value', phrases[index].sub);
          states[index] = 'sub';
        } else {
          text.setAttribute('value', phrases[index].main);
          states[index] = 'main';
        }
      });
    }
  });
};

const fetchPhrases = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "phrases"));
    phrases = querySnapshot.docs.map(doc => doc.data());
    console.log('Fetched phrases:', phrases);
    updateText();
  } catch (error) {
    console.error("Error fetching phrases:", error);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  fetchPhrases();
});
