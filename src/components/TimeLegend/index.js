import { Box, Typography } from "@material-ui/core";

import React from "react";
import { Wrapper } from "./styled";
import { format } from "date-fns";
import { id } from "date-fns/esm/locale";

const formatDate = (date) => {
  let dateFormatted = new Date(date);
  return format(dateFormatted, "dd MMMM yyyy", { locale: id });
};
const TimeLegend = ({ date, toggleData, ...props }) => {
  let dateParsed = date !== "" ? formatDate(date) : "";

  return (
    <Wrapper>
      <h5>{dateParsed}</h5>
    </Wrapper>
  );
};
export default TimeLegend;
