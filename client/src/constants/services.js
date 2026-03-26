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
    features: ['Facebook & Instagram Ads', 'Google Ads & SEO', 'GMB (Maps) Optimization', 'Lead Generation Strategies']
  },
  {
    id: 'outdoor-branding',
    title: 'Outdoor (OOH) &\nPremium Branding',
    icon: 'outdoor',
    image: outdoorImg,
    color: 'blue',
    tag: 'High Impact OOH',
    shortDesc: 'High-impact physical advertisements in prestigious and high-traffic locations.',
    features: ['Airports, Malls & PVR Cinemas', 'Highway & Premium Billboards', 'Police Booth Branding', 'Backlit & Acrylic Boards']
  },
  {
    id: 'transit-branding',
    title: 'Transit (Moving) Branding',
    icon: 'transit',
    image: transitImg,
    color: 'orange',
    tag: 'Moving Branding',
    shortDesc: 'Moving with the audience via public and private transport networks.',
    features: ['Auto (Rickshaw) Branding', 'State & Private Bus Wraps', 'Metro Train Branding', 'Barricades & Bus Shelters']
  },
  {
    id: 'hyper-local',
    title: 'Hyper-Local Marketing',
    icon: 'local',
    image: reachImg,
    color: 'blue',
    tag: 'Local Dominance',
    shortDesc: 'Strategies designed to dominate specific local neighborhoods and markets.',
    features: ['Mobile Van Promotions', 'Wall Wraps & Paintings', 'Local Infrastructure Branding', 'Society & Market Activations']
  },
  {
    id: 'event-management',
    title: 'Event & Launch Management',
    icon: 'events',
    image: eventImg,
    color: 'orange',
    tag: 'Live Activation',
    shortDesc: 'End-to-end support for introducing brands to the physical world.',
    features: ['Brand Launch Strategy', 'Product Promotions', 'Live Activations', 'Corporate Event Management']
  },
  {
    id: 'integrated-strategy',
    title: 'Integrated Strategy (Hybrid)',
    icon: 'map',
    image: reachImg,
    color: 'blue',
    tag: 'Omnichannel Hybrid',
    shortDesc: 'Omnichannel "Digital + Outdoor" approach for full-market support.',
    features: ['Hybrid Multi-Channel Campaigns', 'Right Audience Targeting', 'Mass Visibility Slogans', 'Guaranteed Reach Metrics']
  }
];

export const operationalStates = [
  { region: 'North India', states: 'Uttarakhand, Uttar Pradesh, Delhi NCR, Haryana, Punjab, Rajasthan' },
  { region: 'Central India', states: 'Madhya Pradesh' },
  { region: 'West India', states: 'Maharashtra' }
];
