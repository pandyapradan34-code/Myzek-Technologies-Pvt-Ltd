// export default function Contact() {
//   return (
//     <div className="page page-contact">
//       <section className="page-header">
//         <div className="container">
//           <p className="eyebrow">Contact Us</p>
//           <h1>Get in touch</h1>
//         </div>
//       </section>

//       <section className="container section contact-grid">
//         {/* OFFICE / HQ + ADDITIONAL BRANCH LOCATIONS */}
//         <div className="contact-locations">
//           <div className="location-card">
//             <h3>Head Office</h3>
//             <dl>
//               <dt>Address</dt>
//               <dd>Street address, City, State, ZIP, Country</dd>
//               <dt>Phone</dt>
//               <dd>+1 (000) 000-0000</dd>
//               <dt>Email</dt>
//               <dd>info@myzektechnologies.com</dd>
//             </dl>
//           </div>

//           {/* Duplicate this card for each additional branch location */}
//           <div className="location-card">
//             <h3>Branch Office (example)</h3>
//             <dl>
//               <dt>Address</dt>
//               <dd>Street address, City, State, ZIP, Country</dd>
//               <dt>Phone</dt>
//               <dd>+1 (000) 000-0000</dd>
//             </dl>
//           </div>
//         </div>

//         {/* CONTACT FORM (UI only — not yet wired to a backend) */}
//         <form className="form" onSubmit={(e) => e.preventDefault()}>
//           <div className="form-row">
//             <div className="form-field">
//               <label htmlFor="name">Full name</label>
//               <input id="name" type="text" placeholder="Your name" />
//             </div>
//             <div className="form-field">
//               <label htmlFor="company">Company</label>
//               <input id="company" type="text" placeholder="Company name" />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-field">
//               <label htmlFor="email">Email</label>
//               <input id="email" type="email" placeholder="you@company.com" />
//             </div>
//             <div className="form-field">
//               <label htmlFor="phone">Phone</label>
//               <input id="phone" type="tel" placeholder="+1 (000) 000-0000" />
//             </div>
//           </div>
//           <div className="form-field">
//             <label htmlFor="message">Message</label>
//             <textarea id="message" placeholder="How can we help?" />
//           </div>
//           <p className="form-note">This form is UI only for now — connect it to email or a form service when ready.</p>
//           <button type="submit" className="btn btn-accent" style={{ justifySelf: 'start' }}>
//             Send Message
//           </button>
//         </form>
//       </section>
//     </div>
//   )
// }




// export default function Contact() {
//   return (
//     <div className="page page-contact">
//       <section className="page-header">
//         <div className="container">
//           <p className="eyebrow">Contact Us</p>
//           <h1>Get in touch</h1>
//         </div>
//       </section>


//       <section className="container section contact-grid">
//         {/* OFFICE / HQ */}
//         <div className="contact-locations">
//           <div className="location-card">
//             <h3>Head Office</h3>
//             <dl>
//               <dt>Address</dt>
//               <dd>
//                 318, Matrix Plaza, Jashoda Hathijan Road,
//                 <br />
//                 Vinzol Vatav GIDC, Ahmedabad &ndash; 382440
//                 <br />
//                 Gujarat, India
//               </dd>
//               <dt>Phone</dt>
//               <dd>
//                 <a href="tel:+918347469999">+91 83474 69999</a>
//               </dd>
//               <dt>WhatsApp</dt>
//               <dd>
//                 <a href="https://wa.me/918347469999" target="_blank" rel="noreferrer">
//                   +91 83474 69999
//                 </a>
//               </dd>
//               <dt>Email</dt>
//               <dd>
//                 <a href="mailto:info@myzektechnologies.com">info@myzektechnologies.com</a>
//               </dd>
//               <dt>Business Hours</dt>
//               <dd>
//                 Monday &ndash; Saturday
//                 <br />
//                 9:00 AM &ndash; 6:00 PM
//               </dd>
//             </dl>
//           </div>

//           {/* Duplicate this card for each additional branch location:
//               copy the .location-card block above, change the <h3> and the values. */}
//         </div>

//         {/* CONTACT FORM (UI only — not yet wired to a backend) */}
//         <form className="form" onSubmit={(e) => e.preventDefault()}>
//           <div className="form-row">
//             <div className="form-field">
//               <label htmlFor="name">Full name</label>
//               <input id="name" type="text" placeholder="Your name" />
//             </div>
//             <div className="form-field">
//               <label htmlFor="company">Company</label>
//               <input id="company" type="text" placeholder="Company name" />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-field">
//               <label htmlFor="email">Email</label>
//               <input id="email" type="email" placeholder="you@company.com" />
//             </div>
//             <div className="form-field">
//               <label htmlFor="phone">Phone</label>
//               <input id="phone" type="tel" placeholder="+91 00000 00000" />
//             </div>
//           </div>
//           <div className="form-field">
//             <label htmlFor="message">Message</label>
//             <textarea id="message" placeholder="Share your component requirement" />
//           </div>
//           <p className="form-note">
//             This form is UI only for now — connect it to email or a form service when ready.
//           </p>
//           <button type="submit" className="btn btn-accent" style={{ justifySelf: 'start' }}>
//             Send Message
//           </button>
//         </form>
//       </section>
      
//     </div>
//   )
// }


// src/pages/Contact.jsx
// Layout only — all text lives in src/data/contact.js
// import {
//   OFFICES,
//   PAGE,
//   FORM_ROWS,
//   MESSAGE_FIELD,
//   MAP_EMBED_URL,
//   MAP_DIRECTIONS_URL,
// } from '../data/contact'

