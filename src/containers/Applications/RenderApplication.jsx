import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getApplication } from '../../actions';
import Loader from '../../components/Loader';


export const RenderApplication = (props) => {
    const { showApplicationDetailsModal } = props
    const applications = useSelector(state => state.application.applications);
    const dispatch = useDispatch()

    console.log("applications", applications)

    useEffect(() => {
        dispatch(getApplication())
    }, [])
    if (applications.length === 0) {
        return (
            <Loader />
        )
    }
    return (
        <div>
            <div className="tableContainerMobile">
                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">
                                <div>
                                    <div>
                                        Мобильный
                                    </div>
                                    <div>
                                        Имя
                                    </div>
                                </div>

                            </th>
                            <th scope="col">
                                <div>
                                    <div>
                                        Мобильный
                                    </div>
                                    <div>
                                        Время
                                    </div>
                                </div>

                            </th>
                            {/* <th scope="col">Email</th>
             <th scope="col">Время</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {applications.length > 0
                            ? applications.map((a, index) =>
                                <tr key={a._id}
                                    onClick={() => showApplicationDetailsModal(a)}

                                >
                                    <th scope="row">{index + 1}</th>
                                    <td><div>
                                        <div>
                                            {a.contactNumber}
                                        </div>
                                        <div>
                                            {a.firstName}
                                        </div>
                                    </div></td>
                                    <td><div>
                                        <div>
                                            {a.email}
                                        </div>
                                        <div className="tableContainerMobile__time">
                                            {a.createdAt.slice(0, 10)}
                                            &nbsp;
                                            {a.createdAt.slice(11, 19)}
                                        </div>
                                    </div></td>
                                    {/* <td></td>
                     <td>{a.createdAt.slice(11, 19)}</td> */}
                                </tr>
                            )
                            : null}

                    </tbody>
                </table>
            </div>
            <div className="tableContainer">
                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Мобильный</th>
                            <th scope="col">Имя</th>
                            <th scope="col">Username</th>
                            <th scope="col">Время</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.length > 0
                            ? applications.map((a, index) =>
                                <tr key={a._id}
                                    onClick={() => showApplicationDetailsModal(a)}

                                >
                                    <th scope="row">{index + 1}</th>
                                    <td>{a.contactNumber}</td>
                                    <td>{a.firstName}</td>
                                    <td>{a.email}</td>
                                    <td>{a.createdAt.slice(11, 19)}</td>
                                </tr>
                            )
                            : null}

                    </tbody>
                </table>
            </div>

        </div>
    )
}
