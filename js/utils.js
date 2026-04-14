/* ============================================
   DR S C SANTRA CLINIC — Shared Utilities
   ============================================ */

// ---- Clinic Schedule (24h) ----
// Format: [startHour, startMin, endHour, endMin]
const CLINIC_SCHEDULE = {
  0: [[8, 0, 12, 0], [18, 0, 22, 0]],   // Sunday
  1: [[8, 0, 12, 0], [18, 0, 22, 0]],   // Monday
  2: [[8, 0, 12, 0], [18, 0, 22, 0]],   // Tuesday
  3: [[8, 0, 12, 0], [18, 0, 22, 0]],   // Wednesday
  4: [[8, 0, 12, 0], [18, 0, 22, 0]],   // Thursday
  5: [[8, 0, 12, 0], [18, 0, 22, 0]],   // Friday
  6: [[8, 0, 12, 0], [18, 0, 22, 0]],   // Saturday
};

/**
 * Returns { open: bool, currentSlotEnd: [hh, mm] }
 */
function isOpenNow() {
  const now = new Date();
  const day = now.getDay();
  const current = now.getHours() * 60 + now.getMinutes();
  const slots = CLINIC_SCHEDULE[day];

  if (!slots) return { open: false, currentSlotEnd: null };

  for (const [sh, sm, eh, em] of slots) {
    if (current >= sh * 60 + sm && current < eh * 60 + em) {
      return { open: true, currentSlotEnd: [eh, em] };
    }
  }
  return { open: false, currentSlotEnd: null };
}

/**
 * Returns a human-readable "next open" string, or closing time string
 */
function formatTime(h, m) {
  const ampm = h < 12 ? 'AM' : 'PM';
  const h12 = h > 12 ? h - 12 : (h === 0 ? 12 : h);
  return `${h12}:${String(m).padStart(2, '0')} ${ampm}`;
}

function getNextOpenTime() {
  const now = new Date();
  const currentMin = now.getHours() * 60 + now.getMinutes();
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // First check today's remaining slots
  const todaySlots = CLINIC_SCHEDULE[now.getDay()];
  if (todaySlots) {
    for (const [sh, sm, eh, em] of todaySlots) {
      const slotStart = sh * 60 + sm;
      if (slotStart > currentMin) {
        return `Today ${formatTime(sh, sm)}`;
      }
    }
  }

  // Then check upcoming days
  for (let i = 1; i <= 7; i++) {
    const day = (now.getDay() + i) % 7;
    const slots = CLINIC_SCHEDULE[day];
    if (slots && slots.length > 0) {
      const [sh, sm] = slots[0];
      return `${dayNames[day]} ${formatTime(sh, sm)}`;
    }
  }
  return null;
}

/**
 * Renders the Open/Closed badge into element with id="clinic-status"
 */
function renderClinicStatus() {
  const el = document.getElementById('clinic-status');
  if (!el) return;

  const status = isOpenNow();

  if (status.open) {
    const closingTime = formatTime(status.currentSlotEnd[0], status.currentSlotEnd[1]);
    el.innerHTML = `
      <div class="banner-status-badge open">
        <span class="status-dot"></span>
        Open Now &middot; Closes ${closingTime}
      </div>
    `;
  } else {
    const next = getNextOpenTime();
    el.innerHTML = `
      <div class="banner-status-badge closed">
        <span class="status-dot"></span>
        Closed &middot; Opens ${next || 'soon'}
      </div>
    `;
  }
}

// Auto-render on page load
document.addEventListener('DOMContentLoaded', renderClinicStatus);

/**
 * Share Visiting Card functionality
 */
function shareVisitingCard() {
  if (navigator.share) {
    navigator.share({
      title: 'Prof. (Dr.) S.C. Santra - Gynecologist & Obstetrician',
      text: 'Here is the contact information for Prof. (Dr.) S.C. Santra, highly experienced Gynecologist & Obstetrician in Kolkata.',
      url: window.location.href
    }).catch(console.error);
  } else {
    // Fallback
    const dummy = document.createElement('input');
    document.body.appendChild(dummy);
    dummy.value = window.location.href;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert('Website link copied to clipboard!');
  }
}
