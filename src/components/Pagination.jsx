

const Pagination = ({noOfItemsPerPage, data = [] }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = noOfItemsPerPage;

    const indexOfLastSlide = currentPage * itemsPerPage;
    const indexOfFirstSlide = indexOfLastSlide - itemsPerPage;
    const currentProducts = data.slice(indexOfFirstSlide, indexOfLastSlide);
    const totalPages = Math.ceil(data.length / itemsPerPage);
    return (
        <>
            <Button variant="secondary" className="btn-sm " onClick={() => setCurrentPage(p => p - 1)} disabled={currentPage === 1}>Prev</Button>
            <p>Page {currentPage} of {totalPages} </p>
            <Button variant="secondary" className="btn-sm" onClick={() => setCurrentPage(p => p + 1)} disabled={indexOfLastSlide >= data.length}>Next</Button>
        </>
    )
}

export default Pagination;