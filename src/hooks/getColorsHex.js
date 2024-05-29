import { colorsObject } from "./";

export const getColorsHex = (color) => {
  // return the hex of the color the color matches it name
  // colorsObject is an object that contains name and hex of colors
  const matchedColor = colorsObject.find(
    (col) => col.name.toLowerCase() === color.toLowerCase()
  );
  return matchedColor ? matchedColor.hex : "#000000";
};
