function toggleServices() {
  const expandedSection = document.querySelector('.services-expanded');
  const button = document.querySelector('.expand-button');
  
  if (expandedSection.style.display === 'none') {
    expandedSection.style.display = 'block';
    button.textContent = 'Ver menos';
  } else {
    expandedSection.style.display = 'none';
    button.textContent = 'Ver mais';
  }
} 