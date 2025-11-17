// Effet tilt simple
    const media = document.getElementById('media');
    media.addEventListener('mousemove', e => {
      const rect = media.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const img = document.getElementById('media-img');
      img.style.transform = `rotateX(${ -y * 6 }deg) rotateY(${ x * 8 }deg) scale(1.03)`;
    });
    media.addEventListener('mouseleave', ()=>{
      const img = document.getElementById('media-img');
      img.style.transform = '';
    });

    // Confetti simple (création de divs animées)
    function spawnConfetti(amount=30){
      const container = document.getElementById('confetti');
      const colors = ['#ff6b6b','#00e6a8','#ffd166','#7bdff5','#b39cff'];
      for(let i=0;i<amount;i++){
        const el = document.createElement('div');
        el.className = 'c';
        const size = Math.random()*10+6;
        el.style.position = 'absolute';
        el.style.left = Math.random()*100 + '%';
        el.style.top = '-10%';
        el.style.width = size+'px';
        el.style.height = (size*0.6)+'px';
        el.style.background = colors[Math.floor(Math.random()*colors.length)];
        el.style.opacity = 0.95;
        el.style.borderRadius = (Math.random()>0.5? '2px':'50%');
        el.style.transform = `rotate(${Math.random()*360}deg)`;
        el.style.pointerEvents = 'none';
        el.style.zIndex = 9999;
        container.appendChild(el);
        // animation via JS
        const duration = 2000 + Math.random()*1800;
        const endX = (Math.random()-0.5) * 200; // drift
        const endY = window.innerHeight + 200 + Math.random()*300;
        el.animate([
          { transform: `translate3d(0,0,0) rotate(${Math.random()*360}deg)`, opacity:1 },
          { transform: `translate3d(${endX}px, ${endY}px, 0) rotate(${Math.random()*720}deg)`, opacity:0.9 }
        ], { duration, easing: 'cubic-bezier(.2,.8,.2,1)' });
        setTimeout(()=> el.remove(), duration+50);
      }
    }

    // Toast
    function showToast(msg, time=1800){
      const t = document.getElementById('toast');
      t.textContent = msg;
      t.classList.add('show');
      setTimeout(()=> t.classList.remove('show'), time);
    }

    document.getElementById('launchBtn').addEventListener('click', ()=>{
      spawnConfetti(40);
      showToast('Troll lancé !');
      // ici tu peux déclencher des actions réelles (API, script...) 
    });
