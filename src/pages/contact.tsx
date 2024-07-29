import React from "react";
const Contact: React.FC = () => {
  return <></>;
};
export default Contact;
// type FormData = {
//   section: string;
//   address: string;
//   telephone: string;
//   fax: string;
//   kep: string;
// };

// const Contact: React.FC = () => {
//   const [activeSection, setActiveSection] = useState<string | null>(null);
//   const [activeDetail, setActiveDetail] = useState<string | null>(null);
//   const [currentTitle, setCurrentTitle] = useState("Contact Information");
//   const [formData, setFormData] = useState<FormData>({
//     section: "",
//     address: "",
//     telephone: "",
//     fax: "",
//     kep: "",
//   });
//   const [savedData, setSavedData] = useState<FormData[]>([]);
//   const [editIndex, setEditIndex] = useState<number | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleAddData = () => {
//     if (editIndex !== null) {
//       const updatedData = savedData.map((data, index) =>
//         index === editIndex ? { ...formData, section: currentTitle } : data
//       );
//       setSavedData(updatedData);
//       setEditIndex(null);
//     } else {
//       setSavedData((prevData) => [
//         ...prevData,
//         { ...formData, section: currentTitle },
//       ]);
//     }

//     setFormData({
//       section: "",
//       address: "",
//       telephone: "",
//       fax: "",
//       kep: "",
//     });

//     setActiveSection(null);
//     setActiveDetail(null);
//     setCurrentTitle("Contact Information");
//   };

//   const handleButtonClick = (section: string, title: string) => {
//     setActiveSection(section);
//     setActiveDetail(null);
//     setCurrentTitle(title);
//   };

//   const handleDetailClick = (detail: string, title: string) => {
//     setActiveDetail(detail);
//     setCurrentTitle(title);
//   };

//   const handleDelete = (index: number) => {
//     setSavedData(savedData.filter((_, i) => i !== index));
//   };

//   const handleEdit = (index: number) => {
//     const data = savedData[index];
//     setFormData(data);
//     setEditIndex(index);

//     if (data.section.includes("Store")) {
//       setActiveSection("Stores");
//       setActiveDetail(data.section);
//     } else if (data.section.includes("Office")) {
//       setActiveSection("Offices");
//       setActiveDetail(data.section);
//     } else {
//       setActiveSection(data.section);
//       setActiveDetail(null);
//     }
//     setCurrentTitle(data.section);
//   };

//   const buttonClass = (buttonName: string) =>
//     `w-full text-left px-4 py-2 rounded-md ${
//       activeSection === buttonName ? "bg-blue-700" : "bg-blue-500"
//     } text-white hover:bg-blue-600`;

//   const detailButtonClass = (buttonName: string) =>
//     `w-full text-left px-4 py-2 rounded-md ${
//       activeDetail === buttonName ? "bg-blue-700" : "bg-blue-500"
//     } text-white hover:bg-blue-600`;

//   return (
//     <div className="p-4 md:p-8 md:ml-64">
//       <div className="flex flex-col md:flex-row gap-5">
//         <div className="p-6 bg-blue-50 shadow-lg rounded-lg w-full md:w-96">
//           <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">
//             Contact Information
//           </h2>
//           <div className="space-y-4">
//             <button
//               onClick={() => handleButtonClick("Headquarters", "Headquarters")}
//               className={buttonClass("Headquarters")}
//             >
//               Headquarters
//             </button>
//             <button
//               onClick={() => handleButtonClick("Factory", "Factory")}
//               className={buttonClass("Factory")}
//             >
//               Factory
//             </button>
//             <button
//               onClick={() => handleButtonClick("Stores", "Stores")}
//               className={buttonClass("Stores")}
//             >
//               Stores
//             </button>
//             <button
//               onClick={() => handleButtonClick("Offices", "Offices")}
//               className={buttonClass("Offices")}
//             >
//               Contact Offices
//             </button>
//             <button
//               onClick={() =>
//                 handleButtonClick("TechnicalSupport", "TechnicalSupport")
//               }
//               className={buttonClass("TechnicalSupport")}
//             >
//               Technical Support
//             </button>
//             <button
//               onClick={() =>
//                 handleButtonClick("CustomerSupport", "CustomerSupport")
//               }
//               className={buttonClass("CustomerSupport")}
//             >
//               Customer Support
//             </button>
//             <button
//               onClick={() =>
//                 handleButtonClick("Representative", "Representative")
//               }
//               className={buttonClass("Representative")}
//             >
//               Representative
//             </button>
//           </div>
//         </div>

