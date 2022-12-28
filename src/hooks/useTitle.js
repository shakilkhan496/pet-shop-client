import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}-MobiShop`;
    }, [title])
};

export default useTitle;