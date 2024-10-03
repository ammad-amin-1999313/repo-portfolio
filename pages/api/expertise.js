const expertise = [
    {
      id: 0,
      title: 'Full Stack Development',
      desc: 'Experienced MERN stack developer with expertise in building web applications using MongoDB, Express, React, and Node.js. Proficient in server-side rendering, API integration, and database management, delivering efficient and tailored solutions.',
    },
    {
      id: 1,
      title: 'Figma Conversion',
      desc: 'Skilled in converting Figma designs into fully functional and responsive web applications. Expertise in translating design concepts into pixel-perfect code, ensuring consistency and smooth user experience.',
    },
    {
      id: 2,
      title: 'Docker',
      desc: 'Proficient in using Docker for containerization, streamlining development workflows, and ensuring consistent environments across development and production. Experienced in building, deploying, and managing applications with Docker.',
    },
    {
      id: 3,
      title: 'GitHub',
      desc: 'Proficient in GitHub for version control and collaboration. Expertise in pull requests, issue tracking, and continuous integration for streamlined development.',
    },
    {
      id: 4,
      title: 'Open Source Contributor',
      desc: 'Regularly contribute to open-source projects, learning best practices and giving back to the developer community on weekends.',
    },
  ];
  
  export default function handler(req, res) {
    res.status(200).json(expertise);
  }
  