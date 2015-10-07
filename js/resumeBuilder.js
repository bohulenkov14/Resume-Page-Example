var bio = {
  "name": "Artem Bohulenkov",
  "role": "Web Developer",
  "welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "contacts": {
    "mobile": "+7 (915)398-09-45",
    "email": "bohulenkov14@gmail.com",
    "github": "bohulenkov14",
    "twitter": "@zellos_dajedra",
    "location": "Moscow"
  },
  "biopic":"http://placekitten.com/g/500/500",
  "skills": ["C#", "C++", "ASP.NET MVC", "Bootstrap", "JS", "HTML", "CSS", "git", "hg", "svn"],
  "display": function() {
    var formatterHeaderName = HTMLheaderName.replace("%data%", bio.name);
    var formatterRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formatterRole);
    $("#header").prepend(formatterHeaderName);


    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for(var i = 0; i < bio.skills.length; ++i) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
      }
    }
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
    if (work.jobs.length > 0) {
      for (workEntry in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[workEntry].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[workEntry].title);
        $(".work-entry:last").append(formattedEmployer + formattedWorkTitle);

        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[workEntry].dates);
        $(".work-entry:last").append(formattedDate);

        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[workEntry].location);
        $(".work-entry:last").append(formattedWorkLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[workEntry].description);
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
    "images":["http://placekitten.com/g/500/500", "http://placekitten.com/g/500/500"]
  },
  {
    "title": "PCA clustering algorithms research",
    "dates": "01.09.2012 - 31.12.2012",
    "description": "research work on prinipal component analysis for text clustering",
    "images":["http://placekitten.com/g/500/500", "http://placekitten.com/g/500/500"]
  }],
  "display": function() {
    if (projects.projects.length > 0) {
      for (projectEntry in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[projectEntry].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[projectEntry].dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[projectEntry].description);
        $(".project-entry:last").append(formattedProjectDescription);

        for (projectImage in projects.projects[projectEntry].images) {
          var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[projectEntry].images[projectImage]);
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
    if (education.schools.length > 0) {
      for (educationEntry in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[educationEntry].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[educationEntry].degree);
        $(".education-entry:last").append(formattedSchoolName + formattedDegree);

        var formattedEducationDates = HTMLschoolDates.replace("%data%", education.schools[educationEntry].dates);
        $(".education-entry:last").append(formattedEducationDates);

        var formattedEducationLocation = HTMLschoolLocation.replace("%data%", education.schools[educationEntry].location);
        $(".education-entry:last").append(formattedEducationLocation);

        var formattedEducationMajor = HTMLschoolMajor.replace("%data%", education.schools[educationEntry].majors);
        $(".education-entry:last").append(formattedEducationMajor);

      }
    }

    if (education.onlineCourses.length > 0) {

      $("#education").append(HTMLonlineClasses);

      for (onlineCourseEntry in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourseEntry].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourseEntry].school);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourseEntry].dates);
        $(".education-entry:last").append(formattedEducationDates);

        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourseEntry].url);
        $(".education-entry:last").append(formattedOnlineUrl);
      }
    }
  }
}

function displayWork()
{
  bio.display();
  work.display();
  projects.display();
  education.display();

  if(document.getElementsByClassName('flex-item').length === 0) {
    document.getElementById('lets-connect').style.display = 'none';
  }

  $("#mapDiv").append(googleMap);
}

displayWork();

$(".main").onepage_scroll({
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
});
