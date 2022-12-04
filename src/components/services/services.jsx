import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>design in photoshop</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Complete Web Design in Webflow</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>ّFigma UI/UX Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Motion design with figma</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web & Mobile designer</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>motion graphics in Affterefect</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>HTML</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> CSS ( Bootstrap,tailwind)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>JavaScript (JS) Libraries (React)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>ERC721(SmartContract).</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>create Non Fungible Tokens</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create Website with Webflow</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Implemented websites, mobile applications</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Assessed UX and UI designs for technical feasibility.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Collaboration with product team</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developed standard and ad hoc 𝐫𝐞𝐩𝐨𝐫𝐭𝐬 𝐢𝐧 𝐠𝐫𝐚𝐩𝐡 𝐟𝐨𝐫𝐦𝐚𝐭 𝐚𝐬
                𝐫𝐞𝐪𝐮𝐢𝐫𝐞𝐝..
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Object-Oriented Programming.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
