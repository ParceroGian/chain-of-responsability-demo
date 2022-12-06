const express = require('express');
const app = express();
const port = 3000;
const JoyStickCommandService = require('./services/joystick-command-service');
const PaymentService = require('./services/payment-service');
const PaymentGatewayHandler = require('./services/payment-gateway-handler');
const MoveUpHandler = require('./services/chain-of-joystick/move-up-handler');
const Command = require('./services/entity/command');
app.use(express.json());

app.post('/joystick', (req, res) => {
    const { command } = req.body;
    const commandService = new JoyStickCommandService();
    const result = commandService.execute(command);
    console.log(result);
    res.send({ "action": result });
})
app.post('/joystick2', (req, res) => {
    const { command } = req.body;

    const client = new Command();
    const moveUpHandler = new MoveUpHandler({ client });
     moveUpHandler.execute(command);

    // const commandService = new JoyStickCommandService();
    // const result = commandService.execute(command);
    console.log(client.getActions());
    res.send({ "action": client.getActions() });
})

app.post('/payment-gateway', (req, res) => {
    // const { 
    //     amount, modality, cardNumber, cardHolderName, cardExpirationDate, cardSecurityCode,
    //     pixKey, bankCode, bankAccount, bankAgency, bankAccountType, transferType
    // } = req.body;
    const paymentGatewayHandler = new PaymentGatewayHandler()
    const paymentService = new PaymentService({ paymentGatewayHandler });
    const paymentData = req.body;
    const result = paymentService.execute(paymentData);
    console.log(result);
    res.send({ "payment": result });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));