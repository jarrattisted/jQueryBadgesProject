$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/jakeapeters.json',
    dataType: 'jsonp',
    success: function(response) {
      console.log(response);

      // Convert completed courses array length into number
      var completedLength = response.courses.completed.length

      // Count up as long as it is less than completedLength
      for (var i = 0; i < completedLength; i++) {
        var courseTitle = response.courses.completed[i].title;
        var courseImage = response.courses.completed[i].badge;
        var courseUrl = response.courses.completed[i].url;

        $("#badges").append("<div class='course'><h3>" + courseTitle  + "</h3><img src=" + courseImage + "><a href=" + courseUrl + " target='_blank' style='btn btn-primary'>See Course</a></div>");
      }

    }
  });

});
