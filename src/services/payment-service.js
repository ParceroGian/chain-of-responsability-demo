module.exports = class PaymentService {
    constructor({ paymentGatewayHandler }) {
        this.paymentGatewayHandler = paymentGatewayHandler;
    }
    execute(paymentData) {
        const {
            amount, modality
        } = paymentData;
        if (modality === 'credit-card') {
            const { cardNumber, cardHolderName, cardExpirationDate, cardSecurityCode } = paymentData;
            return this.paymentGatewayHandler.creditCardPayment(amount, cardNumber, cardHolderName, cardExpirationDate, cardSecurityCode);
        } else if (modality === 'debit') {
            const { bankAccount, bankAgency, bankCode } = paymentData;
            return this.paymentGatewayHandler.debitPayment(amount, bankAccount, bankAgency, bankCode);
        } else if (modality === 'pix') {
            const { pixKey } = paymentData;
            return this.paymentGatewayHandler.pixPayment(amount, pixKey);
        } else if (modality === 'bank-transfer') {
            const { bankCode, bankAccount, bankAgency, bankAccountType, transferType } = paymentData;
            return this.paymentGatewayHandler.bankTransferPayment(amount, bankCode, bankAccount, bankAgency, bankAccountType, transferType);
        } else {
            return 'invalid payment modality';
        }
    }
}