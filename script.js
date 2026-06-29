const body = document.body;
const cursorGlow = document.getElementById('cursorGlow');

window.addEventListener('pointermove', (event) => {
  if (!cursorGlow) return;
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

const themeToggle = document.getElementById('themeToggle');
themeToggle?.addEventListener('click', () => {
  const next = body.getAttribute('data-theme') === 'contrast' ? '' : 'contrast';
  if (next) body.setAttribute('data-theme', next);
  else body.removeAttribute('data-theme');
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const element = entry.target;
    const target = Number(element.dataset.count || 0);
    const duration = 1200;
    const start = performance.now();
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
    countObserver.unobserve(element);
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach((element) => countObserver.observe(element));

const heroPhones = [
  'assets/mobile-admin-home.png',
  'assets/mobile-parent-home.png',
  'assets/mobile-schedule.png',
  'assets/mobile-payments.png'
];
let heroPhoneIndex = 0;
setInterval(() => {
  const img = document.getElementById('heroPhone');
  if (!img) return;
  heroPhoneIndex = (heroPhoneIndex + 1) % heroPhones.length;
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = heroPhones[heroPhoneIndex];
    img.style.opacity = '1';
  }, 180);
}, 2600);

document.querySelectorAll('.tab-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach((item) => item.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    document.getElementById(`tab-${tab}`)?.classList.add('active');
  });
});

const mobileScreens = [
  'assets/mobile-welcome.png',
  'assets/mobile-login.png',
  'assets/mobile-create-account.png',
  'assets/mobile-admin-home.png',
  'assets/mobile-parent-home.png',
  'assets/mobile-schedule.png',
  'assets/mobile-join.png',
  'assets/mobile-payments.png',
  'assets/mobile-account.png',
  'assets/mobile-notifications.png'
];
let mobileIndex = 0;
const mobileCarousel = document.getElementById('mobileCarousel');
function setMobileSlide(index) {
  if (!mobileCarousel) return;
  mobileIndex = (index + mobileScreens.length) % mobileScreens.length;
  mobileCarousel.style.opacity = '0';
  setTimeout(() => {
    mobileCarousel.src = mobileScreens[mobileIndex];
    mobileCarousel.style.opacity = '1';
  }, 160);
}
document.querySelector('.carousel-btn.next')?.addEventListener('click', () => setMobileSlide(mobileIndex + 1));
document.querySelector('.carousel-btn.prev')?.addEventListener('click', () => setMobileSlide(mobileIndex - 1));
setInterval(() => setMobileSlide(mobileIndex + 1), 4200);

