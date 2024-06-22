const arabic = document.querySelector(".arabic");
const transliteration = document.querySelector(".transliteration");
const foundIn = document.querySelector(".foundIn");
const meaning = document.querySelector(".meaning");
const description = document.querySelector(".description");

(async () => {
  const res = await fetch("data.json");
  const { data } = await res.json();
  const { 
    name: _name,
    transliteration: _transliteration,
    found: _found,
    en: _en
  } = data[Math.round(Math.random() * data.length)];
  
  arabic.textContent = _name;
  transliteration.textContent = _transliteration;
  foundIn.textContent = _found;
  meaning.textContent = _en.meaning;
  description.textContent =  _en.desc;
})()