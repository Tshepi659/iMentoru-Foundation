// Part 3 JavaScript: navigation, filtering, accordions, lightbox, map and forms.
document.addEventListener('DOMContentLoaded', () => {
  // Responsive navigation: supports mouse, keyboard and Escape dismissal.
  const menuButton = document.querySelector('.menu-btn');
  const navigationLinks = document.querySelector('.navlinks');
  if (menuButton && navigationLinks) {
    menuButton.addEventListener('click', () => {
      const open = navigationLinks.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    navigationLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navigationLinks.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false');
    }));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && navigationLinks.classList.contains('open')) {
        navigationLinks.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.focus();
      }
    });
  }

  // Search dynamically filters programme cards and reports the result count.
  const search = document.querySelector('#programme-search');
  if (search) {
    const cards = [...document.querySelectorAll('[data-searchable]')];
    const count = document.querySelector('#search-count');
    const filter = () => {
      const term = search.value.trim().toLowerCase(); let visible = 0;
      cards.forEach(card => {
        const match = card.textContent.toLowerCase().includes(term);
        card.hidden = !match; if (match) visible += 1;
      });
      count.textContent = `${visible} of ${cards.length} programme areas shown.`;
    };
    search.addEventListener('input', filter); filter();
  }

  // Accessible accordion: one panel opens at a time within each accordion.
  document.querySelectorAll('.accordion-trigger').forEach(button => button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    const group = button.closest('.accordion');
    group.querySelectorAll('.accordion-trigger').forEach(other => {
      other.setAttribute('aria-expanded', 'false');
      const panel = document.getElementById(other.getAttribute('aria-controls'));
      if (panel) panel.hidden = true;
    });
    if (!expanded) {
      button.setAttribute('aria-expanded', 'true');
      const panel = document.getElementById(button.getAttribute('aria-controls'));
      if (panel) panel.hidden = false;
    }
  }));

  // Lightbox enlarges selected gallery images and closes on Escape or backdrop.
  const lightbox = document.querySelector('#image-lightbox');
  if (lightbox) {
    const image = lightbox.querySelector('img'); const close = lightbox.querySelector('.lightbox-close');
    const closeBox = () => { lightbox.hidden = true; image.src = ''; };
    document.querySelectorAll('[data-lightbox]').forEach(trigger => trigger.addEventListener('click', () => {
      image.src = trigger.dataset.lightbox;
      image.alt = trigger.querySelector('img')?.alt || 'Expanded gallery image';
      lightbox.hidden = false; close.focus();
    }));
    close.addEventListener('click', closeBox);
    lightbox.addEventListener('click', event => { if (event.target === lightbox) closeBox(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && !lightbox.hidden) closeBox(); });
  }

  // Email forms validate before creating a structured mailto draft. No server is used.
  const emailForms = [
    { id: '#contact-form', feedback: '#contact-feedback', subject: 'Website contact message' },
    { id: '#enquiry-form', feedback: '#enquiry-feedback', subject: 'Website programme enquiry' }
  ];
  emailForms.forEach(config => {
    const form = document.querySelector(config.id); if (!form) return;
    form.addEventListener('submit', event => {
      event.preventDefault();
      const feedback = document.querySelector(config.feedback);
      if (!form.reportValidity()) return;
      const values = Object.fromEntries(new FormData(form).entries());
      const lines = Object.entries(values).map(([key, value]) => `${key}: ${value}`);
      const subject = `${config.subject} - ${values.fullName || 'Website visitor'}`;
      const body = `Website form submission\n\n${lines.join('\n')}`;
      feedback.classList.add('is-visible');
      feedback.textContent = 'Your details passed validation. An email draft is being prepared. Please review it and press Send in your email application to deliver the message.';
      const mailto = `mailto:info@imentorufoundation.org.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    });
  });

  // Legacy volunteer form remains a local demonstration and clearly says so.
  document.querySelectorAll('form[data-demo]').forEach(form => form.addEventListener('submit', event => {
    event.preventDefault(); if (!form.reportValidity()) return;
    const feedback = form.parentElement.querySelector('.flash');
    if (feedback) { feedback.classList.add('is-visible'); feedback.textContent = 'Thank you. This volunteer form is a classroom demonstration and does not transmit data. Please use the Enquiries page to prepare an email.'; }
    form.reset();
  }));

  // Leaflet interactive map: approximate public address area, not a verified doorway pin.
  const mapElement = document.querySelector('#foundation-map');
  if (mapElement && window.L) {
    const map = L.map(mapElement).setView([-25.7461, 28.1881], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([-25.7461, 28.1881]).addTo(map).bindPopup('Approximate Madiba Street / Sammy Marks Square area, Pretoria. Confirm the exact address with the organisation.').openPopup();
  } else if (mapElement) {
    mapElement.textContent = 'The interactive map could not load. Use the OpenStreetMap location link below.';
  }
});
