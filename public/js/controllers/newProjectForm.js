app.controller('projControl', ['$scope', 'mainService', '$state', function($scope, mainService, $state){
// app.controller('projControl', function ($scope) {

  $scope.projects = [
    // {
    //   projTitle: $scope.name,
    //   projDescription: $scope.description,
    //   projDueDate: $scope.date,
    //   langTags:$scope.langTags,
    //   image_url: $scope.image_url
    // }
  ];

  $scope.addProject = function (e) {
    console.log($state.params);
    console.log('add proj!');
    if ($scope.name === '') { return; }

    var project = { 
      projCompany: $state.params.comp,
      projTitle: $scope.name,
      projDescription: $scope.description,
      projDueDate: $scope.date,
      langTags:$scope.langTags,
      image_url: $scope.image_url
    };

     //console.log tags somehow
      console.log('here are the updated langTags');
      console.log(project);

    $scope.name = '';
    $scope.description = '';
    $scope.date = '';
    $scope.langTags = '';
    $scope.image_url = '';

    console.log(project);
    mainService.postToDash(project);
    mainService.getAllDash(project.projCompany);

    // $scope.projects.push(project);
        // mainService.postToDash(project).then(function() {
        //   mainService.getAllDash()
        // });

        // mainService.getAll().then(function(){
        //   console.log('controller getAll invoked');
        //   // $scope.companies = mainService.companies;
        //   console.log($scope.companies);
        // }).catch(function(err){
        //   console.log(err);
        // });


  };

  $scope.removeProject = function (index) {
    $scope.projects.splice(index, 1);
  };

  // $scope.readmore = function(){
  //   $state.go('proj1');
  // };

   $scope.gohome = function(){
    $state.go('home');
  };

//getAll invoked upon /dashboard load, that loads all of the user's projects
// mainService.getAllDash().then(function(){
//   console.log('dash controller getAll invoked');
//   // debugger;
//   $scope.companies = mainService.companies;
//   console.log('here is $scope.companies');
  
//   console.log($scope.companies);
//   debugger;
// }).catch(function(err){
//   console.log(err);
// });
  
}]);




// document.getElementById("files").onchange = function () {
//     var reader = new FileReader();

//     reader.onload = function (e) {
//         // get loaded data and render thumbnail.
//         document.getElementById("image").src = e.target.result;
//     };

//     // read the image file as a data URL.
//     reader.readAsDataURL(this.files[0]);
// };
