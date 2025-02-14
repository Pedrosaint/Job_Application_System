import React, { useState } from "react";
import Select, { SingleValue } from "react-select";
import countryList from "react-select-country-list";

interface CountryOption {
  value: string;
  textLabel: string; // For filtering
  customLabel: JSX.Element; // For rendering
}

const CountrySelect: React.FC<{ onChange: (value: string) => void }> = ({
  onChange,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(
    null
  );

  const options: CountryOption[] = countryList()
    .getData()
    .map((country) => ({
      value: country.value,
      textLabel: country.label, // This is used for filtering
      customLabel: (
        <div className="flex items-center">
          <img
            src={`https://flagcdn.com/w40/${country.value.toLowerCase()}.png`}
            alt={country.label}
            className="w-5 h-4 mr-2"
          />
          {country.label}
        </div>
      ),
    }));

  const handleChange = (selectedOption: SingleValue<CountryOption>) => {
    setSelectedCountry(selectedOption);
    onChange(selectedOption?.value || "");
  };

  return (
    <div>
      <label className="block text-gray-700 font-medium mb-1">
        Country <span className="text-red-500">*</span>
      </label>
      <Select
        options={options}
        value={selectedCountry}
        onChange={handleChange}
        getOptionLabel={(e) => e.textLabel} // Displays flag + name
        formatOptionLabel={(e) => e.customLabel}
        getOptionValue={(e) => e.value} // Ensures proper selection behavior
        filterOption={
          (option, input) =>
            option.data.textLabel.toLowerCase().includes(input.toLowerCase()) // Uses string label
        }
        styles={{
          control: (provided, state) => ({
            ...provided,
            borderColor: state.isFocused ? "gray" : provided.borderColor,
            boxShadow: "none", // Removes blue outline
            "&:hover": { borderColor: "" },
          }),
        }}
      />
    </div>
  );
};

export default CountrySelect;
