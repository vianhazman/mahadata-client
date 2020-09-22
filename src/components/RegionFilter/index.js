import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";

import TextField from "@material-ui/core/TextField";

import PropTypes from "prop-types";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
    zIndex: 9,
  },
  Autocomplete: {
    zIndex: 9,
  },
}));

const RegionFilter = ({ selectedRegion, setSelectedRegion, title, data }) => {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Autocomplete
          className={classes.Autocomplete}
          options={data}
          value={selectedRegion}
          onChange={(event, newValue) => {
            setSelectedRegion(newValue);
          }}
          getOptionLabel={(option) => option}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label={title} variant="outlined" />
          )}
        />
      </FormControl>
    </div>
  );
};

RegionFilter.propTypes = {
  selectedRegion: PropTypes.string.isRequired,
  setSelectedRegion: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default RegionFilter;
