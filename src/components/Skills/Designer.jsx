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
              <h3 className="skills__name">Redux</h3>
              <span className="skills__level">Few Projects</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">All Projects</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Boostrap</h3>
              <span className="skills__level">Most Projects</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Responsive</h3>
              <span className="skills__level">All Projects</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">SASS</h3>
              <span className="skills__level">Many Projects</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Jest</h3>
              <span className="skills__level">Most Projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designer;
