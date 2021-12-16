import React, { useState } from 'react';
import { useJsonFetch } from '../hooks/useJsonFetch';

const Data = () => {

    const [{data: data, loading, error}] = useJsonFetch('http://localhost:7070/data', null )

    return (
        <div>
            {loading
                ?
                    <span>Loading...</span>
                :
                    data ? data.status : null
            }
        </div>
    );
}

export default Data;
