// TODO: update card data to include icons for cards

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
        figmaLink:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FWNjT3kfQ8jTj7SAyTyXYNK%2FACE360-Early-stages%3Fnode-id%3D0%253A185",
        first:
          "ACE360 was a large project requiring a lot of investigation into specifics of: constraints, workflows, permissions, and much more. For example, there are at least 3 different organisation types needing access to the system, and between them 14 different user levels with different access permissions.",
        secondTitle: "Extracting the detail through collaboration",
        second:
          "As a result of the complexities I worked with FISSS to run a number of workshops to get a better understanding of the information architecture, and workflows, within ACE360. The output of these sessions was a number of large scale journey maps and flow diagrams (something not previously done at xDesign prior to my working there) that helped me and the team understand this incredibly complex space, as well as breakdowns of epics and tickets for working with engineering (part of phase 2 product ownership).",
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
    },
  },
]
