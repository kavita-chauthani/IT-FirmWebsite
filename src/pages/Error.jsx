import { NavLink } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <section className="error-page">
        <div className="content">
          <h2 className="header">404</h2>
          <h4>Sorry! Page not found</h4>
          <p>
            Oops! it seems like the page you are trying to acess doesnt exist,
            if you believe ther is an issue ,feel fre toreport it, and we will
            look into it.
          </p>
          <div className="btns">
            <NavLink to="/">return home</NavLink>
            <NavLink to="/contact">return home</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
