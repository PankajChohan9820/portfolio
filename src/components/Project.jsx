import React, {useContext} from 'react';
import ProjectCard from './ProjectCard';
import webScrapingImg from '../assets/web-scraping-using-selenium.png'
import SpaceShooterImg from '../assets/SpaceShooter.png'
import CoronaImg from '../assets/corona.png'
import FoodImg from '../assets/onlineFood.gif'
import Ohm300Img from '../assets/ohm3000.webp'
import TodoList from '../assets/to-do-list.webp'
import ThemeContext from '../ThemeContext';

const Project = () => {
    const {isDarkTheme} = useContext(ThemeContext);
    console.log(isDarkTheme)

    const dataArrayLeft = [{ name: 'HandBag Scraping', image:webScrapingImg, githubLink: 'github.com', description: 'Demo', technologies: ['Python', 'Selenium', 'Multi-Threading','Pandas'] },
    { name: 'Space Shooter', image:SpaceShooterImg, githubLink: 'https://github.com/PankajChohan9820/SpaceShooter.git', description: 'Demo', technologies: ['Pygame', 'Python' ] },
    { name: 'Corona tracker', image:CoronaImg, githubLink: 'https://github.com/PankajChohan9820/Reactjs-Corona-tracker.git', description: 'Demo', technologies: ['ReactJS', 'CharttJS', 'Javascript', 'Axios'] }]

    const dataArrayRight = [{ name: 'Tap Tap online Order', image:FoodImg, githubLink: 'https://github.com/PankajChohan9820/Tap-tap-online-DoorDash.git', description: 'Demo', technologies: ['Flask', 'RestFul Api', 'JWT'] },
    { name: 'Ohm3000', image:Ohm300Img, githubLink: 'https://www.youtube.com/watch?list=TLGG0ZT9M6qRw6MwOTA3MjAyMw&time_continue=45&v=eygj9FqrCO8&embeds_referring_euri=https%3A%2F%2Fwww.kaninnovations.com%2F&embeds_referring_origin=https%3A%2F%2Fwww.kaninnovations.com&source_ve_path=Mjg2NjY&feature=emb_logo&ab_channel=KanInnovations', description: 'Demo', technologies: ['Django', 'AWS', 'Docker','Numpy','Apache2'] },
    { name: 'To-do list', image:TodoList, githubLink: 'https://github.com/PankajChohan9820/To-do-list.git', description: 'Demo', technologies: ['SQLAlchemey', 'API', 'Flask', 'TypeScript'] }]

    return (
        <div className="">
            <h1 className={`text-2xl font-bold mb-8 ${isDarkTheme ? 'text-dark-font' : 'text-light-font'}`}>Projects</h1>
            <div className="flex">
                <div className="w-1/2 pr-4">
                    {dataArrayLeft.map((value, index) => (
                            <ProjectCard key={index} data={value} />
                    ))}
                </div>
                <div className="w-1/2 pl-4">
                {dataArrayRight.map((value, index) => (
                            <ProjectCard key={index} data={value} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
