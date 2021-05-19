import React from "react"

const figmaCaption =
  "💡 Click the file name to open a full web view (change pages in the web view by clicking the Figma icon). Use the expand icon for full screen."
const googleSheetsCaption =
  "💡 An example data set used post discover to inform design decisions"

export const cardData = [
  {
    color: "salmon",
    icon: "Door",
    title: "Define & Discover",
    text:
      "Every project, big or small, starts with a question from a user, or a theory from a colleague. Breaking that question down into a set of needs and wants is the first step in making something useful.",
  },
  {
    color: "fuchsia",
    icon: "Lightbulb",
    title: "Ideate & Prototype",
    text:
      "After the question is refined a solution, or solutions, are proposed and tested. All the usual tools and methods of the design Swiss Army Knife™, are used to help visualise the theory.",
  },
  {
    color: "lilac",
    icon: "RoundFlask",
    title: "Test & Refine",
    text:
      "Designs and prototypes are all well and good, but are the solutions useful? Or are they all glitter and sparkle with no substance? Some research will help us find out, then we can move forward.",
  },
  {
    color: "purple",
    icon: "Tag",
    title: "Deliver",
    text:
      "After a solution is agreed upon, we need to make the idea a reality. Engineering takes place to create the new feature and turn the theory into reality.",
  },
  {
    color: "blue",
    icon: "Circuit",
    title: "Learn",
    text:
      "Analysis of the impact of a feature or design should happen throughout. However, now the engineering is complete assessing analytics data can provide new insights for future work.",
  },
  {
    color: "bloo",
    icon: "Egg",
    title: "Begin again",
    text:
      "Everything is a work in progress, new features come and go, and feedback is always coming in. Time to start solving a new problem and finding a place for another piece of the puzzle!",
  },
]

export const socialData = [
  {
    network: "Twitter",
    iconName: "Twitter",
    link: "https://twitter.com/johnend87",
    subtitle: "One of my many sources of inspiration 💡",
  },
  {
    network: "Dribbble",
    iconName: "Dribbble",
    link: "https://dribbble.com/johnend87",
    subtitle: "Dribbblin' over all the great design work 🤤",
  },
  {
    network: "Spotify",
    iconName: "Spotify",
    link: "https://open.spotify.com/user/johnend",
    subtitle: "Listen to what I’m listening to 🎧",
  },
  {
    network: "GitHub",
    iconName: "GitHub",
    link: "https://github.com/johnend",
    subtitle: "All my green dots are 0% opacity 😏",
  },
  {
    network: "LinkedIn",
    iconName: "LinkedIn",
    subtitle: "All business, some of the time 👔",
    link: "https://www.linkedin.com/in/johnenderby/",
  },
]

export const mainNavLinks = [
  {
    title: "Home",
    id: "/",
  },
  {
    title: "My process",
    id: "#process",
  },
  {
    title: "Work",
    id: "#work",
  },
  {
    title: "About me",
    id: "#about",
  },
  {
    title: "Résumé",
    id: "#resume",
  },
]

export const homeNavLink = [
  {
    title: "Home",
    id: "/",
  },
]

