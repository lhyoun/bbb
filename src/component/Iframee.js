import React from 'react';

const Iframee = ({}) => {
    console.log('iii');
    return (
        <div>
            <iframe
                src={"./sub.html"}
                name="jej"
                width={window.innerWidth}
                height={window.innerHeight}
                sandbox="allow-scripts allow-popups allow-same-origin">
            </iframe>
        </div>
    );
};

export default Iframee; 