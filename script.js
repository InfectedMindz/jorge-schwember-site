const storyPreviews = Array.isArray(window.storyPreviews) ? window.storyPreviews : [];

const testimonials = [
  {
    quote: "Humor con filo, memoria familiar y una ironía que incomoda justo donde la solemnidad se relaja.",
    source: "Sátira y carácter",
  },
  {
    quote: "La experiencia médica aparece como una forma de mirar: atenta al detalle, al cuerpo y a sus historias.",
    source: "Oficio clínico",
  },
  {
    quote: "Cultura, historia, música y familia se cruzan en relatos que prefieren la lucidez al adorno.",
    source: "Lectura culta",
  },
  {
    quote: "Sus libros ofrecen una puerta breve y directa: leer una muestra, reconocer la voz y seguir al volumen completo.",
    source: "Entrada al libro",
  },
];

const quotePool = [
  {
    text: "¿De dónde vienes?\nDel paisillo corrupto.\nHay tantos, ¿cuál?\nDe uno de esos... no me atreví a singularizarlo.",
    source: "Cuento para taller literario",
    kind: "Selección del autor",
  },
  {
    text: "Me propuse seducirlo... le hice ver que era versada en literatura, pintura, música, varios idiomas... seguro que tuvo más de algún ménage à trois... hijas de puta... a los seis meses estábamos casados.",
    source: "Mi tía Olga y sus penurias",
    kind: "Selección del autor",
  },
  {
    text: "Fue tal mi indignación que comencé a gritar: ¡Ladrón! ¡Eres un ladrón! El eco y las reverberaciones colmaron el desfiladero. Era tanta la intensidad que por un momento creí que mis palabras quedarían grabadas en el granito.",
    source: "Juvenal, el Zaratustra criollo",
    kind: "Selección del autor",
  },
  {
    text: "¡Cachupín despídase de la Yoko! Y para sorpresa de todos los observadores vimos como nuestro regordete perro con capa, se le montaba por atrás y con tres a cuatro arremetidas le decía: ¡Hasta la próxima! Salimos sin decir palabra.",
    source: "Amor en una botella",
    kind: "Selección del autor",
  },
  {
    text: "Cada uno, con las manos enguantadas, le propinó seis balazos, dos de ellos en los genitales, el resto en el cráneo. El arma hechiza arrojada a un río cercano.",
    source: "Anatomía de un pirómano",
    kind: "Selección del autor",
  },
  {
    text: "Para justificar las ausencias, Alfredo urdió la simple estratagema de la caza de codornices y para los períodos de veda, el montañismo. Para estos fines se coludió con el cura de la parroquia quien también profitó de su generosidad.",
    source: "Un sepelio sui géneris",
    kind: "Selección del autor",
  },
  {
    text: "Y así yo nací. Mi primera ingesta fue pantagruélica: mendrugos de pan, arroz, hojas de lechuga, algunos trozos de queso, uno que otro maní. Tengo un pasar monótono, mi hábitat se reduce a la cocina y al comedor cuando hay visitas de confianza.",
    source: "Quiquiriquí, nacido de la ofuscación",
    kind: "Selección del autor",
  },
  {
    text: "Y vino un evento difícil de concebir en nuestro país: el Campeonato Mundial de Fútbol de 1962. Es increíble su elección como sede para esta reunión, sobrepasando a Argentina, Brasil y Uruguay.",
    source: "Memorias de un árbitro de fútbol",
    kind: "Selección del autor",
  },
  {
    text: "... como el caso del Bolero de Ravel, que comienza con un ostinato rítmico en la caja que se repite 169 veces, y que está compuesto de dos compases en un patrón de dos compases de 4/4 incrustados en el compás de 3/4 de la obra principal.",
    source: "La francofilia y mis aprensiones",
    kind: "Selección del autor",
  },
  {
    text: "Sólo mi arte me ha detenido. Oh, me parecía imposible dejar este mundo antes de haber creado todo aquello que soy capaz; por ello he decidido prolongar esta miserable existencia, en verdad miserable...",
    source: "Unas lágrimas por Beethoven",
    kind: "Selección del autor",
  },
  {
    text: "Luego de haberla escuchado atentamente le aconsejó: Marité lo que a usted le falta es una buena cacha. El agravio terminó en risotadas incluyendo a la aludida quien había recibido su ayuda para adquirir una vivienda y educar a sus dos hijas...",
    source: "Las que salieron del closet",
    kind: "Selección del autor",
  },
  {
    text: "... tuvo las pruebas irrefutables, pero primó el refrán quien te enoja te vence o como diría el gran cómico Coco Legrand: Hacerse el huevón.",
    source: "Asesinato de un médico impuntual y algo más",
    kind: "Selección del autor",
  },
  {
    text: "El adagio vivir hasta que uno se pueda limpiar el traste es mi lema.",
    source: "De nada a la vida",
    kind: "Selección del autor",
  },
  {
    text: "¡Horacio! ¡Horacio! ¡Ese caballero te conoce! —exclamó mi tía Eufemia.\n¿Cuál? —el veterano era engreído.\nAquel bajando por la escala.\nY... ¿cómo sabes que me conoce?\nPorque dijo, ¡qué boludo el hijo de puta!",
    source: "El Viejo Pascuero murió dos veces",
    kind: "Selección del autor",
  },
  {
    text: "Tiene una duración de 74 minutos y es tanta su universalidad, que el compact disc diseñado originalmente para 60, se incrementó el diámetro a 12,7 cm para albergar especialmente a tan conspicua obra.",
    source: "A dos siglos de la Novena Sinfonía",
    kind: "Selección del autor",
  },
  {
    text: "Nuestro héroe decidió emigrar cual Adán, con una mano por delante y otra por detrás; ésta última la retiró varias veces sin necesidad de evacuar.",
    source: "Cuentos del tío Willy",
    kind: "Selección del autor",
  },
  {
    text: "Mi madre tenía razón al decir más tira el poto de una mujer que una yunta de bueyes, o aplicado a este museo, más distrae el traste de una mujer que un cuadro de Botticelli.",
    source: "Una visita a Londres",
    kind: "Selección del autor",
  },
  {
    text: "La metáfora de Carl Sagan somos polvo de estrellas tiene mucha vigencia. Les Luthiers fueron más expresivos, todos venimos del mismo polvo.",
    source: "¿Por qué Jesús demora tanto en regresar?",
    kind: "Selección del autor",
  },
  {
    text: "Mientras más me das, más merezco.",
    source: "El (la) enigma de Lucrecia",
    kind: "Selección del autor",
  },
  {
    text: "El 5 de marzo de 2000, Inés Ramírez Pérez, campesina mexicana, se efectuó una cesárea a sí misma sobreviviendo junto a su hijo. Tal decisión desesperada la tomó por carencia de servicio médico inicial.",
    source: "Un viaje a los hitos de la Medicina",
    kind: "Selección del autor",
  },
  {
    text: "Charlie: lo fui en el amor hasta que conocí a mi cuarta esposa, ella tenía 18 años y yo 54. Tuvimos 8 hijos.\nWinnie: ¡Guácala...! ¿cómo habrías sido con Viagra? Deberían haberlo nominado Chaplagra.\nCharlie: ¡Sano sanote puro machote...!",
    source: "Churchill & Chaplin. Dos tipos excepcionales",
    kind: "Selección del autor",
  },
];

