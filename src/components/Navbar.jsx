import React from 'react';


const Navbar = (props) => {

  return (
    <div className="navbar navbar-expand-md bg-dark navbar-dark">
      <a className="navbar-brand" href="/">
        Video
    </a>
      <div className="form-inline">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-search" aria-hidden="true"></i>
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={props.onChange}
          />
        </div>
      </div>
      
      <div
        className="collapse navbar-collapse justify-content-end"
        id="collapsibleNavbar"
      >

      </div>
    </div>
  );
}
export default Navbar;
