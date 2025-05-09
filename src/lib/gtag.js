// lib/gtag.js

export const GA_MEASUREMENT_ID = 'G-D89EC13C22'; // replace with your ID

// Pageview tracking
export const pageview = (url) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Custom event tracking
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
