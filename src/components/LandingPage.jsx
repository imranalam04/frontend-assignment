import { Link } from "react-router-dom";

const LandingPage = ({ users }) => {
  return (
    <div className="container mt-3 imran">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="card" style={{ height: "500px" , marginTop:"20%"}}>
            <div className="card-header"   style={{
              background: "linear-gradient(90deg, #007bff, #00bcd4)",
            }}>
              <h3 className="py-5 text-center">Select an account</h3>
            </div>
            <div className="card-body" style={{ overflowY: "scroll" }}>
              {users.map((user) => (
                <div key={user.id}>
                  <div className="card-img">
                    <img
                      src={user.profilepicture}
                      className="card-img-top rounded-5"
                      alt="Profile"
                      style={{ width: "6%" }}
                    />
                  </div>
                  <div className="card-title">
                    <Link
                      className="text-decoration-none text-secondary"
                      to={`/profile/${user.id - 1}`}
                    >
                      <h4
                        className=""
                        style={{ marginLeft: "50px", fontSize: "1.3rem" }}
                      >
                        {user.name}
                      </h4>
                    </Link>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
