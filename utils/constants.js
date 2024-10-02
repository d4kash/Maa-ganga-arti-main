export const services = [
   {
     id:0,
     image: "assets/jhar_arti.png",
     title: "services.marriageGangaAarti.title",
     description: "services.marriageGangaAarti.description",
   },
   {
     id:1,
     image: "assets/jhar_arti.png",
     title: "services.engagementGangaAarti.title",
     description: "services.engagementGangaAarti.description",
   },
   {
     id:2,
     image: "assets/naag_arti.png",
     title: "services.anniversaryGangaAarti.title",
     description: "services.anniversaryGangaAarti.description",
   },
   {
     id:3,
     image: "assets/jhar_arti.png",
     title: "services.spiritualCeremonyGangaAarti.title",
     description: "services.spiritualCeremonyGangaAarti.description",
   },
   {
     id:4,
     image: "assets/naag_arti.png",
     title: "services.namkaranGangaAarti.title",
     description: "services.namkaranGangaAarti.description",
   },
 ];

 // Define the steps data
export const ceremonySteps = [
   {
     number: 1,
     title: "Groom’s Entry with Shankhwadan",
     description: "The ceremony begins with the groom's grand entry, accompanied by the sound of the conch shell (Shankhwadan). This ritual signifies the auspicious start of the wedding and invites divine blessings.",
     purpose: "The blowing of the conch shell marks the beginning of sacred events and wards off negative energies.",
   },
   {
     number: 2,
     title: "Mangal Mantra Vachan",
     description: "The Mangal Mantra Vachan involves the recitation of sacred mantras that invoke prosperity and well-being for the couple.",
     purpose: "These mantras are chanted to seek blessings for a happy and prosperous married life, setting a positive tone for the ceremony.",
   },
   {
     number: 3,
     title: "On Jaimala Stage: Initiation of Wedding Aarti",
     description: "The Aarti begins on the Jaimala stage, where the couple exchanges floral garlands. This moment is infused with the divine presence of the Ganga Aarti.",
     purpose: "The Aarti on this stage symbolizes the sacred union of the couple and integrates spiritual rituals into the celebratory atmosphere.",
   },
   {
     number: 4,
     title: "Ishwar Vandana",
     description: "Ishwar Vandana is the invocation of divine presence through prayers and hymns.",
     purpose: "This ritual establishes a sacred connection with the divine, seeking blessings for the couple's new journey together.",
   },
   {
     number: 5,
     title: "Start with Sankhanad",
     description: "The ceremony continues with Sankhanad, the blowing of the conch shell, which signifies the commencement of the Aarti rituals.",
     purpose: "The sound of the conch shell enhances the spiritual ambiance and signifies the beginning of divine offerings.",
   },
   {
     number: 6,
     title: "Music as Per Your Choice",
     description: "We play devotional music or your choice of hymns to accompany the Aarti rituals.",
     purpose: "The music sets a serene and uplifting mood, enhancing the overall spiritual experience of the Aarti.",
   },
   {
     number: 7,
     title: "Agarbatti Aarti",
     description: "The offering of incense sticks (Agarbatti) is performed to create a sacred atmosphere and invoke divine presence.",
     purpose: "The fragrant incense purifies the surroundings and adds a sensory dimension to the ritual.",
   },
   {
     number: 8,
     title: "Dhupam Aarti",
     description: "Dhupam Aarti involves the offering of aromatic smoke to the deity.",
     purpose: "This ritual signifies the offering of devotion and creates a spiritually enriching environment.",
   },
   {
     number: 9,
     title: "Naag Aarti",
     description: "Naag Aarti is a ritual involving the offering of prayers and light to the deity in the form of a snake.",
     purpose: "This Aarti symbolizes the protection and divine blessings associated with the deity.",
   },
   {
     number: 10,
     title: "Jhar Aarti",
     description: "Jhar Aarti involves the offering of prayers with a fan made of specific materials.",
     purpose: "This ritual is performed to show respect and reverence, and to provide a cooling and soothing effect.",
   },
   {
     number: 11,
     title: "Pushpam Aarti",
     description: "Pushpam Aarti includes the offering of flowers to the deity.",
     purpose: "Flowers represent devotion and love, and this Aarti symbolizes the couple’s pure affection and reverence.",
   },
   {
     number: 12,
     title: "Morpankh Aarti",
     description: "The offering of peacock feathers (Morpankh) is part of the Aarti.",
     purpose: "Peacock feathers are believed to carry divine grace and blessings.",
   },
   {
     number: 13,
     title: "Chamar Aarti",
     description: "Chamar Aarti involves the use of a ceremonial fan made from yak or horsehair to gently fan the deity.",
     purpose: "This act is a gesture of respect and devotion, symbolizing the offering of service.",
   },
   {
     number: 14,
     title: "Final Sankh Vadan and Mangal Ashirwad Mantra",
     description: "The Aarti concludes with a final blowing of the conch shell and the recitation of Mangal Ashirwad Mantras.",
     purpose: "This final ritual seeks divine blessings for the couple’s prosperous and harmonious future together.",
   },
   {
     number: 15,
     title: "End Aarti",
     description: "The ceremony ends with a concluding Aarti, bringing the entire ritual to a serene and sacred close.",
     purpose: "The final Aarti is a mark of the completion of the ritual, sealing the divine blessings and ensuring a spiritually fulfilling end.",
   },
 ];

 export function formatAmount(amount) {
  // Ensure the input is a number or convert it to a number
  const number = typeof amount === 'string' ? parseFloat(amount) : amount;

  // Return an empty string if the input is not a valid number
  if (isNaN(number)) return '';

  // Use toLocaleString to format the number with commas
  const formattedNumber = number.toLocaleString();

  // Prepend the rupee sign and return the formatted amount
  return `₹ ${formattedNumber}`;
}

