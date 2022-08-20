import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addFBDoc } from "../../redux/features/productsSlice";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SelectOption = ({ categoryName, setCategoryName }) => {
  const dispatch = useDispatch();

  const categories = ["HTML", "CSS", "Javascript", "ReactJs"];

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCategoryName(typeof value === "string" ? value.split(",") : value);

  };

  return (
    <div>
      <FormControl sx={{ width: 200 }} margin="normal">
        <InputLabel>Tag</InputLabel>
        <Select
          multiple
          value={categoryName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {categories.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={categoryName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectOption;
