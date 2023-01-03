import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://harmic-server.vercel.app//items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);
    return [items, setItems]
}

export default useItems;
