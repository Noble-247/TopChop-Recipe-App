import CountDownTimer from "../utilities_components/CountDownTimer";
import TypeWriterAnimation from "../utilities_components/TypeWriterAnimation";

function SiteUnderConstruction(props) {
  return (
    <div className='site-under-maintenance'>
      <div className='container'>
        <CountDownTimer targetDate='2023-12-31T00:00:00' />
        <TypeWriterAnimation />

        <h2 style={{ fontWeight: "bold" }}> Recipe Search Web App</h2>
        <p>
          TopChops Recipe Search App gives you the best recipe experience by
          giving you access to search through recipe databases.
        </p>
        <button
          style={{ fontWeight: "bold" }}
          className='btn btn-secondary d-block mx-auto mt-3 fw-bold'
          onClick={() => props.showMainContent()}
        >
          CLICK TO EXPLORE THE WEBSITE
        </button>
      </div>
    </div>
  );
}

export default SiteUnderConstruction;
