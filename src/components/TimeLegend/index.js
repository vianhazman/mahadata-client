import React from "react";
import { Wrapper } from "./styled";
import { Typography, Box } from "@material-ui/core";
import { format } from "date-fns";
import { id } from "date-fns/esm/locale";

const formatDate = (date) => {
  let dateFormatted = new Date(date);
  return format(dateFormatted, "dd MMMM yyyy", { locale: id });
};
const TimeLegend = ({ date, ...props }) => {
  let dateParsed = date !== "" ? formatDate(date) : "";

  return (
    <Wrapper>
      <Typography variant="caption">
        Peta menunjukan sebaran mobilitas pada tanggal
      </Typography>
      <Typography variant="h5">
        <Box fontWeight="bold">{dateParsed}</Box>
      </Typography>
    </Wrapper>
  );
};
export default TimeLegend;
