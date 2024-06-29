function LoadingSpinner() {
    return (
      <center>
        <div
          className="spinner-border"
          style={{ height: "5rem", width: "5rem", margin: "60px" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </center>
    );
  }
  
  export default LoadingSpinner;
  