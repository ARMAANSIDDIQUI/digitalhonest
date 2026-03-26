import outdoorImg from '../assets/extreme_photorealistic_billboard_1774478569369.png';
import transitImg from '../assets/refined_transit_regional_bus_1774478793423.png';
import eventImg from '../assets/extreme_photorealistic_stage_1774478602352.png';
import digitalImg from '../assets/extreme_photorealistic_dashboard_1774478618848.png';
import reachImg from '../assets/refined_national_reach_map_1774478777301.png';

export const services = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Growth',
    icon: 'digital',
    image: digitalImg,
    color: 'orange',
    tag: 'Digital Performance',
    shortDesc: 'Comprehensive online solutions to build a brand’s presence and scale performance.',
    detailedDescription: 'We engineer market dominance through algorithmic precision and architectural brand storytelling. Our digital ecosystem integrates predictive analytics with high-velocity acquisition channels to ensure your brand leading the conversation, not just joining it.',
    roi: '+42% Avg. ROI Lift',
    features: ['Facebook & Instagram Ads', 'Google Ads & SEO', 'GMB (Maps) Optimization', 'Lead Generation Strategies'],
    methodology: [
      { id: '01', title: 'Market Intelligence', desc: 'Predictive analytics that identify high-intent clusters before they enter the funnel.' },
      { id: '02', title: 'Structural SEO', desc: 'Building information architectures that Google trusts inherently for long-term organic equity.' },
      { id: '03', title: 'Frictionless UX', desc: 'Removing every cognitive barrier between the prospect and the purchase decision.' }
    ],
    caseStudy: {
      title: 'The Velocity Systems Scale-Up',
      desc: 'Engineering a 600% increase in qualified pipeline for a B2B SaaS giant within two quarters.',
      stats: [
        { label: 'Lead Quality Lift', value: '6.4x' },
        { label: 'CPA Reduction', value: '-42%' }
      ]
    }
  },
  {
    id: 'outdoor-branding',
    title: 'Outdoor (OOH) &\nPremium Branding',
    icon: 'outdoor',
    image: outdoorImg,
    color: 'blue',
    tag: 'High Impact OOH',
    shortDesc: 'High-impact physical advertisements in prestigious and high-traffic locations.',
    detailedDescription: 'Dominate the physical world with monolithic visibility. From high-velocity highways to premium urban hubs, we curate OOH experiences that convert passersby into brand advocates through strategic placement and architectural scale.',
    roi: '3.5x Visibility Multiplier',
    features: ['Airports, Malls & PVR Cinemas', 'Highway & Premium Billboards', 'Police Booth Branding', 'Backlit & Acrylic Boards'],
    methodology: [
      { id: '01', title: 'Geometric Placement', desc: 'Selecting locations based on traffic physics and visual dwell time metrics.' },
      { id: '02', title: 'Visual Authority', desc: 'Designing creative that commands attention in high-noise urban environments.' },
      { id: '03', title: 'Reach Validation', desc: 'Real-time monitoring and impact auditing for every physical installation.' }
    ],
    caseStudy: {
      title: 'The National Billboard Blitz',
      desc: 'Coordinating a 50-city OOH saturation campaign that established immediate market authority.',
      stats: [
        { label: 'Daily Impressions', value: '2.4M+' },
        { label: 'Brand Recall Lift', value: '+180%' }
      ]
    }
  },
  {
    id: 'transit-branding',
    title: 'Transit (Moving) Branding',
    icon: 'transit',
    image: transitImg,
    color: 'orange',
    tag: 'Moving Branding',
    shortDesc: 'Moving with the audience via public and private transport networks.',
    detailedDescription: 'Turn the city into your showroom. Our transit branding ecosystem leverages the rhythmic movement of buses, autos, and metros to ensure your brand message is encountered precisely where your audience lives, works, and travels.',
    roi: '+210% Recall Velocity',
    features: ['Auto (Rickshaw) Branding', 'State & Private Bus Wraps', 'Metro Train Branding', 'Barricades & Bus Shelters'],
    methodology: [
      { id: '01', title: 'Route Optimization', desc: 'Mapping brand assets to the highest-density commuter paths.' },
      { id: '02', title: 'Kinetic Design', desc: 'Crafting visuals specifically engineered for readability at speed.' },
      { id: '03', title: 'Network Saturation', desc: 'Coordinating multi-modal transit assets for total city dominance.' }
    ],
    caseStudy: {
      title: 'The Urban Transit Pulse',
      desc: 'Deploying a 500-unit auto and bus wrap campaign that redefined the city’s visual landscape.',
      stats: [
        { label: 'Commuter Reach', value: '1.5M+' },
        { label: 'Campaign Velocity', value: 'High' }
      ]
    }
  },
  {
    id: 'hyper-local',
    title: 'Hyper-Local Marketing',
    icon: 'local',
    image: reachImg,
    color: 'blue',
    tag: 'Local Dominance',
    shortDesc: 'Strategies designed to dominate specific local neighborhoods and markets.',
    detailedDescription: 'Win the street, win the market. Our hyper-local marketing strategies penetrate individual neighborhoods through deep infrastructure branding and community-level activations that build trust where it matters most.',
    roi: '4.2x Neighborhood Trust',
    features: ['Mobile Van Promotions', 'Wall Wraps & Paintings', 'Local Infrastructure Branding', 'Society & Market Activations'],
    methodology: [
      { id: '01', title: 'Micro-Targeting', desc: 'Identifying the high-influence zones within 5km of your POS.' },
      { id: '02', title: 'Community Trust', desc: 'Utilizing local infrastructure to ground your brand in the community.' },
      { id: '03', title: 'Guerilla Exposure', desc: 'Unexpected, high-impact activations that bypass traditional ad-blindness.' }
    ],
    caseStudy: {
      title: 'The Local Market Lockdown',
      desc: 'A 12-week society-level activation and van promotion campaign for a regional retail giant.',
      stats: [
        { label: 'Footfall Increase', value: '+35%' },
        { label: 'Market Share Growth', value: '12%' }
      ]
    }
  },
  {
    id: 'event-management',
    title: 'Event & Launch Management',
    icon: 'events',
    image: eventImg,
    color: 'orange',
    tag: 'Live Activation',
    shortDesc: 'End-to-end support for introducing brands to the physical world.',
    detailedDescription: 'Transform your brand launch into a cultural landmark. We produce immersive live experiences and corporate events that blend high-stakes production value with strategic PR outcomes to ensure your brand arrives with authority.',
    roi: '12M+ Earned Media Value',
    features: ['Brand Launch Strategy', 'Product Promotions', 'Live Activations', 'Corporate Event Management'],
    methodology: [
      { id: '01', title: 'Immersive Scenography', desc: 'Designing physical spaces that tell your brand story architecturally.' },
      { id: '02', title: 'Press Magnification', desc: 'Coordinating live events with digital PR for maximum reach.' },
      { id: '03', title: 'Production Excellence', desc: 'Flawless execution of tech, logistics, and hospitality for elite audiences.' }
    ],
    caseStudy: {
      title: 'The Grand Tech Unveiling',
      desc: 'Orchestrating a multi-stage regional product launch for a global smartphone brand.',
      stats: [
        { label: 'Live Attendees', value: '2,500+' },
        { label: 'Social Impressions', value: '5.8M' }
      ]
    }
  },
  {
    id: 'integrated-strategy',
    title: 'Integrated Strategy (Hybrid)',
    icon: 'map',
    image: reachImg,
    color: 'blue',
    tag: 'Omnichannel Hybrid',
    shortDesc: 'Omnichannel "Digital + Outdoor" approach for full-market support.',
    detailedDescription: 'The 360° total-market ecosystem. We synchronize the high-frequency reach of digital advertising with the massive visual authority of OOH, creating a feedback loop that makes your brand inescapable across all channels.',
    roi: '7.8x Combined Performance',
    features: ['Hybrid Multi-Channel Campaigns', 'Right Audience Targeting', 'Mass Visibility Slogans', 'Guaranteed Reach Metrics'],
    methodology: [
      { id: '01', title: 'Cross-Channel Sync', desc: 'Ensuring digital retargeting triggers based on physical geofence exposure.' },
      { id: '02', title: 'Coherent Voice', desc: 'Maintaining absolute visual parity from smartphone screens to highway billboards.' },
      { id: '03', title: 'Unified Data Audit', desc: 'Aggregating OOH visibility data with digital conversion metrics for a single source of truth.' }
    ],
    caseStudy: {
      title: 'The Full-Spectrum Dominance',
      desc: 'A comprehensive 6-month integrated campaign for a leading logistics network.',
      stats: [
        { label: 'Overall Reach', value: '15M+' },
        { label: 'Lead Conversion', value: '+65%' }
      ]
    }
  }
];

export const operationalStates = [
  { region: 'North India', states: 'Uttarakhand, Uttar Pradesh, Delhi NCR, Haryana, Punjab, Rajasthan' },
  { region: 'Central India', states: 'Madhya Pradesh' },
  { region: 'West India', states: 'Maharashtra' }
];
