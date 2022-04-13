import React from 'react';

const Iframee2 = ({}) => {
    console.log('iii22222222222222222222222222222222222');
    return (
        <div>
            <iframe
                src={"./sub.html"}
                name="프레임 이름"
                width={window.innerWidth}
                height={window.innerHeight}
                sandbox="allow-scripts allow-popups allow-same-origin">
            </iframe>
        </div>
    );
};

export default Iframee2; 