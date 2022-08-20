import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { USER_LOGIN } from "../../util/config";

const CheckoutTemplate = (props) => {
  //path, exact, Component

  const { Element, ...restProps } = props;

  if (!localStorage.getItem(USER_LOGIN)) {
    return <Navigate to="/login" />;
  }

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Element {...propsRoute} />
          </Fragment>
        );
      }}
    >
      {props.children}
    </Route>
  );
};

export default CheckoutTemplate;
