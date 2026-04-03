// Hero Images (AI-Generated Previously)
import billboardHero from '../assets/extreme_photorealistic_billboard_1774478569369.png';
import hoardingHero from '../assets/outdoor_hoarding_high_end_1774478434373.png';
import transitHero from '../assets/refined_transit_regional_bus_1774478793423.png';

// All Customer Campaign Images (Used for Full Portfolio) 
// Grouping them for variety
import img149 from '../assets/customer/img149.jpg';
import img150 from '../assets/customer/img150.jpg';
import img155 from '../assets/customer/img155.jpg';
import img156 from '../assets/customer/img156.jpg';
import img158 from '../assets/customer/img158.jpg';
import img159 from '../assets/customer/img159.jpg';
import img161 from '../assets/customer/img161.jpg';
import img162 from '../assets/customer/img162.jpg';
import img164 from '../assets/customer/img164.jpg';
import img165 from '../assets/customer/img165.jpg';
import img167 from '../assets/customer/img167.jpg';
import img168 from '../assets/customer/img168.jpg';
import img170 from '../assets/customer/img170.jpg';
import img171 from '../assets/customer/img171.jpg';
import img173 from '../assets/customer/img173.jpg';
import img174 from '../assets/customer/img174.jpg';
import img176 from '../assets/customer/img176.jpg';
import img177 from '../assets/customer/img177.jpg';
import img179 from '../assets/customer/img179.jpg';
import img180 from '../assets/customer/img180.jpg';
import img182 from '../assets/customer/img182.jpg';
import img183 from '../assets/customer/img183.jpg';
import img185 from '../assets/customer/img185.jpg';
import img186 from '../assets/customer/img186.jpg';
import img188 from '../assets/customer/img188.jpg';
import img189 from '../assets/customer/img189.jpg';
import img191 from '../assets/customer/img191.jpg';
import img192 from '../assets/customer/img192.jpg';
import img194 from '../assets/customer/img194.jpg';
import img195 from '../assets/customer/img195.jpg';
import img197 from '../assets/customer/img197.jpg';
import img198 from '../assets/customer/img198.jpg';
import img200 from '../assets/customer/img200.jpg';
import img201 from '../assets/customer/img201.jpg';
import img203 from '../assets/customer/img203.jpg';
import img204 from '../assets/customer/img204.jpg';
import img206 from '../assets/customer/img206.jpg';
import img207 from '../assets/customer/img207.jpg';

const genericTestimonial = {
  text: "Digital Honest architecture turned our marketing spend into a high-yield growth engine. Their precision in both digital and physical realms is peerless.",
  author: "Verified Client Partner",
  role: "Marketing Director"
};

export const heroImages = {
  billboard: billboardHero,
  hoarding: hoardingHero,
  transit: transitHero
};

export const projects = [
  {
    id: 1,
    title: "Carman School Reach Dominance",
    category: "Digital Marketing",
    client: "Carman School",
    description: "Achieved massive brand visibility with over 426,000 reach and 875,000 impressions through strategic social media engineering.",
    image: img161,
    tag: "Education Leader",
    testimonial: genericTestimonial
  },
  {
    id: 2,
    title: "The OASIS National Reach",
    category: "Lead Generation",
    client: "The OASIS",
    description: "Executed a high-velocity reach campaign resulting in 1M+ reach and 1.3M+ impressions across targeted demographics.",
    image: img164,
    tag: "Premium Institution",
    testimonial: genericTestimonial
  },
  {
    id: 3,
    title: "Olympus High Lead Pipeline",
    category: "Performance Marketing",
    client: "Olympus High School",
    description: "Built a robust lead generation architecture delivering 300+ high-intent enquiries through custom Facebook form funnels.",
    image: img167,
    tag: "Growth Success",
    testimonial: genericTestimonial
  },
  {
    id: 4,
    title: "Doon Cambridge Visibility Blitz",
    category: "Digital Branding",
    client: "Doon Cambridge School",
    description: "Strategic brand placement across digital channels achieving 408,000+ reach and 730,000+ impressions.",
    image: img159,
    tag: "Brand Authority",
    testimonial: genericTestimonial
  },
  {
    id: 5,
    title: "ND Manor Direct Engagement",
    category: "Direct Marketing",
    client: "ND Manor",
    description: "Implemented high-deliverability WhatsApp marketing strategies with 98% open rates for premium hospitality bookings.",
    image: img171,
    tag: "Hospitality Reach",
    testimonial: genericTestimonial
  },
  {
    id: 6,
    title: "Congress Party Regional Awareness",
    category: "Mass Awareness",
    client: "Congress Party UK",
    description: "Managed high-visibility digital campaigns across Uttarakhand achieving over 300,000 reach per objective.",
    image: img149,
    tag: "Regional Impact",
    testimonial: genericTestimonial
  },
  {
      id: 7,
      title: "Hill Field School Lead Campaign",
      category: "Digital Performance",
      client: "Hill Field School",
      description: "Successfully implemented localized digital lead generation strategies for school admissions.",
      image: img156,
      tag: "Lead Quality",
      testimonial: genericTestimonial
  },
  {
      id: 8,
      title: "Shiwalik International Growth",
      category: "Engagement Marketing",
      client: "Shiwalik School",
      description: "Driving community engagement and video visibility for regional educational institutions.",
      image: img158,
      tag: "Engagement Focus",
      testimonial: genericTestimonial
  },
  {
      id: 9,
      title: "Empyrean Academy Reach",
      category: "Strategic Reach",
      client: "Empyrean Academy",
      description: "Scale-focused reach campaign delivering 270k+ impressions through multi-channel digital strategies.",
      image: img155,
      tag: "Mass Visibility",
      testimonial: genericTestimonial
  },
  {
      id: 10,
      title: "Femicare Fertility Performance",
      category: "Healthcare Marketing",
      client: "Femicare Fertility",
      description: "Achieved 324k+ impressions through high-intent healthcare digital advertising campaigns.",
      image: img174,
      tag: "Healthcare Digital",
      testimonial: genericTestimonial
  },
  // Adding all other images as generic campaigns
  ...[img150, img162, img165, img168, img170, img173, img176, img177, img179, img180, img182, img183, img185, img186, img188, img189, img191, img192, img194, img195, img197, img198, img200, img201, img203, img204, img206, img207].map((img, index) => ({
      id: index + 11,
      title: `Campaign Success #${index + 11}`,
      category: "Digital Optimization",
      client: "Institutional Partner",
      description: "High-performing digital campaign architecture demonstrating architectural growth metrics.",
      image: img,
      tag: "Performance Portfolio",
      testimonial: genericTestimonial
  }))
];
