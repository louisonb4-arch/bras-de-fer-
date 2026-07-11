/* ═══════════ BRAS DE FER — interactions ═══════════ */

// ── Intro d'ouverture ──
const intro = document.getElementById("intro");
const noAnim =
  new URLSearchParams(location.search).has("noanim") ||
  matchMedia("(prefers-reduced-motion: reduce)").matches;

if (noAnim || !intro) {
  if (noAnim) document.body.classList.add("no-anim");
  document.body.classList.add("is-ready");
  intro?.remove();
} else {
  // toujours ouvrir sur la hero : pas de restauration de scroll ni de saut d'ancre (#lieu…)
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  if (location.hash) history.replaceState(null, "", location.pathname + location.search);
  window.scrollTo(0, 0);
  window.addEventListener("load", () => window.scrollTo(0, 0));
  document.body.classList.add("is-locked");
  setTimeout(() => {
    intro?.classList.add("is-done");
    document.body.classList.add("is-ready");
  }, 1500);
  intro?.addEventListener("transitionend", () => {
    intro.remove();
    document.body.classList.remove("is-locked");
  });
  // filet de sécurité si transitionend ne part pas
  setTimeout(() => {
    intro?.remove();
    document.body.classList.remove("is-locked");
  }, 3200);
}

// ── Burger menu ──
const burger = document.getElementById("burger");
const nav = document.querySelector(".nav");
burger?.addEventListener("click", () => nav.classList.toggle("is-open"));
document.querySelectorAll(".nav__links a").forEach((a) =>
  a.addEventListener("click", () => nav.classList.remove("is-open"))
);

// ── Carousel soirées ──
const track = document.getElementById("posterTrack");
const step = () => (track?.querySelector(".poster")?.offsetWidth ?? 240) + 26;
document.getElementById("prevPoster")?.addEventListener("click", () =>
  track.scrollBy({ left: -step(), behavior: "smooth" })
);
document.getElementById("nextPoster")?.addEventListener("click", () =>
  track.scrollBy({ left: step(), behavior: "smooth" })
);

// ── Scroll reveal ──
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
);
document.querySelectorAll(".reveal, .reveal-kids").forEach((el) => io.observe(el));
