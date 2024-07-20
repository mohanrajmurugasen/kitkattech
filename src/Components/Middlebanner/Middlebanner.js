import React from "react";
import "./Middlebanner.css";

const MiddleBanner = () => {
  return (
    <>
      <div className="index_menu_content" style={{ backgroundColor: "white" }}>
        <div className="index_menu_content_align">
          <div className="index_menu_design">
            <div className="index_design_left left">
              <div className="index_page_cont">
                <h2 className="index_disp_heading">Designing</h2>
                <p>
                  Engage with our professionals to generate your innovative
                  ideas with the latest technologies and obtain our support.
                </p>
              </div>
            </div>
            <div className="index_design_right right">
              <img
                src="/images/web_designing.jpg"
                alt="Web design"
                height="100%"
                width="100%"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="index_menu_design">
            <div className="index_plan_left left1">
              <img
                src="/images/front_end.webp"
                alt="Front-end development"
                height="100%"
                width="100%"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="index_plan_right right1">
              <div className="index_page_cont">
                <h2 className="index_disp_heading">Planning</h2>
                <p>
                  Plan with our expertise with your needs and Engage with them
                  on further development with every possibilities of
                  development. Expand your needs with chances.
                </p>
              </div>
            </div>
            <div className="index_plan_left left_media">
              <img
                src="/images/web_application.jpg"
                alt="Web application"
                height="100%"
                width="100%"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="index_menu_design">
            <div className="index_develop_left left">
              <div className="index_page_cont">
                <h2 class="index_disp_heading">Developing</h2>
                <p>
                  Our developers are experienced enough to give result what you
                  expect.They Make your needs real and user-friendly through the
                  most recent programming tools.
                </p>
              </div>
            </div>
            <div className="index_develop_right right">
              <img
                src="/images/development.jpg"
                alt="Web development"
                height="100%"
                width="100%"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="index_menu_design">
            <div className="index_resp_left left1">
              <img
                src="/images/web_designing.jpg"
                alt="Web-design"
                height="100%"
                width="100%"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="index_resp_right right1">
              <div class="index_page_cont">
                <h2 class="index_disp_heading">Responsive</h2>
                <p>
                  Our developers craft solutions accessible through smartphone,
                  laptop, Tableau, etc., with a high user satisfaction that
                  every user would appreciate.
                </p>
              </div>
            </div>
            <div className="index_resp_left left_media">
              <img
                src="/images/web_application.jpg"
                alt="Mobile Application"
                height="100%"
                width="100%"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleBanner;
