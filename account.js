const moment = require('moment')


class Account {
    #amount;
    #account_id;
    constructor(name,amount,account_id){
        this.name = name;
        this.#amount = amount;
        this.#account_id = account_id;
    }
    tellMeMyBalance(){
        console.log(`Sizning hisobingizdagi mablag $${this.#amount}`)

    }

    withdrawMoney(amount){
        if(this.amount>amount){
        this.#amount = this.amount-amount;
        console.log(`Hisobingizdan  $${amount}mablag' yechildi va $${this.#amount} mablag' qoldi. `)
        }else{
            console.log("Hisobingizda mablag' yetarli emas!")
        }

    }

    makeDeposit(amount){
        this.#amount+=amount;
        console.log(`hisobingizga ${amount} qo'shildi`)

    }

    giveMeDetails(){
        console.log(`Salom hurmatli ${this.name} sizning hisobingiz ${this.#amount} `)
        console.log(`Sizning hisob raqamingiz ${this.#account_id}`)   
    }

    static tellMeAboutClass(){
        console.log("Bu class accountlarni yasash uchun xizmat qiladi")
    }

    static tellMeTime(){
        console.log(`Hozirgi vaqt ${moment().format('YYYY-MM-DD HH:mm:ss')}`)
    }
}

module.exports = Account;