import { useEffect, useState } from "react";
import useStore from "../../context/store";
import { Button, Card, Table, Form } from "react-bootstrap";

function Home() {
    const { autheticatedUser, todoList } = useStore();
    const [filterStatus, setFilterStatus] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    let filteredTodos = todoList;

    if (filterStatus === "completed") {
        filteredTodos = todoList.filter((todo) => todo.completed);
    }

    if (filterStatus === "pending") {
        filteredTodos = todoList.filter((todo) => !todo.completed);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentTodos = filteredTodos.slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    const totalPages = Math.ceil(filteredTodos.length / itemsPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [filterStatus]);

    return (
        <div className="Home">
            <h1>Welcome to My Store {autheticatedUser?.name || ""}</h1>
            <p>Discover our wide range of products and enjoy shopping!</p>

            {/* <Card>
                <Card.Header>Todo List</Card.Header>
                <Card.Body>
                    <Form className="mb-3">
                        <Form.Check
                            inline
                            type="radio"
                            label="All"
                            name="statusFilter"
                            value="all"
                            checked={filterStatus === "all"}
                            onChange={(e) => setFilterStatus(e.target.value)}
                        />

                        <Form.Check
                            inline
                            type="radio"
                            label="Completed"
                            name="statusFilter"
                            value="completed"
                            checked={filterStatus === "completed"}
                            onChange={(e) => setFilterStatus(e.target.value)}
                        />

                        <Form.Check
                            inline
                            type="radio"
                            label="Pending"
                            name="statusFilter"
                            value="pending"
                            checked={filterStatus === "pending"}
                            onChange={(e) => setFilterStatus(e.target.value)}
                        />
                    </Form>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {currentTodos.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="text-center">
                                        No todos found
                                    </td>
                                </tr>
                            ) : (
                                currentTodos.map((todo) => {
                                    const bgColor = todo.completed
                                        ? "lightgreen"
                                        : "#ff6666";

                                    return (
                                        <tr key={todo.id}>
                                            <td style={{ backgroundColor: bgColor }}>
                                                {todo.userId}
                                            </td>
                                            <td style={{ backgroundColor: bgColor }}>
                                                {todo.id}
                                            </td>
                                            <td style={{ backgroundColor: bgColor }}>
                                                {todo.title}
                                            </td>
                                            <td style={{ backgroundColor: bgColor }}>
                                                {todo.completed ? "Completed" : "Pending"}
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </Table>
                    <div className="d-flex align-items-center justify-content-between mt-3">
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => setCurrentPage((p) => p - 1)}
                            disabled={currentPage === 1}
                        >
                            Prev
                        </Button>

                        <span>
                            Page {currentPage} of {totalPages}
                        </span>

                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => setCurrentPage((p) => p + 1)}
                            disabled={currentPage === totalPages || totalPages === 0}
                        >
                            Next
                        </Button>
                    </div>
                </Card.Body>
            </Card> */}
        </div>
    );
}

export default Home;
