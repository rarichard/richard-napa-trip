let currentDay = 0;
const totalDays = 5;

function goToDay(day) {
  currentDay = day;

  // Update tabs
  document.querySelectorAll('.day-tab').forEach(tab => {
    tab.classList.toggle('active', parseInt(tab.dataset.day) === day);
  });

  // Update panels
  document.querySelectorAll('.day-panel').forEach(panel => {
    panel.classList.toggle('active', parseInt(panel.dataset.day) === day);
  });

  // Update arrows
  document.getElementById('prevDay').disabled = day === 0;
  document.getElementById('nextDay').disabled = day === totalDays - 1;

  // Scroll to nav
  const nav = document.getElementById('dayNav');
  const navTop = nav.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: navTop, behavior: 'smooth' });
}

function prevDay() {
  if (currentDay > 0) goToDay(currentDay - 1);
}

function nextDay() {
  if (currentDay < totalDays - 1) goToDay(currentDay + 1);
}

// Tab click handlers
document.querySelectorAll('.day-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    goToDay(parseInt(tab.dataset.day));
  });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevDay();
  if (e.key === 'ArrowRight') nextDay();
});
