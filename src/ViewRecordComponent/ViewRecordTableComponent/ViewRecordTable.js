import React from 'react';
import { Table } from 'reactstrap';

const table = (props) => {

    return (
        <div>
            <Table dark>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {props.arrayrecords.map((data, index) => {
                        return (
                            <tr>
                                <td scope="row">1</td>
                                <td>{data.title}</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>

                        )
                    })};
              </tbody>
            </Table>
        </div>
    );
}
export default table