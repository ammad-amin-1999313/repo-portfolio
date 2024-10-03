const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Comsats University',
                degree: 'BS, Computer Science',
                detail: "Bachelor's  in Computer Science  from Comsats University.",
                year: '2018-2022'
            },
            {
                id: 1,
                title: 'Al-Ghazali College of Sciences',
                degree: 'HSSC, Pre Engineering',
                detail: "Completed FSC Pre-Engineering from Al-Ghazali College.",
                year: '2015-2017'
            },
            {
                id: 2,
                title: 'Al-Ghazali College of Sciences',
                degree: 'SSC, Science Subjects',
                detail: "Completed SSC in Science subjects from Al-Ghazali",
                year: '2013-2015'
            },
        ]
    },
    {
        expCards: [
            // {
            //     id: 1,
            //     title: 'Auto Advisers',
            //     role: 'Next/React Developer',
            //     url: 'https://autoadvisers.com/',
            //     desc: 'As a Next/React Developer, I design and implement dynamic, responsive web applications using React, Next.js, and TypeScript. My focus is on delivering seamless user experiences and optimizing performance.',
            //     year: '09/2024 - Present',
            //     location: 'Islamabad, Pakistan'
            // },
            {
                id: 2,
                title: 'Intelgency IT Solutions',
                role: 'React Developer',
                url: 'https://intelgency.com/',
                desc: 'At Intelgency, I specialize in developing interactive user interfaces using React, Next.js, and JavaScript, ensuring high-performance web applications with a focus on usability and responsiveness.',
                year: '02/2024 - Present',
                location: 'Islamabad, Pakistan'
            },
            {
                id: 3,
                title: 'Geeks Hub Digital',
                role: 'Front End Developer',
                url: 'https://www.linkedin.com/company/geekshub-io/',
                desc: 'As a Front End Developer, I was responsible for integrating front-end technologies and worked extensively with Firebase. I also collaborated closely with design teams to deliver intuitive and user-friendly interfaces.',
                year: '09/2020 - 02/2021',
                location: 'Abbottabad, Pakistan'
            },
            {
                id: 4,
                title: 'Freelance',
                role: 'React Developer',
                url: 'N/A',
                desc: 'On Fiverr, I focused on developing React-based web applications and converting Figma designs into responsive front-end code. My work included enhancing user experience and optimizing website performance.',
                year: '09/2020 - 02/2021',
                location: 'Remote'
            }
            

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
