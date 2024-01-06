function Pagination({ totalPages, currentPage, setCurrentPage }) {

  // previous button 
  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // next button 
  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPaginationLinks = () => {
    const paginationLinks = [];
    for (let i = 1; i <= totalPages; i++) {
      paginationLinks.push(
        <li key={i}>
          <a
            className={`pagination-link ${currentPage === i ? 'is-current' : ''}`}
            aria-label={`Goto page ${i}`}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </a>
        </li>
      );
    }
    return paginationLinks;
  };

  return (
    <nav className="pagination navbar is-fixed-bottom" role="navigation" aria-label="pagination" >
      <a className={`pagination-previous ${currentPage === 1 ? 'is-disabled' : ''}`} onClick={handlePreviousClick}>Previous </a>
      <a className={`pagination-next ${currentPage === totalPages ? 'is-disabled' : ''}`} onClick={handleNextClick}>Next page</a>
      <ul className="pagination-list">{renderPaginationLinks()}</ul>
    </nav>
  );
};

export default Pagination;