export const caseStudies = [
  {
    lifeQuay: {
      meta: {
        projectName: "LifeQuay",
        projectColor: "#05547B",
        website: "https://www.lifequay.com/",
        role: "Lead Product Designer",
        tools: "Sketch, Sympli, whiteboard and pens",
        did:
          "Researched, and designed the end to end app experience for both native and web",
        client: "LifeQuay Ltd.",
        projectTLDR:
          "Helping individuals work with professional service providers more efficiently while keeping all their important documents safe",
        splashImage: "./images/bubbles.png",
        disclaimer:
          "🚨 Work shown was originally done in Sketch. Some conversion issues may be present in the Figma embeds.",
      },
      intro: {
        what:
          "A product that helps alleviate the stress of important processes involving professional services e.g. buying a house, or writing a will. Providing clarity to the consumer at all stages, and allowing straight-forward management for professionals.",
        why:
          "The LifeQuay team understand that there is enough complexity in people's lives and so want to help alleviate frustration with some of the big administrative transactions and processes you might do in your life, as well as keeping all your important documents safe, but easily accessible by your professional service providers.",
      },
      define: {
        firstTitle: "Stressful one offs...",
        firstPara:
          "At some point in their lives, most people will buy a house, write a will, or do something else that requires the services of a trained professional (either a lawyer or accountant or similar). The LifeQuay team felt there wasn't enough clarity in these processes for the customers of law firms and accountants. One of a the co-founders, a managing partner at a law firm in Edinburgh, even said that mosts of the calls their firm receives for a house purchase tend to be clients wanting status updates.",
        secondTitle: "...and day to day admin",
        secondPara:
          "They also wanted to ensure it wasn't just the big things that LifeQuay could help you manage. They wanted to give individuals the ability to see, and manage everyday items like insurance policies, subscriptions, and recurring bills all in one place.",
      },
      ideate: {
        firstTitle: "A chance to prove my worth",
        firstPara:
          "One of my early projects at xDesign, LifeQuay was an opportunity to set design foundations and organise our workflow. Working with our head of product we mapped out the early phases we needed in discovery, and I created a variety of workshop formats that could be swapped in and out depending on the project and the client.",
        secondTitle: "Working on workshops",
        secondPara:
          "Early phase workshops were about understanding the product idea, requirements gathering, and information architecture diagrams. Subsequent workshops focused on wireframes, user journeys and testing ideas with the client and their customers. Finally we would show visual treatments and prototypes for features prior to development work.",
      },
      test: {
        firstTitle: "Shining a light on legal processes",
        firstPara:
          'A key component of the LifeQuay product were "Transactions": big, one off legal processes, such as buying a house, or writing a will. Often progress on these transactions is hidden from users, but through the workshops and ideation sessions I worked with the client to bring clarity to the process. I designed a progress tracker showing the key milestones of a specific transaction, as well as a messaging feature will allowed for correspondence between the customer and their lawyer (and secure file transfer) specific to individual transactions.',
        secondTitle: "Data shows progress",
        secondPara:
          "In order to get the information we needed into LifeQuay we needed to work directly with the law firms and their software provider, LawPro. This integration gave us the data we needed for transaction milestones as well as a method for law firms to send and receive secure communications around client transactions.",
      },
      deliver: {
        firstTitle: "Bridging the designer/engineer gap",
        firstPara:
          "Throughout the early stages of the LifeQuay project and discovery we spoke a lot about what we would do for the client, but I also saw a huge opportunity to improve our design to engineering handoff process. Previously engineers would receive exports of assets directly from designers, and specs were taken from the design view of Sketch (this was prior to Sketch cloud's inspect feature). It was inefficient and error prone often resulting in poor execution. In my capacity as head of design I sought to improve this process by bringing in a new tool: Sympli.",
        secondTitle: "A handoff tool with other benefits",
        secondPara:
          "While searching for a solution to the handoff problem both Zeplin and Sympli were being developed. Zeplin was leading the charge with a shiny UI and simple, easy to use featues, but Sympli was close behind in my mind. Sympli allowed for handoff directly in Android Studio and XCode with plugins, as well as a lot of the other features Zeplin provided. This made hand off much easier for our engineers, and reduced the overhead on designers.",
      },
      outro: {
        outroTitle: "Learnings",
        outroPara:
          "LifeQuay was a fun, but often frustrating project. Our own internal processes and procedures (or lack of them) got in our own way. A great opportunity for improvement for us, but something that caused more friction with the client than they should have been exposed to. You have to learn somewhere though, and they were receptive to our ideas and patient with us while we tried out new things.",
        thankYou: "Thank you for reading!",
        furtherInfo:
          "For more information about my involvement on the LifeQuay project please get in touch.",
      },
      visuals: {
        discovery:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FuGwp1Efh0oEBWixlJQdkGS%2FLifeQuay-iA%3Fnode-id%3D2%253A4038",
        ideate:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FuGwp1Efh0oEBWixlJQdkGS%2FLifeQuay-iA%3Fnode-id%3D0%253A1",
        test:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FhthP7hpFCNKhqKC7GGkHlX%2FLifeQuay-Wireframes%3Fnode-id%3D0%253A1",
        deliver:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fmmdgh8yrt3WEKP68HpZtcN%2Flifequay_visual-design%3Fnode-id%3D0%253A2040",
      },
      caption: {
        discovery: figmaCaption,
        ideate: figmaCaption,
        test: figmaCaption,
        deliver: figmaCaption,
      },
    },
  },
  {
    ace360: {
      meta: {
        projectName: "ACE360",
        projectColor: "#DC4404",
        website: "https://ace360.org/",
        role:
          "Lead Product Designer & Phase 2 Product Owner and Project Manager",
        tools: "Sketch, Sympli, InVision, Google Sheets, whiteboard and pens",
        did:
          "Planned, researched, and designed 18 months of product development work on AC360",
        client: "Federation of Industry Sector Skills & Standards (FISSS)",
        projectTLDR:
          "Cost effective apprenticeship management that connects all the right stakeholders at the right time",
        splashImage: "./images/handbooks.png",
        disclaimer:
          "🚨 Work shown was originally done in Sketch. Some conversion issues may be present in the Figma embeds.",
      },
      intro: {
        what:
          "A full service, centralised, apprenticeship management system capable of providing a single source of truth for apprenticeships for not only the apprentices themselves, but also for assessment organisations, and training providers.",
        why:
          "FISSS had been the sole provider, delivering apprenticeship framework certification in England and Wales for nearly 10 years in a regulated, government controlled space. That all came to an end in 2017 when the industry was deregulated. FISSS needed to quickly take advantage of the position, and relationships, they had established.",
      },
      define: {
        firstTitle: "Project outline",
        firstPara:
          "FISSS came to xDesign needing an entire overhaul. Their existing system was not fit for purpose (due to the deregulation of the space), and had been the victim of feature creep over its many years of use. The government mandated privacy and security constraints, as well as the new GDPR legislation, also left FISSS in a position where their internal IT team was unable to make the required updates.",
        secondTitle: "Workshops and research",
        secondPara:
          "Through the initial phases of the project I ran a number of workshops with the client, some of their prospective customers, and our product development team, to tease out the detail of what the system needed, first at a high level to get a general idea of scope, and in later sessions getting into the detail. Throughout these sessions we would collaboratively wireframe flows, journeys, screens and features and piece everything together at a high level.",
      },
      ideate: {
        firstTitle: "Understanding the complexity",
        firstPara:
          "With 4 different organisation types (including FISSS themselves) and roughly 20 different user types (all with varying degrees of permissions) the MVP scope of ACE360 was massive. We needed to be able to design and engineer a product that non-technical FISSS staff could administrate, as well as something their customers could easily use. With that in mind in phase 1 the product owner and I distilled the output from the workshops into initiatives and epics, and broke those down into sensible rough tickets. During phase 2 I was solely responsible for all of these steps.",
        secondTitle: "Translation into a visual language",
        secondPara:
          "I worked with these epics and tickets to expand on the wireframes to create information architecture diagrams and user journeys, working with engineering to understand key points of data transmission. These formed the basis of what would eventually be the UI for the product. I then expanded the brand guidelines (provided by FISSS) and modified some aspects for UI use, including expanding the colour palette to help with states and hierarchy, and creating a component and symbol library in Sketch of basic elements.",
      },
      test: {
        firstTitle: "Putting it all together",
        firstPara:
          "Over the course of 18 months working on ACE360 I designed screens, and put together prototypes (in InVision) for all aspects of the product. Including onboarding, account and user administration, payments and token purchasing, administration of standards and apprenticeship qualifications, management of apprentice records (including an appeals process) and much more. All the while expanding on the component library and design system to ensure features could be built at scale.",
        secondTitle: "Not just a designer",
        secondPara:
          "As the lead on the project in phase 2 I was responsible for not just the visuals but the running of the project from the xDesign side, communicating with the client and often having difficult conversations. In addition to this I also used my own front-end engineering skills to build and develop some of the components in the system and worked very closely with engineers to fix styling and state issues that cropped up from time to time.",
      },
      deliver: {
        firstTitle: "Cross functional agility",
        firstPara:
          "ACE360 was a huge project which meant the team needed to find a rhythm to our work. We would plan blocks of four 2 week sprints with the client ensuring design work was done, reviewed with them and the engineers, with enough to plan our sprints. In my capacity as product owner on phase 2 I would also work with the engineers to write acceptance criteria, and get estimates on tickets for planning individual sprints, as well as measuring velocity, and adjusting story point allotments to sprints accordingly.",
        secondTitle: "Product ownership",
        secondPara:
          "While not something I would usually do on a project, I volunteered to fill a gap when xDesign's head of product was needed to move onto another project, and while product ownership at an agency is not exactly the same as as in-house product manager role I do think working this way on ACE360 gave me valuable insight and skills that help me as a designer.",
      },
      outro: {
        outroTitle: "Learnings",
        outroPara:
          "ACE360 was a massive undertaking, not only from a design perspective but also came with constraints from all sides. There were a number of things that in hindsight could have been done differently, but it's impossible to tell whether different would have been better. I would be hesitant to wear so many full time hats again, as there can be direct conflict between the role of a product owner and designer, but all in all we produced a system that we, and the client, were happy with.",
        thankYou: "Thank you for reading!",
        furtherInfo:
          "For further information about my involvement in the design and development of ACE360 please don’t hesitate to ask.",
      },
      visuals: {
        discovery:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FWNjT3kfQ8jTj7SAyTyXYNK%2FACE360-Early-stages%3Fnode-id%3D0%253A185",
        ideate:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FQIV9aodAIPT4LZUWw218Iy%2FACE360-Master%3Fnode-id%3D0%253A62772",
        test:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FQIV9aodAIPT4LZUWw218Iy%2FACE360-Master%3Fnode-id%3D0%253A14579",
        deliver:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FQIV9aodAIPT4LZUWw218Iy%2FACE360-Master%3Fnode-id%3D0%253A657",
      },
      caption: {
        discovery: figmaCaption,
        ideate: figmaCaption,
        test: figmaCaption,
        deliver: figmaCaption,
      },
    },
  },
  {
    stAndrews: {
      meta: {
        projectName: "St Andrews Links",
        projectColor: "#A88D6D",
        website:
          "https://www.standrews.com/play/before-your-round/st-andrews-links-app",
        role: "Lead Product Designer, Product Owner (supporting)",
        tools: "Sketch, Sympli, Framer, ScreenFlow, whiteboard and pens",
        did: "Researched, designed, and prototyped a cross platform mobile app",
        client: "St Andrews Links Trust",
        projectTLDR:
          "Giving visiting, and local golfers, a personalised companion app for the home of golf",
        splashImage: "./images/golf-ball.png",
        disclaimer:
          "🚨 Work shown was originally done in Sketch. Some conversion issues may be present in the Figma embeds.",
      },
      intro: {
        what:
          "A comprehensive digital solution improving the golfing experience for visitors and locals.",
        why:
          "With over 250,000 rounds of golf played each year across 7 courses, St Andrews is a busy place. The navigation of the courses and their key locations can be difficult for visitors as sometimes where you check in isn't close to where you tee off.",
      },
      define: {
        firstTitle: "A bit of context",
        firstPara:
          "Not everyone knows that the golf courses in St Andrews are actually public property. All 7 courses are managed and maintained by the St Andrews Links Trust (xDesign's client), and the golf clubs (like the R&A) have rights to play on specific golf courses within the town. They are also responsible for all the bookings and tee times on the 7 courses, as well as running the ballot for tee times on the Old Course.",
        secondTitle: "Project outline",
        secondPara:
          "The Links Trust had a mobile app already, but having just redesigned their website and updated their branding it was feeling a little tired and out of date. They also wanted to take the opportunity to enhance the experience that the mobile app provides, not only to visiting golfers, but locals, and students alike.",
      },
      ideate: {
        firstTitle: "Putting the golfer first",
        firstPara:
          "As a golfer, and a former student of St Andrews University this project was close to my heart, but I was keen to ensure my biases did not influence the overall outcome of the project. The client was keen to get our perspective, but I was also keen to dig into the feelings of their customers to better understand the challenges ahead. So the engineering team, a new product owner (to xDesign that I was mentoring), and I took a trip to St Andrews to see the complexities in navigating the town first hand, and also to use the opportunity to interview the customer services team working for the Links Trust directly.",
        secondTitle: "Back to the old stomping grounds",
        secondPara:
          'While we were there we found out that the majority of customer services questions were purely navigational. "Where do we check in before out round?", and "Where do we go after we check in?" were common asks, but so was "Where can we eat, or drink, after?". We also found, from looking at analytics data, that the app had very few long term users, indicating that locals were not using it.',
      },
      test: {
        firstTitle: "Ideate and plan",
        firstPara:
          "I took the information we gathered from our time in St Andrews and worked with the client to come up with some new features for their app in a handful of workshops. Some of those new features included an itinerary for the visiting golfers (tied in directly to their booking system which included tee times and hire club bookings), an interactive map for each course showing key points of interest, and an in-app course guide mirroring the printed versions.",
        secondTitle: "Putting it together",
        secondPara:
          "After going through more workshops with the client, working on information architecture diagrams, and wireframes I started putting together the visual designs in Sketch. Collecting the content for the informational sections, and creating a small Framer prototype for the video homepage (which I edited together using some of their promotional video content) to show how it might work.",
      },
      deliver: {
        firstTitle: "Constraints and complications",
        firstPara:
          "The timeline for this project was tight, we needed to launch the app for the beginning of the season (around April), and we started work the previous summer. Some of the interactions I had designed were more difficult on iOS than Android and some were the opposite. Working with the client and engineering teams we came to good compromises for what were small, but visually important features, and released an app that was night and day in comparison to the original.",
        secondTitle: "A happy client is never a bad thing",
        secondPara:
          '"The team have been fantastic in helping us discover what we really needed from our mobile app; and even better in delivering it." - Lewis Willing, Marketing Manager, St Andrews Links Trust',
      },
      outro: {
        outroTitle: "Learnings",
        outroPara:
          "Always start by asking the important questions, and not just of the client. The people actually using the app are always a great source of information for how to shape a product. The St Andrews Links Trust could have easily had a nice redesign of their original, purely informational app. Spending time digging into users' experiences of visiting the town, and the data on retention gave us a more informed picture of what true value the new app could provide. As a result we, and the client, learned a lot about what the app could truly be.",
        thankYou: "Thank you for reading!",
        furtherInfo:
          "For further information about my involvement in the design and development of the St Andrews Links app please don’t hesitate to ask.",
      },
      visuals: {
        discovery:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FTCz7pSAjmGXjA4LdIQ8ZDC%2FVisuals-St-Andrews-Links%3Fnode-id%3D2%253A18840",
        ideate:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FTCz7pSAjmGXjA4LdIQ8ZDC%2FVisuals-St-Andrews-Links%3Fnode-id%3D2%253A19721",
        test:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FTCz7pSAjmGXjA4LdIQ8ZDC%2FSt-Andrews-Links%3Fnode-id%3D0%253A9510",
        deliver:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FTCz7pSAjmGXjA4LdIQ8ZDC%2FVisuals-St-Andrews-Links%3Fnode-id%3D0%253A5709",
      },
      caption: {
        discovery: figmaCaption,
        ideate: figmaCaption,
        test: figmaCaption,
        deliver: figmaCaption,
      },
    },
  },
  {
    menzies: {
      meta: {
        projectName: "Cargo",
        projectColor: "#28498b",
        website: null,
        role: "Lead Product Designer",
        tools: "Sketch, Google Sheets",
        did: "Designed a web based platform for cargo management",
        client: "Menzies Aviation and John Menzies plc",
        projectTLDR:
          "Tracking air freight into and out of some of the world's busiest airports. All without paper",
        splashImage: "./images/plane.png",
        disclaimer:
          "🚨 Work shown was originally done in Sketch. Some conversion issues may be present in the Figma embeds.",
      },
      intro: {
        what:
          "An alternative digital solution to outdated and paper based air freight logistics systems",
        why:
          "Data reporting was slow and cumbersome with manual tracking and recording of air freight arrivals and departures. This often resulted in digital systems not being updated until much of the cargo had already been moved onto another flight making tracking complex and difficult.",
      },
      define: {
        firstTitle: "Paper based logistics?",
        firstPara:
          "All air freight passing through Dallas Fort Worth airport needs to be documented and accounted for, not just in terms of its existence, point of origin, and destination, but also its condition. Prior to this system almost all of that inventory management was handled manually on paper. Menzies needed to upgrade to a system that tied into their air freight data provider allowing for near-real-time updates.",
        secondTitle: "New job, new project, pre-determined solution",
        secondPara:
          "This project was the first thing I worked on at xDesign. As a result I joined part way through the process after the majority of the discovery and requirements gathering work had been completed. My job in this instance was to take a working (in terms of data handling) Excel prototype and turn it into a suitable desktop web application for the staff at Menzies. This product would be trialled in Dallas and eventually rolled out to more airports around the world.",
      },
      ideate: {
        firstTitle: "Data entry with some special sauce",
        firstPara:
          "For every container of goods on an aeroplane there are smaller packages/containers within. Both the larger and smaller containers need to be checked to ensure the right items are present, and to ensure they are not damaged in any way. Inspectors will do this at intermediary warehouses prior to the cargo being forwarded onto another flight or ground carrier. This information is then uploaded into the system alongside any supporting images and details that may be required.",
        secondTitle: "Challenges and outcomes",
        secondPara:
          "Ultimately this project, from a design perspective, was about good data management. How can we ensure all the relevant information is available without overloading the UI? The resulting design ensured cargo containers, and their expected contents were contained within collapsible rows. Individual items could be edited while keeping some of table in view, for context, and search functionality was included to allow for finding individual items by ID.",
      },
      test: {
        firstTitle: "",
        firstPara: "",
        secondTitle: "",
        secondPara: "",
      },
      deliver: {
        firstTitle: "",
        firstPara: "",
        secondTitle: "",
        secondPara: "",
      },
      outro: {
        outroTitle: "Learnings",
        outroPara:
          "While more, I think, could have been done in terms of solution for Menzies on this product the initial prototype developed off the back of my designs was well received, and is now used in multiple locations. xDesign later took on a similar project for magazine inventory management which included an app for an Android barcode scanner that could enable much faster data entry than sitting at a terminal, which would be a good improvement to a system that often deals with time sensitive information.",
        thankYou: "Thank you for reading!",
        furtherInfo:
          "For further information about my involvement in the design on the Menzies Cargo project please don’t hesitate to ask.",
      },
      visuals: {
        discovery:
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vSgSWneENPPD1enUlVCLum511zFGZi9YW75T6fMVmqFxSHaMwFWtkGCB7B8epheDZ1-Mhoo8MAjhMgC/pubhtml?widget=true&amp;headers=false",
        ideate:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPVftPL6PiqZ0tGmTVWSjOA%2FMenzies-Web-Dashboard-Wireframes%3Fnode-id%3D0%253A248",
        test: "",
        deliver: "",
      },
      caption: {
        discovery: googleSheetsCaption,
        ideate: figmaCaption,
        test: figmaCaption,
        deliver: figmaCaption,
      },
    },
  },
  {
    AG: {
      meta: {
        projectName: "The Assessors Guild",
        projectColor: "#1f1f1f",
        website: null,
        role: "Lead Designer (Phase 2)",
        tools: "Sketch, Lucidchart, whiteboard and pens",
        did:
          "Designed a full application management process and UI for the Assessors Guild portal and admin system",
        client: "Federation of Industry Sector Skills & Standards (FISSS)",
        projectTLDR:
          "Ensuring those responsible for assessing apprenticeships are fully licensed to do so",
        splashImage: "./images/wreath.png",
        disclaimer:
          "🚨 Work shown was originally done in Sketch. Some conversion issues may be present in the Figma embeds.",
      },
      intro: {
        what:
          "A full application and payment procedure for assessors to become accredited with the guild.",
        why:
          "Prior to deregulation in 2017 FISSS were the only monitor of apprenticeships within England and Wales. After deregulation FISSS found themselves in a position to not only capitalise on their management of apprenticeships, but also the accreditation of assessors.",
      },
      define: {
        firstTitle: "Same client, different project",
        firstPara:
          "After working with FISSS for 6 months on ACE360, and after they hired a new commercial director, they came back to us to seek our help again for a new venture. The deregulation of the space had made the market competitive and they needed to capitalise on their relationships with assessors in order to make money. ",
        secondTitle: "Assessing the assessors",
        secondPara:
          "The Assessors Guild was a way for FISSS to set up a Professional Membership body, ensuring and enforcing professional standards and a code of conduct for its members. It also provides individual members a way to find work within their region and sign up for events in the industry.",
      },
      ideate: {
        firstTitle: "Filling in the gaps",
        firstPara:
          "When the project's designer decided to take an opportunity at another company, due to my already established relationship with the client, I was in the the best position to continue the work with the client and flesh out the missing pieces.",
        secondTitle: "Application process",
        secondPara:
          "The member's profile (within the Assessors Guild product) had already been designed and was under development. My job was to ensure the application process was straightforward for assessors wanting to join the guild and to ensure that data could be reviewed and approved by the team at FISSS.",
      },
      test: {
        firstTitle: "Going through the process",
        firstPara:
          "I produced a number of wireframed variants for how the application could be organised visually, based on the output of the workshops as well as constructing a detailed set of information architecture diagrams and user journeys.",
        secondTitle: "Mapping it all out",
        secondPara:
          "ACE360 was a big turning point for xDesign. The client was very much wanting a waterfall process in the beginning, leading to a huge amounts of work being done up front. After the initial phase (roughly 6 months), and after I took over as product owner we moved to a more agile process working in two weekly sprints and factoring in feedback over the course of the project.",
      },
      deliver: {
        firstTitle: "Challenging workflow, simple solution?",
        firstPara:
          "The application for the Assessors Guild is complicated in parts: it forms a large part of the member's profile on the system, and various evidential documents need to be attached. Often this meant applications could take days, or weeks, to complete. I had to find a way to include progress trackers for individual sections, highlight required information, and allow for partial completion of the application so that a member could continue filling it out at any time. ",
        secondTitle: "Adding the finishing touches",
        secondPara:
          "After confirming the direction for the application process, and some of the finer details, the client settled on their preferred solution and I worked on final visual designs. In order to maintain consistency with the existing admin system and Assessors Guild platforms, already under development, I ensured that these new features conformed to the visual style and reused as many of the existing components and patterns as possible.",
      },
      outro: {
        outroTitle: "Learnings",
        outroPara:
          "The application workflow for the Assessors Guild was a complex project. I was coming in from the outside to an established project with minimal context. I was able to roll with the punches, pick up the pieces, and produce an application process the client was happy with.",
        thankYou: "Thank you for reading!",
        furtherInfo:
          "For further information about my involvement in the design and development of the Assessors Guild please don’t hesitate to ask.",
      },
      visuals: {
        discovery:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fheo0uL0W3AkByajth122mC%2FAG%3Fnode-id%3D2%253A38613",
        ideate:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fheo0uL0W3AkByajth122mC%2FAG%3Fnode-id%3D2%253A38614",
        test:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fheo0uL0W3AkByajth122mC%2FAG%3Fnode-id%3D0%253A24676",
        deliver:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fheo0uL0W3AkByajth122mC%2FAG-Latest-Design-AG-member-1%3Fnode-id%3D0%253A19457",
      },
      caption: {
        discovery: figmaCaption,
        ideate: figmaCaption,
        test: figmaCaption,
        deliver: figmaCaption,
      },
    },
  },
]

