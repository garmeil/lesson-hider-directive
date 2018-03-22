angular.module("directivePractice").service("lessonService", function($http) {
  this.getSchedule = function getSchedule() {
    return $http.get("schedule.json");
  };
});
