const Paginate = ({ paginate, setPageNo }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {paginate.map((item, index) => (
          <li
            key={index}
            className={`page-item ${item.url === null && "disabled"}`}
          >
            <a
              role="button"
              onClick={() => setPageNo(item.url.split("=")[1])}
              className={`page-link ${item.active && "active"}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginate;
