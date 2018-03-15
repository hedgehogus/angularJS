angular
    .module('kottans',[])
    .component('numberInput',{
        template:[
            '<input type="text" ng-model="$ctrl.value" />',
            '<button ng-click="$ctrl.step(1)">+</button>',
            '<button ng-click="$ctrl.step(-1)">-</button>',
            '<button ng-click="$ctrl.toggleTimer()">{{$ctrl.isTimerOn ? "Stop": "Start"}}</button>'
        ].join(''),

        bindings: {
            value: '='
        },

        controller(){
            this.isTimerOn = false;
            this.step = (step) => this.value = +(this.value) + step;

            this.toggleTimer = () => {this.isTimerOn = !this.isTimerOn;}
        }
    }
)