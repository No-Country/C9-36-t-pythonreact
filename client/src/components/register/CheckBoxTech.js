/* Este checkbox se va a mostrar cuando se necesiten elegir las tecnologias que utiliza el usurio */
import React from "react";

const CheckBoxTech = () => {
  return (
    <>
      <div
        className="fixed bottom-0 right-0 m-4 mx-auto rounded-lg bg-[#264653] shadow-lg "
        style={{ width: "312px", height: "606px" }}
      >
        <div>
          <p
            className="m-4 text-left text-2xl
       text-white"
          >
            Selecciona las tecnologías que utilizas
          </p>
        </div>
        <div className="p-4">
          <label className="mb-4 flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-6 w-6 text-indigo-600"
              name="csharp"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
              className="ml-2 h-6 w-6"
              alt="C#"
            />
            <span className="ml-3 text-lg font-medium text-gray-900">C#</span>
          </label>
          <label className="mb-4 flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-6 w-6 text-indigo-600"
              name="figma"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              className="ml-2 h-6 w-6"
              alt="Figma"
            />
            <span className="ml-3 text-lg font-medium text-gray-900">
              Figma
            </span>
          </label>
          <label className="mb-4 flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-6 w-6 text-indigo-600"
              name="javascript"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              className="ml-2 h-6 w-6"
              alt="JavaScript"
            />
            <span className="ml-3 text-lg font-medium text-gray-900">
              JavaScript
            </span>
          </label>
          <label className="mb-4 flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-6 w-6 text-indigo-600"
              name="python"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              className="ml-2 h-6 w-6"
              alt="Python"
            />
            <span className="ml-3 text-lg font-medium text-gray-900">
              Python
            </span>
          </label>
          <label className="mb-4 flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-6 w-6 text-indigo-600"
              name="react"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              className="ml-2 h-6 w-6"
              alt="React"
            />
            <span className="ml-3 text-lg font-medium text-gray-900">
              React
            </span>
          </label>
          <label className="mb-4 flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-6 w-6 text-indigo-600"
              name="sketch"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg"
              className="ml-2 h-6 w-6"
              alt="Sketch"
            />
            <span className="ml-3 text-lg font-medium text-gray-900">
              Sketch
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default CheckBoxTech;
