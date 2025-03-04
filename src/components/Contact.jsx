// import React from "react";
// import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

// export const Contact = () => {
//   return (
//     <div className=" bg-gray-100 text-black p-6 rounded-lg shadow-lg max-w-3xl mx-auto my-8">
//       <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
//       <p className="text-lg leading-relaxed text-center">
//         Have questions or need support? Feel free to reach out to us!
//       </p>

//       <div className="mt-6 space-y-4">
//         <div className="flex items-center space-x-3">
//           <FaMapMarkerAlt className="text-blue-400 text-xl" />
//           <span className="text-lg">123 Blogger Lane, WriteCity, WP 45678</span>
//         </div>

//         <div className="flex items-center space-x-3">
//           <FaEnvelope className="text-blue-400 text-xl" />
//           <span className="text-lg">support@ponderpages.com</span>
//         </div>

//         <div className="flex items-center space-x-3">
//           <FaPhone className="text-blue-400 text-xl" />
//           <span className="text-lg">+91 9774567890</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="bg-gray-100 text-black p-6 rounded-lg shadow-lg max-w-3xl mx-4 sm:mx-auto my-8 sm:p-8 md:p-10 lg:p-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
        Contact Us
      </h2>
      <p className="text-base sm:text-lg leading-relaxed text-center">
        Have questions or need support? Feel free to reach out to us!
      </p>

      <div className="mt-6 space-y-4">
        <div className="flex items-center space-x-3">
          <FaMapMarkerAlt className="text-blue-400 text-lg sm:text-xl" />
          <span className="text-sm sm:text-lg">
            123 Blogger Lane, WriteCity, WP 45678
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-blue-400 text-lg sm:text-xl" />
          <span className="text-sm sm:text-lg">support@ponderpages.com</span>
        </div>

        <div className="flex items-center space-x-3">
          <FaPhone className="text-blue-400 text-lg sm:text-xl" />
          <span className="text-sm sm:text-lg">+91 9774567890</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
