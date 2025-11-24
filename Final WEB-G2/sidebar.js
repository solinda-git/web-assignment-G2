 Sub-bar
function toggleSubBar(event) {
  event.preventDefault();
  const subBar = event.target.closest('.menu-item').querySelector('.sub-bar');
  const isActive = subBar.classList.contains('active');
  document.querySelectorAll('.sub-bar.active').forEach(el => el.classList.remove('active'));
  if (!isActive) subBar.classList.add('active');
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('.menu-item')) {
    document.querySelectorAll('.sub-bar.active').forEach(el => el.classList.remove('active'));
  }
});