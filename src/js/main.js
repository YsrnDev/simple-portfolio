// Dark Mode
const projects = document.getElementById('projects');
const skills = document.getElementById('skills');
const btnProjects = document.getElementById('btnProjects');
const btnSkills = document.getElementById('btnSkills');

btnProjects.addEventListener('click', () => {
  projects.classList.remove('hidden');
  skills.classList.add('hidden');
  btnSkills.classList.remove('bg-slate-100');
  btnProjects.classList.add('bg-slate-100');
});

btnSkills.addEventListener('click', () => {
  projects.classList.add('hidden');
  skills.classList.remove('hidden');
  btnProjects.classList.remove('bg-slate-100');
  btnSkills.classList.add('bg-slate-100');
});

const dark = document.getElementById('moon');
const light = document.getElementById('sun');
const html = document.getElementsByTagName('html')[0];

dark.addEventListener('click', () => {
  light.classList.remove('hidden');
  dark.classList.add('hidden');
  html.classList.add('dark');
});

light.addEventListener('click', () => {
  light.classList.add('hidden');
  dark.classList.remove('hidden');
  html.classList.remove('dark');
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  dark.classList.add('hidden');
  light.classList.remove('hidden');
} else {
  document.documentElement.classList.remove('dark');
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light';

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark';

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme');

// Scroll Reveal
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
});

sr.reveal(`.profile__border`);
sr.reveal(`.profile__name`, { delay: 500 });
sr.reveal(`.profile__profession`, { delay: 600 });
sr.reveal(`.profile__social`, { delay: 700 });
sr.reveal(`.profile__info-group`, { interval: 100, delay: 700 });
sr.reveal(`.profile__buttons`, { delay: 800 });
sr.reveal(`.filters__content`, { delay: 900 });
sr.reveal(`.filters`, { delay: 1000 });
