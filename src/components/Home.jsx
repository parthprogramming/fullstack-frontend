import useStore from "../context/store";
import { useEffect, useState } from "react";
// import './Home.css';

function Home() {
    const { loggedUser } = useStore();
    // const [data, setdata] = useState([]);
    // const [filteredData, setfilteredData] = useState([]);

    // const accessData = async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    //     const result = await response.json();
    //     console.log(result);
    //     setdata(result);
    // }

    // useEffect(() => {
    //     accessData();
    // }, []);

    // const displayedData = data.filter(item => {
    //     if (filteredData === "completed") return item.completed;
    //     if (filteredData === "notCompleted") return !item.completed;
    //     return true; // show all
    // });

    // useEffect(() => {
    //     if (data.length > 0) {
    //         const completedCol = data.map(item => item.completed);
    //         console.log(completedCol);
    //     }

    // }, [data])


    return (
        <div className="Home">
            <h1>Welcome to My Store {loggedUser?.name || ''}</h1>
            <p>Discover our wide range of products and enjoy shopping!</p>
            {/* <input
                type="radio"
                name="filter"
                onChange={() => setfilteredData("all")}
            />
            <label>All</label>

            <input
                type="radio"
                name="filter"
                onChange={() => setfilteredData("completed")}
            />
            <label>Completed</label>

            <input
                type="radio"
                name="filter"
                onChange={() => setfilteredData("notCompleted")}
            />
            <label>Not Completed</label>

            <table className="datatable">
                <thead>
                    <tr>
                        <th className="datahead">UserId</th>
                        <th className="datahead">Id</th>
                        <th className="datahead">Title</th>
                        <th className="datahead">Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedData.map(user => (
                        <tr key={user.id}>
                            <td>{user.userId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.completed.toString()}</td>
                        </tr>
                    ))}
                </tbody>

            </table> */}
        </div>
    )
}

export default Home;