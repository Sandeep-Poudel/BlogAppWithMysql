function convertToLacale(time: string) {
    const date = new Date(time);
    return date.toLocaleDateString();
}

export default convertToLacale;