import React from "react";

const WizardPage3 = ({ visibility, formData, handleChange }) => {
  return (
    <div className={visibility ? "" : "hidden"}>
      <form className="p-6">
        {/* Select Model */}
        <div className="mb-4">
          <label htmlFor="model.type" className="block text-sm font-semibold mb-2">
            Select Model:
          </label>
          <select
            id="model.type"
            name="model.type"
            value={formData.model.type}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="Command">Command</option>
            <option value="Generation">Generation</option>
            <option value="Representation">Representation</option>
            <option value="Rerank">Rerank</option>
          </select>
        </div>

        {/* Enable Custom Model */}
        <div className="mb-4">
          <label htmlFor="model.is_custom" className="flex items-center">
            <input
              type="checkbox"
              id="model.is_custom"
              name="model.is_custom"
              checked={formData.model.is_custom}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-sm">Enable Custom Model</span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default WizardPage3;
