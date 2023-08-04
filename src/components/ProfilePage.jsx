import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ChatBox from "./ChatBox.jsx";
import GoogleMap from "./GoogleMap.jsx";

const ProfileHome = ({ users }) => {
  let { id } = useParams();
  const currData = users[id];
  console.log(currData);

  const [showPopup, setShowPopup] = useState(false);

  const handleImageClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };


  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-lg-2 mx-3 mt-5 rounded-4 sidebar bg-primary text-white">
          <ul
            className="nav flex-column mx-4"
            style={{ fontSize: "1.3rem", marginTop: "70%" }}
          >
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Profiles
              </Link>
              <hr className="bg-white" />
            </li>
            <li className="nav-item">
              <Link to="/posts" className="nav-link text-white">
                Posts
              </Link>
              <hr className="bg-white" />
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link text-white">
                Gallery
              </Link>
              <hr className="bg-white" />
            </li>
            <li className="nav-item">
              <Link to="/todo" className="nav-link text-white">
                ToDo
              </Link>
              <hr className="bg-white" />
            </li>
          </ul>
        </div>
        {/* Main Content */}
        <div className="col-lg-9 mt-5 mx-3">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h3 className="mt-2">Profile</h3>
            </div>
            <div className="col-lg-6">
              <div className="d-flex" style={{ marginLeft: "50%" }}>
                <img
                  src={currData.profilepicture}
                  className="rounded-5"
                  alt=""
                  style={{ width: "15%", cursor: "pointer" }}
                  onClick={handleImageClick}
                />
                <h5 className="" style={{ margin: "10px" }} onClick={handleImageClick}>
                  {currData.name}
                </h5>
              </div>
              {showPopup && (
                <div className="fixed-card-overlay" style={{marginTop:"8%"}}>
                  <div className="card fixed-popup rounded">
                    <div className="card-img" onClick={handleClose}>
                      <img
                        src={currData.profilepicture}
                        className="mt-2"
                        style={{
                          width: "20%",
                          marginLeft: "35%",
                          borderRadius: "50%",
                        }}
                        alt=""
                      />
                      <div
                        className="card-header mx-5 px-5"
                        style={{ fontSize: "1.3rem" }}
                      >
                        <span className="mx-3">{currData.name}</span>
                        <br />
                        <span className="text-body-secondary">
                          {currData.email}
                        </span>
                      </div>
                    </div>
                    <div className="card-body" style={{marginLeft:"12%",textAlign:"center"}}>
                    <img src={currData.profilepicture} className="rounded-5  close" style={{width:"15%"}} alt="" onClick={handleClose}/>
                     <span className="mx-3">{currData.name}</span>
                    </div>
                    <div className="card-footer" style={{marginLeft:"12%",textAlign:"center"}}>
                    <img src={currData.profilepicture} className="rounded-5" style={{width:"15%"}} alt="" />
                    <span className="mx-3">{currData.name}</span> 
                    </div>
                    <Link to="/" type="button" class="btn btn-danger" style={{marginLeft:"100px",marginRight:"100px",marginTop:"20px",marginBottom:
                  "30px"}}>SignOut</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          <hr />
          <div className="row">
            <img
              src={currData.profilepicture}
              style={{ borderRadius: "50%", width: "20%" }}
              alt="profile"
            />
            <h4 className="mt-3 mx-4">{currData.name}</h4>
            <form className="">
              <label className="" style={{ fontSize: "1.3rem" }}>
                Username :{""}
                <span
                  className="text-body-secondary"
                  style={{ fontSize: "1.4rem" }}
                >
                  {currData.username}
                </span>
              </label>
              <br />
              <label className="mx-4 mt-2" style={{ fontSize: "1.3rem" }}>
                e-mail :{" "}
                <span
                  className="text-body-secondary"
                  style={{ fontSize: "1.4rem" }}
                >
                  {currData.email}
                </span>
              </label>
              <br />
              <label className="mx-4 mt-2" style={{ fontSize: "1.3rem" }}>
                Phone :{" "}
                <span
                  className="text-body-secondary"
                  style={{ fontSize: "1.4rem" }}
                >
                  {currData.phone}
                </span>
              </label>
              <br />
              <label className="mx-4 mt-2" style={{ fontSize: "1.3rem" }}>
                Website :{" "}
                <span
                  className="text-body-secondary"
                  style={{ fontSize: "1.4rem" }}
                >
                  {currData.website}
                </span>
              </label>
              <hr style={{ width: "40%" }} />
              <div className="row">
                <span
                  className="text-body-secondary"
                  style={{ fontSize: "1.5rem", marginLeft: "8%" }}
                >
                  Company
                </span>
              </div>
              <label className="mx-4 mt-2" style={{ fontSize: "1.3rem" }}>
                Name :{" "}
                <span
                  className="text-body-secondary"
                  style={{ fontSize: "1.4rem" }}
                >
                  {currData.company.name}
                </span>
              </label>
              <br />
              <label className=" mt-2" style={{ fontSize: "1.3rem" }}>
                catchphrase :{" "}
                <span
                  className="text-body-secondary"
                  style={{ fontSize: "1.4rem" }}
                >
                  {currData.company.catchPhrase}
                </span>
              </label>
              <br />
              <label className=" mt-2 mx-5" style={{ fontSize: "1.3rem" }}>
                bs :{" "}
                <span
                  className="text-body-secondary"
                  style={{ fontSize: "1.4rem" }}
                >
                  {currData.company.bs}
                </span>
              </label>
              <div
                className="row"
                style={{ float: "right", marginTop: "-54%", marginLeft: "60%" }}
              >
                <span
                  className="text-body-secondary"
                  style={{ fontSize: "1.6rem" }}
                >
                  Address:
                </span>
                <label className="mx-5 mt-4" style={{ fontSize: "1.3rem" }}>
                  Street :{" "}
                  <span
                    className="text-body-secondary"
                    style={{ fontSize: "1.4rem" }}
                  >
                    {currData.address.street}
                  </span>
                </label>
                <label className="mx-5 mt-2" style={{ fontSize: "1.3rem" }}>
                  Suite :{" "}
                  <span
                    className="text-body-secondary"
                    style={{ fontSize: "1.4rem" }}
                  >
                    {currData.address.suite}
                  </span>
                </label>
                <label className="mx-5 mt-2" style={{ fontSize: "1.3rem" }}>
                  City :{" "}
                  <span
                    className="text-body-secondary"
                    style={{ fontSize: "1.4rem" }}
                  >
                    {currData.address.city}
                  </span>
                </label>
                <label className="mt-2 mx-4" style={{ fontSize: "1.3rem" }}>
                  Zipcode :{" "}
                  <span
                    className="text-body-secondary"
                    style={{ fontSize: "1.4rem" }}
                  >
                    {currData.address.zipcode}
                  </span>
                </label>
              </div>
            </form>
          </div>
          <div className="row" style={{ marginTop: "-30%", marginLeft: "40%" }}>
            <GoogleMap />
            <div
              className="row"
              style={{ marginTop: "-40%", paddingLeft: "40%" }}
            >
              <label className="mt-2 mx-4" style={{ fontSize: "1.3rem" }}>
                Lat :{" "}
                <span
                  className="text-body-secondary"
                  style={{ fontSize: "1.3rem" }}
                >
                  {currData.address.geo.lat}
                </span>
                <span
                  className="text-body-secondary mx-5"
                  style={{ fontSize: "1.3rem" }}
                >
                  <span className="text-dark">Long</span>:{" "}
                  {currData.address.geo.lng}
                </span>
              </label>
            </div>
          </div>
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

export default ProfileHome;
