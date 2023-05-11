const Form = ({ save, setTaskName, savingProcess }) => {
  return (
    <form className="row row-cols-lg-auto g-3 align-items-center mt-5 w-50 mx-auto">
      <div className="col-12">
        <label className="visually-hidden">Username</label>
        <div className="input-group">
          <div className="input-group-text">Task Name</div>
          <input
            onChange={(e) => setTaskName(e.target.value)}
            type="text"
            className="form-control"
            id="inlineFormInputGroupUsername"
            placeholder="Username"
          />
        </div>
      </div>

      <div className="col-12">
        <button
          disabled={savingProcess && true}
          onClick={(e) => save(e)}
          className="btn btn-primary"
        >
          {savingProcess === true ? (
            <>
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              <span>Adding ...</span>
            </>
          ) : (
            "+ Add Task"
          )}
        </button>
      </div>
    </form>
  );
};

export default Form;
