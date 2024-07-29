import React from "react";

const About: React.FC = () => {
  // const [title, setTitle] = useState<string>("");
  // const [description, setDescription] = useState<string>("");
  // const [entries, setEntries] = useState<
  //   { title: string; description: string }[]
  // >([]);
  // const [editingIndex, setEditingIndex] = useState<number | null>(null);

  // const handleSubmit = () => {
  //   if (title.trim() === "" || description.trim() === "") {
  //     alert("Please fill in both fields.");
  //     return;
  //   }

  //   if (editingIndex !== null) {
  //     // Update existing entry
  //     const updatedEntries = [...entries];
  //     updatedEntries[editingIndex] = { title, description };
  //     setEntries(updatedEntries);
  //     setEditingIndex(null);
  //   } else {
  //     // Add new entry
  //     setEntries([...entries, { title, description }]);
  //   }

  //   // Clear the input fields
  //   setTitle("");
  //   setDescription("");
  // };

  // const handleEdit = (index: number) => {
  //   const entry = entries[index];
  //   setTitle(entry.title);
  //   setDescription(entry.description);
  //   setEditingIndex(index);
  // };

  // const handleDelete = (index: number) => {
  //   const updatedEntries = entries.filter((_, i) => i !== index);
  //   setEntries(updatedEntries);
  // };

  return (
    <>
      {/* <div className="p-4 ml-0 md:ml-20">
      <div className="mb-6 text-3xl font-bold text-gray-800">
        <p>Enter Information for the About Section</p>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg shadow-lg w-full max-w-auto h-80">
        <div className="mb-2">
          <label className="block text-lg font-semibold text-gray-700 ">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
          />

          <label className="block text-lg font-semibold text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          {editingIndex !== null ? "Update Information" : "Add Information"}
        </button>
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-1  gap-4">
          {entries.map((entry, index) => (
            <div key={index} className="bg-blue-50 p-4 rounded-lg shadow-lg">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-lg font-medium text-blue-700">
                  {entry.title}
                </p>
                <p className="mt-2">{entry.description}</p>
                <div className="mt-4 flex  justify-end space-x-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="py-1 px-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="py-1 px-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div> */}
    </>
  );
};

export default About;
