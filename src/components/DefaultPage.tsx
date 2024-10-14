import { Box, Breadcrumbs, Link, Paper } from "@mui/material";
import { PropsWithChildren, ReactNode } from "react";
import { DefaultPageHeaderProps, PageHeader } from "./PageHeader";

type DefaultPageProps = {
  otherComponent?: ReactNode;
  breadCrumbLinks?: { href: string; title: string }[];
} & DefaultPageHeaderProps;

export const DefaultPage = (props: PropsWithChildren<DefaultPageProps>) => {
  return (
    <Box p={2} overflow={"auto"}>
      {props.breadCrumbLinks?.length && (
        <Breadcrumbs sx={{ color: "#000" }}>
          {props.breadCrumbLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              underline="hover"
              color="inherit"
              // color={
              //   index === (props.breadCrumbLinks?.length ?? 0) - 1
              //     ? "primary"
              //     : "inherit"
              // }
            >
              {link.title}
            </Link>
          ))}
        </Breadcrumbs>
      )}
      <PageHeader {...props} />

      <Paper sx={{ p: 2 }} component={"div"}>
        {props.children}
      </Paper>
    </Box>
  );
};
