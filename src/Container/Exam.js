import React from 'react';

function Exam({ data }) {
   
    let fdata= data.filter ((d,i)=> d.salary > 25000)
    return (
        <div>
            <table border="1">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Joining_date</th>
                    <th>Salary</th>
                </tr>
            </table>
            {
                fdata.map((E, i) => {
                    return (
                        <div key={i}>
                            <table border="1">
                                <tr>
                                    <td>{E.id}</td>
                                    <td>{E.name}</td>
                                    <td>{E.joining_date}</td>
                                    <td>{E.salary}</td>
                                </tr>
                            </table>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Exam;