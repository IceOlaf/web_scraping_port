import React from "react";
import "../assets/mayur_portfolio.css"
import { SectionWrapper } from "../hoc";



const Tech = () => {
  
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      <h2 class="text-white font-william font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">Skills</h2>
      <p class="container text-center ont-black md:text-[30px]">My technical & miscellaneous skills</p>
      <div class="skills__container container grid">
      <div class="skills__column">
          <div class="skills__content skills__open">
            <div class="skills__header">
              <i class="uil uil-swatchbook skills__icon"></i>

              <div>
                <h1 class="skills__title">Web Scraping</h1>
                
              </div>

              <i class="uil uil-angle-down skills__arrow"></i>
            </div>

            <div class="skills__list grid">
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Python</h3>
                  <span class="skills__number">100%</span>
                </div>
                <div class="skills__bar">
                  <span
                    class="skills__percentage skills__perfect"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Ruby</h3>
                  <span class="skills__number">90%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__pro"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Node.js</h3>
                  <span class="skills__number">95%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__mas"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">GoLang</h3>
                  <span class="skills__number">80%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__medium"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">PHP</h3>
                  <span class="skills__number">95%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__mas"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">C#</h3>
                  <span class="skills__number">85%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__good"></span>
                </div>
              </div>
            </div>
          </div>

          <div class="skills__content skills__open">
            <div class="skills__header">
              <i class="uil uil-analysis skills__icon"></i>

              <div>
                <h1 class="skills__title">Misc</h1>
                
              </div>

              <i class="uil uil-angle-down skills__arrow"></i>
            </div>

            <div class="skills__list grid">
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Git</h3>
                  <span class="skills__number">90%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__git"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Linux</h3>
                  <span class="skills__number">90%</span>
                </div>
                <div class="skills__bar">
                  <span
                    class="skills__percentage skills__linux"></span>
                </div>
              </div>
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">IOT (Raspberry Pi)</h3>
                  <span class="skills__number">85%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__rs"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">DevOps</h3>
                  <span class="skills__number">75%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__js"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Software
                    Development</h3>
                  <span class="skills__number">85%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__sd"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Leadership</h3>
                  <span class="skills__number">95%</span>
                </div>
                <div class="skills__bar">
                  <span
                    class="skills__percentage skills__lead"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Communication</h3>
                  <span class="skills__number">90%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__com"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Time Management</h3>
                  <span class="skills__number">98%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__tm"></span>
                </div>
              </div>

            </div>
          </div>

          <div class="skills__content skills__open">
            <div class="skills__header">
              <i class="uil uil-cloud-computing skills__icon"></i>

              <div>
                <h1 class="skills__title">Front-End</h1>
                
              </div>

              <i class="uil uil-angle-down skills__arrow"></i>
            </div>

            <div class="skills__list grid">

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">JavaScript, HTML, CSS</h3>
                  <span class="skills__number">100%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__perfect"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">React, Angular</h3>
                  <span class="skills__number">85%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__good"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Sketch, Figma, WordPress </h3>
                  <span class="skills__number">85%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__good"></span>
                </div>
              </div>

              

            </div>
          </div>
        </div>
        <div class="skills__column">
          <div class="skills__content skills__open">
            <div class="skills__header">
              <i class="uil uil-brain skills__icon"></i>

              <div>
                <h1 class="skills__title">Lead Generation</h1>
                
              </div>

              <i class="uil uil-angle-down skills__arrow"></i>
            </div>

            <div class="skills__list grid">
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Data analysis</h3>
                  <span class="skills__number">90%</span>
                </div>
                <div class="skills__bar-container">
                  <div class="skills__bar">
                    <span
                      class="skills__percentage skills__pro"></span>
                  </div>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Market research</h3>
                  <span class="skills__number">85%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__good"></span>
                </div>
              </div>
              
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Email Automation</h3>
                  <span class="skills__number">80%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__medium"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">CRM</h3>
                  <span class="skills__number">80%</span>
                </div>
                <div class="skills__bar">
                  <span
                    class="skills__percentage skills__medium"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Microsoft Excel</h3>
                  <span class="skills__number">100%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__perfect"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name"> Google Sheets</h3>
                  <span class="skills__number">95%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__mas"></span>
                </div>
              </div>
            </div>
          </div>

          <div class="skills__content skills__open">
            <div class="skills__header">
              <i class="uil uil-cloud-computing skills__icon"></i>

              <div>
                <h1 class="skills__title">Frameworks & Libraries</h1>
                
              </div>

              <i class="uil uil-angle-down skills__arrow"></i>
            </div>

            <div class="skills__list grid">

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Django</h3>
                  <span class="skills__number">95%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__tf"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">TensorFlow & PyTorch</h3>
                  <span class="skills__number">90%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__tf"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Requests & BeautifulSoup</h3>
                  <span class="skills__number">85%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__py"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Scrapy & Selenium</h3>
                  <span class="skills__number">75%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__sci"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Numpy and Pandas</h3>
                  <span class="skills__number">85%</span>
                </div>
                <div class="skills__bar">
                  <span
                    class="skills__percentage skills__nump"></span>
                </div>
              </div>
              
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Keras</h3>
                  <span class="skills__number">88%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__ks"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Kimbie</h3>
                  <span class="skills__number">88%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__ks"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Alchemy</h3>
                  <span class="skills__number">88%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__ks"></span>
                </div>
              </div>

            </div>
          </div>

          <div class="skills__content skills__open">
            <div class="skills__header">
              <i class="uil uil-cloud-computing skills__icon"></i>

              <div>
                <h1 class="skills__title">Back-End</h1>
                
              </div>

              <i class="uil uil-angle-down skills__arrow"></i>
            </div>

            <div class="skills__list grid">

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Python, Java, PHP, Node.js</h3>
                  <span class="skills__number">95%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__mas"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Django,  Ruby,  Laravel,  Express.js </h3>
                  <span class="skills__number">85%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__good"></span>
                </div>
              </div>

              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">Firebase, MongoDB, MySQL, PostgreSQL </h3>
                  <span class="skills__number">75%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__little"></span>
                </div>
              </div>

              

            </div>
          </div>
        </div>
        

      </div>


    </div>
  );
};

export default SectionWrapper(Tech, "skill");
