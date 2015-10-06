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
  "biopic":"http://placekitten.com/g/200/200",
  "skills": ["C#", "C++", "HTML", "CSS", "ASP.NET MVC", "git", "hg", "svn"],
  "display": function() {
    var formatterHeaderName = HTMLheaderName.replace("%data%", bio.name);
    var formatterRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formatterRole);
    $("#header").prepend(formatterHeaderName);


    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location)

    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);

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
    "dates": "03.08.2015-now",
    "description": "Development of CRM systems"
  },
  {
    "employer": "Mail.ru",
    "title": "Junior Android Developer",
    "location": "Moscow",
    "dates": "05.11.2011-05.06.2012",
    "description": "Development of instant messagers"
  }]
}

var projects = {
  "projects": [
  {
    "title": "Distributed Computing Framework",
    "dates": "01.09.2012 - 30.06.2013",
    "description": "Framework for building distributed computing systems",
    "images":[]
  },
  {
    "title": "PCA clustering algorithms research",
    "dates": "01.09.2012 - 31.12.2012",
    "description": "research work on prinipal component analysis for text clustering",
    "images":[]
  }]
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
  onlineCourses: [
  {
    "title": "Udacity Front-End developer nanodegree",
    "schoold": "Udacity",
    "dates": "13.09.2015 - now",
    "url":"http://www.udacity.com"
  }]
}

function displayWork()
{
  bio.display();

  if (work.jobs.length > 0)
  {

    for(workEntry in work.jobs)
    {
      $("#workExperience").append(HTMLworkStart)
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[workEntry].employer);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[workEntry].title);
      $(".work-entry:last").append(formattedEmployer + formattedWorkTitle);

      var formattedDate = HTMLworkDates.replace("%data%", work.jobs[workEntry].dates)
      $(".work-entry:last").append(formattedDate);

      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[workEntry].description)
      $(".work-entry:last").append(formattedDescription);

    }
  }

  if(document.getElementsByClassName('work-entry').length === 0) {
    document.getElementById('workExperience').style.display = 'none';
  }
  if(document.getElementsByClassName('project-entry').length === 0) {
    document.getElementById('projects').style.display = 'none';
  }
  if(document.getElementsByClassName('education-entry').length === 0) {
    document.getElementById('education').style.display = 'none';
  }
  if(document.getElementsByClassName('flex-item').length === 0) {
    document.getElementById('lets-connect').style.display = 'none';
  }
  if(document.getElementById('map') === null) {
    document.getElementById('mapDiv').style.display = 'none';
  }
}

displayWork();

$(document).click(function(loc){
  logClicks(loc.pageX, loc.pageY);
})
