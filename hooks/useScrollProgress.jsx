import React, {useState, useEffect} from 'react';

const useScrollProgress = () => {
    const [completion, setCompletions] = useState(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = documents.body.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                setCompletions(Number(currentProgress / scrollHeight).
                toFixed(2) * 100);
            }
        };

        //event
        window.addEventListener('scroll', updateScrollCompletion);
        // clear event
        return () => window.removeEventListener('scroll', updateScrollCompletion);
    }, []);

    return completion;
};

export default useScrollProgress;
