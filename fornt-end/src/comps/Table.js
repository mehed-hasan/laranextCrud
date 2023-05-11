import { MdOutlineTaskAlt } from "react-icons/Md";
import { RiDeleteBinFill } from "react-icons/ri";
import Paginate from "./Paginate";
import SearchInput from "./SearchInput";

const Table = ({
  data,
  loading,
  handleDelete,
  deleteProcessing,
  deletetingId,
  totalData,
  paginate,
  setPageNo,
}) => {
  return (
    <>
      <div className="panel mt-5">
        <div className="search_and_paginate d-flex justify-content-between align-items-center">
          <SearchInput />
          <h3 className="fw-bold">Tasks List ({totalData})</h3>
          <Paginate setPageNo={setPageNo} paginate={paginate} />
        </div>
        <table className=" table stripe bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Task name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td className="taskname">
                  <p
                    contentEditable={"true"}
                    suppressContentEditableWarning={true}
                  >
                    {item.task}
                  </p>
                  <sup className="text-sm text-dark ">Click to Edit</sup>
                </td>
                <td>
                  <span className="badge bg-success">Todo</span>
                </td>
                <td>
                  <a
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {deletetingId === item.id && deleteProcessing === true ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      <RiDeleteBinFill />
                    )}
                  </a>
                  <span className="mx-2">||</span>
                  <a className="btn btn-primary btn-sm">
                    <MdOutlineTaskAlt />{" "}
                  </a>
                  <span>
                    <span className="mx-2">||</span>
                    <a className="btn btn-warning btn-sm">Save</a>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="data-loading text-center">
          {loading && (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Table;
