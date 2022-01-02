
import React, { useContext } from 'react';

function Recordlist() {

    return (
        <div className="MainParentDiv ">



            <div className="container pt-5">
                <h1>Pending Application List</h1>

                <div className="col-12 container p-3">

                    <table class="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Recordlist;