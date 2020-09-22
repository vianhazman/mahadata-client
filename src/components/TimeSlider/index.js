import React, { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import PauseIcon from "@material-ui/icons/Pause";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Slider from "@material-ui/core/Slider";
import { StyledContainer } from "./styled";

const TimeSlider = ({ data, index, setIndex }) => {
  const [currentInterval, setCurrentInterval] = useState(0);
  const maxValue = data.length - 1;

  useEffect(() => {
    if (index === maxValue) {
      clearInterval(currentInterval);
      setCurrentInterval(0);
    }
  }, [setCurrentInterval, currentInterval, index, maxValue]);

  function onButtonClick() {
    if (currentInterval) {
      clearInterval(currentInterval);
      setCurrentInterval(0);
    } else {
      if (index === maxValue) {
        setIndex(0);
      }
      setCurrentInterval(
        setInterval(() => {
          setIndex((index) => index + 1);
        }, 500)
      );
    }
  }

  const handleChange = (event, newValue) => {
    setIndex(index);
  };

  return (
    <StyledContainer container>
      <Grid item xs={1}>
        <Button
          variant="contained"
          size="small"
          color="secondary"
          onClick={onButtonClick}
        >
          {currentInterval ? (
            <PauseIcon></PauseIcon>
          ) : (
            <PlayArrowIcon></PlayArrowIcon>
          )}
        </Button>
      </Grid>
      <Slider
        className="slider"
        aria-labelledby="label"
        min={0}
        max={maxValue}
        step={1}
        value={index}
        onChange={handleChange}
      />
      <Grid item xs={11}></Grid>
    </StyledContainer>
  );
};

export default TimeSlider;
