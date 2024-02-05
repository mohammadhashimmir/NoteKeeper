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
          <button
            className={`pagination-link ${currentPage === i ? 'is-current' : ''}`}
            aria-label={`Goto page ${i}`}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </button>
        </li>
      );
    }
    return paginationLinks;
  };

  return (
    <nav style={{margin:"0"}} className="pagination navbar is-fixed-bottom" role="navigation" aria-label="pagination" >
      <button className={`pagination-previous ${currentPage === 1 ? 'is-disabled' : ''}`} onClick={handlePreviousClick}>Previous </button>
      <button className={`pagination-next ${currentPage === totalPages ? 'is-disabled' : ''}`} onClick={handleNextClick}>Next page</button>
      <ul className="pagination-list">{renderPaginationLinks()}</ul>
    </nav>
  );
};

export default Pagination;
