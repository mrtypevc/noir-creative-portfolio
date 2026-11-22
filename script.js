const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('#nav-links');toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));
const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');reveal.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.section,.project').forEach(el=>{el.classList.add('reveal');reveal.observe(el)});
const cursors=[...document.querySelectorAll('.cursor')];
let x=innerWidth/2,y=innerHeight/2;
const positions=cursors.map(()=>({x,y}));
let hideTimer;
function showTrail(){cursors.forEach(c=>c.style.opacity='1');clearTimeout(hideTimer);if(matchMedia('(pointer:coarse)').matches)hideTimer=setTimeout(()=>cursors.forEach(c=>c.style.opacity='0'),1100);}
function moveTo(px,py){x=px;y=py;showTrail();}
window.addEventListener('pointermove',e=>moveTo(e.clientX,e.clientY),{passive:true});
window.addEventListener('pointerdown',e=>moveTo(e.clientX,e.clientY),{passive:true});
function animateTrail(){positions.forEach((p,i)=>{p.x+=(x-p.x)*[.34,.19,.11][i];p.y+=(y-p.y)*[.34,.19,.11][i];cursors[i].style.transform=`translate3d(${p.x+12}px,${p.y+12}px,0)`;});requestAnimationFrame(animateTrail);}
animateTrail();
