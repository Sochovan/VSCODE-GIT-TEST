function withdraw(clients, balances, client, amount) {
    let indexOfClient = clients.indexOf(client);

    if (balances[indexOfClient] >= amount) {
        return balances[indexOfClient] - amount
    } else {
        return -1;
    }
}