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

var bio = {
  "skills": ["skillOne", "skillTwo"]
}



function displayWork()
{
  if(document.getElementsByClassName('flex-item').length === 0) {
      document.getElementById('topContacts').style.display = 'none';
    }
    if (bio.skills.length > 0)
    {
      $("#header").append(HTMLskillsStart);
      for(var i = 0; i < bio.skills.length; ++i)
      {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
      }
    }

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
