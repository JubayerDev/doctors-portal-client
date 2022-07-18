// import { format } from 'date-fns';
// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { toast } from 'react-toastify';
// import auth from '../../firebase.init';

// const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
//     const { _id, name, slots } = treatment;
//     const [user] = useAuthState(auth)
//     const formattedDate = format(date, 'PP');

//     const handleBooking = e => {
//         e.preventDefault();
//         const slot = e.target.slot.value;
//         console.log(slot);
//         const booking = {
//             treatmentId: _id,
//             treatment: name,
//             date: formattedDate,
//             slot,
//             patient: user.email,
//             patientName: user.displayName,
//             phone: e.target.phone.value
//         }

//         fetch('https://pure-anchorage-66299.herokuapp.com/booking', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(booking)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.success) {
//                     toast(`Appointment is set, ${formattedDate}, at ${slot}`)
//                 }
//                 else {
//                     toast.error(`Already have an appointment on, ${data.booking?.date}, at ${data.booking?.slot}`)
//                 }
//                 setTreatment(null)
//                 refetch();
//             })

//     }
//     return (

//         <div>
//             <input type="checkbox" id="booking-modal" className="modal-toggle" />
//             <div className="modal modal-bottom sm:modal-middle">
//                 <div className="modal-box">
//                     <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//                     <h3 className="font-bold text-lg text-secondary text-center mb-5">{name}</h3>
//                     <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
//                         <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
//                         <select name='slot' className="select select-bordered w-full max-w-xs">
//                             {
//                                 slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
//                             }
//                         </select>
//                         <input type="text" name='name' value={user?.displayName} disabled className="input input-bordered w-full max-w-xs" />
//                         <input type="email" name='email' value={user?.email} disabled className="input input-bordered w-full max-w-xs" />
//                         <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
//                         <input type="submit" value="Submit" className="btn btn-accent w-full max-w-xs " />
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookingModal;


import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP');
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('https://pure-anchorage-66299.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appointment is set, ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                setTreatment(null);
                refetch();
            });
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;