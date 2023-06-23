const add_item = (product) => {
    return { type: "ADD_ITEM", payload: product }
}
const remove_item = (product) => {
    return { type: "REMOVE_ITEM", payload: product }
}
const increase = (product) => {
    return { type: "INCREASE", payload: product };
}
const decrease = (product) => {
    return { type: "DECREASE", payload: product };
};
const checkout = () => {
    return { type: "CHECKOUT" };
}
const clear = () => {
    return { type: "CLEAR" }
}

export { add_item, remove_item, increase, decrease, checkout, clear };