export const withdraw = (clients, balances, client, amount) => {

    //put your code here
    let indexOfClient = clients.indexOf(client);

    if (balances[indexOfClient] >= amount) {
        return balances[indexOfClient] - amount
    } else {
        return -1;
    }

}