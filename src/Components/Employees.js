const Employees = (props) => {
  const updateEmployee = (employeeId) => {
    props.setSelectedEmployee(employeeId);
  };
  return (
    <div
      style={{
        // backgroundColor: "#5c6bc0",
        color: "#5c6bc0",
        padding: "20px 10px"
      }}
    >
      {props.data.map((employee) => {
        return (
          <p
            key={employee.id}
            onClick={() => {
              updateEmployee(employee.id);
            }}
            style={{ cursor: "pointer" }}
            role="button"
          >
            {employee.name} -- {employee.department}
          </p>
        );
      })}
    </div>
  );
};

export default Employees;
