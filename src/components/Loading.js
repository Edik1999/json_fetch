import React, { useState } from 'react';
import { useJsonFetch } from '../hooks/useJsonFetch';

const Loading = () => {
    
    const [{data: data, loading, error}] = useJsonFetch('http://localhost:7070/loading', null )

    return (
        <div>
            {loading
                ?
                    <span>Loading...</span>
                :
                    data && data.status
            }
        </div>
    );

}

export default Loading;