const galleryItems = [
  {
    title: 'Executive admin dashboard',
    category: 'desktop',
    span: 'wide',
    image: 'assets/desktop-dashboard.png',
    tag: 'Web dashboard',
    description: 'High-level school KPIs, attendance trend, sessions overview, and balance snapshot.'
  },
  {
    title: 'Student profile and debt alert',
    category: 'desktop',
    image: 'assets/desktop-student-profile.png',
    tag: 'Student operations',
    description: 'Student details, enrolled groups, current balance, attendance status, and actions.'
  },
  {
    title: 'QR attendance scanner',
    category: 'desktop attendance',
    image: 'assets/desktop-qr-scanner-wide.png',
    tag: 'Attendance',
    description: 'Scan by camera or search manually when a student forgets the card.'
  },
  {
    title: 'Groups management',
    category: 'desktop',
    image: 'assets/desktop-groups.png',
    tag: 'Education operations',
    description: 'Group capacity, teachers, status, subjects, and enrollment overview.'
  },
  {
    title: 'Attendance management',
    category: 'desktop attendance',
    span: 'wide',
    image: 'assets/desktop-attendance.png',
    tag: 'Attendance engine',
    description: 'Present, absent, late, blocked, and make-up attendance records.'
  },
  {
    title: 'Student payments',
    category: 'desktop finance',
    image: 'assets/desktop-payments.png',
    tag: 'Finance',
    description: 'Student payment history, teacher payments, net profit, and school balance.'
  },
  {
    title: 'Financial accounts',
    category: 'desktop finance',
    image: 'assets/desktop-accounts.png',
    tag: 'Finance',
    description: 'Main school account, accumulated earnings, liabilities, and net worth.'
  },
  {
    title: 'Attendance policy settings',
    category: 'desktop attendance',
    image: 'assets/desktop-settings-attendance.png',
    tag: 'Platform settings',
    description: 'Blocked absence configuration and discipline automation rules.'
  },
  {
    title: 'System update and cloud sync',
    category: 'desktop',
    image: 'assets/desktop-settings-sync.png',
    tag: 'Deployment',
    description: 'OTA update concept and cloud DB synchronization roadmap.'
  },
  {
    title: 'Team and permissions',
    category: 'desktop auth',
    image: 'assets/desktop-team.png',
    tag: 'RBAC',
    description: 'Administrators, team members, teachers, parents, students, and role statuses.'
  },
  {
    title: 'Pending approvals',
    category: 'desktop auth',
    image: 'assets/desktop-pending-approvals.png',
    tag: 'Registration flow',
    description: 'Student, parent, and group join requests with approval and rejection actions.'
  },
  {
    title: 'Notifications command center',
    category: 'desktop',
    span: 'wide',
    image: 'assets/desktop-notifications.png',
    tag: 'Notifications',
    description: 'Priority alerts, negative balance alerts, pending registrations, and payment notices.'
  },
  {
    title: 'Public landing page',
    category: 'desktop auth',
    span: 'wide',
    image: 'assets/desktop-landing.png',
    tag: 'Marketing page',
    description: 'Public-facing landing page for account creation and login paths.'
  },
  {
    title: 'Mobile welcome experience',
    category: 'mobile auth',
    image: 'assets/mobile-welcome.png',
    tag: 'Mobile auth',
    description: 'Polished mobile entry screen with educational visual identity.'
  },
  {
    title: 'Mobile sign in bottom sheet',
    category: 'mobile auth',
    image: 'assets/mobile-login.png',
    tag: 'Mobile auth',
    description: 'Role-aware login experience with modern bottom sheet UI.'
  },
  {
    title: 'Mobile account creation',
    category: 'mobile auth',
    image: 'assets/mobile-create-account.png',
    tag: 'Mobile registration',
    description: 'Student and parent account selection with clear request flows.'
  },
  {
    title: 'Student registration wizard',
    category: 'mobile auth',
    image: 'assets/mobile-student-registration.png',
    tag: 'Registration',
    description: 'Multi-step student registration designed for mobile completion.'
  },
  {
    title: 'Admin mobile dashboard',
    category: 'mobile finance',
    image: 'assets/mobile-admin-home.png',
    tag: 'Admin mobile',
    description: 'Quick operations for scan attendance, add student, create class, and add payment.'
  },
  {
    title: 'Parent portal home',
    category: 'mobile',
    image: 'assets/mobile-parent-home.png',
    tag: 'Parent portal',
    description: 'Next class countdown, selected child, groups, requests, and today’s classes.'
  },
  {
    title: 'Child selector',
    category: 'mobile',
    image: 'assets/mobile-child-selector.png',
    tag: 'Parent portal',
    description: 'Parents switch between children and can request adding a child.'
  },
  {
    title: 'Current groups bottom sheet',
    category: 'mobile',
    image: 'assets/mobile-groups-modal.png',
    tag: 'Groups',
    description: 'Mobile bottom sheet for viewing all currently enrolled groups.'
  },
  {
    title: 'Mobile schedule',
    category: 'mobile',
    image: 'assets/mobile-schedule.png',
    tag: 'Schedule',
    description: 'Weekly schedule navigation with upcoming class card.'
  },
  {
    title: 'Join groups flow',
    category: 'mobile',
    image: 'assets/mobile-join.png',
    tag: 'Enrollment',
    description: 'Find teachers and request joining available groups from the phone.'
  },
  {
    title: 'Mobile payment history',
    category: 'mobile finance',
    image: 'assets/mobile-payments.png',
    tag: 'Finance',
    description: 'Parent payment history grouped by date, group, method, and status.'
  },
  {
    title: 'Mobile account settings',
    category: 'mobile',
    image: 'assets/mobile-account.png',
    tag: 'Profile',
    description: 'Account data, password, language preferences, alerts, and support.'
  },
  {
    title: 'Mobile notifications',
    category: 'mobile',
    image: 'assets/mobile-notifications.png',
    tag: 'Notifications',
    description: 'Attendance and payment alerts grouped by today, week, and older notices.'
  }
];

const galleryGrid = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');

function createGallery() {
  if (!galleryGrid) return;
  galleryGrid.innerHTML = '';
  galleryItems.forEach((item) => {
    const card = document.createElement('article');
    card.className = `gallery-card ${item.span || ''} ${item.category.includes('mobile') ? 'mobile' : ''}`;
    card.dataset.category = item.category;
    card.innerHTML = `
      <div class="gallery-thumb"><img src="${item.image}" alt="${item.title}" loading="lazy"></div>
      <div class="gallery-meta">
        <span>${item.tag}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;
    card.addEventListener('click', () => openLightbox(item));
    galleryGrid.appendChild(card);
  });
}

function openLightbox(item) {
  if (!lightbox || !lightboxImage || !lightboxCaption) return;
  lightboxImage.src = item.image;
  lightboxImage.alt = item.title;
  lightboxCaption.textContent = item.title;
  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
  body.classList.add('modal-open');
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  body.classList.remove('modal-open');
}

document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});

document.querySelectorAll('.filter-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    document.querySelectorAll('.gallery-card').forEach((card) => {
      const show = filter === 'all' || card.dataset.category.includes(filter);
      card.classList.toggle('hidden', !show);
    });
  });
});

createGallery();

const tiltCards = document.querySelectorAll('.tilt-card');
tiltCards.forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - .5) * -9;
    const rotateX = ((y / rect.height) - .5) * 7;
    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  });
  card.addEventListener('pointerleave', () => {
    card.style.transform = 'rotateY(-8deg) rotateX(4deg)';
  });
});
