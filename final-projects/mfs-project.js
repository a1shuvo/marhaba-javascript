const userDatabase = (function () {
    const users = [];
    return {
        registerUser: function (name, pin) {
            // Validation
            if (!name || !pin) {
                return "Error";
            } else if (typeof pin !== "number") {
                return "Not a number";
            } else if (pin.toString().length < 4) {
                return "Length is less than 4";
            }

            const newUser = {
                id: users.length + 1,
                name,
                pin,
                balance: 0,
            };
            users.push(newUser);
            return true;
        },

        loginUser: function (name, pin) {
            const user = users.find(
                (user) => user.name === name && user.pin === pin
            );
            return user ? true : false;
        },

        addMoney: function (name, pin, amount) {
            const loggedIn = this.loginUser(name, pin);
            if (loggedIn) {
                const user = users.find(
                    (user) => user.name === name && user.pin === pin
                );
                user.balance += amount;
                return `Amount ${amount} is added in ${user.name}'s Account.\nCurrent balance is: ${user.balance} `;
            } else {
                return `Sorry! We could not add the balance in ${name}'s Account.\nYour amount has been refunded.`;
            }
        },

        checkBalance: function (name, pin) {
            const loggedIn = this.loginUser(name, pin);
            if (loggedIn) {
                const user = users.find(
                    (user) => user.name === name && user.pin === pin
                );
                return user.balance;
            } else {
                return "You don't have access to know account balance!";
            }
        },

        sendMoney: function (name, pin, receiver, amount) {
            const loggedIn = this.loginUser(name, pin);
            if (loggedIn) {
                const user = users.find(
                    (user) => user.name === name && user.pin === pin
                );
                if (user.balance >= amount) {
                    const receiverUser = users.find(
                        (user) => user.name === receiver
                    );
                    if (receiverUser) {
                        user.balance -= amount;
                        receiverUser.balance += amount;
                        return `Amount ${amount} send succesfully to ${receiver}`;
                    } else {
                        return `The receiver ${receiver} not found!`;
                    }
                } else {
                    return "You don't have enough money!";
                }
            } else {
                return "You don't have access to send money!";
            }
        },
    };
})();

console.log(userDatabase.registerUser("Shuvo", 1234));
console.log(userDatabase.registerUser("Srija", 2345));
console.log(userDatabase.loginUser("Shuo", 1234));
console.log(userDatabase.addMoney("Shuvo", 1234, 10));
console.log(userDatabase.addMoney("Shuv", 1234, 10));
console.log(userDatabase.checkBalance("Shuvo", 1234));
console.log(userDatabase.sendMoney("shuvo", 1234, "Srija", 10));
