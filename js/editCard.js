import Card from "./card.js";

export class EditCard extends Card{

    constructor(name, adress, distance, status = delivered){
        super(name, adress, distance)

        this.status = status
    }    

    getCard(id){
        this.btnEl = document.createElement('button');
        this.btnEl.classList.add("btn-card")
        this.btnEl.setAttribute("id", `${id}`)
        this.btnEl.textContent = "Изменить"

        this.btnEl.addEventListener('click', (e) => {
            const bodyEl = document.querySelector('body');
            bodyEl.prepend(this.createModalWindow());
            const modalEl = document.querySelector('.modal-window');
            modalEl.showModal();
            
            const closeBtn = document.querySelector('.btn-close');            
            closeBtn.addEventListener('click', () => {
                modalEl.innerHTML = "";
                modalEl.remove();
            })
        })



        this.addCard = super.getCard()
        this.addCard.append(this.btnEl)

        return this.addCard
    }

    createModalWindow(){        
        this.modalWrap = document.createElement('dialog');
        this.modalWrap.classList.add("modal-window");

        this.titleEl = document.createElement('h2');
        this.titleEl.classList.add("modal-title");
        this.titleEl.textContent = "Изменить"

        this.formEl = document.createElement('form');
        this.formEl.classList.add("modal-form");
        this.formEl.setAttribute("method", "POST");

        this.inputElName = document.createElement('input');
        this.inputElName.classList.add("modal-field");
        this.inputElName.setAttribute("type", "text");

        this.inputElAdress = document.createElement('input');
        this.inputElAdress.classList.add("modal-field");
        this.inputElAdress.setAttribute("type", "text");

        this.inputElDistance = document.createElement('input');
        this.inputElDistance.classList.add("modal-field");
        this.inputElDistance.setAttribute("type", "number");

        this.selectEl = document.createElement('select');
        this.selectEl.classList.add("modal-choices");
        this.optionElDelivery = document.createElement('option');
        this.optionElDelivery.setAttribute("vlue", "delivery");
        this.optionElDelivery.textContent = "доставляется";
        this.optionElDelivered = document.createElement('option');
        this.optionElDelivered.setAttribute("value", "delivered");
        this.optionElDelivered.textContent = "доставлено";
        this.optionElCanceled = document.createElement('option');
        this.optionElCanceled.setAttribute("value", "canceled");
        this.optionElCanceled.textContent = "отменено"
        this.selectEl.append(this.optionElDelivery, this.optionElDelivered, this.optionElCanceled);

        this.btnSubmit = document.createElement('button');
        this.btnSubmit.textContent = "Сохранить";
        this.btnSubmit.classList.add("btn-blue");        

        this.btnClose = document.createElement('button');
        this.btnClose.classList.add("btn-close");

        this.formEl.append(this.inputElName, this.inputElAdress, this.inputElDistance, this.selectEl, this.btnSubmit);
        this.modalWrap.append(this.titleEl, this.formEl, this.btnClose);
        
        //подключение библиотеки choices
        
        const choices = new Choices(this.selectEl, {
            searchEnabled: false,
            itemSelectText: "",  
            classNames: {       
                flippedState: 'is-flipped',                
            }        
        })

        return this.modalWrap        
    }

    set getIdButton(value){
        return value
    }
}