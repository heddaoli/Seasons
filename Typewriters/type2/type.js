var app = document.getElementById("app");
console.log(app);
var typewriter = new Typewriter(app, {
  loop: true,
  cursor: "_",
  delay: 75,
});

typewriter

  .pauseFor(2500)
  .typeString("lkjfkdifhujkdf")
  .pauseFor(300)
  .deleteChars(10)
  .typeString("<strong>JS</strong> plugin for a cool typewriter effect and ")
  .typeString(
    '<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>'
  )
  .pauseFor(1000)
  .start();
