// scripts.js
(function(){
    const thumbs = document.querySelectorAll('.thumb');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalDownload = document.getElementById('modalDownload');
    const modalClose = document.getElementById('modalClose');
  
    function openModal(src, title){
      modalImg.src = src;
      modalImg.alt = title || 'Poster';
      modalTitle.textContent = title || '';
      modalDownload.href = src;
      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden','false');
      document.body.style.overflow = 'hidden';
    }
  
    thumbs.forEach(t => {
      t.addEventListener('click', ()=> openModal(t.dataset.full, t.dataset.title));
      t.addEventListener('keydown', (e)=> { if(e.key === 'Enter' || e.key === ' ') openModal(t.dataset.full, t.dataset.title) });
    });
  
    function closeModal(){
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden','true');
      document.body.style.overflow = '';
    }
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e)=> { if(e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e)=> { if(e.key === 'Escape') closeModal() });
  
    // Animate skill bars on view
    function animateBars(){
      const bars = document.querySelectorAll('.bar > i');
      bars.forEach(b => {
        const width = b.style.width || '0%';
        b.style.width = '0%';
        setTimeout(()=> b.style.width = width, 120);
      });
    }
    window.addEventListener('load', animateBars);
  })();
  