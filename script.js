// Smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id && id.startsWith('#')){
      e.preventDefault();
      const el = document.querySelector(id);
      if(el){ el.scrollIntoView({behavior:'smooth', block:'start'}); }
      // close mobile menu on navigation
      const mm = document.getElementById('mobileMenu');
      if(mm) mm.classList.add('hidden');
    }
  });
});

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
if(menuBtn){
  menuBtn.addEventListener('click', ()=>{
    const mm = document.getElementById('mobileMenu');
    if(mm){ mm.classList.toggle('hidden'); }
  });
}

// Footer year
const year = document.getElementById('year');
if(year){ year.textContent = new Date().getFullYear(); }
