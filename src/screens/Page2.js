import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Header from "../components/Header";

function Page2() {
  const [sumResult, setSumResult] = useState(0);
  const { data, keyData } = useLocation().state;
  let history = useHistory();
  useEffect(() => {
    let sum = 0;
    data.map((cur) => {
      sum += cur;
    });
    setSumResult(sum);
  }, []);

  return (
    <div>
      <Header title="Developer Candidate Test #Page II" />
      <div className="row g-0">
        <div className="col-md-12 col-lg-2"></div>
        <div className="col-md-12 col-lg-8">
          <button className="button-back" onClick={() => history.goBack()}>
            Back
          </button>
          <div className="body-page2">
            <div className="text-page2">Key : {keyData}</div>
            <div className="text-page2">Summation : {sumResult}</div>
          </div>
        </div>
        <div className="col-md-12 col-lg-2"></div>
      </div>
    </div>
  );
}

export default Page2;
