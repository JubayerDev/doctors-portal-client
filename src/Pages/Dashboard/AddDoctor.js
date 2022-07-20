import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json()))

    const imageStorageKey = '58724d509930637d2751df0ba9430dfe'

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }
                    // send to your database
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Doctor Added Successfully!');
                                reset();
                            } else {
                                toast.error('Failed to Add the Doctor')
                            }
                        })
                }
                console.log(result)
            })
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h3 className="text-2xl text-center mt-10">Add a New Doctor</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='w-96 mx-auto'>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" {...register("name", {
                        required: {
                            value: true,
                            message: 'Name is Required'
                        }
                    })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}

                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" {...register("email", {
                        required: {
                            value: true,
                            message: 'Email is Required'
                        },
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Provide a Valid Email'
                        }
                    })} />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}

                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>

                    <select {...register('specialty')} class="select select-bordered w-full max-w-xs">
                        {
                            services.map((service, index) => <option
                                key={index}
                                value={service.name}
                            >{service.name}</option>)
                        }

                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file" className="input input-bordered w-full max-w-xs" {...register("image", {
                        required: {
                            value: true,
                            message: 'Image is Required'
                        }
                    })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}

                    </label>
                </div>
                <input className='mt-5 btn w-full max-w-xs text-white text-xs tracking-widest font-semibold' type="submit" value={'Add'} />
            </form>
        </div>
    );
};

export default AddDoctor;