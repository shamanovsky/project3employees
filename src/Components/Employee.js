const Employee = (props) => {
  return (
    <div
      style={{
        padding: "20px 30px",
        // backgroundColor: "#e6fe00",
        color: "#5c6bc0"
      }}
    >
      <h2>
        <button onClick={props.resetState}>Back to list</button>
      </h2>
      <br />
      <div
        class="card mb-3 text-dark border-danger bg-warning"
        style={{
          width: "33rem",
          color: "#5c6bc0"
        }}
      >
        <div class="card-body">
          <h1 class="card-title">Name: {props.data.name}</h1>
          <h3 class="card-text">ID: {props.data.id}</h3>
          <h4 class="card-text">Role: {props.data.role}</h4>
          <h4 class="card-text">Department: {props.data.department}</h4>
          <img src={props.data.photo} class="card-img-top" alt=""></img>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Employee;