let quoteDeck = [];
let recentQuoteIndexes = [];

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderStoryLibrary() {
  const container = document.querySelector("#story-library");
  if (!container) return;

  if (!storyPreviews.length) {
    container.innerHTML = `<p class="story-empty">No fue posible cargar las muestras en este momento.</p>`;
    return;
  }

  container.innerHTML = `
    <div class="story-list reveal" role="list" aria-label="Relatos disponibles">
      ${storyPreviews
        .map(
          (story, index) => `<button
            class="story-card"
            type="button"
            role="listitem"
            data-story-index="${index}"
            aria-pressed="${index === 0 ? "true" : "false"}"
          >
            <span class="card-meta">${escapeHTML(story.meta)}</span>
            <strong>${escapeHTML(story.title)}</strong>
            <span>${escapeHTML(story.dek)}</span>
            <small>Lectura de muestra</small>
          </button>`
        )
        .join("")}
    </div>
    <article class="story-reader reveal" id="story-reader" tabindex="-1" aria-live="polite"></article>
  `;

  container.querySelectorAll("[data-story-index]").forEach((button) => {
    button.addEventListener("click", () => {
      renderStoryReader(Number(button.dataset.storyIndex), true);
    });
  });

  renderStoryReader(0, false);
}

function setActiveStoryButton(activeIndex) {
  document.querySelectorAll("[data-story-index]").forEach((button) => {
    const isActive = Number(button.dataset.storyIndex) === activeIndex;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderStoryReader(index, shouldFocus) {
  const reader = document.querySelector("#story-reader");
  if (!reader || !storyPreviews.length) return;

  const safeIndex = (index + storyPreviews.length) % storyPreviews.length;
  const story = storyPreviews[safeIndex];
  const previousIndex = (safeIndex - 1 + storyPreviews.length) % storyPreviews.length;
  const nextIndex = (safeIndex + 1) % storyPreviews.length;
  const buyLabel = "Comprar Veinte relatos de sátira";

  reader.innerHTML = `
    <header class="story-reader-header">
      <p class="eyebrow">Lectura de muestra</p>
      <h3>${escapeHTML(story.title)}</h3>
      <p class="story-reader-dek">${escapeHTML(story.dek)}</p>
    </header>
    <div class="story-prose">
      ${story.paragraphs.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("")}
    </div>
    <footer class="story-reader-footer">
      <p>
        Esta lectura reproduce sólo una parte del cuento. Para leerlo completo, continúa en
        <em>${escapeHTML(story.book)}</em>, disponible en edición digital.
      </p>
      <div class="story-reader-actions">
        <a class="button primary" href="${escapeHTML(
          story.amazonUrl
        )}" target="_blank" rel="noopener noreferrer">${buyLabel}</a>
        <button class="button ghost" type="button" data-story-nav="${previousIndex}">Relato anterior</button>
        <button class="button ghost" type="button" data-story-nav="${nextIndex}">Siguiente relato</button>
      </div>
    </footer>
  `;

  reader.querySelectorAll("[data-story-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      renderStoryReader(Number(button.dataset.storyNav), true);
    });
  });

  setActiveStoryButton(safeIndex);
  reader.scrollTop = 0;

  if (shouldFocus) {
    reader.focus({ preventScroll: true });
    reader.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderTestimonials() {
  const container = document.querySelector("#testimonials");
  if (!container) return;

  container.innerHTML = testimonials
    .map(
      (item) => `<figure class="testimonial-card reveal">
        <blockquote>${item.quote}</blockquote>
        <figcaption>${item.source}</figcaption>
      </figure>`
    )
    .join("");
}

function initNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  if (!toggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove("is-open");
    toggle.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("nav-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

function initNewsletter() {
  const form = document.querySelector("#newsletter-form");
  const note = document.querySelector("#form-note");
  if (!form || !note) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const email = String(formData.get("email") || "").trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      note.textContent = "Ingresa un correo válido.";
      note.classList.remove("success");
      return;
    }

    const subject = encodeURIComponent("Solicitud de suscripción a la bitácora de Jorge Schwember F");
    const body = encodeURIComponent(
      `Hola, quisiera recibir novedades de Jorge Schwember F en este correo: ${email}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=horaciosch%40gmail.com&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    note.textContent = "Se abrió un correo para enviar tu solicitud de suscripción.";
    note.classList.add("success");
    form.reset();
  });
}

function shuffleIndexes(indexes) {
  const shuffled = [...indexes];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function buildQuoteDeck(excludedIndexes = new Set()) {
  const availableIndexes = quotePool
    .map((_, index) => index)
    .filter((index) => !excludedIndexes.has(index));

  return shuffleIndexes(availableIndexes);
}

function rememberQuote(index) {
  const recentWindow = Math.min(7, Math.max(3, Math.floor(quotePool.length / 4)));
  recentQuoteIndexes = [index, ...recentQuoteIndexes.filter((item) => item !== index)].slice(
    0,
    recentWindow
  );
}

function renderQuote(index, elements) {
  const item = quotePool[index];
  if (!item) return;

  elements.quote.textContent = item.text;
  elements.quote.dataset.quoteIndex = String(index);
  elements.source.textContent = item.source;
  elements.kind.textContent = item.kind;
  rememberQuote(index);
}

function pickNextQuoteIndex(currentIndex) {
  const excludedIndexes = new Set(recentQuoteIndexes);
  excludedIndexes.add(currentIndex);

  while (quoteDeck.length > 0 && excludedIndexes.has(quoteDeck[0])) {
    quoteDeck.shift();
  }

  if (quoteDeck.length === 0) {
    quoteDeck = buildQuoteDeck(excludedIndexes);
  }

  if (quoteDeck.length === 0) {
    quoteDeck = buildQuoteDeck(new Set([currentIndex]));
  }

  return quoteDeck.shift() ?? currentIndex;
}

function initRandomQuote() {
  const button = document.querySelector("#quote-button");
  const quote = document.querySelector("#featured-quote");
  const source = document.querySelector("#featured-quote-source");
  const kind = document.querySelector("#featured-quote-kind");
  if (!button || !quote || !source || !kind || quotePool.length === 0) return;

  const elements = { quote, source, kind };
  quoteDeck = buildQuoteDeck();
  const initialIndex = quoteDeck.shift() ?? 0;
  renderQuote(initialIndex, elements);

  button.addEventListener("click", () => {
    const currentIndex = Number(quote.dataset.quoteIndex);
    const nextIndex = pickNextQuoteIndex(currentIndex);
    renderQuote(nextIndex, elements);
  });
}

function initReveal() {
  const elements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  elements.forEach((element) => observer.observe(element));
}

renderStoryLibrary();
renderTestimonials();
initNavigation();
initNewsletter();
initRandomQuote();
initReveal();
