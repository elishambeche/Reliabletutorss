document.querySelectorAll('.lesson-card').forEach(card => {
  card.addEventListener('click', function() {
    document.getElementById('subject').value = this.dataset.subject;
    document.querySelector('#form').scrollIntoView({ behavior: 'smooth' });
  });
});