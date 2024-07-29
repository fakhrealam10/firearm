import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import grapesjs from "grapesjs"; // Ensure you have grapesjs imported
import "grapesjs/dist/css/grapes.min.css";
// Import the plugin (make sure it's installed)
import gjsBlocksBasic from "grapesjs-blocks-basic";
import gjsForms from "grapesjs-plugin-forms";

const GrapesJSEditor: React.FC = () => {
  const { id } = useParams<{ id?: string }>(); // id might be undefined
  const [editor, setEditor] = useState<any>(null);

  useEffect(() => {
    const initEditor = () => {
      const editorInstance = grapesjs.init({
        container: "#gjs",
        fromElement: true,
        storageManager: true, // You can configure storageManager as needed
        pageManager: {
          pages: [
            // Initialize with an empty page or a default page
          ],
        },
        plugins: [gjsBlocksBasic, gjsForms], // Add the plugins here
        pluginsOpts: {
          gjsBlocksBasic: {}, // Configure options for the basic blocks plugin if needed
          gjsForms: {}, // Configure options for the forms plugin if needed
          // Configure options for the navbar plugin if needed
        },
      });
      // Adding custom blocks
      editorInstance.BlockManager.add("custom-slider", {
        label: "Slider",
        content: `<div class="slider">
                       <input type="range" min="0" max="100" value="50" class="slider-range">
                     </div>`,
        category: "Custom",
      });

      editorInstance.BlockManager.add("custom-form", {
        label: "Form",
        content: `<form>
                       <div class="form-group">
                         <label for="name">Name:</label>
                         <input type="text" id="name" name="name">
                       </div>
                       <div class="form-group">
                         <label for="email">Email:</label>
                         <input type="email" id="email" name="email">
                       </div>
                       <button type="submit">Submit</button>
                     </form>`,
        category: "Custom",
      });

      editorInstance.BlockManager.add("custom-table", {
        label: "Table",
        content: `<table border="1">
                       <thead>
                         <tr>
                           <th>Header 1</th>
                           <th>Header 2</th>
                           <th>Header 3</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr>
                           <td>Row 1, Col 1</td>
                           <td>Row 1, Col 2</td>
                           <td>Row 1, Col 3</td>
                         </tr>
                         <tr>
                           <td>Row 2, Col 1</td>
                           <td>Row 2, Col 2</td>
                           <td>Row 2, Col 3</td>
                         </tr>
                       </tbody>
                     </table>`,
        category: "Custom",
      });

      editorInstance.BlockManager.add("custom-navbar", {
        label: "Navbar",
        content: `<nav class="navbar">
                      <ul class="navbar-menu">
                        <li class="navbar-item"><a href="#">Home</a></li>
                        <li class="navbar-item"><a href="#">About</a></li>
                        <li class="navbar-item"><a href="#">Contact</a></li>
                      </ul>
                    </nav>`,
        category: "Custom",
      });

      setEditor(editorInstance);
    };

    if (!editor) {
      initEditor();
    } else if (id) {
      // Load and display the page content based on the ID
      loadPageContent(id);
    }
  }, [id, editor]);

  const loadPageContent = (pageId: string) => {
    // Fetch or retrieve the page content from localStorage or API
    const content = localStorage.getItem(`page_${pageId}`);
    if (content && editor) {
      editor.setComponents(content); // Set the components (HTML)
      // Optionally set the styles if needed
      // const styles = localStorage.getItem(`styles_${pageId}`);
      // if (styles) editor.addStyleToDocument(styles);
    }
  };

  const savePageContent = (pageId: string, content: string) => {
    localStorage.setItem(`page_${pageId}`, content);
    // Optionally save styles if needed
    // const styles = editor.getCss();
    // localStorage.setItem(`styles_${pageId}`, styles);
  };

  useEffect(() => {
    if (editor && id) {
      editor.on("component:update", () => {
        const content = editor.getHtml();
        savePageContent(id, content);
      });
    }
  }, [editor, id]);

  return (
    <div id="gjs" style={{ height: "100vh" }}>
      {/* GrapesJS editor will be rendered here */}
    </div>
  );
};

export default GrapesJSEditor;
