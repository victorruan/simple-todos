import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todosList.html'

class TodosListctrl {
    constructor() {
        this.tasks = [
            {text:"this is task 1"},{text:"this is task 2"},{text:"this is task 3"}
        ];
    }
}
export default angular.module('todosList',[angularMeteor])
.component('todosList',{
    templateUrl:'imports/components/todosList/todosList.html',
    controller:TodosListCtrl
});