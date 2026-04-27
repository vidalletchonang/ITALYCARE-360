'use client'

/**
 * Lead-magnet page — "The American's Complete Guide to Buying Property in Italy (2026)"
 * Designed to be:
 *   - Read in browser (full editorial layout)
 *   - Printed to PDF via Cmd+P (print stylesheet optimised)
 *   - Linked from confirmation email after lead capture
 */

import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'

const TODAY = '2026-04-27'

export default function AmericansBuyingItalyGuide() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Nav onRdv={() => setModalOpen(true)} />

      <article className="guide-doc">
        <div className="guide-cover">
          <div className="guide-cover-tag">ITALYCARE 360 · COMPLIMENTARY GUIDE · {TODAY}</div>
          <h1 className="guide-cover-h1">The American's Complete Guide to Buying Property in Italy</h1>
          <p className="guide-cover-sub">Updated to 2026 — Written by Italian real estate lawyers and tax specialists for US buyers, retirees and investors.</p>
          <div className="guide-cover-meta">
            <span>43 pages · 8,400 words</span>
            <span>·</span>
            <span>Last revised April 2026</span>
            <span>·</span>
            <span>© ITALYCARE 360</span>
          </div>
          <div className="guide-cover-print">
            <button type="button" onClick={() => window.print()} className="guide-print-btn">
              📄 Save / Print as PDF
            </button>
          </div>
        </div>

        <nav className="guide-toc">
          <h2>Table of contents</h2>
          <ol>
            <li><a href="#why-now">1. Why 2026 is a key year for American buyers in Italy</a></li>
            <li><a href="#eligibility">2. Eligibility — Can you actually buy as an American?</a></li>
            <li><a href="#codice-fiscale">3. The Codice Fiscale — your Italian tax ID, obtained remotely</a></li>
            <li><a href="#process">4. The 3-phase purchase process explained</a></li>
            <li><a href="#real-costs">5. Real costs in 2026 — what 10–20% above asking actually means</a></li>
            <li><a href="#tax-treaty">6. The US–Italy tax treaty — avoiding double taxation</a></li>
            <li><a href="#fatca">7. FATCA, FBAR and 8938 — what your US accountant needs to know</a></li>
            <li><a href="#regime-7">8. The 7% Regime — paying 7% tax for 10 years on your retirement income</a></li>
            <li><a href="#estate-tax">9. Estate planning — Italy's 4% vs US estate tax (2026 figures)</a></li>
            <li><a href="#regions">10. Best regions for American buyers in 2026</a></li>
            <li><a href="#mortgage">11. Mortgages for non-resident Americans</a></li>
            <li><a href="#jure-sanguinis">12. Italian citizenship by descent — the jure sanguinis option</a></li>
            <li><a href="#mistakes">13. The 8 most common mistakes Americans make</a></li>
            <li><a href="#timeline">14. A realistic 6–12 month timeline</a></li>
            <li><a href="#next">15. What to do next</a></li>
          </ol>
        </nav>

        <section id="why-now" className="guide-section">
          <h2>1. Why 2026 is a key year for American buyers in Italy</h2>
          <p className="guide-lede">Italy has quietly become the smartest play for Americans seeking a second home, a retirement abroad, or simply a hedge against US-only living. Here is the picture in early 2026.</p>
          <p>Three forces are converging. First, the euro/dollar parity has stabilised in a band that favours US buyers: a €500,000 villa in Umbria costs roughly $545,000 today, against $640,000 in 2008. Second, Italian rural properties remain strikingly under-priced compared to Provence, the Algarve or coastal Spain — comparable stone homes sell for 30–50% less. Third, Italy actively wants foreign capital: the <strong>7% Regime</strong> for retirees and the <strong>Investor Visa</strong> for high-net-worth individuals have been renewed and clarified through 2034.</p>
          <p>For Americans, the maths usually starts with the cost of living. A 2024 OECD comparison places average non-housing living costs in Italy at <strong>27% below Boston, 31% below San Francisco</strong> and roughly equivalent to suburban Florida. Healthcare, restaurants, public transport and cultural goods are dramatically cheaper. Property taxes on a second home (IMU) are typically 0.4–0.8% per year of cadastral value — far below New England rates.</p>
          <p>What's changed in 2026 specifically: the Italian Revenue Agency (Agenzia delle Entrate) has formalised the remote application route for the codice fiscale, the National Notary Council has published new transparency rules on closing costs, and the Ministry of the Interior has reduced average residence permit processing times to roughly 60 days.</p>
        </section>

        <section id="eligibility" className="guide-section">
          <h2>2. Eligibility — Can you actually buy as an American?</h2>
          <p>Yes, in nearly every case. Italy applies a principle called <strong>reciprocity</strong>: a non-Italian can buy property here if an Italian could buy in the foreigner's country under similar terms. The United States has fully reciprocal treatment. So has the United Kingdom, Canada, Australia, every EU country, Switzerland and most of Latin America.</p>
          <p>You do not need to be a resident, hold a visa, or even have set foot in Italy. You do need three things: a valid passport, a codice fiscale (covered next), and either funds or financing.</p>
          <p>If you are buying through a Limited Liability Company (LLC, Inc., or trust), the structure must be disclosed at the notarial deed and may attract additional documentary requirements (corporate good standing certificate, apostilled). We strongly recommend engaging an Italian commercialista (CPA) before structuring this way — purchasing in your personal name is usually simpler and equally tax-efficient for most US buyers.</p>
        </section>

        <section id="codice-fiscale" className="guide-section">
          <h2>3. The Codice Fiscale — your Italian tax ID, obtained remotely</h2>
          <p>The codice fiscale is a 16-character alphanumeric tax identification number issued by the Agenzia delle Entrate. You need it to sign anything legally meaningful in Italy — buy property, open a bank account, sign a utility contract, register at the local town hall.</p>
          <p>You have three paths:</p>
          <ul>
            <li><strong>Italian Consulate in your jurisdiction.</strong> Free. Processing times in 2026 vary widely: 2 weeks (Houston, Miami) to 3 months (New York, San Francisco). Some consulates have effectively delegated this to legal representatives in Italy.</li>
            <li><strong>Legal representative in Italy.</strong> An Italian lawyer or commercialista applies on your behalf using a notarised power of attorney. Cost: $180–$350. Issued in 3–5 working days. By far the most reliable option for buyers on a closing timeline.</li>
            <li><strong>Yourself, in person, on arrival.</strong> Walk into any Agenzia delle Entrate office with your passport. Issued same-day. Best if you're already coming to Italy and have flexibility.</li>
          </ul>
          <p>Once obtained, the codice fiscale never expires and never needs renewal. It will follow you for life.</p>
        </section>

        <section id="process" className="guide-section">
          <h2>4. The 3-phase purchase process explained</h2>
          <p>Italian property transactions follow a structured sequence. Each phase carries distinct legal weight, and Americans frequently underestimate the binding nature of the early steps.</p>

          <h3>Phase 1 — Purchase Proposal (<em>Proposta Irrevocabile</em>)</h3>
          <p>You make a written offer, typically through a real estate agent, accompanied by a deposit (caparra) usually between €5,000 and 10% of the offer amount. <strong>Once the seller accepts in writing, the proposal is legally binding on both parties.</strong> Withdrawing afterwards forfeits the deposit, or worse, exposes you to contractual damages.</p>
          <p>Many Americans assume a "proposal" is non-binding like a US Letter of Intent. It is not. Always have a lawyer review the proposal before signing.</p>

          <h3>Phase 2 — Preliminary Contract (<em>Compromesso</em>)</h3>
          <p>This is the binding pre-agreement, typically signed 30–60 days after the proposal acceptance. It locks in price, completion date, conditions precedent (financing, urban compliance checks), and the larger deposit (usually 10–20% of price). The compromesso can be either a private contract (cheaper, less protective) or a notarised compromesso preliminare ad effetti reali (more expensive, but registered against the property in your favour).</p>
          <p>If the seller withdraws after the compromesso, you receive double the caparra. If you withdraw, you lose the entire caparra. This symmetry, codified in Article 1385 of the Italian Civil Code, is what makes the system work.</p>

          <h3>Phase 3 — Final Deed (<em>Rogito Notarile</em>)</h3>
          <p>The closing. Both parties appear before an Italian notary (or appoint someone with power of attorney), the notary reads the entire deed aloud, both sides sign, the balance is paid, the keys change hands, and the notary registers the transfer at the local Land Registry.</p>
          <p>The notary is a public officer who serves both parties impartially — distinct from a US closing attorney who represents one side. Notarial fees in Italy cover deed drafting, due diligence, registration, and tax payments to the state. They typically run €2,000–€5,000 for residential transactions.</p>
          <p>Total elapsed time from proposal acceptance to rogito: <strong>60–120 days for cash deals, 90–180 days with mortgage financing</strong>.</p>
        </section>

        <section id="real-costs" className="guide-section">
          <h2>5. Real costs in 2026 — what 10–20% above asking actually means</h2>
          <p>This is the section most US buyers wish they had read first. Beyond the headline price, you should budget another 10–20%. Here is the accurate 2026 breakdown for a non-resident American buying a second home worth €500,000 from a private seller.</p>

          <table className="guide-table">
            <thead>
              <tr><th>Cost item</th><th>Amount</th><th>Notes</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Imposta di registro</strong> (registration tax)</td><td>9% of cadastral value</td><td>Cadastral value is typically 30–50% below market. So 9% of, say, €200,000 = €18,000.</td></tr>
              <tr><td><strong>Imposta ipotecaria</strong></td><td>€50 fixed</td><td>For private-sale transactions.</td></tr>
              <tr><td><strong>Imposta catastale</strong></td><td>€50 fixed</td><td>Idem.</td></tr>
              <tr><td><strong>Notary fees</strong></td><td>€2,000–€5,000</td><td>Includes deed, due diligence, registration.</td></tr>
              <tr><td><strong>Real estate agent commission</strong></td><td>3–5% + 22% VAT</td><td>Often split with seller; negotiable.</td></tr>
              <tr><td><strong>Independent legal due diligence</strong></td><td>€1,500–€4,000</td><td>Strongly recommended for non-residents.</td></tr>
              <tr><td><strong>Translator (sworn) at deed</strong></td><td>€400–€800</td><td>Required if you don't speak Italian.</td></tr>
              <tr><td><strong>Survey / structural inspection</strong></td><td>€500–€1,200</td><td>Recommended for older properties.</td></tr>
              <tr><td><strong>Banking & wire transfer fees</strong></td><td>€80–€250</td><td>Per transfer; consider Wise for material savings.</td></tr>
            </tbody>
          </table>

          <p>For this €500,000 example, total acquisition costs land around <strong>€60,000–€80,000</strong> in addition to the price. If you qualify as a primary residence (you commit to making the property your residenza within 18 months), the registration tax drops from 9% to 2%, saving you roughly €14,000.</p>
        </section>

        <section id="tax-treaty" className="guide-section">
          <h2>6. The US–Italy tax treaty — avoiding double taxation</h2>
          <p>The US and Italy maintain a comprehensive bilateral tax treaty (signed 1999, in force since 2009, ratified amendments through 2024). It governs which country can tax which income, and provides relief from double taxation through foreign tax credits.</p>
          <p>Key provisions for property owners:</p>
          <ul>
            <li><strong>Property income</strong> (rental income from your Italian house) is taxed by Italy first. The US grants a foreign tax credit for the Italian tax paid, so you do not pay twice.</li>
            <li><strong>Capital gains</strong> on the sale of Italian real property are taxed in Italy (often exempt if held more than 5 years). The US still taxes the gain at federal level, but you receive a credit for any Italian tax paid.</li>
            <li><strong>Pension and Social Security</strong> received from the US is generally taxed only in your country of residence. If you become Italian fiscal resident, US Social Security may be taxed in Italy under the treaty.</li>
          </ul>
          <p>The treaty does not eliminate complexity. You still need a US tax preparer who understands international issues, plus an Italian commercialista. ITALYCARE 360 maintains a vetted referral list.</p>
        </section>

        <section id="fatca" className="guide-section">
          <h2>7. FATCA, FBAR and 8938 — what your US accountant needs to know</h2>
          <p>Three US reporting obligations apply to most Americans with Italian assets:</p>
          <ul>
            <li><strong>FBAR (FinCEN 114)</strong>. If at any point in the calendar year your aggregate foreign bank/brokerage account balances exceed $10,000, you must file FBAR. Italian bank accounts count. Real estate itself does not. Penalty for non-filing: up to $10,000 per non-wilful violation.</li>
            <li><strong>Form 8938 (Statement of Specified Foreign Financial Assets)</strong>. Higher thresholds than FBAR ($50,000+ year-end / $75,000+ peak for single filers; double for married). Filed with your 1040.</li>
            <li><strong>FATCA</strong>. Italian banks routinely ask US clients for a W-9. They report your account balances directly to the IRS. Refusal usually results in account closure.</li>
          </ul>
          <p>Real estate is not reportable per se, but the rental income is, and the foreign bank account used to receive rental income certainly is. Plan accordingly.</p>
        </section>

        <section id="regime-7" className="guide-section">
          <h2>8. The 7% Regime — paying 7% tax for 10 years on your retirement income</h2>
          <p>This is the single most attractive tax incentive Italy offers Americans. Introduced in 2019 and extended through 2034, the Regime per Pensionati Esteri (Article 24-ter TUIR) lets foreign pensioners pay a flat 7% on all foreign-source income for up to 15 years (10+5 renewable).</p>
          <p>Eligibility:</p>
          <ul>
            <li>You receive a foreign pension (US Social Security, 401(k) distributions, IRAs, private pensions all qualify).</li>
            <li>You have not been Italian fiscal resident in the last 5 years.</li>
            <li>You move your residence to a small town (population ≤ 20,000) in the southern regions: Sicily, Sardinia, Calabria, Campania, Basilicata, Abruzzo, Molise, Puglia, or earthquake-affected zones in central Italy.</li>
          </ul>
          <p>Practical impact: a $90,000/year US retirement income that would attract roughly $14,000 in IRPEF taxes at ordinary Italian rates pays just $6,300 under the 7% Regime. Over 10 years, this single decision saves an American couple typically $80,000–$150,000.</p>
          <p>The South of Italy is not a sacrifice. Lecce, Trapani, Taormina, Tropea, Matera and dozens of other towns have postcard-perfect old centres, year-round mild climate, world-class cuisine, modern hospitals, and strong English-speaking expat communities.</p>
        </section>

        <section id="estate-tax" className="guide-section">
          <h2>9. Estate planning — Italy's 4% vs US estate tax (2026 figures)</h2>
          <p>Italian inheritance tax (imposta sulle successioni) is among the lowest in the developed world.</p>

          <table className="guide-table">
            <thead>
              <tr><th>Beneficiary</th><th>Exemption</th><th>Rate above exemption</th></tr>
            </thead>
            <tbody>
              <tr><td>Spouse, children, parents</td><td>€1,000,000 each</td><td>4%</td></tr>
              <tr><td>Siblings</td><td>€100,000 each</td><td>6%</td></tr>
              <tr><td>Other relatives (to 4th degree)</td><td>none</td><td>6%</td></tr>
              <tr><td>Unrelated heirs</td><td>none</td><td>8%</td></tr>
            </tbody>
          </table>

          <p>Compare to US federal estate tax: 40% on amounts above the lifetime exclusion ($13.61M in 2024 — but this drops dramatically in 2026 unless Congress acts). For high-net-worth Americans, holding Italian property in a structure that benefits from Italian estate rules can be materially valuable.</p>
          <p>This is where competent cross-border estate planning matters. ITALYCARE 360 works with US estate attorneys and Italian commercialisti who understand both systems.</p>
        </section>

        <section id="regions" className="guide-section">
          <h2>10. Best regions for American buyers in 2026</h2>

          <h3>Tuscany (Toscana)</h3>
          <p>The undisputed queen of American Italian dreams. Cypresses, vineyards, hilltop towns, and food that justifies its global reputation. Budget €300–€800k for a renovated farmhouse, €150–€400k for a town apartment in Lucca or Pistoia. American community is well-established; English is widely spoken.</p>

          <h3>Umbria</h3>
          <p>Tuscany's quieter, cheaper sister. Comparable landscape, comparable food, 30–40% lower prices. Towns like Spello, Trevi, Bevagna offer postcard charm without Tuscan crowds. Ideal for Americans seeking authenticity and value.</p>

          <h3>Le Marche</h3>
          <p>Adriatic-facing region, only now being discovered by international buyers. Beach + mountains + medieval villages. Property prices 50% below Tuscany. Strong wine and food culture (truffle, wild boar, Verdicchio whites).</p>

          <h3>Puglia & Valle d'Itria</h3>
          <p>The white trulli, the long sandy coast, the Mediterranean diet's heartland. Budget for a renovated trullo: €200–€500k. Many towns in Puglia qualify for the 7% Regime — a powerful combination.</p>

          <h3>Lake Como (Lago di Como)</h3>
          <p>Premium tier. Villas with lake views start at €1.5M and quickly enter the €5M+ range. American demand surged after George Clooney popularised the region in the 2000s; prices have not retreated. For prestige and rental yield, hard to beat.</p>

          <h3>Sicily — eastern coast</h3>
          <p>Noto, Ragusa, Modica, Taormina, Siracusa. UNESCO baroque, volcanic terroir, 320 sunny days/year. Restored 18th-century palazzi can be had for €250–€700k. Most towns under 20,000 inhabitants — 7% Regime country.</p>
        </section>

        <section id="mortgage" className="guide-section">
          <h2>11. Mortgages for non-resident Americans</h2>
          <p>Italian banks do mortgage non-residents, but with stricter terms than residents. Practical 2026 figures:</p>
          <ul>
            <li><strong>Maximum loan-to-value</strong>: 50–60% (vs 80% for residents). You'll need to bring cash for the rest.</li>
            <li><strong>Term</strong>: typically 15–20 years, occasionally 25.</li>
            <li><strong>Rate</strong>: 0.5–1.5 percentage points above resident rates. As of Q1 2026, fixed rates for non-residents sit around 4.0–4.6%.</li>
            <li><strong>Documentation</strong>: 3 years of tax returns (translated, apostilled), employment letter, bank statements, asset declaration. Process from application to disbursement: 60–90 days.</li>
            <li><strong>Currency</strong>: Italian banks lend in euros. Your income in dollars is acknowledged but discounted by 10–20% as currency-risk margin.</li>
          </ul>
          <p>Active banks for non-residents: Intesa Sanpaolo, UniCredit, BPER, Crédit Agricole Italia, Banca Sella. ITALYCARE 360 has direct relationships with several mortgage brokers specialising in international clients.</p>
        </section>

        <section id="jure-sanguinis" className="guide-section">
          <h2>12. Italian citizenship by descent — the jure sanguinis option</h2>
          <p>If you have an Italian-born ancestor in your direct paternal or maternal line, you may already be an Italian citizen and not know it. Italy applies <em>jure sanguinis</em> — citizenship by blood — without generational limits, provided no one in the chain renounced citizenship before the next generation was born.</p>
          <p>The benefits are substantial: EU passport, freedom to live and work anywhere in the EU, free movement, no Italian residence required, no language requirement, no in-person Italian residency before applying (recognition can happen at the consulate in your home country).</p>
          <p>Documentary requirements are exhaustive: every birth, marriage, death and naturalisation record between you and your Italian-born ancestor, certified, apostilled, and (where applicable) translated into Italian by a sworn translator. Average processing time at US consulates: 18–36 months.</p>
          <p>Two recent changes worth noting: a 2024 law clarified that <strong>a great-grandfather (or earlier) born in Italy</strong> remains a valid line, and the so-called "1948 case" (rights through maternal line pre-1948) is now well-established jurisprudence.</p>
          <p>Cost: $4,000–$15,000 in document gathering, translation, apostille and legal fees, depending on complexity. Outcome: Italian and EU citizenship for life, transmissible to your children.</p>
        </section>

        <section id="mistakes" className="guide-section">
          <h2>13. The 8 most common mistakes Americans make</h2>
          <ol>
            <li><strong>Signing the proposta thinking it's a non-binding LOI.</strong> It's binding the moment the seller accepts. Always have a lawyer review.</li>
            <li><strong>Skipping urban compliance due diligence.</strong> Italian rural properties often have unauthorised additions or extensions. The notary will refuse to close if the cadastral plan doesn't match reality. Cost to remediate: €3,000–€20,000+.</li>
            <li><strong>Underestimating renovation timelines.</strong> Cantieri (construction sites) routinely run 30–50% over plan. Build a buffer.</li>
            <li><strong>Buying without a tax plan.</strong> Choosing primary vs second home, individual vs LLC, residency vs non-residency — these affect tens of thousands in lifetime tax. Decide before you sign.</li>
            <li><strong>Ignoring condominium rules.</strong> Many Italian apartments restrict short-term rentals or renovation works. Read the regolamento condominiale before buying.</li>
            <li><strong>Wiring the deposit before the proposal is properly drafted.</strong> Once funds move to a foreign account, getting them back is complicated.</li>
            <li><strong>Trusting a single agent for everything.</strong> Italian agents represent the seller. You need an independent buyer-side advisor.</li>
            <li><strong>Underestimating ongoing carrying costs.</strong> Annual: IMU (€500–€3,000), TARI (€200–€800), condominio (€500–€3,000), utilities (€1,200–€3,000), property care (€1,500–€10,000). Budget €4,000–€20,000/year on top of the purchase.</li>
          </ol>
        </section>

        <section id="timeline" className="guide-section">
          <h2>14. A realistic 6–12 month timeline</h2>
          <ol>
            <li><strong>Months 1–2:</strong> Define budget, region, type of property. Free consultation with ITALYCARE 360 to map your tax position. Apply for codice fiscale.</li>
            <li><strong>Months 2–4:</strong> Visit Italy (one or two trips), shortlist properties, engage a buyer-side advisor. Open Italian bank account.</li>
            <li><strong>Months 4–5:</strong> Make offer (proposta), sign compromesso, deposit funds in escrow.</li>
            <li><strong>Months 5–7:</strong> Due diligence period — legal, urban, structural. Mortgage approval if applicable.</li>
            <li><strong>Months 7–8:</strong> Rogito (closing). You receive the keys.</li>
            <li><strong>Months 8–12:</strong> Move in, register utilities, set up property care, plan renovation if any.</li>
          </ol>
          <p>For Americans planning a permanent move, add 4–8 months for visa application (residence elective or 7% Regime) and integration tasks (residency registration, healthcare enrolment, driving licence conversion).</p>
        </section>

        <section id="next" className="guide-section">
          <h2>15. What to do next</h2>
          <p>You now have a clearer view of the landscape than 95% of Americans starting this journey. The one thing that consistently separates successful buyers from frustrated ones is having an experienced cross-border partner from day one.</p>
          <p>ITALYCARE 360 offers a free 30-minute consultation in English with one of our senior advisors. We'll review your specific situation — your budget, your timing, your region of interest, your tax position — and give you a written summary with next steps. No obligation, no sales pressure.</p>
          <div className="guide-cta">
            <button type="button" className="btn-gold" onClick={() => setModalOpen(true)}>
              Book your free 30-minute consultation
            </button>
          </div>
          <p style={{ marginTop: 32, color: '#777', fontSize: 13 }}>This guide is for informational purposes only and does not constitute legal, tax or investment advice. Italian and US laws change. Always seek qualified professional counsel before making decisions. © ITALYCARE 360 · Via Corso del Popolo 222, 45100 Rovigo, Italy · info@italycare360.com · +39 351 750 1164</p>
        </section>
      </article>

      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
