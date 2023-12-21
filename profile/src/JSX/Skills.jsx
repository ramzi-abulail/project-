import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Skills() {
  const [allSkills, setAllSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await axios.get('http://localhost:3001/skills');
      setAllSkills(response.data);
    } catch (error) {
      console.error('Error fetching skills:', error);
    }
  };

  const addSkill = async () => {
    try {
      const newSkillData = {
        name: newSkill,
        id: allSkills.length + 1 // Generate a unique ID based on the current number of skills
      };
  
      await axios.post('http://localhost:3001/skills', newSkillData);
      setAllSkills([...allSkills, newSkillData]);
      setNewSkill('');
    } catch (error) {
      console.error('Error adding skill:', error);
    }
  };

  const deleteSkill = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/skills/${id}`);
      const updatedSkills = allSkills.filter(skill => skill.id !== id);
      setAllSkills(updatedSkills);
    } catch (error) {
      console.error('Error deleting skill:', error);
    }
  };

  return (
    <div>
      <div className="container mx-auto md:w-[900px] bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold my-4 p-6">Skills</h1>
        <div className="flex items-center justify-evenly">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="border border-gray-400 p-2 rounded-md flex-1 ml-44 mr-80 "
            placeholder="Add a new skill"
          />
          <button
            onClick={addSkill}
            className="text-black px-4 py-2 rounded-lg border border-black mr-44"
          >
            Add
          </button>
        </div>
        <ul className="mt-4 mb-10 mx-40 py-6">
          {allSkills.map((skill) => (
            <li key={skill.id} className="border border-gray-300 p-2 my-2 rounded-lg flex justify-between items-center ">
              {skill.name}
              <button
                onClick={() => deleteSkill(skill.id)}
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

export default Skills;
