import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Skills.css'

const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skills section container" id="skills">
      <div className="SkillContainer">
        <h1 className="sectionTitle">Skills</h1>
        <p className="SkillText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, error molestiae et eaque itaque, sit eum molestias reiciendis sunt corrupti sint iusto tenetur iure dignissimos at nisi omnis adipisci eligendi?</p>
        <Carousel responsive={responsive} infinite={true} className="skillSlider">
            <div>
              <img src="652583_code_develop_html_language_layout_icon.svg" alt="" className="imgHTML"/>
            </div>
            <div>
              <img src="4961937_css_logo_social media_icon (1).svg" alt="" className="imgCSS"/>
            </div>
            <div>
              <img src="652581_code_command_develop_javascript_language_icon.svg" alt="" className="imgJS" />
            </div>
            <div>
              <img src="1174949_js_react js_logo_react_react native_icon.svg" alt="" className="imgReact"/>
            </div>
            <div>
              <img src="308444_javascrpt_js_library_long shadow_nodejs_icon.svg" alt="" className="imgNode"/>
            </div>
        </Carousel>
      </div>
    </section>
  )
}

export default Skills
