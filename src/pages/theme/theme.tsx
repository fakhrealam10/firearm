import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface DropdownItem {
  label: string;
  link: string;
  id: number;
  dropdownItems?: DropdownItem[];
}

interface NavbarItem {
  label: string;
  link: string;
  id: number;
  dropdownItems?: DropdownItem[];
}

const Theme: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the ID from URL
  const [navbarItems, setNavbarItems] = useState<NavbarItem[]>([]);

  const [labelInput, setLabelInput] = useState("");
  const [linkInput, setLinkInput] = useState("");
  const [dropdownLabelInput, setDropdownLabelInput] = useState("");
  const [dropdownLinkInput, setDropdownLinkInput] = useState("");
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [editLabelInput, setEditLabelInput] = useState("");
  const [editLinkInput, setEditLinkInput] = useState("");
  const [isAddingDropdown, setIsAddingDropdown] = useState<number | null>(null);
  const [isEditingDropdown, setIsEditingDropdown] = useState<{
    navIndex: number | null;
    dropdownIndex: number | null;
  }>({ navIndex: null, dropdownIndex: null });
  const [editDropdownLabelInput, setEditDropdownLabelInput] = useState("");
  const [editDropdownLinkInput, setEditDropdownLinkInput] = useState("");
  const navigate = useNavigate();
  const generateUniqueId = () => Date.now();

  const handleAddNavItem = () => {
    if (labelInput.trim() !== "" && linkInput.trim() !== "") {
      const newItem: NavbarItem = {
        label: labelInput,
        link: linkInput,
        id: generateUniqueId(),
        dropdownItems: [],
      };
      setNavbarItems([...navbarItems, newItem]);
      setLabelInput("");
      setLinkInput("");
    }
  };

  const handleEditNavItem = (index: number) => {
    const itemToEdit = navbarItems[index];
    setIsEditing(index);
    setEditLabelInput(itemToEdit.label);
    setEditLinkInput(itemToEdit.link);
  };

  const handleSaveEdit = (index: number) => {
    const updatedItems = navbarItems.map((item, i) =>
      i === index
        ? {
            ...item,
            label: editLabelInput,
            link: editLinkInput,
          }
        : item
    );
    setNavbarItems(updatedItems);
    setIsEditing(null);
    setEditLabelInput("");
    setEditLinkInput("");
  };

  const handleDeleteNavItem = (index: number) => {
    const updatedItems = navbarItems.filter((_, i) => i !== index);
    setNavbarItems(updatedItems);
  };

  const handleAddDropdownItem = (navIndex: number) => {
    if (dropdownLabelInput.trim() !== "" && dropdownLinkInput.trim() !== "") {
      const newDropdownItem: DropdownItem = {
        label: dropdownLabelInput,
        link: dropdownLinkInput,
        id: generateUniqueId(),
        dropdownItems: [],
      };
      const updatedItems = navbarItems.map((item, i) =>
        i === navIndex
          ? {
              ...item,
              dropdownItems: [...(item.dropdownItems || []), newDropdownItem],
            }
          : item
      );
      setNavbarItems(updatedItems);
      setDropdownLabelInput("");
      setDropdownLinkInput("");
      setIsAddingDropdown(null);
    }
  };

  const handleDeleteDropdownItem = (
    navIndex: number,
    dropdownIndex: number
  ) => {
    const updatedItems = navbarItems.map((item, i) =>
      i === navIndex
        ? {
            ...item,
            dropdownItems: item.dropdownItems?.filter(
              (_, j) => j !== dropdownIndex
            ),
          }
        : item
    );
    setNavbarItems(updatedItems);
  };

  const handleEditDropdownItem = (navIndex: number, dropdownIndex: number) => {
    const dropdownItemToEdit =
      navbarItems[navIndex].dropdownItems?.[dropdownIndex];
    if (dropdownItemToEdit) {
      setIsEditingDropdown({ navIndex, dropdownIndex });
      setEditDropdownLabelInput(dropdownItemToEdit.label);
      setEditDropdownLinkInput(dropdownItemToEdit.link);
    }
  };

  const handleSaveEditDropdown = (navIndex: number, dropdownIndex: number) => {
    const updatedItems = navbarItems.map((item, i) =>
      i === navIndex
        ? {
            ...item,
            dropdownItems: item.dropdownItems?.map((dropdownItem, j) =>
              j === dropdownIndex
                ? {
                    label: editDropdownLabelInput,
                    link: editDropdownLinkInput,
                    id: dropdownItem.id,
                    dropdownItems: dropdownItem.dropdownItems,
                  }
                : dropdownItem
            ),
          }
        : item
    );
    setNavbarItems(updatedItems);
    setIsEditingDropdown({ navIndex: null, dropdownIndex: null });
    setEditDropdownLabelInput("");
    setEditDropdownLinkInput("");
  };

  useEffect(() => {
    const fetchNavbarItem = async () => {
      const savedNavbarItems = localStorage.getItem("navbarItems");
      if (savedNavbarItems) {
        const navbarItems = JSON.parse(savedNavbarItems);
        const item = navbarItems.find(
          (item: NavbarItem) => item.id === parseInt(id || "", 10)
        );
        setNavbarItems(item ? [item] : []); // Or however you want to handle this
      }
    };

    fetchNavbarItem();
  }, [id]);

  const handlePageComponentsClick = (id: number) => {
    navigate(`/page/${id}`); // Navigate to the dynamic page with the unique ID
  };

  return (
    <div className="p-4">
      <div className="w-full max-w-lg mx-auto bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">User NavBar</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Label:</label>
            <input
              type="text"
              value={labelInput}
              onChange={(e) => setLabelInput(e.target.value)}
              className="w-full border rounded py-2 px-3"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Link:</label>
            <input
              type="text"
              value={linkInput}
              onChange={(e) => setLinkInput(e.target.value)}
              className="w-full border rounded py-2 px-3"
            />
          </div>
          <button
            onClick={handleAddNavItem}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Add Nav Item
          </button>
        </div>
      </div>

      <ul className="mt-4 space-y-4">
        {navbarItems.map((item, index) => (
          <li key={index} className="bg-white p-4 border rounded-lg shadow-md">
            {isEditing === index ? (
              <div className="flex flex-col md:flex-row gap-2">
                <input
                  type="text"
                  value={editLabelInput}
                  onChange={(e) => setEditLabelInput(e.target.value)}
                  className="flex-1 border rounded py-2 px-3"
                />
                <input
                  type="text"
                  value={editLinkInput}
                  onChange={(e) => setEditLinkInput(e.target.value)}
                  className="flex-1 border rounded py-2 px-3"
                />
                <button
                  onClick={() => handleSaveEdit(index)}
                  className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                  Save
                </button>
                <button
                  onClick={() => handleDeleteNavItem(index)}
                  className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <span className="text-gray-700">
                  {item.label} - {item.link}
                </span>
                <div className="flex gap-2 mt-2 md:mt-0">
                  <button
                    onClick={() => handleEditNavItem(index)}
                    className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteNavItem(index)}
                    className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() =>
                      setIsAddingDropdown(
                        isAddingDropdown === index ? null : index
                      )
                    }
                    className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700"
                  >
                    {isAddingDropdown === index ? "Cancel" : "Add Dropdown"}
                  </button>
                  <button
                    onClick={() => handlePageComponentsClick(item.id)}
                    className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700"
                  >
                    Page Components
                  </button>
                </div>
              </div>
            )}

            {isAddingDropdown === index && (
              <div className="flex flex-col md:flex-row gap-2 mt-4">
                <input
                  type="text"
                  value={dropdownLabelInput}
                  onChange={(e) => setDropdownLabelInput(e.target.value)}
                  className="flex-1 border rounded py-2 px-3"
                  placeholder="Dropdown Label"
                />
                <input
                  type="text"
                  value={dropdownLinkInput}
                  onChange={(e) => setDropdownLinkInput(e.target.value)}
                  className="flex-1 border rounded py-2 px-3"
                  placeholder="Dropdown Link"
                />
                <button
                  onClick={() => handleAddDropdownItem(index)}
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
            )}

            <ul className="ml-4 mt-2 space-y-2">
              {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                <li
                  key={dropdownItem.id}
                  className="bg-gray-100 p-2 border rounded-lg"
                >
                  {isEditingDropdown.navIndex === index &&
                  isEditingDropdown.dropdownIndex === dropdownIndex ? (
                    <div className="flex flex-col md:flex-row gap-2">
                      <input
                        type="text"
                        value={editDropdownLabelInput}
                        onChange={(e) =>
                          setEditDropdownLabelInput(e.target.value)
                        }
                        className="flex-1 border rounded py-1 px-2"
                      />
                      <input
                        type="text"
                        value={editDropdownLinkInput}
                        onChange={(e) =>
                          setEditDropdownLinkInput(e.target.value)
                        }
                        className="flex-1 border rounded py-1 px-2"
                      />
                      <button
                        onClick={() =>
                          handleSaveEditDropdown(index, dropdownIndex)
                        }
                        className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700"
                      >
                        Save
                      </button>
                      <button
                        onClick={() =>
                          handleDeleteDropdownItem(index, dropdownIndex)
                        }
                        className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <span className="text-gray-700">
                        {dropdownItem.label} - {dropdownItem.link}
                      </span>
                      <div className="flex gap-2 mt-2 md:mt-0">
                        <button
                          onClick={() =>
                            handleEditDropdownItem(index, dropdownIndex)
                          }
                          className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() =>
                            handleDeleteDropdownItem(index, dropdownIndex)
                          }
                          className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Theme;
