import "./ElectionPage.css";
const ElectionPage = () => {
  return (
    <div className="Rules">
      <div className="Rule_sec">
        <h2>Voting Rules In India</h2>
        <ol>
          <li>
            <h4>Model Code of Conduct (MCC): </h4>
            <span>
              Only Indian citizens who are 18 years of age or older are eligible
              to vote. The voter must also be registered in the electoral roll
              of their respective .
            </span>
          </li>
          <li>
            <h4>Voter Eligibility: </h4>
            <span>
              The MCC is a set of guidelines issued by the Election Commission
              of India (ECI) to regulate political parties and candidates
              conduct during elections. It aims to ensure free and fair
              elections by preventing unfair practices such as bribery,
              intimidation, and misuse of government machinery.
            </span>
          </li>
          <li>
            <h4>Electoral Rolls:</h4>
            <span>
              The ECI prepares and maintains electoral rolls, which list
              eligible voters in each constituency. It regularly updates these
              rolls to include new voters and remove ineligible ones.
            </span>
          </li>
          <li>
            <h4>Reservation of Seats: </h4>
            <span>
              {" "}
              Seats in legislative bodies, such as the Lok Sabha (House of the
              People) and state legislative assemblies, are reserved for
              Scheduled Castes (SCs) and Scheduled Tribes (STs) to ensure their
              representation.
            </span>
          </li>
          <li>
            <h4>Campaigning Regulations: </h4>
            <span>
              Election campaigns are subject to regulations regarding the use of
              loudspeakers, posters, banners, and other campaign materials. The
              ECI sets limits on campaign spending by candidates and political
              parties.
            </span>
          </li>
          <li>
            <h4>Election Expenditure Monitoring:</h4>
            <span>
              The ECI closely monitors candidates election expenses to prevent
              overspending and ensure a level playing field. Candidates are
              required to submit expenditure reports to the ECI.
            </span>
            machinery.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ElectionPage;
