export const getProducts = async () => {
    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};