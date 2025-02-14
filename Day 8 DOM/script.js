document.getElementById('imageUpload').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
          document.getElementById('cardImage').src = e.target.result;
      };
      reader.readAsDataURL(file);
  }
});

document.getElementById('action-btn').addEventListener('click', function() {
  const card = document.querySelector('.card');
  
  // Remove animation class if already present
  card.classList.remove('animated');
  
  // Use setTimeout to allow re-adding the class for animation effect
  setTimeout(() => {
      card.classList.add('animated');
  }, 10);
});
