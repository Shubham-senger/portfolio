export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },{
    id:5,
    name: 'Resume',
    href:'https://drive.google.com/drive/folders/1UKBL5BSD2CfhXwqMkyw5KDJ_wl-cczF5?usp=sharing',
  }
];

export const myProjects = [
  {
    title: 'Vartalap - A Chatting App',
    desc: 'Developed a real-time messaging website with responsive design using Node.js, JavaScript, Socket.io, React, and TailwindCSS',
    subdesc: 'Implemented secure login functionality with strong password requirements. Allow user to view past conversations within app. Facilitate sending text messages, audio, and sharing files securely. Utilized Prisma ORM for efficient database management.',
    href: '#',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: '/assets/node.png',
      },
      {
        id: 3,
        name: 'Socket.io',
        path: '/assets/socket.png',
      },
      {
        id: 4,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      }
    ],
  },
  {
    title: 'Friends Fews - A Social Media web Application',
    desc: 'Created a full-stack social media platform using React, MongoDB, Node.js, Express, and JWT',
    subdesc: 'Implemented features for user authentication, post creation/deletion, profile updates, and user interactions (like/unlike, comments, follow/unfollow). Designed and developed responsive UI for seamless user experience across devices.',
    href: '#',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'MongoDB',
        path: '/assets/mongo.png',
      },
      {
        id: 3,
        name: 'Node.js',
        path: '/assets/node.png',
      },
      {
        id: 4,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      }
    ],
  }
];

export const workExperiences = [
  {
    id: 1,
    name: 'CollieWala',
    pos: 'UI Developer',
    duration: '2 months',
    title: "Contributed to UI development for a startup, focusing on web technologies. Collaborated with senior developers to implement user interface features. Gained valuable insights into startup operations and industry work practices.",
    icon: '/assets/colliewale.jpg',
    animation: 'victory',
  }
];

export const clientReviews = [
  {
    id: 1,
    name: 'Problem Solving',
    position: 'Competitive Programming',
    img: 'assets/skill1.png',
    review: 'Global Rank 187 in Codechef Starter 121 (Div. 4). Codeforces: Pupil rating (Max: 1296). Codechef: 3-star rating (Max: 1706).',
  },
  {
    id: 2,
    name: 'Coding Platforms',
    position: 'Problem Solving',
    img: 'assets/skill2.png',
    review: 'Leetcode: Max rating 1647, 300+ problems solved. GeeksForGeeks: 200+ problems solved. Coding Ninja: 250+ problems solved.',
  },
  {
    id: 3,
    name: 'Leadership',
    position: 'Team Management',
    img: 'assets/skill3.png',
    review: 'Committee Coordinator of south folk dance committee, Swagat 2023. Member of PR Team, Culruv-Avishkar 2024-25.',
  }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [13, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [15, 5, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-22, 11, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-22, -11, -10],
  };
};