module.exports = class PaymentGatewayHandler {
    creditCardPayment(...args) {
        return 'credit card payment';
    }
    debitPayment(...args) {
        return 'debit payment';
    }
    pixPayment(...args) {
        return 'pix payment';
    }
    bankTransferPayment(...args) {
        return 'bank transfer payment';
    }

}