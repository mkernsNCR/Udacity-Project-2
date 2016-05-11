var bio = {
  name: 'Matthew Kerns',
  role: "Full Stack Web Developer",
  contacts: {
    mobile: "240-423-6684",
    email: "matthewkerns@ymail.com",
    github: "https://github.com/mkernsNCR",
    twitter: "https://twitter.com/matthewkerns1",
    location: "Upper Marlboro, MD"
  },
  welcomeMessage: "Welcome to my resume!",
  skills: ["HTML5", "CSS3", "Bootstrap", "Javascript", "jQuery", "Ruby on Rails", "PostgreSQL", "Heroku"],
  biopic: "images/my-headshot.jpg",

  display: function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var allContacts = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation;
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedWelcomeMsg);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedSkills);
    $("#footerContacts").append(allContacts);

    //if statement start
    if (bio.skills.length > 0) {
      formattedSkills = HTMLskills.replace("%data%", bio.skills[1])
      $("#header").append(formattedSkills);
      formattedSkills = HTMLskills.replace("%data%", bio.skills[2])
      $("#header").append(formattedSkills);
      formattedSkills = HTMLskills.replace("%data%", bio.skills[3])
      $("#header").append(formattedSkills);
      formattedSkills = HTMLskills.replace("%data%", bio.skills[4])
      $("#header").append(formattedSkills);
      formattedSkills = HTMLskills.replace("%data%", bio.skills[5])
      $("#header").append(formattedSkills);
      formattedSkills = HTMLskills.replace("%data%", bio.skills[6])
      $("#header").append(formattedSkills);
      formattedSkills = HTMLskills.replace("%data%", bio.skills[7])
      $("#header").append(formattedSkills);
      //if statement end
    };

  }
};
bio.display();

var work = {
  jobs: [
    {
      employer: "NASA HQ",
      title: "Application Development/Support Intern",
      dates: "August 2015 - January 2016",
      location: "300 E St SW",
      description: "Replaced a legacy Human Resources Applicant Tracking System (ATS) that provided service for approximately 500 civil servants. Researched over 50 different ATS applications and developed an Analysis of Alternative (AOA) and presented research to senior management via Microsoft Office PowerPoint presentation."
    },
    {
      employer: "H&M",
      title: "Sales Associate",
      dates: "September 2013 - Present",
      location: " 2140 Annapolis Mall Rd",
      description: "I provide exemplary customer service to 50-100 customers a day, helping with outfit suggestions as well as transactions all while representing H&M’s 5 basic demands (Wear Name Badge, Smile, Greet Customer, Make Eye Contact and Say Thank you). I also developed 10 new hires, instilling H&M’s core values in them on top of daily routine and protocol."
    }
  ],

  display: function() {

    var formattedworkStart = HTMLworkStart;
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[0]);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.title);
    var formattedDates = HTMLworkDates.replace("%data%", work.dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.description);

    $("#workExperience").append(HTMLworkStart);
    //$("#workExperience").append(formattedEmployer);
    //$("#workExperience").append(formattedTitle);
    //$("#workExperience").append(formattedDates);
    //$("#workExperience").append(formattedLocation);
    //$("#workExperience").append(formattedDescription);

    //for loop start
    for (job in work.jobs) {

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmpTle = formattedEmployer + formattedTitle;
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      var formattedInfo = formattedDates + formattedLocation + formattedDescription;

      $(".work-entry:last").append(formattedEmpTle);
      $(".work-entry:last").append(formattedInfo);
      //for loop end
    };

  }
};
work.display();

