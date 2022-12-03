import ReactLoading from "react-loading";

function Loading() {
  return (
    <div className="loader-div">
      <ReactLoading
        className="loader-disp"
        type={"bubbles"}
        color={"#ffffff"}
        width={100}
        delay={200}
      />
    </div>
  );
}

export default Loading;
