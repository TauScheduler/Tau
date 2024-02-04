import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faTasks, faBookReader, faHourglassHalf, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

// const Feature = ({ icon, title, description }) => (
//   <div className="text-center">
//     <div className="mb-4">
//       <FontAwesomeIcon icon={icon} size="3x" />
//     </div>
//     <h3 className="text-xl mb-2">{title}</h3>
//     <p>{description}</p>
//   </div>
// );

const Info = () => (
  <div className="bg-gray-900 text-white">
    <div className="container mx-auto px-4 py-12">
      <div className="text-center text-4xl mb-12">What can you do with Tau?</div>
      <div className="flex justify-between items-start">
        <Feature
          icon={faCalendarAlt}
          title="Automated Calendar Entries"
          description="with Google Calendar Integration"
        />
        <Feature
          icon={faTasks}
          title="Schedule Tasks"
          description="from your text messages"
        />
        <Feature
          icon={faBookReader}
          title="Study Style Integration"
          description="personalized to you"
        />
      </div>
      <div className="flex justify-between items-start mt-12">
        <Feature
          icon={faHourglassHalf}
          title="Task Duration Prediction,"
          description="to increase productivity"
        />
        <Feature
          icon={faSyncAlt}
          title="Dynamic Rescheduling"
          description="to keep you on track"
        />
      </div>
    </div>
  </div>
);

export default Info;
