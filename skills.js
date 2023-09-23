import React from 'react'
import './skills.css'
import UIDesign from "../../assets/ui-design.png"
import WebDesign from "../../assets/website-design.png"
import AppDesign from "../../assets/app-design.png"
const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a skilled and passoniate web designer with experience in creating visually appealing and user-friendly websites.I have strong understanding of design and keep a eye for detail.I am proficient of HTML,CSS and Javascript as weel as design software such as Image Search App.</span>
        <div className='skillBars'>
          <div className='skillBar'>
            <img src={UIDesign} alt='UI Design' className='skillBarImg'/>
            <div className='skillBarText'>
            <h2>UI/UX Design</h2>
            <p>I am learning UI/UX Design</p>
            </div>
          </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>I am learing website design</p>
                </div>
            </div>
            <div className='skillBar'>
              <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
              <div className='skillBarText'>
                <h2>App Design</h2>
                <p>I am learning app design</p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;
