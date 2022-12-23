import React from "react";

const Designer = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">More Skills</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Redux</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Github</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Resposive</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">SASS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Jest</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designer;
