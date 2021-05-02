import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import classes from "./crumb.module.css";
import Text from "./Text";

const Crumb = (props) => {
  const {history, location: { pathname }, } = props;
  const pathnames = pathname.split("/").filter((x) => x);
  return (
    <div id={classes.pointer}>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Text key={name}>{name}</Text>
        ) : (
          <NavLink key={name} onClick={() => history.push(routeTo)}>
            {name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default withRouter(Crumb);
