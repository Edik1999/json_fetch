import React from 'react';
import { useJsonFetch } from '../hooks/useJsonFetch';

const Error = () => {

    const [{data: data, loading, error}] = useJsonFetch('http://localhost:7070/error', null )

    return (
        <div>
            {error && <span>{error}</span>}
        </div>
    );
}

export default Error;
