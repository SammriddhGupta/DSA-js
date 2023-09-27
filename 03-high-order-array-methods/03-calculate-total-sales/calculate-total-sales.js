function calculateTotalSalesWithTax(products, taxRate) {
    const totalSales = products.reduce((sum, product) => sum + product.price * product.quantity, 0);

    const taxAmt = (totalSales * taxRate) / 100;

    const totalSalesTax = totalSales + taxAmt;

    return parseFloat(totalSalesTax.toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
