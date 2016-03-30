angular.module('noterious')
    .controller('NotesCtrl', function($stateParams) {
        var ctrl = this;

        ctrl.boardId = $stateParams.boardId;
    })