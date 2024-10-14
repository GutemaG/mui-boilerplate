import { Box, Grid2, Typography } from "@mui/material";
import React from "react";

export type DefaultPageHeaderProps = {
  title?: string;
  subTitle?: React.ReactNode | string;
  rightSideComponent?: React.ReactElement;
};

export const PageHeader = (props: DefaultPageHeaderProps) => {
  return (
    <Box mb={2}>
      <Grid2
        container
        direction="row"
        justifyContent={"space-between"}
        flexDirection="row"
        alignItems="center"
        spacing={2}
        wrap="nowrap"
        p={1}
      >
        {(props.title ?? props.subTitle) && (
          <Grid2>
            <Typography variant="h4" sx={{ fontWeight: 500, fontSize: "35px" }}>
              {props.title}
            </Typography>
            {typeof props?.subTitle === "string" ? (
              <Typography variant="subtitle1">{props?.subTitle}</Typography>
            ) : (
              props?.subTitle
            )}
          </Grid2>
        )}
        {props.rightSideComponent && <Grid2>{props.rightSideComponent}</Grid2>}
      </Grid2>
    </Box>
  );
};
