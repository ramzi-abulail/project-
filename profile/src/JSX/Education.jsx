import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Education() {
  const [allEducation, setAllEducation] = useState([]);
  const [newEducation, setNewEducation] = useState('');

  useEffect(() => {
    fetchEducation();
  }, []);

  const fetchEducation = async () => {
    try {
      const response = await axios.get('http://localhost:3001/Education');
      setAllEducation(response.data);
    } catch (error) {
      console.error('Error fetching education:', error);
    }
  };

  const addEducation = async () => {
    try {
      const newEducationData = {
        name: newEducation,
        id: allEducation.length + 1 // Generate a unique ID based on the current number of education entries
      };

      await axios.post('http://localhost:3001/Education', newEducationData);
      setAllEducation([...allEducation, newEducationData]);
      setNewEducation('');
    } catch (error) {
      console.error('Error adding education:', error);
    }
  };

  const deleteEducation = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/Education/${id}`);
      const updatedEducation = allEducation.filter(education => education.id !== id);
      setAllEducation(updatedEducation);
    } catch (error) {
      console.error('Error deleting education:', error);
    }
  };

  return (
    <div>
      <div className="container mx-auto md:w-[900px] bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold my-4 p-6">Education</h1>
        <div className="flex items-center justify-evenly">
          <input
            type="text"
            value={newEducation}
            onChange={(e) => setNewEducation(e.target.value)}
            className="border border-gray-400 p-2 rounded-md flex-1 ml-44 mr-80"
            placeholder="Add a new education"
          />
          <button
            onClick={addEducation}
            className="text-black px-4 py-2 rounded-lg border border-black mr-44"
          >
            Add
          </button>
        </div>
        <ul className="mt-4 mb-10 mx-40 py-6">
          {allEducation.map((education) => (
            <li key={education.id} className="border border-gray-300 p-2 my-2 rounded-lg flex justify-between items-center ">
              {education.name}
              <button
                onClick={() => deleteEducation(education.id)}
                className="text-red-500 ml-4"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Education;
