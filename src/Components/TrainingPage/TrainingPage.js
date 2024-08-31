import React from "react";

export default function TrainingPage() {
  const img = [
    { id: 1, img: "./img/aaludra.png" },
    { id: 2, img: "./img/aes.png" },
    { id: 3, img: "./img/ang.png" },
    { id: 4, img: "./img/ariz.png" },
    { id: 5, img: "./img/bluk.png" },
    { id: 6, img: "./img/creason.png" },
    { id: 7, img: "./img/eng.png" },
    { id: 8, img: "./img/harve.png" },
    { id: 9, img: "./img/innerwex.png" },
    { id: 10, img: "./img/iovate.png" },
    { id: 11, img: "./img/ken.png" },
    { id: 12, img: "./img/maxbyte.png" },
    { id: 13, img: "./img/montb.png" },
    { id: 14, img: "./img/nano.png" },
    { id: 15, img: "./img/ondot.png" },
    { id: 16, img: "./img/qbran.png" },
    { id: 17, img: "./img/sierra.png" },
    { id: 18, img: "./img/squash.png" },
    { id: 19, img: "./img/sysna.png" },
    { id: 20, img: "./img/team.png" },
    { id: 21, img: "./img/tech.png" },
    { id: 22, img: "./img/uit.png" },
    { id: 23, img: "./img/vetticular.png" },
    { id: 24, img: "./img/zetta.png" },
  ];

  const course = [
    { id: 1, img: "./img/c1.png", name: "Full Stack Development" },
    { id: 2, img: "./img/c2.png", name: "Angular Js Training" },
    { id: 3, img: "./img/c3.png", name: "IOS Training" },
    { id: 4, img: "./img/c4.png", name: "Android Training" },
    { id: 5, img: "./img/c5.png", name: "Python Development" },
    { id: 6, img: "./img/c6.png", name: "PHP Development" },
    { id: 7, img: "./img/c7.png", name: " Node js Development" },
    { id: 8, img: "./img/c8.png", name: " Core Java Development" },
    { id: 9, img: "./img/c9.png", name: " React js Training" },
    { id: 10, img: "./img/c10.png", name: " DevOps Training" },
  ];

  return (
    <>
      <div
        className="container-fluid py-4 text-white"
        style={{ backgroundColor: "rgb(6 182 212)", marginTop: "80px" }}
      >
        <div className="row" style={{ alignItems: "center" }}>
          <div className="col-md-6 ps-4 pt-3">
            <h1>
              At Kitkat Academy, our success is intertwined with the success of
              our clients
            </h1>
            <br />
            <br />
            <p>
              We take pride in being a leading software training institute that
              has empowered individuals and organizations to thrive in the
              dynamic world of technology. Our client partnerships are a
              testament to the quality of education and the real-world skills we
              impart to our students
            </p>
            <br />
            <br />

            <button
              className="px-5 py-1 border-0"
              style={{
                backgroundColor: "purple",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Enquiry Now &nbsp; <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <div className="col-md-6 p-3">
            <center>
              <img
                className="img-fluid"
                src={require("./img/Group-4474-1.png")}
                alt=""
              />
            </center>
          </div>
        </div>
      </div>

      <br />
      <div className="container-fluid py-5">
        <h1 style={{ color: "blue", textAlign: "center" }}>OUR CLIENTS</h1>
        <br />
        <div className="container" id="gridone">
          <div className="row" style={{ justifyContent: "center" }}>
            {img.map((v) => (
              <div
                key={v.id}
                className="col-lg-2 col-md-3 col-sm-4 col-xs-12"
                style={{
                  margin: 10,
                  border: "1px solid #8080804a",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              >
                <img className="img-fluid" src={require(`${v.img}`)} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <div
        className="container-fluid py-5 text-white"
        style={{ backgroundColor: "rgb(2 132 199)" }}
      >
        <h2 style={{ textAlign: "center" }}>Our Courses</h2>
        <div style={{ textAlign: "center", fontSize: 18, fontWeight: 300 }}>
          Learn new skills, pursue your interests or advance your career with
          our distinctive course catalogues. Our updated syllabus on the below
          courses cover all Industry standards as per requirements.
        </div>
        <br />
        <div className="container" id="gridtwo">
          <div className="row" style={{ justifyContent: "center" }}>
            {course.map((v) => (
              <div
                key={v.id}
                className="col-lg-2 col-md-3 col-sm-4 col-xs-12 bg-white text-dark"
                style={{
                  margin: 10,
                  border: "1px solid #8080804a",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 20,
                }}
              >
                <div>
                  <center>
                    <img src={require(`${v.img}`)} alt="" />
                  </center>
                  <div style={{ paddingTop: 10, textAlign: "center" }}>
                    {v.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
        <div className="container d-flex justify-content-center">
          <button
            className="border-0 rounded-1"
            style={{
              backgroundColor: "#ff635e",
              color: "white",
              padding: "11px",
              fontSize: "larger",
            }}
          >
            <b>View All Course</b>
          </button>
        </div>
      </div>
    </>
  );
}
