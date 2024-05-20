import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('https://hp-api.onrender.com/api/characters/students');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchStudents();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (students.length === 0) {
    return <div>Loading...</div>;
  }

  const handleCardClick = (id) => {
    navigate(`/character/${id}`);
  };

  return (
    <div className="container my-4">
      <h2>Students</h2>
      <div className="row my-1 gy-5">
        {students.map((data) => (
          <div
            className="col-sm-12 col-md-4 col-lg-4 col-12"
            key={data.id}
            onClick={() => handleCardClick(data.id)}
          >
            <div className="card">
              <img
                src={data.image || './src/assets/danieal-HP.jpg'}
                className="card-img-top"
                alt={data.name}
                style={{ height: '300px' }}
              />
              <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;