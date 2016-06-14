//This file has been updated on Github
var bio = {
  'name': 'Farrin N. Abbott',
  'role': 'Front End Developer',
  'contacts': {
    'mobile': '650-933-6969',
    'email': 'farrin.abbott@gmail.com',
    'github': 'farrin',
    'location': 'San Francisco'},
  'welcomeMessage': 'Heya Welcome!',
  'skills': [
    'Filmmaking', 'Online Education', 'Instructional Design',
  ],
  'biopic': 'images/me.jpg',
  'display': function() {
    var formattedName =
      HTMLheaderName.replace('%data%', bio.name);
    var formattedRole =
      HTMLheaderRole.replace('%data%', bio.role);
    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);
    var formattedMobile =
      HTMLmobile.replace('%data%', bio.contacts.mobile);
    $('#topContacts').append(formattedMobile);
    var formattedEmail =
      HTMLemail.replace('%data%', bio.contacts.email);
    $('#topContacts').append(formattedEmail);
    var formattedGithub =
      HTMLgithub.replace('%data%', bio.contacts.github);
    $('#topContacts').append(formattedGithub);
    var formattedLocation =
      HTMLlocation.replace('%data%', bio.contacts.location);
    $('#topContacts').append(formattedLocation);

    var formattedBioPic =
      HTMLbioPic.replace('%data%', bio.biopic);
    $('#header').append(formattedBioPic);

    $('#header').append(HTMLskillsStart);
    for (var x in bio.skills) {
      var formattedSkill = HTMLskills.replace('%data%', bio.skills[x]);
      $('#skills').append(formattedSkill);
    }

    $('#footerContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
  }
};

bio.display();

var work = {
  jobs: [
    {title: 'Video Production',
      employer: 'Udacity',
      years: 0.75,
      location: 'Mountain View CA',
      dates: 'Aug 2015-Present',
      description: 'Video producer of tech education videos',
    },
    {title: 'Video Production Director',
      employer: 'Stanford University',
      years: 3,
      location: 'Stanford CA',
      dates: 'May 2013-Aug 2015',
      description: 'Online production for courses covering world topics',
    },
    {title: 'Web & Media Producer',
      employer: 'Northwestern University',
      years: 2,
      location: 'Chicago IL',
      dates: 'Dec 2013-Oct 2015',
      description: 'Media and web producer for LGBT sexual health education',
    }
  ],
  display: function() {
    for (var jobs in work.jobs) {
      $('#workExperience').append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[jobs].employer);
      var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[jobs].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $('.work-entry:last').append(formattedEmployerTitle);

      var formattedDates = HTMLworkDates.replace('%data%', work.jobs[jobs].dates);
      $('.work-entry:last').append(formattedDates);

      var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[jobs].description);
      $('.work-entry:last').append(formattedDescription);
    }
  }
};
work.display();

var projects = {
  projects: [
  {title: '10 Year Project Car',
    dates: '2015',
    description: 'First car I ever test drove was an old VW GTI. I vowed I would have one. This is my 2015 beauty...',
    images: ['images/sin-city-ride.jpg'],
  },
  {title: 'Building a Studio',
    dates: '2013',
    description: 'Startup under the President. Launched online learning program and had the unbelievable opportunity to create my own studio from scratch.',
    images: ['images/loaded.jpg'],
  },
  {title: 'Psychology Studies',
    dates: '2013',
    description: 'Cuz I\'\ve been to paradise, but I\'\ve never been to me...',
    images: ['images/psychology.jpg'],
  }
  ],
  display: function() {
    for (var project in projects.projects) {
      $('#projects').append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
      $('.project-entry:last').append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
      $('.project-entry:last').append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
      $('.project-entry:last').append(formattedDescription);

      if (projects.projects[project].images.length > 0) {
        for (var image in projects.projects[project].images) {
          var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
          $('.project-entry:last').append(formattedImage);
        }
      }
    }
  }
};
projects.display();

var education = {
  schools: [
    {name: 'Washington University',
      location: 'St. Louis, MO',
      degree: 'BA',
      majors: [
        'Psychology'
      ],
      dates: '1998-2001',
      url: 'www.wustl.edu',
    },
    {name: 'Northwestern University',
      location: 'Evanston, IL',
      degree: 'Credit',
      majors: [
        'Filmmaking Coursework'
      ],
      dates: '2006-2010',
      url: 'www.northwestern.edu',
    }
  ],
  onlineCourses: [
    {title: 'JavaScript Essentials',
      school: 'Lynda',
      date: '2016',
      url: 'www.lynda.com'
    },
    {title: 'JavaScript Basics',
      school: 'Udacity',
      date: '2016',
      url: 'www.udacity.com'
    }
  ],
  display: function() {
    for (var school in education.schools) {
      $('#education').append(HTMLschoolStart);
      var formattedEdName = HTMLschoolName.replace('%data%', education.schools[school].name) + HTMLschoolDegree.replace('%data%', education.schools[school].degree);
      $('.education-entry:last').append(formattedEdName);

      var formattedEdLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
      $('.education-entry:last').append(formattedEdLocation);

      var formattedEdDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
      $('.education-entry:last').append(formattedEdDates);

      if (education.schools[school].majors.length > 0) {
        for (var majors in education.schools[school].majors) {
          var formattedEdMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors[majors]);
          $('.education-entry:last').append(formattedEdMajor);
        }
      }
    }

    $('#education').append(HTMLonlineClasses);
    for (var online in education.onlineCourses) {
      $('#education').append(HTMLschoolStart);
      var formattedOnlineEdName = HTMLonlineTitle.replace('%data%', education.onlineCourses[online].title) + HTMLonlineSchool.replace('%data%', education.onlineCourses[online].school);
      $('.education-entry:last').append(formattedOnlineEdName);

      var formattedOnlineEdDates = HTMLonlineDates.replace('%data%', education.onlineCourses[online].date);
      $('.education-entry:last').append(formattedOnlineEdDates);

      var formattedOnlineEdUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[online].url);
      $('.education-entry:last').append(formattedOnlineEdUrl);
    }
  }
};
education.display();

$('#mapDiv').append(googleMap);
