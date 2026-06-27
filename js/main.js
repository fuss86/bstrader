/* =========================================
   BS-TRADER — main.js
   ========================================= */

// ---- DATA ----
const projects = [
  {
    id: 1,
    name: 'Poziomkowa 4',
    location: 'Gozdowo',
    year: 2018,
    units: 9,
    status: 'done',
    sold: true,
    img: 'img/poziomkowa4_1.jpg',
    img2: 'img/poziomkowa4_2.jpg',
    type: 'blok',
    desc: 'Pierwsza zrealizowana inwestycja BS-Trader. Trzypiętrowy budynek z 9 mieszkaniami przy ulicy Poziomkowej w Gozdowie, oddany do użytku w 2018 roku.'
  },
  {
    id: 2,
    name: 'Poziomkowa 4a',
    location: 'Gozdowo',
    year: 2019,
    units: 9,
    status: 'done',
    sold: true,
    img: 'img/poziomkowa4a_1.jpg',
    img2: 'img/poziomkowa4a_2.jpg',
    type: 'blok',
    desc: 'Kontynuacja zabudowy przy ulicy Poziomkowej. Budynek o nowoczesnej architekturze z charakterystyczną elewacją w kolorach bieli i terakoty.'
  },
  {
    id: 3,
    name: 'Poziomkowa 2',
    location: 'Gozdowo',
    year: 2020,
    units: 9,
    status: 'done',
    sold: true,
    img: 'img/poziomkowa2_1.jpg',
    img2: 'img/poziomkowa2_2.jpg',
    type: 'blok',
    desc: 'Nowoczesny budynek wielorodzinny przy ulicy Poziomkowej 2. Przestronne mieszkania w spokojnej okolicy Gozdowa.'
  },
  {
    id: 4,
    name: 'Kasztanowa',
    location: 'Gozdowo',
    year: 2021,
    units: 8,
    status: 'done',
    sold: true,
    img: 'img/kasztanowa_1.jpg',
    img2: 'img/kasztanowa_2.jpg',
    type: 'szeregowa',
    desc: 'Kameralny projekt zabudowy szeregowej przy ulicy Kasztanowej. 8 nowoczesnych domów szeregowych z balkonami, garażami i własnymi ogródkami.'
  },
  {
    id: 5,
    name: 'Leśna',
    location: 'Gozdowo',
    year: 2022,
    units: 16,
    status: 'done',
    sold: true,
    img: 'img/lesna_1.jpg',
    img2: 'img/lesna_2.jpg',
    type: 'szeregowa',
    desc: 'Największa dotychczasowa realizacja — 16 domów szeregowych przy ulicy Leśnej. Inwestycja składa się z dwóch segmentów z miejscami parkingowymi.'
  },
  {
    id: 6,
    name: 'Kolonia Przybyszewo – Etap 1',
    location: 'Przybyszewo',
    year: 2023,
    units: 4,
    status: 'done',
    sold: true,
    img: 'img/przybyszewo1_1.jpg',
    img2: 'img/przybyszewo1_2.jpg',
    type: 'szeregowa',
    desc: 'Pierwszy etap osiedla w Kolonii Przybyszewo. 4 nowoczesne domy szeregowe z aluminiowymi balustradami balkonowymi i starannie zagospodarowanym otoczeniem.'
  },
  {
    id: 7,
    name: 'Kolonia Przybyszewo – Etap 2',
    location: 'Przybyszewo',
    year: 2024,
    units: 4,
    status: 'done',
    sold: true,
    img: 'img/przybyszewo2_1.jpg',
    img2: 'img/przybyszewo2_2.jpg',
    type: 'szeregowa',
    desc: 'Drugi etap osiedla w Kolonii Przybyszewo. Domy z przestronnymi garażami i tarasami, otoczone naturą.'
  },
  {
    id: 8,
    name: 'Kolonia Przybyszewo – Etap 3',
    location: 'Przybyszewo',
    year: 2025,
    units: 4,
    status: 'done',
    sold: true,
    img: 'img/przybyszewo3_1.jpg',
    img2: 'img/przybyszewo3_2.jpg',
    type: 'szeregowa',
    desc: 'Trzeci i ostatni etap osiedla Kolonia Przybyszewo. Domy parterowe z poddaszem, dużymi garażami i tarasami. Wszystkie lokale sprzedane.'
  },
  {
    id: 9,
    name: 'Młyńska',
    location: 'Gozdowo',
    year: 2026,
    units: 4,
    status: 'done',
    sold: true,
    img: 'img/mlynska_1.jpg',
    img2: 'img/mlynska_2.jpg',
    type: 'szeregowa',
    desc: 'Nowoczesna zabudowa bliźniacza przy ulicy Młyńskiej. Duże przeszklenia, przestronne tarasy na poziomie piętra, przestronne wnętrza.'
  },
  {
    id: 10,
    name: 'Bukowa',
    location: 'Gozdowo',
    year: 2026,
    yearLabel: 'Listopad 2026',
    units: 4,
    status: 'building',
    sold: true,
    img: 'img/bukowa_1.jpg',
    img2: 'img/bukowa_2.jpg',
    type: 'szeregowa',
    desc: 'Inwestycja aktualnie w budowie, planowane oddanie w listopadzie 2026. Wszystkie lokale zostały już sprzedane — testament zaufania naszych klientów.'
  },
  {
    id: 11,
    name: 'Dębowa',
    location: 'Gozdowo',
    year: 2027,
    units: 4,
    status: 'prep',
    sold: true,
    img: null,
    type: 'szeregowa',
    desc: 'Inwestycja w przygotowaniu do budowy. Planowane oddanie w 2027 roku. Wszystkie 4 lokale zostały zarezerwowane jeszcze przed rozpoczęciem budowy.'
  },
  {
    id: 12,
    name: 'Sosnowa',
    location: 'Gozdowo',
    year: 2027,
    units: 4,
    status: 'sale',
    sold: false,
    img: null,
    type: 'szeregowa',
    desc: 'Nadchodząca inwestycja przy ulicy Sosnowej — 4 nowoczesne domy w spokojnej okolicy Gozdowa. Planowane oddanie w 2027 roku. Sprzedaż w toku — zapraszamy do kontaktu!'
  }
];

