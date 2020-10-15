import React, { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import loading from '../../../images/Loading.gif'


const options = [
    { value: 'Pending', label: 'Pending' },
    { value: 'Ongoing', label: 'Ongoing' },
    { value: 'Done', label: 'Done' }
];

const AdminServiceList = () => {
    const [allServices, setAllServices] = useState([]);
    // Display all Services
    useEffect(() => {
        fetch('http://localhost:5000/getAllServices')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])
    // Change status
    const changeOption = (event, id) => {
        const status = { project: event.value };
        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div>
            <h4>Service List</h4>
            <div className="card p-2 mr-2">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th className="text-secondary text-left" scope="col">Name</th>
                            <th className="text-secondary" scope="col">Email ID</th>
                            <th className="text-secondary" scope="col">Service</th>
                            <th className="text-secondary" scope="col">Project Details</th>
                            <th className="text-secondary" scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allServices.length === 0 && <div className="d-flex justify-content-center"> <div><img src={loading} alt="" /></div> </div>
                        }
                        {
                            allServices.map(data =>

                                <tr>
                                    <td><strong>{data.name}</strong></td>
                                    <td>{data.email}</td>
                                    <td><strong>{data.title}</strong></td>
                                    <td>{data.description}</td>
                                    <td><Dropdown options={options} onChange={(event) => changeOption(event, `${data._id}`)} value={data.project} placeholder="Select an option" /></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminServiceList;