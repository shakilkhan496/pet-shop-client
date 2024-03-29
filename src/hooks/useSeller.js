const { useState, useEffect } = require("react")

const useSeller = email => {
    const [isSeller, setisSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(` https://pet-shop-server.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.isSeller) {
                        setisSeller(data.isSeller);
                        setIsSellerLoading(false)
                    }
                });
        }

    }, [email])
    return [isSeller, isSellerLoading]

}
export default useSeller;