'use client'

/**
 * Targeted landing page for US-American buyers.
 * Optimised for keywords like:
 *   "buy property in italy as american"
 *   "italian visa for american retirees"
 *   "fatca italian real estate"
 *   "us italy tax treaty property"
 *   "italian citizenship by descent"
 */

import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
import LeadMagnetForm from '@/components/LeadMagnetForm'

export default function USAmericanBuyersPage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Nav onRdv={() => setModalOpen(true)} />

      <main className="usa-page" style={{ paddingTop: 76 }}>

        {/* Hero */}
        <section className="usa-hero">
          <div className="usa-hero-bg" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=1920&q=85')",
          }} />
          <div className="usa-hero-overlay" />
          <div className="usa-hero-inner">
            <span className="usa-hero-tag">FOR US BUYERS</span>
            <h1 className="usa-hero-h1 font-playfair">
              Buying Property in <em>Italy</em> from the United States
            </h1>
            <p className="usa-hero-p">
              FATCA, US-Italy tax treaty, the 7% Regime for retirees, and Italian citizenship by descent — explained in plain English by a team that has guided 500+ Americans through the process.
            </p>
            <div className="usa-hero-cta">
              <a href="#guide" className="btn-gold">Get the free 2026 guide</a>
              <button type="button" className="btn-ghost" onClick={() => setModalOpen(true)}>
                Free 30-min consultation
              </button>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="usa-trust">
          <div className="usa-trust-item">
            <div className="usa-trust-num">500+</div>
            <div className="usa-trust-l">American clients<br/>since 2018</div>
          </div>
          <div className="usa-trust-item">
            <div className="usa-trust-num">$80k-$150k</div>
            <div className="usa-trust-l">average lifetime<br/>tax savings (7% Regime)</div>
          </div>
          <div className="usa-trust-item">
            <div className="usa-trust-num">98%</div>
            <div className="usa-trust-l">close at or below<br/>budget target</div>
          </div>
          <div className="usa-trust-item">
            <div className="usa-trust-num">2-4 mo.</div>
            <div className="usa-trust-l">average closing time<br/>cash transactions</div>
          </div>
        </section>

        {/* The 5 questions every American asks */}
        <section className="usa-section">
          <div className="usa-section-inner">
            <span className="usa-tag">THE 5 QUESTIONS WE ANSWER FIRST</span>
            <h2 className="usa-h2 font-playfair">What every American buyer asks</h2>

            <div className="usa-questions">
              <div className="usa-q">
                <h3>1. Can I legally buy property in Italy as a US citizen?</h3>
                <p>Yes. Italy and the US have full reciprocity, meaning Americans can purchase any residential property — primary, secondary, or investment — without restrictions. You don't need to be a resident, hold a visa, or have ever set foot in Italy. You do need a passport, a Codice Fiscale, and funds.</p>
              </div>

              <div className="usa-q">
                <h3>2. Will I pay taxes in both countries?</h3>
                <p>The US-Italy tax treaty (in force since 2009, last amended 2024) prevents double taxation through a foreign tax credit mechanism. Rental income is taxed by Italy first; the US grants you a credit for what you paid in Italy. Capital gains on Italian real estate are usually taxed only in Italy. The IRS still requires reporting via FBAR (FinCEN 114) and Form 8938 if your foreign accounts cross specific thresholds — your US CPA needs to know about your Italian property.</p>
              </div>

              <div className="usa-q">
                <h3>3. What is the 7% Regime for retirees?</h3>
                <p>If you receive a US retirement income (Social Security, 401(k), IRA, pension) and move your residence to a small town in Southern Italy (Sicily, Sardinia, Calabria, Puglia, Abruzzo, etc.), you can pay a flat <strong>7% income tax</strong> on all foreign-source income for up to 15 years. For a $90,000 retirement income, this typically saves $80,000–$150,000 over 10 years compared to ordinary rates.</p>
              </div>

              <div className="usa-q">
                <h3>4. Can I get Italian citizenship through ancestry?</h3>
                <p><em>Jure sanguinis</em> — Italian citizenship by descent — has no generation limit, provided no one in your direct line renounced citizenship before the next person was born. Roughly 25 million Americans are eligible without knowing it. Application takes 18-36 months at US consulates, but the result is permanent EU citizenship transmissible to your children. Cost: $4,000-$15,000 in records, apostilles and translations.</p>
              </div>

              <div className="usa-q">
                <h3>5. What does the whole process really cost?</h3>
                <p>Beyond the purchase price, expect <strong>10–20%</strong> in additional one-time costs: registration tax (2% primary residence / 9% second home), notary fees ($2,000-$5,000), agency commission (3-5% + VAT), independent legal due diligence ($1,500-$4,000), translator at deed ($400-$800), survey, and bank wire fees. We always provide a full pre-deed cost breakdown — no surprises at closing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="usa-section usa-section-alt">
          <div className="usa-section-inner">
            <span className="usa-tag">YOUR PARTNER IN ITALY</span>
            <h2 className="usa-h2 font-playfair">What ITALYCARE 360 actually does for you</h2>

            <div className="usa-services">
              <div className="usa-service">
                <div className="usa-service-num">01</div>
                <h3>Pre-purchase strategy</h3>
                <p>Free 30-min call. We map your tax position, recommend personal vs LLC ownership, identify if you qualify for the 7% Regime, and shortlist 2-3 regions matching your budget and lifestyle.</p>
              </div>
              <div className="usa-service">
                <div className="usa-service-num">02</div>
                <h3>Codice Fiscale, remotely</h3>
                <p>You sign a power of attorney from the US. We obtain your Italian tax ID at the Agenzia delle Entrate in 3-5 working days. No need to wait for your local consulate.</p>
              </div>
              <div className="usa-service">
                <div className="usa-service-num">03</div>
                <h3>Buyer-side legal review</h3>
                <p>We review the proposta before you sign (it's binding once accepted, contrary to what most agents tell Americans). We check the title chain (20 years), urban compliance, and condominium rules.</p>
              </div>
              <div className="usa-service">
                <div className="usa-service-num">04</div>
                <h3>Notary coordination</h3>
                <p>We work with notaries who handle international closings daily, with sworn translators, double-language deeds, and remote signing via power of attorney when needed.</p>
              </div>
              <div className="usa-service">
                <div className="usa-service-num">05</div>
                <h3>Banking, financing, taxes</h3>
                <p>Italian bank account (Intesa, Unicredit), mortgage broker for non-residents (50-60% LTV), introductions to US-Italy tax advisors who file your 1040 + Italian return.</p>
              </div>
              <div className="usa-service">
                <div className="usa-service-num">06</div>
                <h3>Property care after closing</h3>
                <p>Bi-weekly inspections, utility management, gardening, security, and 24/7 emergency response so you can use your Italian home from a continent away.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Lead magnet section */}
        <section id="guide" className="usa-section usa-leadmagnet">
          <div className="usa-section-inner usa-lm-inner">
            <div className="usa-lm-text">
              <span className="usa-tag">FREE GUIDE · 43 PAGES</span>
              <h2 className="usa-h2 font-playfair">The American's Complete Guide to Buying Property in <em>Italy</em></h2>
              <p className="usa-lm-p">Updated to 2026. Written by Italian real estate lawyers and tax specialists, exclusively for US buyers.</p>
              <ul className="usa-lm-list">
                <li>✓ Reciprocity, Codice Fiscale, the 3-phase process explained step by step</li>
                <li>✓ Real 2026 cost breakdown — what 10-20% above asking actually means</li>
                <li>✓ FATCA, FBAR, Form 8938 — what your US CPA needs to know</li>
                <li>✓ The 7% Regime: how to legally pay 7% tax on US retirement income</li>
                <li>✓ Italy's 4% inheritance tax vs US estate tax — planning implications</li>
                <li>✓ Mortgages for non-resident Americans (50-60% LTV, 4.0-4.6% rates)</li>
                <li>✓ <em>Jure sanguinis</em> Italian citizenship by descent</li>
                <li>✓ The 8 most common mistakes Americans make</li>
                <li>✓ A realistic 6-12 month timeline</li>
              </ul>
              <p className="usa-lm-meta">No spam. We send 1-2 thoughtful emails per month. Unsubscribe anytime.</p>
            </div>
            <div className="usa-lm-form">
              <LeadMagnetForm
                guideSlug="americans-buying-italy-2026"
                guideTitle="The American's Complete Guide to Buying Property in Italy (2026)"
                headline="Get instant access"
                subhead="We'll send the link to your inbox. You can also open it immediately after submitting."
              />
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="usa-final-cta">
          <h2 className="usa-final-h2 font-playfair">Ready to talk to a real expert?</h2>
          <p className="usa-final-p">A 30-minute call costs you nothing. We'll review your specific situation and give you a written summary with concrete next steps.</p>
          <button type="button" className="btn-gold usa-final-btn" onClick={() => setModalOpen(true)}>
            Book my free 30-minute consultation
          </button>
          <p className="usa-final-meta">
            Or email us directly at <a href="mailto:info@italycare360.com">info@italycare360.com</a><br/>
            +39 351 750 1164 · WhatsApp · Mon-Thu 9am-4:30pm CET
          </p>
        </section>
      </main>

      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