export const fdWork = [
  {
    f2pAdmin: {
      meta: {
        projectName: "Free to play",
        projectColor: "#1F375B",
        website: "",
        role: "Lead Product Designer",
        tools: "Sketch, Figma, Framer, Confluence, Jira",
        did:
          "Planned, researched, and designed the self-service free to play game builder",
        client: "",
        projectTLDR: "",
        splashImage: "",
        disclaimer: "",
      },
      intro: {
        what: "",
        why: "",
      },
      define: {
        firstTitle: "Project outline",
        firstPara: "",
        secondTitle: "Workshops and research",
        secondPara: "",
      },
      ideate: {
        firstTitle: "Understanding the complexity",
        firstPara: "",
        secondTitle: "Translation into a visual language",
        secondPara: "",
      },
      test: {
        firstTitle: "Putting it all together",
        firstPara: "",
        secondTitle: "Not just a designer",
        secondPara: "",
      },
      deliver: {
        firstTitle: "Cross functional agility",
        firstPara: "",
        secondTitle: "Product ownership",
        secondPara: "",
      },
      outro: {
        outroTitle: "Learnings",
        outroPara: "",
        thankYou: "Thank you for reading!",
        furtherInfo: "",
      },
      visuals: {
        discovery: "",
        ideate: "",
        test: "",
        deliver: "",
      },
      caption: {
        discovery: figmaCaption,
        ideate: figmaCaption,
        test: figmaCaption,
        deliver: figmaCaption,
      },
    },
  },
  {
    f2pGames: {
      meta: {
        projectName: "Free to play",
        projectColor: "#1F375B",
        website: "",
        role: "Lead Product Designer",
        tools: "Sketch, Figma, Framer, Confluence, Jira",
        did:
          "Planned, researched, and designed the self-service free to play game builder",
        client: "",
        projectTLDR: "",
        splashImage: "",
        disclaimer: "",
      },
      intro: {
        what: "",
        why: "",
      },
      define: {
        firstTitle: "Project outline",
        firstPara: "",
        secondTitle: "Workshops and research",
        secondPara: "",
      },
      ideate: {
        firstTitle: "Understanding the complexity",
        firstPara: "",
        secondTitle: "Translation into a visual language",
        secondPara: "",
      },
      test: {
        firstTitle: "Putting it all together",
        firstPara: "",
        secondTitle: "Not just a designer",
        secondPara: "",
      },
      deliver: {
        firstTitle: "Cross functional agility",
        firstPara: "",
        secondTitle: "Product ownership",
        secondPara: "",
      },
      outro: {
        outroTitle: "Learnings",
        outroPara: "",
        thankYou: "Thank you for reading!",
        furtherInfo: "",
      },
      visuals: {
        discovery: "",
        ideate: "",
        test: "",
        deliver: "",
      },
      caption: {
        discovery: figmaCaption,
        ideate: figmaCaption,
        test: figmaCaption,
        deliver: figmaCaption,
      },
    },
  },
  {
    numberFire: {
      meta: {
        projectName: "numberFire SCOUT",
        projectColor: "#222",
        website: "",
        role: "Lead Product Designer",
        tools: "Sketch, Figma, Framer, Confluence, Jira",
        did:
          "Planned, researched, and designed the self-service free to play game builder",
        client: "",
        projectTLDR: "A hack week project that landed on a roadmap.",
        splashImage: "./images/the-scout.png",
        disclaimer: "",
      },
      intro: {
        what: "",
        why: "",
      },
      define: {
        firstTitle: "Project outline",
        firstPara: "",
        secondTitle: "Workshops and research",
        secondPara: "",
      },
      ideate: {
        firstTitle: "Understanding the complexity",
        firstPara: "",
        secondTitle: "Translation into a visual language",
        secondPara: "",
      },
      test: {
        firstTitle: "Putting it all together",
        firstPara: "",
        secondTitle: "Not just a designer",
        secondPara: "",
      },
      deliver: {
        firstTitle: "Cross functional agility",
        firstPara: "",
        secondTitle: "Product ownership",
        secondPara: "",
      },
      outro: {
        outroTitle: "Learnings",
        outroPara: "",
        thankYou: "Thank you for reading!",
        furtherInfo: "",
      },
      visuals: {
        discovery:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FM21h605wSrNFiDEyWeRrLU%2FnumberFire-SCOUT%3Fnode-id%3D0%253A1",
        ideate:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FM21h605wSrNFiDEyWeRrLU%2FnumberFire-SCOUT%3Fnode-id%3D4%253A5257",
        test:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FM21h605wSrNFiDEyWeRrLU%2FnumberFire-SCOUT%3Fnode-id%3D0%253A343",
        deliver:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FM21h605wSrNFiDEyWeRrLU%2FnumberFire-SCOUT%3Fnode-id%3D0%253A1383",
      },
      caption: {
        discovery: figmaCaption,
        ideate: figmaCaption,
        test: figmaCaption,
        deliver: figmaCaption,
      },
    },
  },
  {
    playerVideos: {
      meta: {
        projectName: "Free to play",
        projectColor: "#1F375B",
        website: "",
        role: "Lead Product Designer",
        tools: "Sketch, Figma, Framer, Confluence, Jira",
        did:
          "Planned, researched, and designed the self-service free to play game builder",
        client: "",
        projectTLDR: "",
        splashImage: "",
        disclaimer: "",
      },
      intro: {
        what: "",
        why: "",
      },
      define: {
        firstTitle: "Project outline",
        firstPara: "",
        secondTitle: "Workshops and research",
        secondPara: "",
      },
      ideate: {
        firstTitle: "Understanding the complexity",
        firstPara: "",
        secondTitle: "Translation into a visual language",
        secondPara: "",
      },
      test: {
        firstTitle: "Putting it all together",
        firstPara: "",
        secondTitle: "Not just a designer",
        secondPara: "",
      },
      deliver: {
        firstTitle: "Cross functional agility",
        firstPara: "",
        secondTitle: "Product ownership",
        secondPara: "",
      },
      outro: {
        outroTitle: "Learnings",
        outroPara: "",
        thankYou: "Thank you for reading!",
        furtherInfo: "",
      },
      visuals: {
        discovery: "",
        ideate: "",
        test: "",
        deliver: "",
      },
      caption: {
        discovery: figmaCaption,
        ideate: figmaCaption,
        test: figmaCaption,
        deliver: figmaCaption,
      },
    },
  },
  {
    playAction: {
      meta: {
        projectName: "Free to play",
        projectColor: "#1F375B",
        website: "",
        role: "Lead Product Designer",
        tools: "Sketch, Figma, Framer, Confluence, Jira",
        did:
          "Planned, researched, and designed the self-service free to play game builder",
        client: "",
        projectTLDR: "",
        splashImage: "",
        disclaimer: "",
      },
      intro: {
        what: "",
        why: "",
      },
      define: {
        firstTitle: "Project outline",
        firstPara: "",
        secondTitle: "Workshops and research",
        secondPara: "",
      },
      ideate: {
        firstTitle: "Understanding the complexity",
        firstPara: "",
        secondTitle: "Translation into a visual language",
        secondPara: "",
      },
      test: {
        firstTitle: "Putting it all together",
        firstPara: "",
        secondTitle: "Not just a designer",
        secondPara: "",
      },
      deliver: {
        firstTitle: "Cross functional agility",
        firstPara: "",
        secondTitle: "Product ownership",
        secondPara: "",
      },
      outro: {
        outroTitle: "Learnings",
        outroPara: "",
        thankYou: "Thank you for reading!",
        furtherInfo: "",
      },
      visuals: {
        discovery: "",
        ideate: "",
        test: "",
        deliver: "",
      },
      caption: {
        discovery: figmaCaption,
        ideate: figmaCaption,
        test: figmaCaption,
        deliver: figmaCaption,
      },
    },
  },
]
