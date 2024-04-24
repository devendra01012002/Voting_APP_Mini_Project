import  { useEffect, useState } from "react";
import "./ElectionPage.css";
const ElectionPage = () => {
  let votcount = -1;

  let [count, setCount] = useState(votcount);
  // let [totalContestants, settotalContestants] = useState(0);

  useEffect(() => {
    setCount(votcount + 1);
  }, [votcount]);

  return (
    <div className="Election_section">
      <div className="Election">
        <h1>India Presidential Election 2024</h1>
        <p>
          candidates from the two main plitical parites the democrats and the
          republicans begin their campaign trails. They set up their team and
          start going on tour around the country to rally for support and to
          fundraise for their campaigns
        </p>

        <div className="Election_date">
          <span>Mon,Apr 28,2024 - Thu,Apr 31,2024</span>
        </div>

        <div className="contestent">
          <button>{count} votes</button>
          <button>{2} contestants</button>
        </div>
        <div className="go_to_contest">
          <button>Contest</button>
        </div>
      </div>
    </div>
  );
};

export default ElectionPage;
