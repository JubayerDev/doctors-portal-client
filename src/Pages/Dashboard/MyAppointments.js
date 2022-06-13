import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`https://desolate-coast-52819.herokuapp.com/booking?patient=${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        navigate('/')
                    }
                   return res.json()
                })
                .then(data => {
                    console.log(data);
                    setAppointments(data)
                })
        }
    }, [user])
    return (
        <div>
            <div class="overflow-x-auto mt-10">
                <table class="table w-4/5">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((ap, index) => <tr>
                                <th>{ index + 1}</th>
                                <td>{ap.patientName}</td>
                                <td>{ ap.date}</td>
                                <td>{ ap.slot}</td>
                                <td>{ ap.treatment}</td>
                            </tr>)

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;