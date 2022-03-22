function getItemByID(items, id){
    const itemsByID = items.find(item => item.id === id)
    return itemsByID
}  

function buildTransactions(items, sales){
    sales.map(sale => {
        const itemId = sale.itemId
        const item = getItemByID(items, itemId)

        return {
            ...sale, 
            description: item.description,
            price: item.price
        }
    })
}

function getTransactionsByItemDescription(transactions, itemDescription){
    return transactions.filter(transaction => transaction.description === itemDescription);
}

module.exports = {
    // Uncomment these as you write them
    getItemById,
    buildTransactions,
    getTransactionsByItemDescription
}