export function formatDiscountPercent(amount) {
  // Ensure the input is a number or convert it to a number
  const number = typeof amount === 'string' ? parseFloat(amount) : amount;

  // Return an empty string if the input is not a valid number
  if (isNaN(number)) return '';

  // Use toLocaleString to format the number with commas
  const formattedNumber = number*100;

  // Prepend the rupee sign and return the formatted amount
  return `${formattedNumber}`;
}

export const faqs = [
  {
    "question": "What is Ganga Aarti, and why is it significant?",
    "answer": "Ganga Aarti is a sacred Hindu ritual that takes place on the banks of the Ganges River. It involves the offering of light and prayers to the holy river, symbolizing the purification of one's mind and soul.",
    "keywords": ["Ganga Aarti significance", "holy river ritual", "spiritual ceremony", "Hindu rituals"]
  },
  {
    "question": "How can I book a Ganga Aarti event with Shree Narayan Ganga Aarti?",
    "answer": "To book a Ganga Aarti event, visit our booking page, select your preferred event type and date, fill in the required details, and complete the online payment through our secure gateway.",
    "keywords": ["Ganga Aarti booking", "book Ganga Aarti", "Ganga Aarti event reservation"]
  },
  {
    "question": "What types of events can be organized during Ganga Aarti?",
    "answer": "Events like Namkaran, Engagement, Wedding, Durga Puja, and other personal or religious ceremonies can be organized during Ganga Aarti by Shree Narayan Ganga Aarti.",
    "keywords": ["Ganga Aarti event types", "Namkaran Ganga Aarti", "wedding Ganga Aarti", "Durga Puja Ganga Aarti"]
  },
  {
    "question": "How early should I book my event with Shree Narayan Ganga Aarti?",
    "answer": "We recommend booking your event at least 2-3 weeks in advance, especially during peak festival seasons or major holidays to ensure availability.",
    "keywords": ["advance booking Ganga Aarti", "early booking Ganga Aarti", "Ganga Aarti peak season booking"]
  },
  {
    "question": "Is there a limit to the number of guests I can invite?",
    "answer": "The number of guests depends on the event type and location. Most ceremonies can accommodate a flexible number of guests, and guest details can be specified during the booking process.",
    "keywords": ["Ganga Aarti guest limit", "event guest number", "Ganga Aarti ceremony guest count"]
  },
  {
    "question": "What is the cancellation policy for an event booking?",
    "answer": "Cancellations made 7 days in advance receive a full refund. Cancellations within 7 days will get a 50% refund, and no refunds are provided for cancellations made within 24 hours of the event.",
    "keywords": ["Ganga Aarti cancellation policy", "event cancellation Ganga Aarti", "refund policy Ganga Aarti"]
  },
  {
    "question": "Are customized rituals or special requests available?",
    "answer": "Yes, Shree Narayan Ganga Aarti can tailor rituals based on your religious or cultural needs. Please mention any specific requests during the booking process to ensure arrangements are made.",
    "keywords": ["customized Ganga Aarti rituals", "special requests for Ganga Aarti", "personalized Ganga Aarti ceremony"]
  },
  {
    "question": "Do you provide any live streaming options for the events?",
    "answer": "Yes, live streaming services are available for those unable to attend in person. This can be included as an add-on during your booking.",
    "keywords": ["Ganga Aarti live stream", "virtual Ganga Aarti", "Ganga Aarti online service"]
  },
  {
    "question": "Can I reschedule my event after booking?",
    "answer": "Yes, events can be rescheduled up to 3 days before the event date, depending on availability. Additional charges may apply based on the changes.",
    "keywords": ["reschedule Ganga Aarti", "change booking Ganga Aarti", "modify Ganga Aarti event"]
  },
  {
    "question": "Are photography and videography services available?",
    "answer": "Yes, Shree Narayan Ganga Aarti offers professional photography and videography services to capture your special moments during the Ganga Aarti ceremony.",
    "keywords": ["Ganga Aarti photography", "event videography Ganga Aarti", "ceremony photography services"]
  },
  {
    "question": "What should I wear to the Ganga Aarti ceremony?",
    "answer": "We recommend traditional Indian attire for religious events. Please avoid footwear near the Ganges River as it is considered sacred.",
    "keywords": ["dress code Ganga Aarti", "what to wear Ganga Aarti", "traditional attire for Ganga Aarti"]
  },
  {
    "question": "Can non-Hindus participate in the Ganga Aarti ceremony?",
    "answer": "Yes, Ganga Aarti is open to people of all backgrounds. Anyone can participate and enjoy the spiritual atmosphere.",
    "keywords": ["non-Hindus Ganga Aarti", "participation in Ganga Aarti", "inclusive Ganga Aarti ceremony"]
  },
  {
    "question": "Is there parking available at the Ganga Aarti venue?",
    "answer": "Parking is available at most of our Ganga Aarti venues. However, availability may vary depending on the location and time of the event.",
    "keywords": ["Ganga Aarti parking", "venue parking Ganga Aarti", "event parking availability"]
  },
  {
    "question": "Do you offer special packages for multiple events or large gatherings?",
    "answer": "Yes, Shree Narayan Ganga Aarti offers tailored packages for multiple events, large groups, or multi-day ceremonies. Please contact our team for more details and pricing.",
    "keywords": ["Ganga Aarti event packages", "large group Ganga Aarti", "multi-day event booking Ganga Aarti"]
  },
  {
    "question": "Can we combine Ganga Aarti with other religious rituals?",
    "answer": "Yes, you can combine Ganga Aarti with other religious ceremonies such as havans, pujas, and satsangs. Let us know your requirements during the booking process.",
    "keywords": ["combined rituals Ganga Aarti", "havans and Ganga Aarti", "religious ceremonies Ganga Aarti"]
  },
  {
    "question": "What is the best time to attend Ganga Aarti?",
    "answer": "The best time to attend Ganga Aarti is usually during the evening, just after sunset. However, timing can vary based on specific events and locations.",
    "keywords": ["best time for Ganga Aarti", "evening Ganga Aarti", "sunset Ganga Aarti"]
  },
  {
    "question": "How many pandits can be booked for my event?",
    "answer": "You can book between 1 to 5 pandits for your event, depending on the size and type of ceremony. This can be customized during the booking process to meet your specific needs.",
    "keywords": ["book pandits Ganga Aarti", "pandits for Ganga Aarti event", "customized pandit booking"]
  },
  {
    "question": "How many slots are available for Ganga Aarti ceremonies each day?",
    "answer": "Shree Narayan Ganga Aarti offers 3 time slots per day: morning, afternoon, and evening. You can choose your preferred slot based on availability during the booking process.",
    "keywords": ["Ganga Aarti time slots", "daily Ganga Aarti schedule", "morning evening Ganga Aarti"]
  }
];


