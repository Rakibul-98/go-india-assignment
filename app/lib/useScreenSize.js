// get screen size to make responsive

const { useState, useEffect } = require("react");

const useScreenSize = () =>{
    const [screenSize, setScreenSize] = useState({
        // set initial state 0 when window undefined
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0
    });

    useEffect(()=>{
        const handleResize = () => {
            // screen size to the setScreenSize state
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        };
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);
    return screenSize;
};

export default useScreenSize;
