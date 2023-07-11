import React, {useContext} from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';
import ThemeContext from '../ThemeContext';

export default function ProjectCard(props) {
  const {isDarkTheme} = useContext(ThemeContext);
  const { data } = props;
  return (
    <div className="mb-4 p-8 hover:bg-gray-100 hover:border-1 hover:border-blue-300 hover:rounded-lg">
      <div className="flex items-start">
        <div className="border-1 border-blue-500 h-12 w-12 flex items-center justify-center">
          <img src={data.image} alt="Project" className="h-8" />
        </div>
        <div className="ml-4 text-left">
          <div className={`font-bold flex ${isDarkTheme ? 'text-dark-font' : 'text-light-font'}`}>{data.name}
            <a href={data.githubLink} target="_blank" rel="noopener noreferrer" className="ml-2 items-center border-b-2 border-transparent transition duration-300 ease-in-out hover:border-blue-700">
              <HiArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="text-gray-700">{data.description}</div>
          {data.technologies.map((value, index) => (
            <div className="bg-blue-200 text-blue-800 rounded-full p-1 pl-2 pr-2 mr-1 mt-2 inline-block text-xs">
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}