// src/data/contact.js
// All contact page content lives here. Edit this file, not Contact.jsx.

// ---------- PAGE COPY ----------
export const PAGE = {
  eyebrow: 'Contact Us',
  heading: 'Get in touch',
  formNote: 'This form is UI only for now \u2014 connect it to email or a form service when ready.',
  submitLabel: 'Request a Quote',
}

// ---------- OFFICES ----------
// Add a location by appending another object to this array.
// lines    : one string per rendered line
// href     : makes the value clickable (tel: / mailto: / https:)
// external : opens in a new tab — use for web links only, not tel/mailto
export const OFFICES = [
  {
    name: 'Head Office',
    rows: [
      {
        label: 'Address',
        lines: [
          '318, Matrix Plaza, Jashoda Hathijan Road,',
          'Vinzol Vatav GIDC, Ahmedabad \u2013 382440',
          'Gujarat, India',
        ],
      },
      {
        label: 'Phone',
        lines: ['+91 83474 69999'],
        href: 'tel:+918347469999',
      },
      {
        label: 'WhatsApp',
        lines: ['+91 83474 69999'],
        href: 'https://wa.me/918347469999',
        external: true,
      },
      {
        label: 'Email',
        lines: ['info@myzektechnologies.com'],
        href: 'mailto:info@myzektechnologies.com',
      },
      {
        label: 'Business Hours',
        lines: ['Monday \u2013 Saturday', '9:00 AM \u2013 6:00 PM'],
      },
    ],
  },

  // ---------- BRANCH TEMPLATE ----------
  // Uncomment and fill in to add a second location.
  // {
  //   name: 'Branch Office',
  //   rows: [
  //     { label: 'Address', lines: ['Street address,', 'City \u2013 000000', 'State, India'] },
  //     { label: 'Phone', lines: ['+91 00000 00000'], href: 'tel:+910000000000' },
  //   ],
  // },
]

// ---------- FORM FIELDS ----------
// Fields in the same inner array render side by side in one row.
export const FORM_ROWS = [
  [
    { id: 'name', label: 'Full name', type: 'text', placeholder: 'Your name' },
    { id: 'company', label: 'Company', type: 'text', placeholder: 'Company name' },
  ],
  [
    { id: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com' },
    { id: 'phone', label: 'Phone', type: 'tel', placeholder: '+91 00000 00000' },
  ],
]

export const MESSAGE_FIELD = {
  id: 'message',
  label: 'Message',
  placeholder: 'Share your component requirement',
}