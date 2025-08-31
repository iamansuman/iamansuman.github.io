//Prevents right click context menus
window.addEventListener('contextmenu', (e) => e.preventDefault());

//Section - Home
const typewriterName = new Typewriter(document.getElementById('myname'), { loop: true, delay: 150 });
typewriterName
  .pauseFor(0)
  .typeString('Ansuman Dhar')
  .pauseFor(3000)
  .deleteAll()
  .typeString('अंसुमान धर')
  .pauseFor(2500)
  .deleteAll()
  .typeString('অনসুমান ধর')
  .pauseFor(2500)
  .deleteAll()
  .typeString('ଅଂଶୁମାନ ଧର')
  .pauseFor(2500)
  .deleteAll()
  .typeString('ಅನ್ಸುಮನ್ ಧಾರ್')
  .pauseFor(2500)
  .deleteAll()
  .typeString('Ansüman Dhär')
  .pauseFor(2500)
  .deleteAll()
  .typeString('アンスマン・ダール')
  .pauseFor(2500)
  .deleteAll()
  .start();
  
const typewriterIntrests = new Typewriter(document.getElementById('intrests'), { loop: true, delay: 150 });
typewriterIntrests
  .pauseFor(2000)
  .typeString('Music')
  .pauseFor(2000)
  .deleteAll()
  .typeString('Coding')
  .pauseFor(2000)
  .deleteAll()
  .typeString('Problem-Solving')
  .pauseFor(2000)
  .deleteAll()
  .typeString('Poetry')
  .pauseFor(2000)
  .deleteAll()
  .typeString('Aviation')
  .pauseFor(2000)
  .deleteAll()
  .typeString('Open-Source')
  .pauseFor(2000)
  .deleteAll()
  .start();
