//Prevents right click context menus
window.addEventListener('contextmenu', (e) => e.preventDefault());

//Section - Home
const typewriter = new Typewriter(document.getElementById('intrests'), { loop: true, delay: 100 });
typewriter
  .pauseFor(2000)
  .typeString('<span style="font-family: Caveat">Music</span>')
  .pauseFor(1500)
  .deleteAll()
  .typeString('<span style="font-family: Caveat">Coding</span>')
  .pauseFor(1500)
  .deleteAll()
  .typeString('<span style="font-family: Caveat">Algos</span>')
  .pauseFor(1500)
  .deleteAll()
  .typeString('<span style="font-family: Caveat">Poetry</span>')
  .pauseFor(1500)
  .deleteAll()
  .typeString('<span style="font-family: Caveat">Aviation</span>')
  .pauseFor(2000)
  .deleteAll()
  .typeString('<span style="font-family: Caveat">Space</span>')
  .pauseFor(2000)
  .start();