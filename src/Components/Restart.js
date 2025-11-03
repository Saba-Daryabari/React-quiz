function Restart({ dispatch, index, numQuestions }) {
  if (index === numQuestions)
    return (
      <button
        className="btn btn-ui "
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    );
}

export default Restart;
