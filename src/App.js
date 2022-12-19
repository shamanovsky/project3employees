import "./styles.css";
import Employee from "./Components/Employee";
import Employees from "./Components/Employees";
import Error from "./Components/Error";
import Loading from "./Components/Loading";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [EmployeeData, setEmployeeData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [error, setError] = useState(false);

  const resetState = () => {
    setEmployeeData([]);
    setSelectedEmployee(null);
    setLoading(true);
    setError(false);
    getEmployeeData();
  };

  const getEmployeeData = (id = null) => {
    setLoading(true);

    let actualId = "";

    if (!!id && parseInt(id, 10) > 0) {
      actualId = parseInt(id, 10);
    }

    axios
      .get(`https://api.matgargano.com/employees/${actualId}`)
      .then((response) => {
        setEmployeeData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || "No error given");
      });
  };

  useEffect(() => {
    getEmployeeData();
  }, []);

  useEffect(() => {
    if (!!selectedEmployee) {
      getEmployeeData(selectedEmployee);
    }
  }, [selectedEmployee]);

  return (
    <div className="App">
      {!!error && <Error resetState={resetState} message={error} />}
      {!error && (
        <>
          {!!loading && <Loading />}
          {!loading && (
            <div>
              {/* listing of Employees */}
              {!selectedEmployee && (
                <Employees
                  setSelectedEmployee={setSelectedEmployee}
                  data={EmployeeData}
                />
              )}
              {/* lindividual Employee listing */}
              {!!selectedEmployee && (
                <Employee resetState={resetState} data={EmployeeData} />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
