import {makeAutoObservable} from 'mobx';

export default class DeviceStore{
    constructor(){
        this._types = [];
        this._brands = [
            {id:1 , name: 'Apple'},
            {id:2 , name: 'Apple2'},
            {id:3 , name: 'Phones'},
            {id:4 , name: 'Headphones'},
            {id:5 , name: 'Laptops'},

        ];
        this._devices = [
            {id:1 , name: 'Apple', price: 250, rating: 5, img: 'https://terradise.org/wp-content/themes/mast-child/images/empty-photo.jpg'},
            {id:2 , name: 'Apple', price: 250, rating: 5, img: 'https://terradise.org/wp-content/themes/mast-child/images/empty-photo.jpg'},
            {id:3 , name: 'Apple', price: 250, rating: 5, img: 'https://terradise.org/wp-content/themes/mast-child/images/empty-photo.jpg'},
            {id:4 , name: 'Apple', price: 250, rating: 5, img: 'https://terradise.org/wp-content/themes/mast-child/images/empty-photo.jpg'},
            {id:5 , name: 'Apple', price: 250, rating: 5, img: 'https://terradise.org/wp-content/themes/mast-child/images/empty-photo.jpg'},
            {id:6 , name: 'Apple', price: 250, rating: 5, img: 'https://terradise.org/wp-content/themes/mast-child/images/empty-photo.jpg'}
        ];
        this._selectedType = {}
        this._selectedBrand ={}
        // mobx будет следить за изменениями этих переменных
        makeAutoObservable(this)
    }

//    создадим функции которые буду изменять состояние
    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setDevices(devices){
        this._devices = devices
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }
//    компьютед функции, вызываются только в том случае если переменная внутри была изменена 
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }

    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}