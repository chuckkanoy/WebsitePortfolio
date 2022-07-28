import React from 'react';

import Dropdown from '../../components/dropdown/Dropdown';
import './Resume.css';

function Resume() {
    const skills = {
        programmingLangs: [
            "Java",
            "Python",
            "Javascript",
            "HTML/CSS/SCSS",
            "Node.js",
            "Git",
        ],
        frameworks: [
            "React",
            "React Native",
            "Apache Tapestry",
            "Angular"
        ],
        leadership: [
            "Prior Leadership Experience (See below)"
        ],
        aptitude: [
            "Quick learner and curiousity to learn more"
        ],
        strengths: [
            "Personable",
            "Determined to see tasks through to their end",
            "Consistent",
            "Timely",
            "Mindful"
        ],
        weaknesses: [
            "Delegation",
            "Gauging group interest",
            "Estimating time to completion"
        ]
    };

    const displaySkills = () => {
        return (
            Object.keys(skills).map(skill => {
                return (
                    <div className="leadershipContainer">
                        <h3>{skill}</h3>
                        {skills[skill].map(string => {
                            return <p className='resumeDetails'>{string}</p>;
                        })}
                    </div>
                )
            })
        );
    }

    const education = [
        {
            "B.S. Computer Science": {
                org: "North Dakota State University",
                location: "Fargo, ND",
                duration: "08/2017-Present"
            }
        }
    ];


    const workExperience = [
        {
            "Embedded Software Engineer": {
                org: "John Deere",
                location: "Fargo, ND",
                duration: "06/2021-Present"
            }
        },
        {
            "Software Engineer Intern": {
                org: "Bushel",
                location: "Fargo, ND",
                duration: "05/2020-08/2020"
            }
        },
        {
            "Computer Science Learning Assistant\n(Java Tutor)": {
                org: "North Dakota State University",
                location: "Fargo, ND",
                duration: "01/2019-05/2020"
            }
        }
    ];

    const leadership = [
        {
            "Treasurer": {
                org: "To Be Determined Comedy",
                location: "North Dakota State University",
                duration: "08/2020-05/2021"
            }
        },
        {
            "Secretary": {
                org: "To Be Determined Comedy",
                location: "North Dakota State University",
                duration: "08/2019-05/2020"
            }
        },
        {
            "President": {
                org: "Stockbridge Hall Government",
                location: "North Dakota State University",
                duration: "01/2018-05/2018"
            }
        },
        {
            "Cadet": {
                org: "AFROTC Det 610 EW II",
                location: "North Dakota State University",
                duration: "08/2017-10/2018"
            }
        }
    ];

    const display = (array) => {
        return array.map((individual) => {
            const status = Object.keys(individual)[0];
            return (
                <div className="leadershipContainer">
                    <div className="leadershipHeader">
                        <h3>{status}</h3>
                        <p className="dates">{individual[status].duration}</p>
                    </div>
                    <p>{individual[status].org}</p>
                    <p>{individual[status].location}</p>
                </div>
            );
        })
    }

    return (
        <>
            <p className="objective">
                <text className="declaration">var </text>
                <text className="variableName">objective</text>=
                <text className="literal">"Seeking professional software development experience in a community oriented environment"</text>
            </p>
            <div className="resumeContainer">
                <Dropdown title="Skills" content={displaySkills()} />
                <Dropdown title="Education" content={display(education)} />
                <Dropdown title="Professional Development Experience" content={display(workExperience)} />
                <Dropdown title="Leadership" content={display(leadership)} />
            </div>
        </>
    );
}

export default Resume;