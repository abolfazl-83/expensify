import React from 'react';

export const Notfound = ({history}) => {
    return (
        <React.Fragment>
            <h2>the page you are looking for, does not exist in our servers. if u disagree, contact our support staff.</h2>
            <button onClick = {() => {
                history.push('/');
            }}>Go Home</button>
        </React.Fragment>
    );
};

export default Notfound;