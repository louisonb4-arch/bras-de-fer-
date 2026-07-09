/* ═══════════ BRAS DE FER — animations ═══════════ */

if (typeof gsap === "undefined") {
  // CDN indisponible : site statique, pas d'intro
  document.getElementById("intro")?.remove();
  document.getElementById("nav")?.classList.add("is-in");
  const burgerEl = document.getElementById("burger");
  const menuEl = document.getElementById("mobileMenu");
  burgerEl?.addEventListener("click", () => {
    burgerEl.classList.toggle("is-open");
    menuEl?.classList.toggle("is-open");
  });
  throw new Error("gsap missing — static fallback");
}

gsap.registerPlugin(ScrollTrigger);

const reduceMotion =
  window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
  new URLSearchParams(location.search).has("noanim");

const qaParams = new URLSearchParams(location.search);
if (qaParams.has("noanim")) {
  document.documentElement.style.scrollBehavior = "auto";
  const target = qaParams.get("scrollto");
  if (target) {
    window.addEventListener("load", () => {
      const el = document.getElementById(target);
      if (el) document.body.style.transform = `translateY(${-(el.getBoundingClientRect().top + window.scrollY - 60)}px)`;
    });
  }
}

/* ── INTRO ── */
const intro = document.getElementById("intro");
const nav = document.getElementById("nav");

function revealHero() {
  nav.classList.add("is-in");
  const tl = gsap.timeline();
  tl.to("[data-hero-line]", {
    yPercent: 0,
    duration: 1.1,
    stagger: 0.12,
    ease: "power4.out",
    startAt: { yPercent: 110 },
  })
    .to("[data-hero]", {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.08,
      ease: "power3.out",
      startAt: { opacity: 0, y: 24 },
    }, "-=0.6")
    .from(".polaroid--hero1, .polaroid--hero2", {
      opacity: 0,
      y: 40,
      rotate: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: "power3.out",
      clearProps: "opacity",
    }, "-=0.7");
}

/* prepare hero state */
gsap.set("[data-hero-line]", { yPercent: 110 });
gsap.set("[data-hero]", { opacity: 0, y: 24 });

if (reduceMotion) {
  intro.remove();
  gsap.set("[data-hero-line], [data-hero]", { clearProps: "all" });
  nav.classList.add("is-in");
} else {
  const tl = gsap.timeline({
    onComplete: () => {
      intro.remove();
      revealHero();
    },
  });

  tl.to(".intro__logo", {
    opacity: 1,
    scale: 1,
    rotate: 0,
    duration: 0.9,
    ease: "power3.out",
    delay: 0.25,
  })
    .to(".intro__word .l", {
      yPercent: 0,
      y: 0,
      duration: 0.75,
      stagger: 0.045,
      ease: "power4.out",
      startAt: { yPercent: 110, y: 0 },
    }, "-=0.45")
    .to(".intro__tag", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    }, "-=0.3")
    .to({}, { duration: 0.55 }) // beat
    .to(".intro__panel--2", {
      scaleY: 1,
      transformOrigin: "bottom",
      duration: 0.45,
      ease: "power3.inOut",
    })
    .to(".intro__inner", { opacity: 0, duration: 0.2 }, "<")
    .to(".intro__panel--1, .intro__panel--2", {
      yPercent: -100,
      duration: 0.7,
      stagger: 0.08,
      ease: "power4.inOut",
    });
}

/* ── SCROLL REVEALS ── */
if (!reduceMotion) document.querySelectorAll("[data-reveal]").forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    y: 46,
    duration: 1.05,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 86%",
      once: true,
    },
  });
});

/* ── PARALLAX ── */
if (!reduceMotion) {
  document.querySelectorAll("[data-parallax]").forEach((el) => {
    const amount = parseFloat(el.dataset.parallax) || 40;
    gsap.to(el, {
      y: -amount,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      },
    });
  });
}

/* ── BURGER ── */
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
burger.addEventListener("click", () => {
  burger.classList.toggle("is-open");
  mobileMenu.classList.toggle("is-open");
});
mobileMenu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    burger.classList.remove("is-open");
    mobileMenu.classList.remove("is-open");
  })
);