const statusLabel = {
  done: 'Zakończony',
  building: 'W budowie',
  prep: 'W przygotowaniu',
  sale: 'W sprzedaży'
};

const statusClass = {
  done: 'status-done',
  building: 'status-building',
  prep: 'status-prep',
  sale: 'status-sale'
};

const typeEmoji = { blok: '🏢', szeregowa: '🏘️' };

// ---- RENDER CARDS ----
function renderProjects(filter) {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = '';

  const filtered = filter === 'all' ? projects : projects.filter(p => {
    if (filter === 'done') return p.status === 'done';
    if (filter === 'active') return p.status === 'building' || p.status === 'prep' || p.status === 'sale';
  });

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.id = p.id;

    const imgHtml = p.img
      ? `<img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
      : '';

    const imgPlaceholder = `<div class="card-img-placeholder" style="${p.img ? 'display:none' : ''}">${typeEmoji[p.type] || '🏠'}</div>`;

    let footerHtml = '';
    if (p.status === 'sale') {
      footerHtml = `<div class="card-open-sale">🔴 Sprzedaż otwarta — skontaktuj się z nami</div>`;
    } else if (p.sold) {
      footerHtml = `<div class="card-sold">✓ Wszystkie lokale sprzedane</div>`;
    }

    card.innerHTML = `
      <div class="card-img">
        ${imgHtml}
        ${imgPlaceholder}
        <span class="card-status ${statusClass[p.status]}">${statusLabel[p.status]}</span>
      </div>
      <div class="card-body">
        <div class="card-year">${p.yearLabel || p.year} · ${p.location}</div>
        <h3>${p.name}</h3>
        <div class="card-meta">
          <div class="card-meta-item">
            <span class="meta-val">${p.units}</span>
            <span class="meta-key">Mieszkania</span>
          </div>
        </div>
        ${footerHtml}
      </div>
    `;

    card.addEventListener('click', () => openModal(p.id));
    grid.appendChild(card);
  });
}

// ---- FILTER ----
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

// ---- MODAL ----
let currentSlide = 0;
let currentImages = [];

function openModal(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;

  // Zbierz wszystkie zdjęcia projektu
  currentImages = [p.img, p.img2].filter(Boolean);
  currentSlide = 0;

  const overlay = document.getElementById('modal-overlay');

  let soldBadge = '';
  if (p.status === 'sale') {
    soldBadge = `<span style="color:var(--c-terra);font-weight:700;font-size:0.85rem;letter-spacing:0.08em;text-transform:uppercase">🔴 Sprzedaż otwarta</span>`;
  } else if (p.sold) {
    soldBadge = `<span style="color:var(--c-sold);font-weight:700;font-size:0.85rem;letter-spacing:0.08em;text-transform:uppercase">✓ Wszystkie lokale sprzedane</span>`;
  }

  const sliderHtml = currentImages.length > 0 ? `
    <div class="modal-slider">
      <img class="modal-slider-img" id="modal-main-img" src="${currentImages[0]}" alt="${p.name}">
      ${currentImages.length > 1 ? `
        <button class="slider-btn slider-prev" onclick="changeSlide(-1)">&#8249;</button>
        <button class="slider-btn slider-next" onclick="changeSlide(1)">&#8250;</button>
        <div class="slider-dots" id="slider-dots">
          ${currentImages.map((_, i) => `<button class="slider-dot ${i===0?'active':''}" onclick="goToSlide(${i})"></button>`).join('')}
        </div>
        <div class="slider-counter" id="slider-counter">1 / ${currentImages.length}</div>
      ` : ''}
    </div>
  ` : `<div style="width:100%;height:220px;background:var(--c-sand);display:flex;align-items:center;justify-content:center;font-size:4rem">${typeEmoji[p.type]}</div>`;

  overlay.querySelector('.modal').innerHTML = `
    <button class="modal-close" onclick="closeModal()">✕</button>
    ${sliderHtml}
    <div class="modal-body">
      <span class="card-status ${statusClass[p.status]}" style="position:static;display:inline-block;margin-bottom:0.75rem">${statusLabel[p.status]}</span>
      <h3>${p.name} <small style="font-size:1rem;color:var(--c-mid);font-family:var(--f-body);font-weight:400">— ${p.location}</small></h3>
      <div class="modal-meta">
        <div class="modal-meta-item">
          <span class="meta-val">${p.yearLabel || p.year}</span>
          <span class="meta-key">Rok oddania</span>
        </div>
        <div class="modal-meta-item">
          <span class="meta-val">${p.units}</span>
          <span class="meta-key">Mieszkania</span>
        </div>
      </div>
      <p style="color:var(--c-mid);line-height:1.7;margin-bottom:1.5rem">${p.desc}</p>
      ${soldBadge}
      ${p.status === 'sale' ? `<br><br><a href="#kontakt" class="btn btn-primary" onclick="closeModal()">Zapytaj o ofertę</a>` : ''}
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function changeSlide(dir) {
  goToSlide((currentSlide + dir + currentImages.length) % currentImages.length);
}

function goToSlide(index) {
  currentSlide = index;
  document.getElementById('modal-main-img').src = currentImages[index];
  document.querySelectorAll('.slider-dot').forEach((d, i) => d.classList.toggle('active', i === index));
  const counter = document.getElementById('slider-counter');
  if (counter) counter.textContent = `${index + 1} / ${currentImages.length}`;
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ---- NAV SCROLL ----
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
  document.querySelector('.scroll-top').classList.toggle('visible', window.scrollY > 400);
});

// ---- HAMBURGER ----
document.querySelector('.nav-hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

// ---- SMOOTH SCROLL for nav links ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      document.querySelector('.nav-links').classList.remove('open');
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ---- COUNTER ANIMATION ----
function animateCounters() {
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + suffix;
      if (current >= target) clearInterval(timer);
    }, 30);
  });
}

// Trigger counters when hero is visible
const heroObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    animateCounters();
    heroObserver.disconnect();
  }
}, { threshold: 0.3 });

heroObserver.observe(document.getElementById('hero'));

// ---- INIT ----
renderProjects('all');
