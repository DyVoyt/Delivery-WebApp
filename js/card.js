export default class Card{
    _name = "";
    _adress = "";
    _distance = "";

    constructor(name, adress, distance){
        this.distance = distance
        this.adress = adress
        this.name = name
    }


    getCard(){
        this.cardEl = document.createElement('div');
        this.cardEl.classList.add("card");

        this.nameLabel = document.createElement('p');
        this.nameLabel.classList.add("card-title__label")
        this.nameLabel.textContent = "Имя";
        this.nameEl = document.createElement('p');
        this.nameEl.classList.add("card-content");
        this.nameEl.textContent = this.name;

        this.adressLabel = document.createElement('p');
        this.adressLabel.classList.add("card-title__label")
        this.adressLabel.textContent = "адресс";
        this.adressEl = document.createElement('p');
        this.adressEl.classList.add("card-content");
        this.adressEl.textContent = this.adress;

        this.distanceLabel = document.createElement('p');
        this.distanceLabel.classList.add("card-title__label");
        this.distanceLabel.textContent = "расстояние";
        this.distanceEl = document.createElement('p');
        this.distanceEl.classList.add("card-content")
        this.distanceEl.textContent = `${this.distance} км`

        this.cardEl.append(this.nameLabel, this.nameEl, this.adressLabel, this.adressEl, this.distanceLabel, this.distanceEl, this.btnEl);

        return this.cardEl
    }

    set name(value){
        this._name = value

        if(this.nameEl){
            this.nameEl.textContent = this.name;
        }
    }

    get name(){
        return this._name
    }

    set distance(value){
        this._distance = value

        if(this.distanceEl){
            this.distanceEl.textContent = this.distance
        }
    }

    get distance(){
        return this._distance
    }

    set adress(value){
        this._adress = value

        if(this.adressEl){
            this.adressEl.textContent = this.adress
        }
    }

    get adress(){
        return this._adress
    }
}