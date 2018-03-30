angular.module('pirsonal-app').controller('CompositionController', CompositionController);

angular.module('pirsonal-app').controller('CompositionController', CompositionController);

function CompositionController(CompositionFactory){
    vm = this;
    vm.result = '';
    vm.error = false;
    vm.content = null;
    vm.showForm = true;

    vm.process = function(){
        try {
            vm.error = false;
            var data = {
                content: ''
            }

            if(vm.content){
                data.content = $.parseJSON(vm.content);
            }

            CompositionFactory.post(data).then(response => {
                vm.result = response.data;
                vm.showForm = false;
            }).catch(error => console.log(error));
        } catch (error) {
            vm.error = true;
        }
    }

    vm.exportToPDF = function() {
        var filename = prompt("Please enter your filename");
        if(filename){
            var doc = new jsPDF()
            var content = document.getElementById('results').innerHTML;
            doc.fromHTML(content, 10, 10)
            doc.save(filename+'.pdf')
        }
    }

    vm.newComposition = function(){
        vm.showForm = !vm.showForm;
        vm.content = null;
    }
}