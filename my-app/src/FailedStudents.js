import React, { useEffect, useState } from "react";

function FailedStudents() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/sme/failed-students")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStudents(data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div>
      <h2>Failed Students List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Marks</th>
          </tr>
        </thead>

        <tbody>
          {students.map((stu, index) => (
            <tr key={index}>
              <td>{stu.id}</td>
              <td>{stu.name}</td>
              <td>{stu.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FailedStudents;