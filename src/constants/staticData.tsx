import Image from "next/image";

export const wordsLarge = "Transforming Concepts into Seamless User Experiences"
export const wordsSmall = "Hi! I'm Om Anand, a Full Stack Developer based in India."

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently working on a WEB3 based Blogging Platform",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "AnonMate – Random Chat, Real Connections",
      des: "AnonMate is an Omegle-style anonymous chat application that instantly pairs you with strangers from around the world for real-time conversations. No sign-ups, no profiles — just spontaneous text or video chats with complete privacy.",
      img: "/_anonmate.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://anon-mate.vercel.app/",
    },
    {
      id: 2,
      title: "Dragon Warrior – Unity Action Adventure",
      des: "Dragon Warrior is an action-packed PC Unity game where you take control of a fearless hero battling enemies across immersive fantasy landscapes.",
      img: "/_dragonwarrior.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://omanand857.itch.io/dragonwarrior",
    },
    {
      id: 3,
      title: "Hostel Pro – Complete Hostel Management Solution",
      des: "Hostel Pro is a full-stack hostel management platform with an admin portal for rooms, allocations, maintenance, and student records. Integrated Stripe payments make rent and fees simple, while check-ins, history, and operations stay organized in one place.",
      img: "/_hostelpro.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://hostel-management-roan.vercel.app/",
    },
    {
      id: 4,
      title: "Blue Bot – AI-Powered Twitter Automation Application",
      des: "Blue Bot is a smart Twitter bot that fetches trending content, crafts engaging tweets with AI, and posts them automatically on schedule. Manage settings, API keys, and themes through an easy-to-use interface made with Flutter.",
      img: "/_blogo.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/OmAnand857/bluebot-app",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "We, me and Anushka, wanted a website for our venture One8, but finding a good developer was tougher than scoring a century in a World Cup final. Then came Om Anand. The guy coded faster than I run between the wickets. Smooth website, no bugs, and straight out of the middle of the bat! Legend!",
      name: "Virat Kohli",
      title: "Cricketer, Entrepreneur, King of Cover Drives",
      image: "\_virat.png",
    },
    {
      quote:
        "I needed a website for my new self-help book ‘How to Speak for Hours Without Saying Anything.’ People told me Om Anand is the best. And let me tell you, mitron, when Om codes, even the bugs take vishram (rest). The website loads faster than my speeches. Sab changa si!",
      name: "Narendra Modi",
      title: "Prime Minister of India, Speech Enthusiast",
      image: "\modi.jpeg",
    },
    {
      quote:
        "Listen, folks, I’ve built many things. Trump Tower, my brand, my reputation—huge things. But Om Anand? He built the greatest, most tremendous website for me. People are saying it's the best website ever. Fake news media can’t deny it. If you’re not hiring Om, you’re making a big, big mistake!",
      name: "Donald Trump",
      title: "Former US President, Professional Tweeter",
      image: "\_trump.jpg",
    },
    {
      quote:
        "Om Anand built my website. It was strong. Unbreakable. Just like the Russian spirit. I told him, 'Make it secure, make it fast, make it powerful.' And guess what? He did. Nobody hacks this website, not even... well, let’s not talk about that. Great job, Om. Very strong. Very nice.",
      name: "Vladimir Putin",
      title: "President of Russia, Judo Black Belt",
      image: "\_putin.webp",
    },
    {
      quote:
        "Om Anand? Ah, an interesting guy. I asked for a website that is efficient, beautiful, and perfect. And he delivered. Just like I want my country to be. No downtime, no unnecessary animations—just pure, streamlined perfection. A true comrade of the web.",
      name: "Xi Jinping",
      title: "President of China, Great Firewall Architect",
      image: "\ping.jpg",
    },
    {
      quote:
        "I spent my life trying to understand the universe, but Om Anand's code defies all known laws of physics. His UI is so smooth, it bends space-time. If only I had access to his brain, my Theory of Relativity might have had a few UI/UX improvements.",
      name: "Albert Einstein",
      title: "Physicist, Time Traveler (Probably)",
      image: "\einstein.jpeg",
    },
    {
      quote:
        "I saw an apple fall, and I discovered gravity. But then I saw Om Anand’s website load at the speed of light, and I questioned everything. This man’s work defies inertia. If Newton’s First Law applied to websites, Om just rewrote it.",
      name: "Isaac Newton",
      title: "Physicist, Apple Enthusiast (Not the iPhone kind)",
      image: "\_newton.jpeg",
    },
  ];
  
  
  
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];

  interface TimelineItem {
    title: string;
    //@ts-ignore
    content: JSX.Element;
  }


  export const data : TimelineItem[] = [
          {
            title: "2025",
            content: (
              <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                  Currently working on a Hostel Management System for IIT Bhilai, streamlining hostel operations and addressing student and administrative challenges.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                  Selected for FOSS, contributing to an open-source Knowledge Sharing Platform using Next.js, TypeScript, Firebase, and Cloudinary.
                </p>
                <Image
                src="/hostelPro.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              </div>
            ),
          },
          {
            title: "2024",
            content: (
              <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                  Developed an AI-powered internship matching platform, helping students find internships and companies find interns.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                  Built a carbon footprint quantification platform for Indian coal mines to explore carbon neutrality pathways.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                  Led the web development team for Meraz 2024, designing the official college fest website.
                </p>
                <Image
                src="/internFair.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
               />
              </div>
            ),
          },
          {
            title: "2023",
            content: (
              <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                  Completed a UI/UX design internship at NoQs Digital, receiving an outstanding performance award, a letter of recommendation, and an experience letter.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                  Cracked JEE Advanced 2023 and joined IIT Bhilai, securing a 99.5 percentile in JEE Mains.
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                  Contributed to OpenLake, IIT Bhilai's open-source community, and actively participated in software development initiatives.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                  src="/foss.webp"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                  src="/iit.webp"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                  src="/jeeExam.webp"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                  src="/ui.webp"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
            </div>
              </div>
            ),
          },
          {
            title: "Changelog",
            content: (
              <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                  Recent contributions and projects:
                </p>
                <div className="mb-8">
                  <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                    ✅ Built a stress recovery app with advanced AI analytics.
                  </div>
                  <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                    ✅ Developed an AI-generated report system with heptagon graphs to analyze internship postings.
                  </div>
                  <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                    ✅ Contributed to Automatex and helped organize its mid-evaluation and final evaluation phases.
                  </div>
                </div>
              <div className="grid grid-cols-2 gap-4">
                  <Image
                  src="https://assets.aceternity.com/pro/hero-sections.png"
                  alt="hero template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                  src="https://assets.aceternity.com/features-section.png"
                  alt="feature template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                  src="https://assets.aceternity.com/pro/bento-grids.png"
                  alt="bento template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                  src="https://assets.aceternity.com/cards.png"
                  alt="cards template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
              </div>
              </div>
            ),
          },
        ];
  
  