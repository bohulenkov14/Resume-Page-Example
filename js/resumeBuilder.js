//===========================================
//JSON objects
//===========================================

var bio = {
  "name": "Artem Bohulenkov",
  "role": "Web Developer",
  "welcomeMessage": "Hello !",
  "contacts": {
    "mobile": "+7 (915)398-09-45",
    "email": "bohulenkov14@gmail.com",
    "github": "bohulenkov14",
    "twitter": "@zellos_dajedra",
    "location": "Moscow"
  },
  "biopic":"http://i60.tinypic.com/2dk0rd2.png",
  "skills": ["C#", "C++", "HTML", "CSS", "ASP.NET MVC", "git", "hg", "svn"],
  "displayHeader": function() {
    var formatterHeaderName = HTMLheaderName.replace("%data%", this.name);
    var formatterRole = HTMLheaderRole.replace("%data%", this.role);
    $("#header").prepend(formatterRole);
    $("#header").prepend(formatterHeaderName);

    this.appendContacts("#topContacts");

    var formattedBioPic = HTMLbioPic.replace("%data%", this.biopic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    if (this.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for(var i = 0; i < this.skills.length; ++i) {
        var formattedSkill = HTMLskills.replace("%data%", this.skills[i]);
        $("#skills").append(formattedSkill);
      }
    }
  },
  "displayFooter": function() {
    this.appendContacts("#footerContacts");
  },
  "display": function() {
    this.displayHeader();
    this.displayFooter();
  },
  "appendContacts" : function(destination) {
    var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);

    $(destination).append(formattedMobile);
    $(destination).append(formattedEmail);
    $(destination).append(formattedTwitter);
    $(destination).append(formattedGithub);
    $(destination).append(formattedLocation);
  }
}

var work = {
  "jobs": [
  {
    "employer": "MirKvartir",
    "title": "Junior Web Developer",
    "location": "Moscow",
    "dates": "03.08.2015-now",
    "description": "Development of real estate ads website"
  },
  {
    "employer": "Logos Agent Technologies LLC",
    "title": "C++ Developer",
    "location": "Moscow",
    "dates": "03.02.2014-23.06.2015",
    "description": "Development of training simulators"
  },
  {
    "employer": "Mindbox LLC",
    "title": "Junior Web Developer",
    "location": "Moscow",
    "dates": "15.02.2013-15.05.2013",
    "description": "Development of CRM systems"
  },
  {
    "employer": "Mail.ru",
    "title": "Junior Android Developer",
    "location": "Moscow",
    "dates": "05.11.2011-05.06.2012",
    "description": "Development of instant messagers"
  }],
  "display" : function() {
    if (this.jobs.length > 0) {
      for (var i = 0; i < this.jobs.length; ++i) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[i].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", this.jobs[i].title);
        $(".work-entry:last").append(formattedEmployer + formattedWorkTitle);

        var formattedDate = HTMLworkDates.replace("%data%", this.jobs[i].dates);
        $(".work-entry:last").append(formattedDate);

        var formattedWorkLocation = HTMLworkLocation.replace("%data%", this.jobs[i].location);
        $(".work-entry:last").append(formattedWorkLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
      }
    }
  }
}

var projects = {
  "projects": [
  {
    "title": "Distributed Computing Framework",
    "dates": "01.09.2012 - 30.06.2013",
    "description": "Framework for building distributed computing systems",
    "images":["images/Clustering-330_1x.png"]
  },
  {
    "title": "PCA clustering algorithms research",
    "dates": "01.09.2012 - 31.12.2012",
    "description": "research work on prinipal component analysis for text clustering",
    "images":["images/distributed-computing.jpg"]
  }],
  "display": function() {
    if (this.projects.length > 0) {
      for (var i = 0; i < this.projects.length; ++i) {

        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", this.projects[i].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", this.projects[i].dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", this.projects[i].description);
        $(".project-entry:last").append(formattedProjectDescription);

        for (var j = 0; j < this.projects[i].images; ++j) {
          var formattedProjectImage = HTMLprojectImage.replace("%data%", this.projects[i].images[j]);
          $(".project-entry:last").append(formattedProjectImage);
        }
      }
    }
  }
}

var education = {
  "schools": [
  {
    "name": "National Research Nuclear University",
    "location": "Moscow",
    "degree": "specialist (equivalent to Masters)",
    "majors": ["CS", "Mathematics"],
    "dates": "01.01.2009 - 01.06.2014",
    "url": "http://www.mephi.ru"
  }],
  "onlineCourses": [
  {
    "title": "Udacity Front-End developer nanodegree",
    "school": "Udacity",
    "dates": "13.09.2015 - now",
    "url":"http://www.udacity.com"
  }],
  "display": function() {
    if (this.schools.length > 0) {
      for (var i = 0; i < this.schools.length; ++i) {

        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", this.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[i].degree);
        $(".education-entry:last").append(formattedSchoolName + formattedDegree);

        var formattedEducationDates = HTMLschoolDates.replace("%data%", this.schools[i].dates);
        $(".education-entry:last").append(formattedEducationDates);

        var formattedEducationLocation = HTMLschoolLocation.replace("%data%", this.schools[i].location);
        $(".education-entry:last").append(formattedEducationLocation);

        var formattedEducationMajor = HTMLschoolMajor.replace("%data%", this.schools[i].majors);
        $(".education-entry:last").append(formattedEducationMajor);

      }
    }

    if (this.onlineCourses.length > 0) {

      $("#education").append(HTMLonlineClasses);

      for (var i = 0; i < this.onlineCourses.length; ++i) {

        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[i].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[i].school);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", this.onlineCourses[i].dates);
        $(".education-entry:last").append(formattedEducationDates);

        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", this.onlineCourses[i].url);
        $(".education-entry:last").append(formattedOnlineUrl);
      }
    }
  }
}
//===========================================

function displayWork()
{
  bio.display();
  work.display();
  projects.display();
  education.display();

  $("#map-wnd").append(googleMap);
}



//Implementation of navbar was taken from http://dw-resume.appspot.com/
//At first, I tried to implement it myself, but my implementation was not working,
//so i found and copied this solution
//===========================================
//Navbar
//===========================================
$(function() {
  var navPosition = $('.nav-bar').offset().top -10;
  var navBar = $('.nav-bar').get(0);
  var header = document.getElementById('header');

  function navControl() {
    var currentScroll = $(document).scrollTop();
    if (currentScroll >= navPosition) {
      navBar.classList.add('fixed-nav');
      header.classList.add('expand-header');
    } else {
      navBar.classList.remove('fixed-nav');
      header.classList.remove('expand-header');
    }
  }

  $(window).scroll(navControl);
});
//===========================================

displayWork();