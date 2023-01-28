import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useNavigation } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProducts = () => {
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const image = form.image.files[0];
        const description = form.description.value;
        const price = parseInt(form.price.value);



        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_BB_KEY}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        }).then(res => res.json())
            .then(data => {
                const img = data.data.url;
                const productsData = {
                    title,
                    sellerEmail: user.email,
                    description,
                    status: 'available',
                    price,
                    img,
                }
                console.log(productsData)

                fetch(' http://localhost:5000/addProduct', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(productsData),
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged === true) {
                            toast.success('Product added successfully')
                            navigate('/dashboard/myProducts')
                        }
                    })
                    .catch(err => {
                        toast.error(`${err}`)
                    })


            }).catch(err => console.log(err));
    }


    return (
        <div className="hero bg-white">
            <div className="hero-content flex-col">
                <div className="text-center mt-10 lg:text-left">
                    <h1 className="text-2xl font-bold">Add your products</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <input className='input input-bordered' name='title' placeholder='Product Name' type="text" required />
                        <input className='input input-bordered' name='price' placeholder='Price' type="text" required />

                        <label className='text-sm   font-semibold'>Upload product image</label>
                        <input className='file-input file-input-bordered file-input-primary w-full max-w-xs'
                            type='file'
                            id='image'
                            name='image'
                            accept='image/*'
                            required
                        />
                        <textarea name='description' className="textarea textarea-bordered" placeholder="Description" required></textarea>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">ADD</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;