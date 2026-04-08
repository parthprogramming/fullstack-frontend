import { Table } from "react-bootstrap"
import useUser from "../../context/userContext"
import { Outlet } from "react-router-dom";

const User = () => {
    const { users } = useUser();
    return (
        <div>
            <h1>Users</h1>
            <Table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>role</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map == 0 && users.map((u) => (
                        <tr key={u}>
                            <td>{u.username}</td>
                            <td>{u.role}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Outlet/>
        </div>
    )
}

export default User;