import { useEffect } from 'react'
import AOS from 'aos'

export default function Privacy() {
  useEffect(() => {
    AOS.refreshHard()
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page page-privacy">
      {/* Header Banner */}
      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p style={{ color: 'var(--color-text-muted, #64748b)', marginTop: '0.5rem', fontSize: '0.95rem' }}>
            Myzek Technologies Pvt Ltd &bull; Last updated: September 1, 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container section" style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '6rem' }}>
        <div 
          style={{
            background: '#ffffff',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            padding: '2.5rem 2.75rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
            lineHeight: '1.75',
            color: '#334155'
          }}
          data-aos="fade-up"
        >
          {/* Section 1 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              1. Introduction
            </h2>
            <p>
              <strong>Myzek Technologies Pvt Ltd</strong> (&quot;Myzek,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy of visitors to our website and customers who engage with our sourcing and distribution services for electronic components. This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your information.
            </p>
            <p style={{ marginTop: '0.65rem' }}>
              By using our website or submitting information to us (for example, through a quotation request or contact form), you agree to the collection and use of information in accordance with this Policy.
            </p>
          </div>

          {/* Section 2 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              2. Information We Collect
            </h2>
            <p>We may collect the following types of information:</p>
            
            <h3 style={{ fontSize: '1.05rem', color: 'var(--color-primary, #0f2b48)', marginTop: '1rem', marginBottom: '0.4rem', fontWeight: 600 }}>
              2.1 Information you provide directly
            </h3>
            <ul style={{ paddingLeft: '1.5rem', margin: '0.4rem 0' }}>
              <li>Name, job title, and company name</li>
              <li>Business email address and phone number</li>
              <li>Company address and billing/shipping details</li>
              <li>Bill of materials (BOM), part numbers, quantities, and technical specifications submitted for quotation or sourcing requests</li>
              <li>Payment and invoicing details necessary to process orders</li>
              <li>Any other information you choose to include in messages, quotation requests, or correspondence with us</li>
            </ul>

            <h3 style={{ fontSize: '1.05rem', color: 'var(--color-primary, #0f2b48)', marginTop: '1rem', marginBottom: '0.4rem', fontWeight: 600 }}>
              2.2 Information collected automatically
            </h3>
            <ul style={{ paddingLeft: '1.5rem', margin: '0.4rem 0' }}>
              <li>IP address, browser type, and device information</li>
              <li>Pages visited, time spent on our website, and referring URLs</li>
              <li>Cookies and similar tracking technologies (see Section 6)</li>
            </ul>

            <h3 style={{ fontSize: '1.05rem', color: 'var(--color-primary, #0f2b48)', marginTop: '1rem', marginBottom: '0.4rem', fontWeight: 600 }}>
              2.3 Information from third parties
            </h3>
            <ul style={{ paddingLeft: '1.5rem', margin: '0.4rem 0' }}>
              <li>Information from our supplier partners or logistics providers relevant to fulfilling your order (e.g., shipment tracking updates)</li>
              <li>Publicly available business information, where relevant to verifying a customer or supplier relationship</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              3. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul style={{ paddingLeft: '1.5rem', margin: '0.5rem 0' }}>
              <li>Prepare and issue quotations</li>
              <li>Process, confirm, and fulfil orders</li>
              <li>Communicate with you about your orders, account, or inquiries</li>
              <li>Provide technical support and respond to component sourcing requests</li>
              <li>Manage billing, invoicing, and payment collection</li>
              <li>Maintain business records for compliance, accounting, and audit purposes</li>
              <li>Improve our website, services, and customer experience</li>
              <li>Send you updates about products, stock availability, or services, where you have not opted out</li>
              <li>Comply with legal, regulatory, or export-control obligations</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              4. How We Share Your Information
            </h2>
            <p>We do not sell your personal or business information. We may share information with:</p>
            <ul style={{ paddingLeft: '1.5rem', margin: '0.5rem 0' }}>
              <li>Suppliers and manufacturers, where necessary to source, confirm availability, or fulfil an order</li>
              <li>Logistics and shipping partners, to deliver goods to you</li>
              <li>Payment processors and financial institutions, to process payments</li>
              <li>Professional advisors (e.g., auditors, legal counsel), where necessary for our business operations</li>
              <li>Regulatory or government authorities, where required by law, such as for export compliance or tax reporting</li>
              <li>Service providers who support our website, IT infrastructure, or customer relationship management, under confidentiality obligations</li>
            </ul>
            <p style={{ marginTop: '0.75rem' }}>
              We do not share technical specifications, BOMs, or proprietary sourcing information beyond what is necessary to quote, source, or fulfil your request, consistent with the confidentiality commitments in our Terms &amp; Conditions.
            </p>
          </div>

          {/* Section 5 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              5. Data Retention
            </h2>
            <p>
              We retain your information for as long as necessary to fulfil the purposes described in this Policy, including ongoing business relationships, and to comply with legal, accounting, tax, or export-control record-keeping requirements. Where information is no longer needed, we take reasonable steps to delete or anonymize it.
            </p>
          </div>

          {/* Section 6 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              6. Cookies and Tracking Technologies
            </h2>
            <p>Our website may use cookies and similar technologies to:</p>
            <ul style={{ paddingLeft: '1.5rem', margin: '0.5rem 0' }}>
              <li>Remember your preferences</li>
              <li>Understand how visitors use our website</li>
              <li>Improve website performance and content</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              You can control or disable cookies through your browser settings. Disabling cookies may affect certain website functionality.
            </p>
          </div>

          {/* Section 7 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              7. Data Security
            </h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards designed to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Section 8 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              8. International Data Transfers
            </h2>
            <p>
              As we work with global suppliers and logistics partners, your information may be transferred to and processed in countries outside your own, including countries that may have different data protection laws. Where such transfers occur, we take reasonable steps to ensure your information continues to be protected in accordance with this Policy.
            </p>
          </div>

          {/* Section 9 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              9. Your Rights
            </h2>
            <p>Depending on applicable law, you may have the right to:</p>
            <ul style={{ paddingLeft: '1.5rem', margin: '0.5rem 0' }}>
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your information, subject to our legal and business record-keeping obligations</li>
              <li>Object to or restrict certain processing of your information</li>
              <li>Withdraw consent, where processing is based on consent (e.g., marketing communications)</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              To exercise any of these rights, please contact us using the details in Section 12.
            </p>
          </div>

          {/* Section 10 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              10. Marketing Communications
            </h2>
            <p>
              If we send you marketing or promotional communications (e.g., stock updates, newsletters), you may opt out at any time by using the unsubscribe link in the communication or by contacting us directly. Opting out of marketing communications does not affect transactional communications related to your orders.
            </p>
          </div>

          {/* Section 11 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              11. Children&apos;s Privacy
            </h2>
            <p>
              Our website and services are intended for business use and are not directed at individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </div>

          {/* Section 12 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              12. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or how we handle your information, please contact:
            </p>
            <div style={{ marginTop: '0.75rem', background: '#f8fafc', padding: '1.25rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <p style={{ fontWeight: 700, color: 'var(--color-primary, #0f2b48)', margin: 0 }}>
                Myzek Technologies Pvt Ltd
              </p>
              <p style={{ margin: '0.35rem 0 0', fontSize: '0.9rem' }}>
                318, Matrix Plaza, Jashoda Hathijan Road,<br />
                Vinzol Vatva GIDC, Ahmedabad &ndash; 382440, Gujarat, India
              </p>
              <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem' }}>
                <strong>Email:</strong> <a href="mailto:sales@myzektechnologies.in" style={{ color: 'var(--color-accent, #E07B24)' }}>sales@myzektechnologies.in</a><br />
                <strong>Phone:</strong> <a href="tel:+918347469999" style={{ color: 'var(--color-accent, #E07B24)' }}>+91 83474 69999</a>
              </p>
            </div>
          </div>

          {/* Section 13 */}
          <div style={{ paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              13. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Updates will be posted on this page with a revised &quot;Last updated&quot; date. We encourage you to review this Policy periodically.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