//         {activeSection === "Stores" && (
//           <div className="p-6 bg-blue-50 shadow-lg rounded-lg w-full md:w-96 md:h-48">
//             <div className="space-y-4">
//               <button
//                 onClick={() =>
//                   handleDetailClick("IstanbulStore", "Istanbul CANiK Store")
//                 }
//                 className={detailButtonClass("IstanbulStore")}
//               >
//                 Istanbul CANiK Store
//               </button>
//               <button
//                 onClick={() =>
//                   handleDetailClick("AnkaraStore", "Ankara CANiK Store")
//                 }
//                 className={detailButtonClass("AnkaraStore")}
//               >
//                 Ankara CANiK Store
//               </button>
//               <button
//                 onClick={() =>
//                   handleDetailClick("SamsunStore", "Samsun CANiK Store")
//                 }
//                 className={detailButtonClass("SamsunStore")}
//               >
//                 Samsun CANiK Store
//               </button>
//             </div>
//           </div>
//         )}

//         {activeSection === "Offices" && (
//           <div className="p-6 bg-blue-50 shadow-lg rounded-lg w-full md:w-96 md:h-36">
//             <div className="space-y-4">
//               <button
//                 onClick={() =>
//                   handleDetailClick("IstanbulOffice", "Istanbul Office")
//                 }
//                 className={detailButtonClass("IstanbulOffice")}
//               >
//                 Istanbul Office
//               </button>
//               <button
//                 onClick={() =>
//                   handleDetailClick("AnkaraOffice", "Ankara Office")
//                 }
//                 className={detailButtonClass("AnkaraOffice")}
//               >
//                 Ankara Office
//               </button>
//             </div>
//           </div>
//         )}

//         {(activeSection === "Headquarters" ||
//           activeSection === "Factory" ||
//           activeSection === "TechnicalSupport" ||
//           activeSection === "CustomerSupport" ||
//           activeSection === "Representative" ||
//           activeDetail) && (
//           <div className="p-6 bg-blue-50 shadow-lg rounded-lg w-full md:w-96 md:h-96">
//             <div className="space-y-3">
//               <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">
//                 {currentTitle}
//               </h2>
//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
//               />
//               <input
//                 type="text"
//                 name="telephone"
//                 placeholder="Telephone"
//                 value={formData.telephone}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
//               />
//               <input
//                 type="text"
//                 name="fax"
//                 placeholder="Fax"
//                 value={formData.fax}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
//               />
//               <input
//                 type="text"
//                 name="kep"
//                 placeholder="KEP"
//                 value={formData.kep}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
//               />
//             </div>
//             <div className="flex justify-end mt-4">
//               <button
//                 onClick={handleAddData}
//                 className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//               >
//                 {editIndex !== null ? "Update" : "Add"}
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//       {savedData.length > 0 && (
//         <div className="flex flex-wrap gap-6 mt-6">
//           {savedData.map((data, index) => (
//             <div
//               key={index}
//               className="p-6 bg-blue-50 shadow-lg rounded-lg w-full md:w-96"
//             >
//               <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">
//                 {data.section}
//               </h2>
//               <div className="font-bold mb-4">
//                 <p>Address: {data.address}</p>
//                 <p>Telephone: {data.telephone}</p>
//                 <p>Fax: {data.fax}</p>
//                 <p>KEP: {data.kep}</p>
//               </div>
//               <div className="flex justify-end space-x-2">
//                 <button
//                   onClick={() => handleEdit(index)}
//                   className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(index)}
//                   className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Contact;