export const testimonials = [
  {
    event: "Namkaran Ganga Aarti",
    feedback: [
      { user: "Devotee", rating: 4.5, comment: "It was a very peaceful and divine experience for my child's naming ceremony in Hazaribagh." },
      { user: "Devotee", rating: 5, comment: "Such a serene and spiritual event in Ranchi, it made our day unforgettable." },
      { user: "Devotee", rating: 4.8, comment: "A beautiful ceremony by the Ganges in Dhanbad, filled with love and blessings." },
      { user: "Devotee", rating: 4.6, comment: "The aarti was magical, and the ambiance in Chatra was just perfect." },
      { user: "Devotee", rating: 5, comment: "Our family's joy was amplified during this divine event in Banaras!" }
    ]
  },
  {
    event: "Engagement Ganga Aarti",
    feedback: [
      { user: "Devotee", rating: 4, comment: "A wonderful way to start our journey together in Koderma, the aarti added a spiritual touch." },
      { user: "Devotee", rating: 4.8, comment: "We felt truly blessed in Banaras, and the ceremony was beautifully conducted." },
      { user: "Devotee", rating: 5, comment: "The atmosphere in Dhanbad during the aarti was truly enchanting." },
      { user: "Devotee", rating: 4.7, comment: "Our engagement was made extra special by the aarti in Ranchi." },
      { user: "Devotee", rating: 4.9, comment: "The experience in Hazaribagh was unforgettable, filled with warmth and blessings." }
    ]
  },
  {
    event: "Wedding Ganga Aarti",
    feedback: [
      { user: "Devotee", rating: 5, comment: "A divine experience in Chatra, the perfect start to our married life." },
      { user: "Devotee", rating: 4.7, comment: "The spiritual aura in Dhanbad was overwhelming, an amazing memory for our wedding." },
      { user: "Devotee", rating: 5, comment: "Our wedding in Banaras was beautifully complemented by the Ganga aarti." },
      { user: "Devotee", rating: 4.6, comment: "It felt so special to have our wedding aarti in Hazaribagh, surrounded by loved ones." },
      { user: "Devotee", rating: 4.8, comment: "A magnificent start to our journey as a couple in Koderma." }
    ]
  },
  {
    event: "Durga Puja Ganga Aarti",
    feedback: [
      { user: "Devotee", rating: 4.9, comment: "A mesmerizing experience during Durga Puja in Bihar, the aarti was full of energy and devotion." },
      { user: "Devotee", rating: 5, comment: "The spiritual vibes during the aarti in Ranchi were unmatched, a divine celebration of Durga Puja." },
      { user: "Devotee", rating: 4.8, comment: "Attending the Durga Puja aarti in Dhanbad was an unforgettable experience." },
      { user: "Devotee", rating: 4.6, comment: "The energy at the aarti in Hazaribagh was electric, truly a memorable occasion." },
      { user: "Devotee", rating: 5, comment: "Participating in the Ganga aarti during Durga Puja in Chatra filled my heart with joy." }
    ]
  },
  {
    event: "Other Special Aarti",
    feedback: [
      { user: "Devotee", rating: 4.6, comment: "Attended a special aarti on the full moon in Koderma, truly magical experience." },
      { user: "Devotee", rating: 5, comment: "The aarti in Chatra was very well conducted, felt a deep spiritual connection." },
      { user: "Devotee", rating: 4.7, comment: "A beautiful full moon aarti in Banaras, it was an enchanting evening." },
      { user: "Devotee", rating: 4.5, comment: "The special aarti in Dhanbad was unforgettable, filled with peace and joy." },
      { user: "Devotee", rating: 5, comment: "Experiencing the aarti on a special occasion in Hazaribagh was heartwarming." }
    ]
  }
];
