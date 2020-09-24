import { Paper, Typography, Box, Grid } from "@material-ui/core";

import React from "react";
import { TOGGLE } from "../../constants/MapConstants";
import { getChangeCaption } from "./utils";

const HoverTooltip = ({ hoverInfo, heatData, toggle }) => {
  let dataExist =
    heatData.data[hoverInfo.object.properties.kab] !== undefined ? true : false;

  return (
    <Paper
      style={{
        position: "absolute",
        zIndex: 1,
        pointerEvents: "none",
        padding: "0.5%",
        left: hoverInfo.x,
        top: hoverInfo.y,
      }}
    >
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography variant="caption">
          <Box fontWeight="bold" mr={2}>
            {toggle === TOGGLE.CITY
              ? hoverInfo.object.properties.KABKOT
              : hoverInfo.object.properties.Propinsi}
            {toggle === TOGGLE.CITY
              ? `, ${hoverInfo.object.properties.PROVINSI}`
              : ""}
          </Box>
        </Typography>
        <Typography variant="caption">{heatData.date ?? ""}</Typography>
      </Box>
      {dataExist && (
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
            >
              {getChangeCaption(hoverInfo, heatData)}
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography variant="caption">Mobilitas</Typography>
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box display="flex" alignItems="center" justifyContent="center">
                <Typography variant="h4" fontStyle="oblique">
                  <Box fontWeight="bold">1000</Box>
                </Typography>
              </Box>

              <Box display="flex" justifyContent="center" alignItems="center">
                <Typography variant="caption">Kasus</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </Paper>
  );
};

export default HoverTooltip;
