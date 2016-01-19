var bio = {
    name: 'Matthew Kerns',
    role: "Front-End Web Developor",
    contacts: {
        mobile: "240-423-6684",
        email: "matthewkerns@ymail.com",
        github: "https://github.com/mkernsNCR",
        twitter: "N/A",
        location: "Upper Marlboro, MD"
    },
    welcomeMessage: "Welcome to my resume!",
    skills: ["HTML5", "CSS3", "Bootstrap", "Javascript"],
    biopic: "images/biopic.jpg",

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
        //if statement end
        }

    }
};
bio.display();

var work = {
    jobs: [{
        employer: "NASA HQ",
        title: "Application Development/Support Intern",
        dates: "August 2015 - Present",
        location: "300 E St SW",
        description: "I was responsible for analyzing existing applications in the NASA HQ ITCD application portfolio to determine a redesign strategy and/or application consolidation approach. I was also tasked with assisting ITCD with the rebranding of their current website.",
    }, {
        employer: "H&M",
        title: "Sales Associate",
        dates: "September 2013 - Present",
        location: " 2140 Annapolis Mall Rd",
        description: "I provide exemplary customer service to 50-100 customers a day, helping with outfit suggestions as well as transactions all while representing H&M’s 5 basic demands (Wear Name Badge, Smile, Greet Customer, Make Eye Contact and Say Thank you). I also developed 10 new hires, instilling H&M’s core values in them on top of daily routine and protocol.",
    }],

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
    title: "My Clothing Website",
    dates: "September 2015",
    description: "You will be provided with a design mockup as a PDF-file and must replicate that design in HTML and CSS. You will develop a responsive website that will display images, descriptions and links to each of the portfolio projects you will complete throughout the course of the Front-End Web Developer Nanodegree.",
    image: "images/EM.jpg",

    display: function() {

        var formattedprojectStart = HTMLprojectStart;
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        var formattedImages = HTMLprojectImage.replace("%data%", project.image);

        $("#projects").append(HTMLprojectStart);
        $("#projects").append(formattedTitle);
        $("#projects").append(formattedDates);
        $("#projects").append(formattedDescription);
        $("#projects").append(formattedImages);

    }
};
project.display();

var education = {
    schools: [{
            name: "Year Up",
            degree: "Nanodegree",
            dates: "March 2015 - January 2016",
            location: "1901 S Bell St #100, Arlington, VA",
            major: "Computer Science",
        }, {
            name: "Northern Virginia Community College",
            degree: "Associates Degree",
            dates: "March 2015 - January 2016",
            location: "8333 Little River Turnpike, Annandale, VA",
            major: "Information Technology",
        }, {
            name: "Udacity",
            degree: "Front-End Development Nanodegree",
            dates: "May 2015 - January 2016",
            location: "1901 S Bell St #100, Arlington, VA",
            major: "Information Technology",
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