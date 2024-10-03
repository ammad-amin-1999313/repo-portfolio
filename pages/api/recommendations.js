// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Shaheer Shaid',
    designation: 'React JS | NEXT JS | Node | TypeScript',
    view: `Hey everyone! I wanted to take a moment to recommend Ammad Amin for any ReactJs opportunities. 
           I had the pleasure of working with him on multiple projects where he showcased a strong understanding 
           of React.js and Next.js concepts and delivered high-quality code. He consistently demonstrated a willingness 
           to learn and grow, and his enthusiasm for tackling new challenges was contagious. Ammad is a reliable and 
           dedicated team member who would be a great asset to any React.js team. Highly recommended! 👍! 🌟`,
    linkednURL: 'https://www.linkedin.com/in/shaheer-shahid03/'
  },
  {
    id: 1,
    name: 'Shahbaz Khan',
    designation: 'Front-End Developer | System Integration Specialist',
    view: `I had the privilege of working alongside Ammad Amin on multiple university projects, where his talent and work ethic truly stood out. 
           We later collaborated at JMM Technologies, where Ammad's professionalism and attention to detail were exceptional. 
           His expertise in frontend development and his ability to seamlessly integrate complex systems make him a valuable asset. 
           I wholeheartedly endorse Ammad for any opportunity that requires a highly skilled and dedicated individual.`,
    linkednURL: 'https://www.linkedin.com/in/shahbaz-khan-229408133/'
}
,
  {
    id: 2,
    name: 'Talha Majeed',
    designation: 'MERN Stack Developer',
    view: `I wholeheartedly recommend Ammad Amin as a talented React frontend developer with an incredible flair for UI/UX design. 
           His proficiency in Node.js further enhances his capabilities, allowing him to build robust and scalable applications. 
           Ammad's attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable 
           addition to any development team.`,
    linkednURL: 'https://www.linkedin.com/in/talha-majeed-6464471a0/'
  },
  {
    id: 3,
    name: 'Muhammad Fahad',
    designation: 'MERN | JavaScript | Tailwind | MUI | Bootstrap',
    view: `I highly recommend Ammad Amin for web frontend development positions. His expertise in ReactJS and Next.js, combined 
           with his professionalism and dedication, make him an invaluable asset to any team.`,
    linkednURL: 'https://www.linkedin.com/in/muhammadullahafridi/'
  },
];

export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
