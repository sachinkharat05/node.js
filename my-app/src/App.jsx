import React, { useEffect, useState } from "react";

function FailedStudents() {

  const [students, setStudents] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:5000/api/sme/failed-students");

        console.log("Response Status:", res.status);

        if (!res.ok) {
          throw new Error("API not responding");
        }

        const data = await res.json();
        console.log("API DATA:", data);

        // ✅ Correct extraction
        setStudents(data.data);

      } catch (err) {
        console.error("ERROR:", err);
        setError(err.message);
      }
    }

    fetchData();
  }, []);

  // 🔄 Loading state
  if (students === null && !error) {
    return <h2>Loading...</h2>;
  }

  // ❌ Error state
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h2>Failed Students List</h2>

      {students.length === 0 ? (
        <p>No Data Found</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Student ID</th>
              <th>Score</th>
              <th>Percentile</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            {students.map((stu, index) => (
              <tr key={index}>
                <td>{stu.id}</td>
                <td>{stu.student_id}</td>
                <td>{stu.score}</td>
                <td>{stu.percentile}</td>
                <td>{stu.time_taken_minutes} min</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default FailedStudents;