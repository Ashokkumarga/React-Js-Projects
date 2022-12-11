import React from "react";
import maleprofile from "./Images/maleProfile.jpg";
import femaleprofile from "./Images/femaleProfile.jpg";

const Employees = ({employees,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange}) => {
 
  return (
    <div>
      <main className="container">
        <div class="row justify-content-center mt-3 mb-3">
          <div class="col-6">
            <select
              className="form-select form-select-lg"
              value={selectedTeam}
              onChange={handleTeamSelectionChange}
            >
              <option value="TeamA">Team A</option>
              <option value="TeamB">Team B</option>
              <option value="TeamC">Team C</option>
              <option value="TeamD">Team D</option>
            </select>
          </div>
        </div>
        <div class="row justify-content-center mt-3 mb-3">
          <div class="col-8">
            <div class="card-collection">
              {employees.map((employee) => (
                <div
                  id={employee.id}
                  className={
                    employee.teamName === selectedTeam
                      ? "card m-2 standout"
                      : "card m-2"
                  }
                  style={{ cursor: "pointer" }}
                  onClick={handleEmployeeCardClick}
                >
                  {employee.gender === "male" ? (
                    <img
                      src={maleprofile}
                      className="card-img-top"
                      alt="maleimg"
                    />
                  ) : (
                    <img
                      src={femaleprofile}
                      className="card-img-top"
                      alt="femaleimg"
                    />
                  )}

                  <div className="card-body">
                    <h5 className="card-title">
                      Full Name : {employee.fullName}
                    </h5>
                    <p className="card-text">
                      {" "}
                      <b>Desiganation : {employee.designation}</b>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Employees;
