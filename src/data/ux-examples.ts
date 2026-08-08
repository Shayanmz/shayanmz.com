export interface UXExample {
  id: string;
  name: string;
  company: string;
  description: string;
  date: string;
  /** Filename only in this file; MEDIA_BASE is prepended in the export below. */
  media: string;
  mediaType: 'image' | 'gif' | 'video';
}

// Where media is served from. Everything lives in the repo under
// public/examples today. If this ever outgrows git, point MEDIA_BASE at an
// R2/CDN origin (e.g. 'https://media.shayanmz.com') — nothing else changes.
export const MEDIA_BASE = '/examples';

const unsortedExamples: UXExample[] = [
  {
    id: '1',
    name: 'Cursor hover effect on TLDraw docs',
    company: 'TLDraw',
    description: 'Was on their documentation page and wanted to check out their Twitter account and saw this. Things like this make the internet more fun.',
    date: 'November 24, 2023',
    media: 'cursor-hover-effect-on-tldraw-docs.mp4',
    mediaType: 'video'
  },
  {
    id: '2',
    name: 'Monthly bagel subscriptions',
    company: 'Poppys Bagels Waterloo',
    description: 'Monthly subscriptions for physical products makes a lot of sense. Think Nespresso/Coffee, Groceries, etc.\n\nI just really liked the in-person experience to this one. Cute little bagel shop in Uptown Waterloo, ON, that offers unlimited coffee and monthly subscriptions.\n\nI wonder what scaling this looks like. Imagine 1000 customers paying for 4 sleeves a month. Definitely a good problem to have 🙂',
    date: 'November 18, 2023',
    media: 'monthly-bagel-subscriptions.webp',
    mediaType: 'image'
  },
  {
    id: '3',
    name: 'Garfield movie campaign',
    company: 'Sony',
    description: 'Brilliant campaign to get viewers involved by submitting their funny cat & dog videos. This part was at the end of the real trailer for the film. "Does your cat act like Garfield?"',
    date: 'November 15, 2023',
    media: 'garfield-movie-campaign.mp4',
    mediaType: 'video'
  },
  {
    id: '4',
    name: "Discord's app search",
    company: 'Discord',
    description: "A little chaotic, but I love the personality to Discord's CMD+K app search. It's also really fast and guides you very well.",
    date: 'November 15, 2023',
    media: 'discord-s-app-search.mp4',
    mediaType: 'video'
  },
  {
    id: '5',
    name: 'One Print, One Tree',
    company: 'Canva',
    description: 'A sustainability effort that is directly tied to Canva\'s "Print Design" offering where you can print your posters and have them delivered to you. Their messaging and landing page for this effort was very direct and made a ton of sense.',
    date: 'November 5, 2023',
    media: 'one-print-one-tree.webp',
    mediaType: 'image'
  },
  {
    id: '6',
    name: 'Canva cursor hover effect',
    company: 'Canva',
    description: 'Example of a simple, subtle hover effect that feels natural, aligns with the brand, and looks beautiful.',
    date: 'November 4, 2023',
    media: 'canva-cursor-hover-effect.mp4',
    mediaType: 'video'
  },
  {
    id: '7',
    name: 'Ynput - Discord community log in',
    company: 'Ynput',
    description: 'Little jokes like this add a small human touch that I love every time. Every product should have little things like this.',
    date: 'October 11, 2023',
    media: 'ynput-discord-community-log-in.mp4',
    mediaType: 'video'
  },
  {
    id: '8',
    name: 'Quick IBC event recap',
    company: 'IBC.org',
    description: 'I went onto IBC\'s website to see if there was anything about how the event was and was pleasently surprised to see the graphic they made to summarize the event in numbers. Quick turnaround. Clean and on brand.',
    date: 'October 6, 2023',
    media: 'quick-ibc-event-recap.mp4',
    mediaType: 'video'
  },
  {
    id: '9',
    name: 'Auto-save copy on Word',
    company: 'Microsoft Word',
    description: 'The small "Don\'t worry!" makes a big difference in this copy. Turns it from cold & professional to warm and personal 🙂',
    date: 'September 23, 2023',
    media: 'auto-save-copy-on-word.mp4',
    mediaType: 'video'
  },
  {
    id: '10',
    name: 'Hiring process on Careers page',
    company: 'Klue',
    description: 'At least they tell you up front that you\'ll have 4+ interviews 🙃',
    date: 'September 23, 2023',
    media: 'hiring-process-on-careers-page.mp4',
    mediaType: 'video'
  },
  {
    id: '11',
    name: 'Klue\'s interactive product demo(s)',
    company: 'Klue',
    description: 'Beautiful! This saves so much time for sales teams by reducing unnecessary product demos, and it also provides upfront value to prospective buyers. They have one of these for each of their platform\'s products.',
    date: 'September 23, 2023',
    media: 'klue-s-interactive-product-demo-s.mp4',
    mediaType: 'video'
  },
  {
    id: '12',
    name: 'CEO\'s cell # as upsell lol',
    company: 'Rewind',
    description: 'This has since been removed. Not scalable at all, but still funny and do-able for earlier stage companies.',
    date: 'September 23, 2023',
    media: 'ceo-s-cell-as-upsell-lol.mp4',
    mediaType: 'video'
  },
  {
    id: '13',
    name: 'Use cases section of website',
    company: 'Tango',
    description: 'How you SHOULD communicate use cases on your website. It also helps narrow your customer base more towards your ICP\'s.',
    date: 'September 23, 2023',
    media: 'use-cases-section-of-website.mp4',
    mediaType: 'video'
  },
  // {
  //   id: '14',
  //   name: 'Superhuman UI Transition on Zoom',
  //   company: 'Superhuman',
  //   description: 'A smooth transition effect when zooming in & out.',
  //   date: 'August 17, 2023',
  //   media: 'superhuman-ui-transition-on-zoom.webp',
  //   mediaType: 'image'
  // },
  {
    id: '15',
    name: 'Miro\'s subtle feature-specific feedback',
    company: 'Miro',
    description: 'A very simple and subtle way to ask for feedback on a specific feature to keep them in-context of their experience with it. It doesn\'t have to be super sexy. Just a simple text for anyone who notices and is inclined to.',
    date: 'August 6, 2023',
    media: 'miro-s-subtle-feature-specific-feedback.mp4',
    mediaType: 'video'
  },
  {
    id: '16',
    name: 'Raycast\'s prompt explorer',
    company: 'Raycast',
    description: 'I just felt like the instructions on this page were very clear and easy to follow. Makes it very hard for users to get confused.',
    date: 'August 6, 2023',
    media: 'raycast-s-prompt-explorer.mp4',
    mediaType: 'video'
  },
  {
    id: '17',
    name: 'New features in Veed',
    company: 'Veed.io',
    description: 'This is such a simple way to show users that there are new features - I really like this. Probably more than big annoying tooltips actually. Of course, it depends on where the new features sit.',
    date: 'August 6, 2023',
    media: 'new-in-veed.mp4',
    mediaType: 'video'
  },
  {
    id: '18',
    name: 'Superhuman\'s referral program',
    company: 'Superhuman',
    description: 'As a communication based tool, Superhuman has an advantage for viral loops and user growth. Their referral program is extremely generous and is embedded by default into your emails with a signature that directs readers to claim a free month, and in turn giving the sender a free month as well.',
    date: 'July 21, 2023',
    media: 'superhuman-referral.mp4',
    mediaType: 'video'
  },
  {
    id: '19',
    name: 'SavvyCal comparisons page',
    company: 'SavvyCal',
    description: 'In a world where every product has dozens of close competitors, calling out the specific benefits of yours over others is extremely valuable. You shouldn\'t be scared to call out your competitiors likes this.',
    date: 'July 15, 2023',
    media: 'savvycal-comparisons-page.mp4',
    mediaType: 'video'
  },
  {
    id: '20',
    name: 'Linear\'s onboarding',
    company: 'Linear',
    description: 'A task list style onboarding to get you to their activation moments as quickly as possible. I\'ve seen this a handful of times with to-do style apps, but this can still be applied accross different products as well. There\'s also an immediate CTA to their import tool at the bottom left 👏🏽',
    date: 'June 28, 2023',
    media: 'linear-s-onboarding.webp',
    mediaType: 'image'
  },
  {
    id: '21',
    name: 'Linear\'s customers page',
    company: 'Linear',
    description: 'Beautifully designed customers page with links to "read more" for customer stories and quotes. If they don\'t have a story, it directs you to that customers website. All companies should have a page like this.',
    date: 'June 28, 2023',
    media: 'linear-s-customers-page.mp4',
    mediaType: 'video'
  },
  {
    id: '22',
    name: 'Copying Figma content to framer',
    company: 'Framer',
    description: 'Framer quickly realized that users would want to port content from Figma to Framer and created a smart dialogue that prompts the user to download a plugin.',
    date: 'June 18, 2023',
    media: 'copying-figma-content-to-framer.webp',
    mediaType: 'image'
  },
  {
    id: '23',
    name: 'Framer onboarding app tour',
    company: 'Framer',
    description: 'An app tour that bounces you between a Youtube tutorial & the actual product at your own speed. Gets you using the features that are the most important. Very interesting personalization possibilities here!',
    date: 'June 18, 2023',
    media: 'framer-onboarding-app-tour.mp4',
    mediaType: 'video'
  },
  {
    id: '24',
    name: 'Submitting feedback in Cron',
    company: 'Cron',
    description: 'Ok, this is the last time I post a product\'s feedback/bug submission options. Just making a point for my recent blog post 🙂',
    date: 'May 29, 2023',
    media: 'submitting-feedback-in-cron.mp4',
    mediaType: 'video'
  },
  // {
  //   id: '25',
  //   name: 'Submitting feedback in Rewind.ai',
  //   company: 'Rewind',
  //   description: 'Another clean in-product bug/feedback submission. This will be the norm for most SaaS products.',
  //   date: 'May 29, 2023',
  //   media: 'submitting-feedback-in-rewind-ai.webp',
  //   mediaType: 'image'
  // },
  {
    id: '26',
    name: 'Report bugs & feedback in Raycast',
    company: 'Raycast',
    description: 'Like in Arc, reporting bugs and requesting new features is easlily accessible. Well done Raycast 👏🏽.',
    date: 'May 3, 2023',
    media: 'report-bugs-feedback-in-raycast.webp',
    mediaType: 'image'
  },
  {
    id: '27',
    name: 'Using Loom in Monday.com',
    company: 'Monday.com',
    description: 'In-product trigger that notifies you of available integrations based on usage. It. Just. Makes. Sense.',
    date: 'April 29, 2023',
    media: 'using-loom-in-monday-com.webp',
    mediaType: 'image'
  },
  {
    id: '28',
    name: 'Copying a URL in Arc',
    company: 'Arc',
    description: 'A nice little tooltip after copying a URL to reinforce Arc\'s positioning on secure browsing.',
    date: 'April 29, 2023',
    media: 'copying-a-url-in-arc.webp',
    mediaType: 'image'
  },
  {
    id: '29',
    name: 'Pocus our customers page',
    company: 'Pocus',
    description: 'Amazing UI, but even better inbound funnel. Well played Pocus 👏🏽',
    date: 'April 29, 2023',
    media: 'pocus-our-customers-page.mp4',
    mediaType: 'video'
  },
  {
    id: '30',
    name: 'Gymshark Black Friday order',
    company: 'Gymshark',
    description: 'Quick update emails like this go a long way during busy ordering times or sales! Also, read the blurb all the way at the bottom of the email.',
    date: 'April 29, 2023',
    media: 'gymshark-black-friday-order-email1.webp',
    mediaType: 'image'
  },
  {
    id: '31',
    name: 'Canva\'s Campaign for Turkey',
    company: 'Canva',
    description: 'Beautiful and simple callout for altruistic campaign Canva ran during devastating earthquakes in the middle-east. They don\'t ask for anything, they\'re just telling you they\'re doing it.',
    date: 'April 29, 2023',
    media: 'canva-s-campaign-for-turkey.webp',
    mediaType: 'image'
  },
  {
    id: '32',
    name: 'Athletic Greens packaging',
    company: 'Athletic Greens',
    description: 'A good example of creating an experience out of the unboxing of a shipment. Clever messaging with useful resources as well.',
    date: 'April 29, 2023',
    media: 'athletic-greens-packaging.webp',
    mediaType: 'image'
  },
  {
    id: '33',
    name: 'Athletic Greens re-engagement email',
    company: 'Athletic Greens',
    description: 'I just found the subject line and header clever 🙂 The $3 a day was a good sell too.',
    date: 'April 29, 2023',
    media: 'athletic-greens-re-engagement-email.webp',
    mediaType: 'image'
  },
  {
    id: '34',
    name: 'Athletic Greens welcome email',
    company: 'Athletic Greens',
    description: 'I usually find that welcome emails focus so much on the product itself and not enough on you and your pain point. This addressed the mission of AG1, how it addresses your pain points through a story (personal touch), key metrics you care about as a buyer, and a beautiful "send me a note" feedback funnel.',
    date: 'April 29, 2023',
    media: 'athletic-greens-welcome-email.webp',
    mediaType: 'image'
  },
  {
    id: '35',
    name: '"You look nice today" in Slack huddle',
    company: 'Slack',
    description: 'Hover over your own video tile when in a Slack Huddle. A nice little touch 💜',
    date: 'April 29, 2023',
    media: 'you-look-nice-today-in-slack-huddle.webp',
    mediaType: 'image'
  },
  {
    id: '36',
    name: 'Auto-transcribe on upload in Slack',
    company: 'Slack',
    description: 'A nice little surprise when you upload a video into a chat. No additional dialogue. With minimal intrusion on UI.',
    date: 'April 29, 2023',
    media: 'auto-transcribe-on-upload-in-slack.webp',
    mediaType: 'image'
  },
  // {
  //   id: '37',
  //   name: 'iOS "From Messages" suggestion',
  //   company: 'Apple',
  //   description: 'To this day, one of the most useful things that exists on my iPhone. I\'ve thought a lot about how something like this could be implemented in other platforms 🤔',
  //   date: 'April 29, 2023',
  //   media: 'ios-from-messages-suggestion.webp',
  //   mediaType: 'image'
  // },
  {
    id: '38',
    name: 'Chrome \'Site Search\' (in Arc)',
    company: 'Google Chrome',
    description: 'Any platform with a search protocol can be added as a shorcut in Chrome. How did I just find out about this now…?',
    date: 'April 29, 2023',
    media: 'chrome-site-search-in-arc.mp4',
    mediaType: 'video'
  },
  {
    id: '39',
    name: 'Reporting bugs & feedback in Arc',
    company: 'Arc',
    description: 'Reporting bugs and giving feedback shouldn\'t be complicated. Every product should have a feedback & bug submission built into it. Well done Arc 👏🏽',
    date: 'April 29, 2023',
    media: 'reporting-bugs-feedback-in-arc.mp4',
    mediaType: 'video'
  },
  {
    id: '40',
    name: 'Favourites previews in Arc',
    company: 'Arc',
    description: 'See what\'s going on in your top sites by simply hovering over the tile. No more losing your current tab and what you\'re working on.',
    date: 'April 29, 2023',
    media: 'favourites-previews-in-arc.mp4',
    mediaType: 'video'
  },
  {
    id: '41',
    name: 'GCal cover photos',
    company: 'Google Calendar',
    description: 'Simple calendar event names pre-populate a cover photo for the event. AI tools will extend this idea to create call agendas & linked resources.',
    date: 'April 29, 2023',
    media: 'gcal-cover-photos.webp',
    mediaType: 'image'
  },
  {
    id: '42',
    name: 'Donation impact report',
    company: 'Charity: Water',
    description: 'I\'ve regularly been impressed with how well <a href="https://www.charitywater.org/" target="_blank" rel="noopener noreferrer">Charity: Water</a> communicates to all its donors and keeps them updated with how things are going. I actually look forward to getting emails from them. Best charity I\'ve ever donated to.',
    date: 'November 10, 2025',
    media: 'charity-water-impact-report.mp4',
    mediaType: 'video'
  },
  {
    id: '43',
    name: 'Black friday 2023',
    company: 'Shopify',
    description: 'Not only was this is just beautifully done, but the amount of data across all the interactions was amazing. First time I\'ve ever heard of cockburn.',
    date: 'November 10, 2025',
    media: 'shopify-black-friday.mp4',
    mediaType: 'video'
  },
  {
    id: '44',
    name: '59 sleeps until Prague',
    company: 'Condor Airlines',
    description: 'That one sentence actually made me more excited about the trip. I\'d add a smiley face or something.',
    date: 'November 11, 2025',
    media: 'condor-flight-confirmation-copy.mp4',
    mediaType: 'video'
  },
  {
    id: '45',
    name: 'On-brand website/blog',
    company: 'carllippert.com',
    description: 'The 🐄 tied tied Carl\'s entire branding together. Really cool follow if you\'re in the Agriculture space.',
    date: 'November 16, 2025',
    media: 'carllippert-website.mp4',
    mediaType: 'video'
  },
  {
    id: '46',
    name: 'Best saas website I\'ve ever seen',
    company: 'posthog.com',
    description: 'Some say it might be ruining their conversion, others say it\'s not accesible, I say this makes me want to use their product/work for them 100x more.',
    date: 'December 6, 2025',
    media: 'Posthog.mp4',
    mediaType: 'video'
  }
];

// Sort examples by date in descending order (most recent first)
export const uxExamples: UXExample[] = unsortedExamples
  .map((example) => ({ ...example, media: `${MEDIA_BASE}/${example.media}` }))
  .sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA; // Descending order
  });
