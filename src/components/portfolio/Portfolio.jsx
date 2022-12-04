import React from 'react';
import './portfolio.css';

import IMG1 from '../../assets/image_overlay5.png';
import IMG2 from '../../assets/Prototyping+Resource.png';
import IMG3 from '../../assets/Frame1.jpg';
import IMG4 from '../../assets/iMac - 2.jpg';
import IMG5 from '../../assets/Deignminimal_website.jpg';
import IMG6 from '../../assets/weather_App_cover.png';
import IMG7 from '../../assets/chat app.jpg';
const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'mendio landing page design with figma',
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/19974901-Image-Overlay?utm_source=Clipboard_Shot&utm_campaign=nimabt&utm_content=Image%20Overlay&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=nimabt&utm_content=Image%20Overlay&utm_medium=Social_Share',
    },
    {
      id: 2,
      image: IMG2,
      title: 'Design web moblie prototype in figma ',
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/19967572-Weather-AppMobile?utm_source=Clipboard_Shot&utm_campaign=nimabt&utm_content=Weather_AppMobile&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=nimabt&utm_content=Weather_AppMobile&utm_medium=Social_Share',
    },
    {
      id: 3,
      image: IMG3,
      title: 'Parallax web_design(Reno website)',
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/19967484-Parallax-web-design?utm_source=Clipboard_Shot&utm_campaign=nimabt&utm_content=Parallax%20web_design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=nimabt&utm_content=Parallax%20web_design&utm_medium=Social_Share',
    },
    {
      id: 4,
      image: IMG4,
      title: 'Delicious home page prototyping in gigma',
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/19966620-Select-Food-Delicious?utm_source=Clipboard_Shot&utm_campaign=nimabt&utm_content=Select%20Food%20Delicious&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=nimabt&utm_content=Select%20Food%20Delicious&utm_medium=Social_Share',
    },
    {
      id: 5,
      image: IMG5,
      title: 'MoodBoard web_design',
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/19966656-MoodBoard-web-design?utm_source=Clipboard_Shot&utm_campaign=nimabt&utm_content=MoodBoard%20web_design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=nimabt&utm_content=MoodBoard%20web_design&utm_medium=Social_Share',
    },
    {
      id: 6,
      image: IMG6,
      title: 'Weather_AppMobile design in figma & aftereffect',
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/19967572-Weather-AppMobile?utm_source=Clipboard_Shot&utm_campaign=nimabt&utm_content=Weather_AppMobile&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=nimabt&utm_content=Weather_AppMobile&utm_medium=Social_Share',
    },
    {
      id: 7,
      image: IMG7,
      title: 'Chat App website',
      github: 'https://github.com',
      demo: 'https://preview.webflow.com/preview/portfolio-website-6cff7b?utm_medium=preview_link&utm_source=designer&utm_content=portfolio-website-6cff7b&preview=27dbd72981960df82e10b86a6713e883&workflow=preview',
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={demo} target="_blank" className="btn btn-primary">
                  LiveDemo
                </a>
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
