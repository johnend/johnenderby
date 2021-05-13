// TODO: update card data to include icons for cards
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
        role: "Lead Designer",
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
        firstTitle: "",
        firstPara: "",
        secondTitle: "",
        secondPara: "",
      },
      ideate: {
        firstTitle: "Ideate & Prototype",
        firstPara: "",
        secondTitle: "Adding the visual layers",
        secondPara: "",
      },
      test: {
        firstTitle: "Test & Refine",
        firstPara: "",
        secondTitle: "",
        secondPara: "",
      },
      deliver: {
        firstTitle: "Deliver",
        firstPara: "",
        secondTitle: "Working with engineers",
        secondPara: "",
      },
      outro: {
        outroTitle: "Learn",
        outroPara: "",
        thankYou: "Thank you for reading!",
        furtherInfo: "",
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
        role: "Lead Designer & Phase 2 Product Owner",
        client: "Federation of Industry Sector Skills & Standards (FISSS)",
        projectTLDR:
          "Cost effective apprenticeship management that connects all the right stakeholders at the right time",
        splashImage: "./images/handbooks.png",
        disclaimer:
          "🚨 Work shown was originally done in Sketch. Some conversion issues may be present in the Figma embeds.",
      },
      intro: {
        what:
          "A full service, bespoke, apprenticeship management system capable of connecting educators with assessment organisations, as well as giving apprentices a view of their apprenticeship’s progress.",
        why:
          "FISSS had been the only provider in this space since their founding and as a result was able to operate with complete freedom under a government contract. That all came to an end in 2017 when the industry was deregulated and FISSS needed to quickly take advantage of the position, and relationships, they had established.",
      },
      define: {
        firstTitle: "Define & Discover",
        firstPara:
          "ACE360 was a large project requiring a lot of investigation into specifics of: constraints, workflows, permissions, and much more. For example, there are at least 3 different organisation types needing access to the system, and between them 14 different user levels with different access permissions.",
        secondTitle: "Extracting the detail through collaboration",
        secondPara:
          "As a result of the complexities I worked with FISSS to run a number of workshops to get a better understanding of the information architecture, and workflows, within ACE360. The output of these sessions was a number of large scale journey maps and flow diagrams (something not previously done at xDesign prior to my working there) that helped me and the team understand this incredibly complex space, as well as breakdowns of epics and tickets for working with engineering (part of phase 2 product ownership).",
      },
      ideate: {
        firstTitle: "Ideate & Prototype",
        firstPara:
          "In order to start getting deeper into the design of the system we ran further collaborative workshops with the client, and their customers, fleshing out wireframes for screens and journeys and validating those ideas conceptually. ",
        secondTitle: "Adding the visual layers",
        secondPara:
          "ACE360 had, prior to working with us, been through a branding workshop with a third party that had created a visual styleguide for them. This included fonts and colours, but not their application to an interface. During the visual design stages I put together a component library and design system for the product, as well as designing all the screens and flows.",
      },
      test: {
        firstTitle: "Test & Refine",
        firstPara:
          "After working out the basic flows I created at least 5 prototypes for various journeys within the system for different organisations, and users with different levels of permissions within them. These prototypes were used to validate the journeys and help me gather feedback on where we could improve certain areas.",
        secondTitle: "An eye opening waterfall",
        secondPara:
          "ACE360 was a big turning point for xDesign. The client was very much wanting a waterfall process in the beginning, leading to a huge amounts of work being done up front. After the initial phase (roughly 6 months), and after I took over as product owner we moved to a more agile process working in two weekly sprints and factoring in feedback over the course of the project.",
      },
      deliver: {
        firstTitle: "Deliver",
        firstPara:
          "During the delivery phases of ACE360 I determined that the handoff process for the team was more difficult than it should have been. Inspecting layers in Sketch was poor at the time and packing up assets for export was time consuming for designers, and engineers. I updated our workflow to include a better handoff tool - Sympli, allowing engineers in all departments (web and native) to inspect designs directly and pull in assets in the format they needed without design involvement.",
        secondTitle: "Working with engineers",
        secondPara:
          "In my capacity as product owner on phase 2 of ACE360 (lasting roughly 12 months) I was responsible for classifying and breaking down epics with the team and the client, working with engineering to define acceptance criteria and assign estimates, and ensuring we were delivering the client’s roadmap as closely as possible.",
      },
      outro: {
        outroTitle: "Learn",
        outroPara:
          "ACE360 was one of those projects that was always going to be a challenge, and came with a lot of constraints from all sides. Would I have done things differently? Absolutely. Were the decisions to do things differently down to me to make? No. In hindsight the first six months of work (waterfall phase) likely resulted in decisions being made that the team, and I, needed to revert or adjust during the second phase.",
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
        role: "Lead Designer",
        client: "St Andrews Links Trust Registered Charity",
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
        firstTitle: "Define & Discover",
        firstPara: "",
        secondTitle: "",
        secondPara: "",
      },
      ideate: {
        firstTitle: "Ideate & Prototype",
        firstPara: "",
        secondTitle: "Adding the visual layers",
        secondPara: "",
      },
      test: {
        firstTitle: "Test & Refine",
        firstPara: "",
        secondTitle: "",
        secondPara: "",
      },
      deliver: {
        firstTitle: "Deliver",
        firstPara: "",
        secondTitle: "Working with engineers",
        secondPara: "",
      },
      outro: {
        outroTitle: "Learn",
        outroPara: "",
        thankYou: "Thank you for reading!",
        furtherInfo: "",
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
        role: "Lead Designer",
        client: "Menzies Aviation and John Menzies plc",
        projectTLDR:
          "Tracking air freight into, and out of, some of the world's busiest airports. All without paper",
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
        firstTitle: "",
        firstPara:
          "ACE360 was a large project requiring a lot of investigation into specifics of: constraints, workflows, permissions, and much more. For example, there are at least 3 different organisation types needing access to the system, and between them 14 different user levels with different access permissions.",
        secondTitle: "Extracting the detail through collaboration",
        secondPara:
          "As a result of the complexities I worked with FISSS to run a number of workshops to get a better understanding of the information architecture, and workflows, within ACE360. The output of these sessions was a number of large scale journey maps and flow diagrams (something not previously done at xDesign prior to my working there) that helped me and the team understand this incredibly complex space, as well as breakdowns of epics and tickets for working with engineering (part of phase 2 product ownership).",
      },
      ideate: {
        firstTitle: "Ideate & Prototype",
        firstPara:
          "In order to start getting deeper into the design of the system we ran further collaborative workshops with the client, and their customers, fleshing out wireframes for screens and journeys and validating those ideas conceptually. ",
        secondTitle: "Adding the visual layers",
        secondPara:
          "ACE360 had, prior to working with us, been through a branding workshop with a third party that had created a visual styleguide for them. This included fonts and colours, but not their application to an interface. During the visual design stages I put together a component library and design system for the product, as well as designing all the screens and flows.",
      },
      test: {
        firstTitle: "Test & Refine",
        firstPara:
          "After working out the basic flows I created at least 5 prototypes for various journeys within the system for different organisations, and users with different levels of permissions within them. These prototypes were used to validate the journeys and help me gather feedback on where we could improve certain areas.",
        secondTitle: "An eye opening waterfall",
        secondPara:
          "ACE360 was a big turning point for xDesign. The client was very much wanting a waterfall process in the beginning, leading to a huge amounts of work being done up front. After the initial phase (roughly 6 months), and after I took over as product owner we moved to a more agile process working in two weekly sprints and factoring in feedback over the course of the project.",
      },
      deliver: {
        firstTitle: "Deliver",
        firstPara:
          "During the delivery phases of ACE360 I determined that the handoff process for the team was more difficult than it should have been. Inspecting layers in Sketch was poor at the time and packing up assets for export was time consuming for designers, and engineers. I updated our workflow to include a better handoff tool - Sympli, allowing engineers in all departments (web and native) to inspect designs directly and pull in assets in the format they needed without design involvement.",
        secondTitle: "Working with engineers",
        secondPara:
          "In my capacity as product owner on phase 2 of ACE360 (lasting roughly 12 months) I was responsible for classifying and breaking down epics with the team and the client, working with engineering to define acceptance criteria and assign estimates, and ensuring we were delivering the client’s roadmap as closely as possible.",
      },
      outro: {
        outroTitle: "Learn",
        outroPara:
          "ACE360 was one of those projects that was always going to be a challenge, and came with a lot of constraints from all sides. Would I have done things differently? Absolutely. Were the decisions to do things differently down to me to make? No. In hindsight the first six months of work (waterfall phase) likely resulted in decisions being made that the team, and I, needed to revert or adjust during the second phase.",
        thankYou: "Thank you for reading!",
        furtherInfo:
          "For further information about my involvement in the design and development of ACE360 please don’t hesitate to ask.",
      },
      visuals: {
        discovery:
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vSgSWneENPPD1enUlVCLum511zFGZi9YW75T6fMVmqFxSHaMwFWtkGCB7B8epheDZ1-Mhoo8MAjhMgC/pubhtml?widget=true&amp;headers=false",
        ideate:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPVftPL6PiqZ0tGmTVWSjOA%2FMenzies-Web-Dashboard-Wireframes%3Fnode-id%3D0%253A5871",
        test:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPVftPL6PiqZ0tGmTVWSjOA%2FMenzies-Web-Dashboard-Wireframes%3Fnode-id%3D0%253A248",
        deliver:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FPVftPL6PiqZ0tGmTVWSjOA%2FMenzies-Web-Dashboard-Wireframes%3Fnode-id%3D0%253A3060",
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
        firstTitle: "",
        firstPara:
          "ACE360 was a large project requiring a lot of investigation into specifics of: constraints, workflows, permissions, and much more. For example, there are at least 3 different organisation types needing access to the system, and between them 14 different user levels with different access permissions.",
        secondTitle: "Extracting the detail through collaboration",
        secondPara:
          "As a result of the complexities I worked with FISSS to run a number of workshops to get a better understanding of the information architecture, and workflows, within ACE360. The output of these sessions was a number of large scale journey maps and flow diagrams (something not previously done at xDesign prior to my working there) that helped me and the team understand this incredibly complex space, as well as breakdowns of epics and tickets for working with engineering (part of phase 2 product ownership).",
      },
      ideate: {
        firstTitle: "Ideate & Prototype",
        firstPara:
          "In order to start getting deeper into the design of the system we ran further collaborative workshops with the client, and their customers, fleshing out wireframes for screens and journeys and validating those ideas conceptually. ",
        secondTitle: "Adding the visual layers",
        secondPara:
          "ACE360 had, prior to working with us, been through a branding workshop with a third party that had created a visual styleguide for them. This included fonts and colours, but not their application to an interface. During the visual design stages I put together a component library and design system for the product, as well as designing all the screens and flows.",
      },
      test: {
        firstTitle: "Test & Refine",
        firstPara:
          "After working out the basic flows I created at least 5 prototypes for various journeys within the system for different organisations, and users with different levels of permissions within them. These prototypes were used to validate the journeys and help me gather feedback on where we could improve certain areas.",
        secondTitle: "An eye opening waterfall",
        secondPara:
          "ACE360 was a big turning point for xDesign. The client was very much wanting a waterfall process in the beginning, leading to a huge amounts of work being done up front. After the initial phase (roughly 6 months), and after I took over as product owner we moved to a more agile process working in two weekly sprints and factoring in feedback over the course of the project.",
      },
      deliver: {
        firstTitle: "Deliver",
        firstPara:
          "During the delivery phases of ACE360 I determined that the handoff process for the team was more difficult than it should have been. Inspecting layers in Sketch was poor at the time and packing up assets for export was time consuming for designers, and engineers. I updated our workflow to include a better handoff tool - Sympli, allowing engineers in all departments (web and native) to inspect designs directly and pull in assets in the format they needed without design involvement.",
        secondTitle: "Working with engineers",
        secondPara:
          "In my capacity as product owner on phase 2 of ACE360 (lasting roughly 12 months) I was responsible for classifying and breaking down epics with the team and the client, working with engineering to define acceptance criteria and assign estimates, and ensuring we were delivering the client’s roadmap as closely as possible.",
      },
      outro: {
        outroTitle: "Learn",
        outroPara:
          "ACE360 was one of those projects that was always going to be a challenge, and came with a lot of constraints from all sides. Would I have done things differently? Absolutely. Were the decisions to do things differently down to me to make? No. In hindsight the first six months of work (waterfall phase) likely resulted in decisions being made that the team, and I, needed to revert or adjust during the second phase.",
        thankYou: "Thank you for reading!",
        furtherInfo:
          "For further information about my involvement in the design and development of ACE360 please don’t hesitate to ask.",
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
