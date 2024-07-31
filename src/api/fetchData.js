const fetchData = async () => {
    try {
        const response = await fetch(
            'https://www.reddit.com/r/reactjs.json'
        );
        if (!response.ok) {
            throw new Error('Network Issue');
        }
        const jsonData = await response.json();
        return jsonData.data;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw error;
    }
};

export default fetchData;
