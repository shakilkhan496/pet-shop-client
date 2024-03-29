import { useEffect, useState } from "react";

const useToken = (email) => {
    console.log(email);
    const [token, setToken] = useState('');
    useEffect(() => {
        fetch(` https://pet-shop-server.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.token);
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    setToken(localStorage.getItem('token'));
                }
            });
    }, [email]);
    return [token];
}

export default useToken;