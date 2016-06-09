var name = 'Farrin N. Abbott';
var role = 'Front End Developer';
var formattedName =
  HTMLheaderName.replace('%data%', name);

var formattedRole =
  HTMLheaderRole.replace('%data%', role);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

var bio = {
  'name': 'Farrin',
  'role': 'Developin\'',
  'contacts': {
    'mobile': '650-933-6969',
    'email': 'farrin.abbott@gmail.com',
    'github': 'farrin',
    'location': 'San Francisco'},
  'welcome': 'Heya Welcome!',
  'skills': [
    'Filmmaking', 'Online Education', 'Instructional Design',
  ],
  'biopic': 'images/me.jpg',
  'display': '',
};

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

$('#footerContacts').append(formattedMobile);
$('#footerContacts').append(formattedEmail);
$('#footerContacts').append(formattedGithub);
$('#footerContacts').append(formattedLocation);

var formattedBioPic =
  HTMLbioPic.replace('%data%', bio.biopic);
$('#header').append(formattedBioPic);

if (bio.skills.length > 0) {
  $('#header').append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
  $('#skills').append(formattedSkill);
  formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
  $('#skills').append(formattedSkill);
  formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
  $('#skills').append(formattedSkill);
}

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
]
};

function displayWork() {
  for (jobs in work.jobs) {
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
displayWork();

var projects = {
  project: [
  {title: '10 Year Project Car',
    date: '2015',
    description: 'First car I ever test drove was an old VW GTI. I vowed I would have one. This is my 2015 beauty...',
    image: ['images/sin-city-ride.jpg'],
  },
  {title: 'Building a Studio',
    date: '2013',
    description: 'Startup under the President. Launched online learning program and had the unbelievable opportunity to create my own studio from scratch.',
    image: ['images/loaded.jpg'],
  },
  {title: 'Psychology Studies',
    date: '2013',
    description: 'Cuz I\'\ve been to paradise, but I\'\ve never been to me...',
    image: ['images/psychology.jpg'],
  }
  ]
};

projects.display = function() {
  for (project in projects.project) {
    $('#projects').append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace('%data%', projects.project[project].title);
    $('.project-entry:last').append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace('%data%', projects.project[project].date);
    $('.project-entry:last').append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace('%data%', projects.project[project].description);
    $('.project-entry:last').append(formattedDescription);

    if (projects.project[project].image.length > 0) {
      for (image in projects.project[project].image) {
        var formattedImage = HTMLprojectImage.replace('%data%', projects.project[project].image[image]);
        $('.project-entry:last').append(formattedImage);
      }
    }
  }
};
projects.display();

var education = {
  schools: [
    {name: 'Washington University',
      city: 'St. Louis, MO',
      degree: 'BA',
      major: 'Psychology',
      years: '1998-2001',
      url: 'www.wustl.edu',
    },
    {name: 'Northwestern University',
      city: 'Evanston, IL',
      degree: 'Credit',
      major: 'Filmmaking Coursework',
      years: '2006-2010',
      url: 'www.northwestern.edu',
    }
  ],
  onlineCourses: [
    {title: 'JavaScript Essentials',
      school: 'Lynda',
      dates: 2016,
      url: 'www.lynda.com'
    },
    {title: 'JavaScript Basics',
      school: 'Udacity',
      dates: 2016,
      url: 'www.udacity.com'
    }
  ]
};

education.display = function() {
  for (school in education.schools) {
    $('#education').append(HTMLschoolStart);
    var formattedEdName = HTMLschoolName.replace('%data%', education.schools[school].name);
    $('.education-entry:last').append(formattedEdName);

    var formattedEdLocation = HTMLschoolLocation.replace('%data%', education.schools[school].city);
    $('.education-entry:last').append(formattedEdLocation);

    var formattedEdDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
    $('.education-entry:last').append(formattedEdDegree);

    var formattedEdDates = HTMLschoolDates.replace('%data%', education.schools[school].years);
    $('.education-entry:last').append(formattedEdDates);

    var formattedEdMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);
    $('.education-entry:last').append(formattedEdMajor);
  }
  for (school in education.onlineCourses) {
    var formattedOnlineEdName = HTMLonlineTitle.replace('%data%', education.onlineCourses[school].title);
    $('.education-entry:last').append(formattedOnlineEdName);

    var formattedOnlineEdLocation = HTMLonlineSchool.replace('%data%', education.onlineCourses[school].school);
    $('.education-entry:last').append(formattedOnlineEdLocation);

    var formattedOnlineEdDates = HTMLonlineDates.replace('%data%', education.onlineCourses[school].url);
    $('.education-entry:last').append(formattedOnlineEdDates);

    var formattedOnlineEdMajor = HTMLonlineURL.replace('%data%', education.onlineCourses[school].url);
    $('.education-entry:last').append(formattedOnlineEdMajor);
  }
};
education.display();

$('#mapDiv').append(googleMap);
