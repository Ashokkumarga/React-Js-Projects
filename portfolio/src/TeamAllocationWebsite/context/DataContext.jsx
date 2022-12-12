import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB"
  );

  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeeList")) || [
      {
        id: 1,
        fullName: "Ashok Kumar G A",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 2,
        fullName: "B Chandana",
        designation: "Software Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullName: "Vidya.C",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 4,
        fullName: "Prasanna",
        designation: "Javascript Developer",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "Basavaraj",
        designation: "AWS Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 6,
        fullName: "Teju ",
        designation: "Developer",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 7,
        fullName: "Lalitha",
        designation: "Angular Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 8,
        fullName: "Naveen Reddy",
        designation: "API Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 9,
        fullName: "Harish",
        designation: "C++ Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 10,
        fullName: "Lalu",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 11,
        fullName: "Aayush Mishra",
        designation: "Backend Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 12,
        fullName: "Ashok Kumar",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(transformedEmployees);
  }
  return (
    <DataContext.Provider
      value={{
        employees,
        selectedTeam,
        handleTeamSelectionChange,
        handleEmployeeCardClick,
        setTeam,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
