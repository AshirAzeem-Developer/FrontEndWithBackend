import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "./firbasemethods";

const ProtectedRoute = ({ Component }) => {
  const [laoder, setLoader] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoader(true);
    checkAuth()
      .then(() => {
        setLoader(false);
        console.log("User Logged In");
        navigate("/admindashbord");
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
        navigate("/login");
      });
  }, []);
  return (
    <>
      <div>{laoder ? <h1>Loading...</h1> : <Component />}</div>

    </>
  );
};

export default ProtectedRoute;
