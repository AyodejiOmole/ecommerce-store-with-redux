const checkIfExisting = (state, dataToCheck) => {
    return state.find((product) => product.id === dataToCheck.id);
}

export const addToCart = (state, dataToAdd) => {
    const dataExisting = checkIfExisting(state, dataToAdd);
    if(dataExisting) {
        return state.map(item => item.id === dataToAdd.id ? { ...item, quantity: item.quantity + 1} : item);
    }

    return [...state, {...dataToAdd, quantity: 1}];
} 

export const removeFromCart = (state, dataToDelete) => {
    const dataExisting = checkIfExisting(state, dataToDelete);
    if(dataExisting.quantity === 1) {
        return state.filter((item) => item.id !== dataToDelete.id);
    }

    return state.map(item => item.id === dataToDelete.id ? {...item, quantity: item.quantity - 1} : item);
}