gsap.registerPlugin(ScrollTrigger);

// Animação de entrada do Hero
gsap.from(".reveal-text", { duration: 1.5, y: 100, opacity: 0, ease: "power4.out" });
gsap.from(".reveal-subtext", { duration: 1.5, y: 50, opacity: 0, ease: "power4.out", delay: 0.3 });

// Animação de revelação ao rolar a página (ScrollReveal)
const reveals = gsap.utils.toArray('.reveal');
reveals.forEach(el => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    });
});

// Simulação Interativa de Carreiras
const buttons = document.querySelectorAll('.btn-pill');
const feedback = document.getElementById('career-feedback');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const area = btn.innerText;
        feedback.innerHTML = `<p>Existem 12 novas vagas para <strong>${area}</strong> em nossa sede de Curitiba. Deseja aplicar?</p>
                             <button class="btn-apple dark mt-2">Candidatar-se agora</button>`;
        
        gsap.from(feedback, { opacity: 0, y: 10, duration: 0.5 });
    });
});

// Efeito de Parallax suave nas imagens de produtos
gsap.to(".product-card img", {
    y: -30,
    scrollTrigger: {
        trigger: ".product-card",
        scrub: true
    }
});