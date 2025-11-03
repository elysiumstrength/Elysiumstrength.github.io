import './Longevity.css';
import LongevityTable from '../sections/LongevityTable'; 

interface BodyCalloutSectionProps {
  title: string;
  description: string;
  calloutTitle: string;
  calloutText: string;
  sectionStyle?: 'light' | 'dark';
}

// Body + Callout Section Component
function BodyCalloutSection({ title, description, calloutTitle, calloutText, sectionStyle = 'light' }: BodyCalloutSectionProps) {
  return (
    <section className={`body-callout-section section-${sectionStyle}`}>
      <h2 className="body-callout-title">{title}</h2>
      <p className="body-callout-description">{description}</p>
      <div className="body-callout-box">
        <h4 className="body-callout-box-title">{calloutTitle}</h4>
        <p className="body-callout-box-text">{calloutText}</p>
      </div>
    </section>
  );
}

// CTA Section Component
function LongevityCTA() {
  return (
    <div className="longevity-cta">
      <div className="longevity-cta-container">
        <div className="longevity-cta-content">
          <div className="longevity-cta-text">
            <h2>Start Your Longevity Journey Today</h2>
            <p>
              Private, personal, science-based coaching to build strength, mobility, and vitality for life.
            </p>
          </div>
          <div className="longevity-cta-buttons">
            <a href="/consultation" className="btn-primary">Book Your Free Longevity Consultation</a>
            <a href="/longevity-approach" className="btn-secondary">Learn Our Approach</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Longevity Page
function Longevity() {
  return (
    <div className="longevity-page">
      {/* Hero Section */}
      <section className="longevity-hero">
        <div className="longevity-hero__overlay">
          <div>
            <h1 className="longevity-hero__title">
              Longevity Training at Elysium Strength & Wellness – Goleta, CA
            </h1>
          </div>
        </div>
      </section>

      {/* Page Content */}
      <div className="longevity-content">
        {/* Longevity Header */}
        <section className="longevity-header-section">
          <div className="longevity-header__container">
            <div className="longevity-header__row">
              <div className="longevity-header__line" />
              <div className="longevity-header__subtitle">Longevity Training</div>
              <div className="longevity-header__line" />
            </div>
            <h1 className="longevity-header__title">Science-Based Strength Training for Lifelong Health, Mobility, and Vitality
            </h1>
            <p className="longevity-header__text">
                At Elysium Strength & Wellness, we believe longevity isn’t about living longer — it’s about living stronger. Our evidence-based programs blend strength, balance, and agility so you can move better, think clearer, and stay independent for life.
            </p>
          </div>
        </section>

        {/* Body + Callout Sections */}
        <BodyCalloutSection
          title="Why Exercise = Longevity"
          description="Improving cardiovascular health, functional strength, and mobility can significantly extend your healthspan and quality of life."
          calloutTitle="Did You Know?"
          calloutText="Improving your VO₂ max by 10% can cut cardiovascular risk in half. (Mayo Clinic, 2018)"
          sectionStyle="light"
        />

        <BodyCalloutSection
          title="Functional Strength for Everyday Life"
          description="Squats, hinges, and carries mimic everyday movements to keep you independent and injury-free."
          calloutTitle="Did You Know?"
          calloutText="Core stability – not crunches – protects your spine. (Dr. Stuart McGill)"
          sectionStyle="light"
        />

        <BodyCalloutSection
          title="Bone Density & Strategic Loading"
          description="Safe heavy lifting and jumping increase bone density, even post-menopause."
          calloutTitle="Did You Know?"
          calloutText="High-intensity resistance training can increase spinal and hip bone density. (LIFTMOR Trial)"
          sectionStyle="light"
        />

        <BodyCalloutSection
          title="Menopause Support"
          description="Strength training helps regulate hormones, improve sleep, and reduce hot flashes."
          calloutTitle="Did You Know?"
          calloutText="Strength training can reduce hot flashes by up to 50%. (Menopause Journal 2022)"
          sectionStyle="light"
        />

        <BodyCalloutSection
          title="Agility, Brain & Balance"
          description="Improve your brain-body connection, proprioception, and reaction time with agility drills."
          calloutTitle="Did You Know?"
          calloutText="Exercise can grow your hippocampus – the brain’s memory center. (PNAS 2011)"
          sectionStyle="light"
        />

        <BodyCalloutSection
          title="Grip Strength & Longevity"
          description="Grip strength is a strong predictor of overall longevity and functional capacity."
          calloutTitle="Did You Know?"
          calloutText="Grip strength predicts longevity better than blood pressure. (UK Biobank 2018)"
          sectionStyle="light"
        />

        <BodyCalloutSection
          title="Feet, Power & Resilience"
          description="Barefoot drills and power training reduce falls and maintain speed and agility as you age."
          calloutTitle="Did You Know?"
          calloutText="Power declines twice as fast as strength after 40 — train fast & smart."
          sectionStyle="light"
        />

        <BodyCalloutSection
          title="The Elysium Longevity Method"
          description="Our 5-pillar method focuses on strength, mobility, balance, recovery, and mental resilience."
          calloutTitle="Did You Know?"
          calloutText="Your nervous system can’t tell emotional stress from physical — recovery builds resilience."
          sectionStyle="light"
        />
        <LongevityTable />
        <BodyCalloutSection
          title="The Elysium Promise + CTA"
          description="Closing copy about private, personal, science-based coaching."
          calloutTitle="Did You Know?"
          calloutText="Walking 8,000 steps twice a week lowers mortality risk 14%. (JAMA 2023)"
          sectionStyle="light"
        />
        {/* CTA Section */}
        <LongevityCTA />
      </div>
    </div>
  );
}

export default Longevity;
