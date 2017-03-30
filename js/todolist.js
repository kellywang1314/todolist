// ???? Angular ??
var todoapp = window.angular.module("todoapp", []);

// ????????
todoapp.controller('todolistcontroller', ['$scope', function ($scope) {
    $scope.text = '';

    // todolist是一个数组
    $scope.todolist = [{
        text: 'hello world',
        done: false
    }, {
        text: 'I use Python',
        done: false
    }];

    // ????????
    $scope.add = function () {

        // ????????
        var text = $scope.text.trim();
        if (text) {
            //arrayObj. push([item1 [item2 [. . . [itemN ]]]]);将一个或多个新元素添加到数组结尾，并返回数组新长度
            $scope.todolist.push({
                text: text,
                done: false
            });

            $scope.text = '';
        }
    }

    // ??????
    $scope.delete = function (todo) {
        var index = $scope.todolist.indexOf(todo);
        //arrayObj.splice(deletePos,deleteCount); //删除从指定位置deletePos开始的指定数量deleteCount的元素，数组形式返回所移除的元素
        $scope.todolist.splice(index, 1);
    }

    // 对todolist进行过滤，把done的值为true的放到temp中
    //过滤器（filter）正如其名，作用就是接收一个输入，通过某个规则进行处理，然后返回处理后的结果。主要用在数据的格式化上，例如获取一个数组中的子集
    $scope.doneCount = function () {
        var temp = $scope.todolist.filter(function (item) {
            return item.done;
        });

        // ??????
        return temp.length;
    }

}]);
