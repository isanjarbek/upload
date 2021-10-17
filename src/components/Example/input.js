import React from "react";
import useLocalStorage from "./useLocalstorage";
import useUpdateLogger from "./useUpdateLogger";

const Input = () => {
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLogger(name);
  return (
    <div>
      <input
        type="number"
        value={name}
        onChange={(e) => SVGAnimateTransformElement(e.target.value)}
      />
    </div>
  );
};

export default Input;
