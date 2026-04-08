import { Button } from "react-bootstrap"

const Pagination = ({
    currentPage,
    setCurrentPage,
    List,
    itemsPerPage
}) => {

    const totalPages = Math.ceil(
        (List?.length || 0) / itemsPerPage
    );  

    return (
        <div className="d-flex align-items-center justify-content-between mt-3">
            <Button
                variant="secondary"
                className="btn-sm"
                onClick={() => setCurrentPage(p => p - 1)}
                disabled={currentPage === 1}
            >
                Prev
            </Button>
            <p className="m-0">
                Page {currentPage} of {totalPages}
            </p>
            <Button
                variant="secondary"
                className="btn-sm"
                onClick={() => setCurrentPage(p => p + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </Button>
        </div>
    )
}

export default Pagination