var project = {
  projects : [
    {
      title: "Eclectic Method",
      dates: "September 2015",
      description: "My first webpage ever! Here users can look at trendy jean designs and shop for them via external links under pictures. Technologies Used: HTML5, CSS3, Bootstrap, Git & Github.",
      image: "images/EM.jpg"
    },
    {
      title: "Pianogram",
      dates: "March 2016",
      description: "Pianogram is a platform for artists world-wide to come and share their personal creativity through music cover videos. It is built with Ruby on Rails and uses a two model base. The view is taken care of by rails, through erb files designated to each individual method (GET, PUT, POST, DELETE, UPDATE).Technologies Used: Ruby 2.2.3p173, Rails 4.2.5, PostegreSQL, Active Record, Heroku, Git & Github.",
      image: "images/pianogram.png"
    }
  ],

  display: function() {

    var formattedprojectStart = HTMLprojectStart;
    var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[0]);
    var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
    var formattedImages = HTMLprojectImage.replace("%data%", project.image);

    $("#projects").append(HTMLprojectStart);
    /*$("#projects").append(formattedTitle);
    $("#projects").append(formattedDates);
    $("#projects").append(formattedDescription);
    $("#projects").append(formattedImages);*/

    for (projects in project.projects) {
      var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[projects].title);
      var formattedDates = HTMLprojectDates.replace("%data%", project.projects[projects].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[projects].description);
      var formattedImages = HTMLprojectImage.replace("%data%", project.projects[projects].image);


      $(".project-entry:last").append(formattedTitle);
      $(".project-entry:last").append(formattedDates);
      $(".project-entry:last").append(formattedDescription);
      $(".project-entry:last").append(formattedImages);
    }

  }
};
project.display();

var education = {
  schools: [
    {
      name: "General Assembly",
      degree: "Full Stack Development Training",
      dates: "Feburary 2016 - April 2016",
      location: "1133 15th St NW, Washington, DC 20005",
      major: "Full Stack Development Immersive"
    },
    {
      name: "Year Up",
      degree: "Technical Training Certificate",
      dates: "March 2015 - January 2016",
      location: "1901 S Bell St #100, Arlington, VA",
      major: "Computer Science"
    },
    {
      name: "Northern Virginia Community College",
      degree: "Associates Degree",
      dates: "March 2015 - January 2016",
      location: "8333 Little River Turnpike, Annandale, VA",
      major: "Information Technology"
    },
    {
      name: "Udacity",
      degree: "Front-End Development Nanodegree",
      dates: "May 2015 - Present",
      location: "N/A",
      major: "Front-End Development"
    }

  ],

  onlineClasses: "Front-End Development",
  onlineTitle: "HTML5/CSS3/Javascript",
  onlineSchool: "Udacity",
  onlineDates: "May 2015 - January 2016",
  onlineURL: "https://www.udacity.com/Nanodegree",

  display: function() {

    var formattedschoolStart = HTMLschoolStart;
    var formattedschoolName = HTMLschoolName.replace("%data%", education.name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.degree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.location);
    var formatedMajor = HTMLschoolMajor.replace("%data%", education.major);

    var formattedonlineClasses = HTMLonlineClasses.replace("%data%", education.onlineClasses);
    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineTitle);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineSchool);
    var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineDates);
    var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineURL);

    $("#education").append(HTMLschoolStart);
    //$("#education").append(formattedschoolName);
    //$("#education").append(formattedDegree);
    //$("#education").append(formattedDates);
    //$("#education").append(formattedLocation);
    //$("#education").append(formatedMajor);

    //$("#education").append(formattedonlineClasses);
    //$("#education").append(formattedonlineTitle);
    //$("#education").append(formattedonlineSchool);
    //$("#education").append(formattedonlineDates);
    //$("#education").append(formattedonlineURL);

    //for loop start
    for (school in education.schools) {

      var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      var formatedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

      var schoolNameDegree = formattedschoolName + formattedDegree;
      var schoolDatesLocationMajor = formattedDates + formattedLocation + formatedMajor;

      $(".education-entry:last").append(schoolNameDegree);
      $(".education-entry:last").append(schoolDatesLocationMajor);
      //for loop end

    };

  }
};
education.display();

$("#mapDiv").append(googleMap);
