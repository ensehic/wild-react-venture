import { useState, useEffect } from 'react';

/**
 * Returns the number of pixels the document is currently scrolled along the Y-axis.
 */
const useScrollPosition = (): number => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => setScrollPosition(window.pageYOffset);
        window.addEventListener('scroll', updatePosition, { passive: true });

        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return scrollPosition;
};

export default useScrollPosition;