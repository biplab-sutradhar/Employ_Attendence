const employeeData = [
  {
    id: "FT-0001",
    name: "John Doe",
    roles: ["Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"],
    email: "johndoe@example.com",
    mobile: "9876543210",
    joinDate: "1 Jan 2023",
    action: "more_vert",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: "FT-0002",
    name: "Richard Miles",
    roles: ["Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"],
    email: "richardmiles@example.com",
    mobile: "9876543210",
    joinDate: "18 Mar 2014",
    action: "more_vert",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: "FT-0003",
    name: "John Smith",
    roles: ["Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"],
    email: "johnsmith@example.com",
    mobile: "9876543210",
    joinDate: "1 Apr 2014",
    action: "more_vert",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    id: "FT-0004",
    name: "Emma Johnson",
    roles: ["Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"],
    email: "emmajohnson@example.com",
    mobile: "9876543210",
    joinDate: "15 May 2019",
    action: "more_vert",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    id: "FT-0005",
    name: "Michael Brown",
    roles: ["Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"],
    email: "michaelbrown@example.com",
    mobile: "9876543210",
    joinDate: "22 Sep 2017",
    action: "more_vert",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    id: "FT-0006",
    name: "Sophia Wilson",
    roles: ["Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"],
    email: "sophiawilson@example.com",
    mobile: "9876543210",
    joinDate: "3 Jul 2020",
    action: "more_vert",
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    id: "FT-0007",
    name: "James Anderson",
    roles: ["Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"],
    email: "jamesanderson@example.com",
    mobile: "9876543210",
    joinDate: "12 Dec 2016",
    action: "more_vert",
    image: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    id: "FT-0008",
    name: "Olivia Taylor",
    roles: ["Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"],
    email: "oliviataylor@example.com",
    mobile: "9876543210",
    joinDate: "9 Aug 2020",
    action: "more_vert",
    image: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    id: "FT-0009",
    name: "David Clark",
    roles: ["Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"],
    email: "davidclark@example.com",
    mobile: "9876543210",
    joinDate: "24 Jan 2018",
    action: "more_vert",
    image: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    id: "FT-0010",
    name: "Emily Roberts",
    roles: ["Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"],
    email: "emilyroberts@example.com",
    mobile: "9876543210",
    joinDate: "6 Mar 2016",
    action: "more_vert",
    image: "https://randomuser.me/api/portraits/women/10.jpg"
  },
  {
    id: "FT-0011",
    name: "Daniel Walker",
    roles: ["Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"],
    email: "danielwalker@example.com",
    mobile: "9876543210",
    joinDate: "11 Nov 2015",
    action: "more_vert",
    image: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    id: "FT-0012",
    name: "Ava Hill",
    roles: ["Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"],
    email: "avahill@example.com",
    mobile: "9876543210",
    joinDate: "5 Sep 2019",
    action: "more_vert",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: "FT-0013",
    name: "Christopher Lewis",
    roles: ["Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"],
    email: "christopherlewis@example.com",
    mobile: "9876543210",
    joinDate: "18 Feb 2017",
    action: "more_vert",
    image: "https://randomuser.me/api/portraits/men/13.jpg"
  },
  {
    id: "FT-0014",
    name: "Isabella Perez",
    roles: ["Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"],
    email: "isabellaperez@example.com",
    mobile: "9876543210",
    joinDate: "7 Jun 2018",
    action: "more_vert",
    image: "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    id: "FT-0015",
    name: "James White",
    roles: ["Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"],
    email: "jameswhite@example.com",
    mobile: "9876543210",
    joinDate: "29 Oct 2014",
    action: "more_vert",
    image: "https://randomuser.me/api/portraits/men/15.jpg"
  },
  {
    id: "FT-0016",
    name: "Mia Scott",
    roles: ["Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"],
    email: "miascott@example.com",
    mobile: "9876543210",
    joinDate: "14 Apr 2021",
    action: "more_vert",
    image: "https://randomuser.me/api/portraits/women/16.jpg"
  },
  {
    id: "FT-0017",
    name: "Alexander Martinez",
    roles: ["Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"],
    email: "alexandermartinez@example.com",
    mobile: "9876543210",
    joinDate: "19 Jul 2013",
    action: "more_vert",
    image: "https://randomuser.me/api/portraits/men/17.jpg"
  },
  {
    id: "FT-0018",
    name: "Charlotte Edwards",
    roles: ["Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"],
    email: "charlotteedwards@example.com",
    mobile: "9876543210",
    joinDate: "25 May 2020",
    action: "more_vert",
    image: "https://randomuser.me/api/portraits/women/18.jpg"
  },
  {
    id: "FT-0019",
    name: "William Turner",
    roles: ["Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"],
    email: "williamturner@example.com",
    mobile: "9876543210",
    joinDate: "8 Feb 2015",
    action: "more_vert",
    image: "https://randomuser.me/api/portraits/men/19.jpg"
  },
  {
    id: "FT-0020",
    name: "Amelia King",
    roles: ["Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"],
    email: "ameliaking@example.com",
    mobile: "9876543210",
    joinDate: "2 Dec 2017",
    action: "more_vert",
    image: "https://randomuser.me/api/portraits/women/20.jpg"
  },
   
    {
      id: "FT-0021",
      name: "Ethan Harris",
      roles: ["Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"],
      email: "ethanharris@example.com",
      mobile: "9876543210",
      joinDate: "12 Sep 2016",
      action: "more_vert",
      image: "https://randomuser.me/api/portraits/men/21.jpg"
    },
    {
      id: "FT-0022",
      name: "Emma Carter",
      roles: ["Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"],
      email: "emmacarter@example.com",
      mobile: "9876543210",
      joinDate: "3 Mar 2018",
      action: "more_vert",
      image: "https://randomuser.me/api/portraits/women/22.jpg"
    },
    {
      id: "FT-0023",
      name: "Liam Allen",
      roles: ["Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"],
      email: "liamallen@example.com",
      mobile: "9876543210",
      joinDate: "22 Nov 2019",
      action: "more_vert",
      image: "https://randomuser.me/api/portraits/men/23.jpg"
    },
    {
      id: "FT-0024",
      name: "Ava Collins",
      roles: ["Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"],
      email: "avacollins@example.com",
      mobile: "9876543210",
      joinDate: "7 Jul 2017",
      action: "more_vert",
      image: "https://randomuser.me/api/portraits/women/24.jpg"
    },
    {
      id: "FT-0025",
      name: "Noah Nelson",
      roles: ["Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"],
      email: "noahnelson@example.com",
      mobile: "9876543210",
      joinDate: "14 Apr 2020",
      action: "more_vert",
      image: "https://randomuser.me/api/portraits/men/25.jpg"
    },
      
  
];

export default employeeData
