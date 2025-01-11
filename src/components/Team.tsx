// components/Team.js
import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: "John Smith",
    designation: "Designation here",
    image: "/team1.svg",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
  },
  {
    id: 2,
    name: "Elina Williams",
    designation: "Designation here",
    image: "/team2.svg",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
  },
  {
    id: 3,
    name: "John Smith",
    designation: "Designation here",
    image: "/team3.svg",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
  }
]

const Team = () => {
  return (
    <div className="bg-white rounded-lg p-6 mx-5">
      <h1 className="text-[32px] font-medium text-gray-900 mb-4">Team</h1>
      
      <div className="space-y-6">
        {teamMembers.map((member) => (
          <div 
            key={member.id}
            className="bg-[#E8F4FD] rounded-2xl p-4 md:p-8 flex flex-col md:flex-row gap-4 md:gap-8"
          >
            <div className="flex flex-col items-center flex-shrink-0">
              <img
                src={member.image}
                alt={member.name}
                className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-2xl object-cover mb-4"
              />
              <h3 className="text-lg md:text-xl font-medium text-gray-900">{member.name}</h3>
              <p className="text-gray-500">{member.designation}</p>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-center md:text-left">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;