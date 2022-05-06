import { useEffect, useState } from "react";

const useItemDetail = itemId => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://harmic.herokuapp.com/items/${itemId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, [itemId]);
    return [item]
}

export default useItemDetail;