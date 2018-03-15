angular
    .module('kottans',[])
    .component('sum', {
        templateUrl: 'sum.html',

        controller($scope){
            this.firstValue=1;
            this.secondValue=2;

            $scope.$watchCollection('[$ctrl.firstValue, $ctrl.secondValue]', () => {
                this.sum = +this.firstValue + +this.secondValue;
            })
        }
    })
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

        controller($scope, $interval){
            // this.isTimerOn = false;
            this.step = (step) => this.value = +(this.value) + step;

            // let timer;
            // this.toggleTimer = () => {
            //     this.isTimerOn = !this.isTimerOn;
            //     if(timer){
            //         $interval.cancel(timer);
            //     } else {
            //         timer = $interval(() => {
            //             this.value = +(this.value) + 1;                       
            //         }, 1000);
            //     }
            // }
        }
    }
)