import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
            commodi illo! Molestias aliquam ex, ullam hic est modi sequi tempora
            provident quam. Animi, eum? Consequuntur porro provident hic dolore
            nam?
          </p>
          <div className="card-action lighten-4 grey-text">
            <div>Posted by Ovidiu G.</div>
            <div>22 Februarie 2019</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
