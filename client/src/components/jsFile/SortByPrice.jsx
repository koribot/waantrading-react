import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SortByPrice({ handleChange, sortPrice }) {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        {/* <InputLabel
          style={{ textAlign: "center" }}
          id="demo-simple-select-autowidth-label"
        >
          Price
        </InputLabel> */}
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={sortPrice}
          onChange={handleChange}
          autoWidth
          //   label="Price"
          style={{ height: "30px", border: "none" }}
          className="dark-text-color-white"
          defaultValue={sortPrice}
        >
          <MenuItem value="--">
            <em>--</em>
          </MenuItem>
          <MenuItem value="Lowest">Lowest</MenuItem>
          <MenuItem value="Highest">Highest</MenuItem>
          {/* <MenuItem value={22}>Twenty one and a half</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
}
