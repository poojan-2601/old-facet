import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const DataViewComponent = ({ activeDataId }) => {
    let { projSlug, tab } = useParams();

    const [data, setData] = useState({});

    useEffect(() => {
        
    }, [])
    

    return (
        <div>
            {activeDataId}
        </div>
    )
}

export default DataViewComponent;