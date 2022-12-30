const { useState, useEffect } = require("react")

const useBuyer = email => {
    const [isUser, setisUser] = useState(false);
    const [isUserLoading, setIsUserLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(` http://localhost:5000/users/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.isUser) {
                        setisUser(data.isUser);
                        setIsUserLoading(false)
                    }
                });
        }

    }, [email])
    return [isUser, isUserLoading]

}
export default useBuyer;