// function OfficeRow({ row }) {
//   const body = row.lines.map((line, i) => (
//     <span key={line}>
//       {i > 0 && <br />}
//       {line}
//     </span>
//   ))

//   return (
//     <>
//       <dt>{row.label}</dt>
//       <dd>
//         {row.href ? (
//           <a
//             href={row.href}
//             {...(row.external ? { target: '_blank', rel: 'noreferrer' } : {})}
//           >
//             {body}
//           </a>
//         ) : (
//           body
//         )}
//       </dd>
//     </>
//   )
// }

// export default function Contact() {
//   return (
//     <div className="page page-contact">
//       <section className="page-header">
//         <div className="container">
//           <p className="eyebrow">{PAGE.eyebrow}</p>
//           <h1>{PAGE.heading}</h1>
//         </div>
//       </section>

//       <section className="container section contact-grid">
//         {/* OFFICE / HQ + BRANCHES */}
//         <div className="contact-locations">
//           {OFFICES.map((office) => (
//             <div className="location-card" key={office.name}>
//               <h3>{office.name}</h3>
//               <dl>
//                 {office.rows.map((row) => (
//                   <OfficeRow row={row} key={row.label} />
//                 ))}
//               </dl>

//               <a
//                 className="btn btn-outline location-dir"
//                 href={MAP_DIRECTIONS_URL}
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 {PAGE.directionsLabel}
//               </a>
//             </div>
//           ))}
//         </div>

//         {/* CONTACT FORM (UI only — not yet wired to a backend) */}
//         <form className="form" onSubmit={(e) => e.preventDefault()}>
//           {FORM_ROWS.map((row, i) => (
//             <div className="form-row" key={i}>
//               {row.map((f) => (
//                 <div className="form-field" key={f.id}>
//                   <label htmlFor={f.id}>{f.label}</label>
//                   <input id={f.id} type={f.type} placeholder={f.placeholder} />
//                 </div>
//               ))}
//             </div>
//           ))}

//           <div className="form-field">
//             <label htmlFor={MESSAGE_FIELD.id}>{MESSAGE_FIELD.label}</label>
//             <textarea id={MESSAGE_FIELD.id} placeholder={MESSAGE_FIELD.placeholder} />
//           </div>

//           <p className="form-note">{PAGE.formNote}</p>

//           <button type="submit" className="btn btn-accent" style={{ justifySelf: 'start' }}>
//             {PAGE.submitLabel}
//           </button>
//         </form>
//       </section>

//       {/* ---------- MAP ---------- */}
//       <section className="section map-section">
//         <div className="container">
//           <div className="map-head">
//             <div>
//               <p className="eyebrow">{PAGE.mapEyebrow}</p>
//               <h2>{PAGE.mapHeading}</h2>
//             </div>
//             <a
//               className="btn btn-outline"
//               href={MAP_DIRECTIONS_URL}
//               target="_blank"
//               rel="noreferrer"
//             >
//               {PAGE.directionsLabel}
//             </a>
//           </div>

//           <div className="map-embed">
//             <iframe
//               src={MAP_EMBED_URL}
//               title="Myzek Technologies head office location on Google Maps"
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               allowFullScreen
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// src/pages/Contact.jsx
// Layout only — all text lives in src/data/contact.js
import { OFFICES, PAGE, FORM_ROWS, MESSAGE_FIELD } from '../data/contact'

function OfficeRow({ row }) {
  const body = row.lines.map((line, i) => (
    <span key={`${row.label}-${i}`}>
      {i > 0 && <br />}
      {line}
    </span>
  ))

  return (
    <>
      <dt>{row.label}</dt>
      <dd>
        {row.href ? (
          <a
            href={row.href}
            {...(row.external ? { target: '_blank', rel: 'noreferrer' } : {})}
          >
            {body}
          </a>
        ) : (
          body
        )}
      </dd>
    </>
  )
}

export default function Contact() {
  return (
    <div className="page page-contact">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">{PAGE.eyebrow}</p>
          <h1>{PAGE.heading}</h1>
        </div>
      </section>

      <section className="container section contact-grid">
        {/* OFFICE / HQ + BRANCHES */}
        <div className="contact-locations">
          {OFFICES.map((office) => (
            <div className="location-card" key={office.name}>
              <h3>{office.name}</h3>
              <dl>
                {office.rows.map((row) => (
                  <OfficeRow row={row} key={row.label} />
                ))}
              </dl>
            </div>
          ))}
        </div>

        {/* CONTACT FORM (UI only — not yet wired to a backend) */}
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          {FORM_ROWS.map((row, i) => (
            <div className="form-row" key={i}>
              {row.map((f) => (
                <div className="form-field" key={f.id}>
                  <label htmlFor={f.id}>{f.label}</label>
                  <input id={f.id} type={f.type} placeholder={f.placeholder} />
                </div>
              ))}
            </div>
          ))}

          <div className="form-field">
            <label htmlFor={MESSAGE_FIELD.id}>{MESSAGE_FIELD.label}</label>
            <textarea id={MESSAGE_FIELD.id} placeholder={MESSAGE_FIELD.placeholder} />
          </div>

          <p className="form-note">{PAGE.formNote}</p>

          <button type="submit" className="btn btn-accent" style={{ justifySelf: 'start' }}>
            {PAGE.submitLabel}
          </button>
        </form>
      </section>
    </div>
  )
}
