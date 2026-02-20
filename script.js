// PAGE NAVIGATION
function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// FLOATING CIRCLES ANIMATION
function createCircle(){
  const circle = document.createElement("div");
  circle.className = "circle";
  const size = 20 + Math.random()*60;
  circle.style.width = size + "px";
  circle.style.height = size + "px";
  circle.style.left = Math.random()*90 + "vw";
  circle.style.top = window.innerHeight + "px";
  circle.style.background = `rgba(255,100,100,${0.1+Math.random()*0.3})`;
  document.body.appendChild(circle);

  const speed = 0.2 + Math.random()*0.3;
  const fadeOut = 0.002 + Math.random()*0.002;
  let topPos = window.innerHeight;

  const interval = setInterval(()=>{
    topPos -= speed;
    circle.style.top = topPos + "px";
    circle.style.opacity = parseFloat(circle.style.opacity || 1) - fadeOut;
    if(parseFloat(circle.style.opacity) <= 0){
      circle.remove();
      clearInterval(interval);
    }
  }, 20);
}

// Generate circles one or two at a time
setInterval(()=>{
  createCircle();
  if(Math.random()<0.4) createCircle();
}, 1000);
