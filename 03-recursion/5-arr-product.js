// Find product of array elements, recursively.

function findProduct(arr) {
    let product = 1;

    if (arr.length === 0) return product;

    product = arr[0] * findProduct(arr.slice(1));
    return product;
}

console.log(findProduct([1, 2, 3, 4]));