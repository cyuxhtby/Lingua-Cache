import { db, collection, getDocs } from './firebase.js';

let phrases = [];
let currentIndex = 0;

const updateText = () => {
  const mainText = document.querySelector('#main-text');
  const subText = document.querySelector('#sub-text');
  mainText.setAttribute('value', phrases[currentIndex].main);
  subText.setAttribute('value', phrases[currentIndex].sub);
};

const fetchPhrases = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "phrases"));
    phrases = querySnapshot.docs.map(doc => doc.data());
    updateText();
  } catch (error) {
    console.error("Error fetching phrases:", error);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  fetchPhrases();

  const nextBtn = document.querySelector('#next-btn');
  const previousBtn = document.querySelector('#previous-btn');

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % phrases.length;
    updateText();
  });

  previousBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + phrases.length) % phrases.length;
    updateText();
  });
});
