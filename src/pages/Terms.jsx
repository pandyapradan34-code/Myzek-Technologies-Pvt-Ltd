import { useEffect } from 'react'
import AOS from 'aos'

export default function Terms() {
  useEffect(() => {
    AOS.refreshHard()
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page page-terms">
      {/* Header Banner */}
      <section className="page-header" data-aos="fade-up">
        <div className="container">
          <p className="eyebrow">Legal</p>
          <h1>Terms &amp; Conditions</h1>
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
              These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of the website, product listings, quotations, and services offered by <strong>Myzek Technologies Pvt Ltd</strong> (&quot;Myzek,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), an authorized distributor and stockist of electronic components. By accessing our website, requesting a quotation, placing an order, or otherwise using our services, you (&quot;Customer,&quot; &quot;you,&quot; or &quot;your&quot;) agree to be bound by these Terms.
            </p>
            <p style={{ marginTop: '0.65rem' }}>
              If you do not agree with these Terms, please do not use our website or services.
            </p>
          </div>

          {/* Section 2 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              2. About Myzek
            </h2>
            <p>
              Myzek Technologies Pvt Ltd has operated as an authorized distributor and stockist of electronic components since 2017, supplying customers across the product lifecycle &mdash; from design and prototyping through to production and end-of-life sourcing &mdash; in partnership with leading global suppliers.
            </p>
          </div>

          {/* Section 3 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              3. Eligibility
            </h2>
            <p>
              Our website and services are intended for business use by companies, procurement professionals, engineers, and other commercial customers. By using our services, you confirm that you have the authority to bind your organization to these Terms where applicable.
            </p>
          </div>

          {/* Section 4 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              4. Quotations and Pricing
            </h2>
            <p>
              <strong>4.1</strong> All prices displayed on our website or issued in quotations are indicative and subject to change without prior notice, unless expressly confirmed in writing as a fixed quotation with a validity period.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>4.2</strong> Quotations are valid only for the period stated on the quotation document. Where no period is stated, quotations are valid for 7 days from the date of issue.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>4.3</strong> Prices are exclusive of applicable taxes (including GST), duties, freight, insurance, and handling charges unless explicitly stated otherwise.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>4.4</strong> Pricing may vary based on order quantity, product availability, and prevailing market or supplier conditions at the time of order confirmation.
            </p>
          </div>

          {/* Section 5 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              5. Orders
            </h2>
            <p>
              <strong>5.1</strong> Submission of a purchase order does not constitute acceptance by Myzek. An order is confirmed only upon our written order acknowledgment.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>5.2</strong> We reserve the right to accept, reject, or partially fulfil any order at our discretion, including due to stock unavailability, pricing errors, or supplier constraints.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>5.3</strong> Order quantities, part numbers, and specifications are the Customer&apos;s responsibility to verify prior to order confirmation. Myzek is not liable for losses arising from incorrect part numbers or specifications supplied by the Customer.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>5.4</strong> Once an order is confirmed, cancellations or amendments are subject to our approval and may incur charges, particularly for non-cancellable, non-returnable (&quot;NCNR&quot;) parts or components procured specifically against the order.
            </p>
          </div>

          {/* Section 6 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              6. Product Authenticity
            </h2>
            <p>
              <strong>6.1</strong> Myzek supplies components sourced through authorized distribution channels and, where applicable, directly from our partner suppliers&apos; authorized stock.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>6.2</strong> We do not knowingly supply counterfeit, refurbished, or grey-market components represented as new/authorized stock. Customers concerned about traceability for a specific order may request supporting documentation (e.g., certificate of conformance, traceability information) at the time of quotation, subject to supplier availability.
            </p>
          </div>

          {/* Section 7 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              7. Payment Terms
            </h2>
            <p>
              <strong>7.1</strong> Payment terms will be as agreed in writing between Myzek and the Customer, whether on a pro-forma, advance payment, or credit basis.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>7.2</strong> Where credit terms are extended, payment is due within the period specified on the invoice. Late payments may attract interest charges and may result in suspension of future orders or credit facilities.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>7.3</strong> All payments must be made in the currency specified on the invoice, via the payment method(s) communicated by Myzek.
            </p>
          </div>

          {/* Section 8 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              8. Delivery
            </h2>
            <p>
              <strong>8.1</strong> Delivery timelines communicated by Myzek are estimates based on stock availability and supplier lead times, and are not guaranteed unless expressly agreed in writing.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>8.2</strong> Risk in the goods passes to the Customer upon dispatch from our facility or our supplier&apos;s facility, as applicable, unless otherwise agreed.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>8.3</strong> Myzek is not liable for delays caused by circumstances beyond our reasonable control, including but not limited to supplier delays, customs delays, logistics disruptions, or force majeure events (see Section 14).
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>8.4</strong> The Customer is responsible for providing accurate delivery information. Additional charges arising from incorrect delivery details or failed delivery attempts may be passed on to the Customer.
            </p>
          </div>

          {/* Section 9 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              9. Inspection, Returns, and Warranty
            </h2>
            <p>
              <strong>9.1</strong> The Customer must inspect goods upon receipt and notify Myzek of any discrepancy, damage, or shortage within 5 business days of delivery. Claims made after this period may not be accepted.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>9.2</strong> Returns are accepted only with prior written authorization from Myzek (Return Merchandise Authorization) and are subject to the original manufacturer&apos;s/supplier&apos;s return policy, where applicable.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>9.3</strong> Components that are non-cancellable, non-returnable (NCNR), custom-ordered, or supplied against a specific customer requirement are not eligible for return unless found to be defective.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>9.4</strong> Where a manufacturer&apos;s warranty applies to a product, Myzek will pass through the benefit of that warranty to the Customer to the extent permitted by the manufacturer. Myzek does not independently warrant components beyond what is offered by the original manufacturer, except where explicitly agreed in writing.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>9.5</strong> Myzek is not responsible for damage, malfunction, or failure resulting from misuse, improper handling, incorrect storage, or use outside the manufacturer&apos;s specified operating conditions.
            </p>
          </div>

          {/* Section 10 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              10. Limitation of Liability
            </h2>
            <p>
              <strong>10.1</strong> To the extent permitted by applicable law, Myzek&apos;s total liability arising out of or in connection with any order shall not exceed the value of that order.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>10.2</strong> Myzek shall not be liable for any indirect, incidental, consequential, or special damages, including but not limited to loss of profits, loss of production, or loss of business opportunity, arising from the supply, delay, or non-supply of components.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>10.3</strong> Nothing in these Terms limits liability that cannot be excluded or limited under applicable law.
            </p>
          </div>

          {/* Section 11 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              11. Intellectual Property
            </h2>
            <p>
              <strong>11.1</strong> All content on the Myzek website, including text, graphics, logos, and datasheets provided by us or our suppliers, remains the property of Myzek or the respective rights holder and may not be reproduced or redistributed without permission.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>11.2</strong> Manufacturer datasheets and technical documentation referenced or linked on our website remain the property of the respective manufacturers.
            </p>
          </div>

          {/* Section 12 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              12. Confidentiality
            </h2>
            <p>
              Where a Customer shares technical specifications, bill of materials (BOM), or other proprietary information with Myzek for the purpose of sourcing or quotation, Myzek will treat such information as confidential and use it solely for the purpose of fulfilling the Customer&apos;s request, unless otherwise agreed in writing (e.g., under a separate NDA).
            </p>
          </div>

          {/* Section 13 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              13. Export Compliance
            </h2>
            <p>
              The Customer is responsible for compliance with all applicable import, export, and re-export control laws and regulations relating to the components purchased, including end-use and end-user restrictions where applicable.
            </p>
          </div>

          {/* Section 14 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              14. Force Majeure
            </h2>
            <p>
              Myzek shall not be held responsible for any failure or delay in performance due to causes beyond its reasonable control, including but not limited to natural disasters, government action, supplier failure, transportation disruption, pandemic, or labor disputes.
            </p>
          </div>

          {/* Section 15 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              15. Website Use
            </h2>
            <p>
              <strong>15.1</strong> You agree not to misuse our website, including attempting unauthorized access, introducing malicious code, or scraping content without permission.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>15.2</strong> We reserve the right to update, modify, or discontinue any part of our website or services without prior notice.
            </p>
          </div>

          {/* Section 16 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              16. Changes to These Terms
            </h2>
            <p>
              We may revise these Terms from time to time. Updated Terms will be posted on this page with a revised &quot;Last updated&quot; date. Continued use of our website or services after changes are posted constitutes acceptance of the revised Terms.
            </p>
          </div>

          {/* Section 17 */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              17. Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of <strong>Ahmedabad, Gujarat, India</strong>.
            </p>
          </div>

          {/* Section 18 */}
          <div style={{ paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
            <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary, #0f2b48)', marginBottom: '0.85rem', fontWeight: 700 }}>
              18. Contact Us
            </h2>
            <p>
              For questions regarding these Terms &amp; Conditions, please contact:
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

        </div>
      </div>
    </div>
  )
}
