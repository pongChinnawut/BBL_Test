import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Page1() {
  const [apiMain, setApiMain] = useState("");
  const [key, setKey] = useState("");
  const [loadBtnCheck, setloadBtnCheck] = useState(true);
  const [isLoading, setisLoading] = useState(false);
  const callApiOne = () => {
    setisLoading(true);
    axios
      .get("https://asia-east2-candidateplayground.cloudfunctions.net/key")
      .then((res) => {
        callApiMain(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const callApiMain = (data) => {
    axios
      .get("https://asia-east2-candidateplayground.cloudfunctions.net/value", {
        headers: {
          Authorization: `${data.key}`,
        },
      })
      .then((res) => {
        setisLoading(false);
        setKey(data.key);
        setApiMain(res.data);
        setloadBtnCheck(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Header title="Developer Candidate Test #Page I" />
      <div className="row g-0">
        <div className="col-md-12 col-lg-2"></div>
        <div className="col-md-12 col-lg-8 container-section">
          {loadBtnCheck && (
            <div>
              <span className="text-suggest">
                Step I : Please press button "Load Data"
              </span>
              <button className="button" onClick={() => callApiOne()}>
                Load Data
              </button>
            </div>
          )}
          {isLoading && (
            <div>
              <i className="bx bx-loader bx-spin icon-loading"></i>
            </div>
          )}

          {apiMain && (
            <div>
              <span className="text-suggest">
                Step II : Please press button "Calculate"
              </span>
              <div className="text-page1">
                {apiMain.value.map((cur, index) => (
                  <div key={index} style={{ fontSize: 16 }}>
                    {cur}
                  </div>
                ))}
              </div>
              <Link
                className="button"
                to={{
                  pathname: "/page2",
                  state: { data: apiMain.value, keyData: key },
                }}
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                Calculate
              </Link>
            </div>
          )}
        </div>
        <div className="col-md-12 col-lg-2"></div>
      </div>
    </div>
  );
}

export default Page1;
