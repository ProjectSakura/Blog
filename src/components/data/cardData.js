//? INSERT THE LATEST POST ON TOP WITH UPDATED ID
const data = [
  {
    id: 23,
    url: "/5.2-Project-Sakura-Update",
    title: "Faster, Better, More stable!",
    author: "LordShenron",
    date: new Date(Date.parse("2021-07-31")),
    desc: "Whats new in the latest release of Project Sakura? Check out..",

  },
  {
    id: 22,
    url: "/5.1-july-2021-update",
    title: "A sweet small July update.",
    author: "LordShenron",
    date: new Date(Date.parse("2021-07-15")),
    desc: "Whats new in the latest release of Project Sakura? Check out..",

  },
  {
    id: 21,
    url: "/merch-update",
    title: "Official Project Sakura Embroidered Tshirts and sweatshirts.",
    author: "LordShenron",
    date: new Date(Date.parse("2021-07-09")),
    desc: "Whats new in the latest release of Project Sakura? Check out..",

  },
  {
    id: 20,
    url: "/5.1-june-2021-update",
    title: "Project Sakura 5.1 is the best thing this summer",
    author: "LordShenron",
    date: new Date(Date.parse("2021-06-17")),
    desc: "Whats new in the latest release of Project Sakura? Check out..",

  },
  {
    id: 19,
    url: "/5.R-mid-may-2021-update",
    title: "Mid-May happiness with Project Sakura.",
    author: "LordShenron",
    date: new Date(Date.parse("2021-05-23")),
    desc: "Whats new in the latest release of Project Sakura? Check out..",

  },
  {
    id: 18,
    url: "/5.R-May-2021-update",
    title: "Blur, Transparency, Stability and much more in the May 2021 release of Project Sakura.",
    author: "LordShenron",
    date: new Date(Date.parse("2021-05-10")),
    desc: "Whats new in the latest release of Project Sakura? Check out..",

  },
  {
    id: 17,
    url: "/5.R-April-2021-update",
    title: "ProjectSakura April 2021 Security update is here.",
    author: "LordShenron",
    date: new Date(Date.parse("2021-04-12")),
    desc: "Whats new in the latest release of Project Sakura? Check out..",
  },
  {
    id: 16,
    url: "/gssoc-association-website-update-march",
    title: "Project Sakura is now associated with GSSOC'21",
    author: "Arun Teltia",
    date: new Date(Date.parse("2021-03-21")),
    desc: "Whats new in the latest release of Project Sakura? Check out..",
  },
  {
    id: 15,
    url: "/5.R-android-11-second-update-march",
    title: "Newer Faceunlock, FOD icons, animations and effects",
    author: "LordShenron",
    date: new Date(Date.parse("2021-03-08")),
    desc: "Whats new in the latest release of Project Sakura? Check out..",
  },
  {
    id: 14,
    url: "/5.R-android-11-initial-release",
    title: "Version 5.R of Project Sakura is here",
    author: "LordShenron",
    date: new Date(Date.parse("2021-03-08")),
    desc: "Whats new in the latest release of Project Sakura? Check out..",
  },
  {
    id: 13,
    url: "/4.R-february-2021-update",
    title: "February 2021's update of Project Sakura is rolling out",
    author: "LordShenron",
    date: new Date(Date.parse("2021-02-08")),
    desc: "Whats new in the latest release of Project Sakura? Check out..",
  },
  {
    id: 12,
    url: "/4.R-january-2021-update",
    title: "First Update of January 2021 is now rolling out",
    author: "LordShenron",
    date: new Date(Date.parse("2021-02-09")),
    desc: "Whats new in the latest release of Project Sakura? Check out.",
  },
  {
    id: 11,
    url: "/4.R-android-11-update",
    title: "Version 4.R of Project Sakura is here.",
    author: "LordShenron",
    date: new Date(Date.parse("2020-12-29")),
    desc: "Whats new in the latest release of Project Sakura? Check out",
  },
  {
    id: 10,
    url: "/3.R-android-11-beta-3",
    title: "Third Beta of Project Sakura 3.R based on Android 11 is here",
    author: "LordShenron",
    date: new Date(Date.parse("2020-12-11")),
    desc: "Whats new in the beta 3 of Project Sakura 3.R? Check out..",
  },
  {
    id: 9,
    url: "/3.R-android-11-beta-2",
    title: "Second Beta of Project Sakura 3.R based on Android 11 is here",
    author: "LordShenron",
    date: new Date(Date.parse("2020-11-28")),
    desc: "Whats new in the beta 2 of Project Sakura 3.R? Check out..",
  },
  {
    id: 8,
    url: "/oursponsor",
    title: "XSLTEL decided to sponsor Project Sakura",
    author: "Manish",
    date: new Date(Date.parse("2020-05-01")),
    desc: "XSLTEL OU is a european company that have decided to sponsor Project Sakura with servers..",
  },
  {
    id: 7,
    url: "/september-2020-update",
    title: "When android 11, what is new in this update and what you can expect in future",
    author: "LordShenron",
    date: new Date(Date.parse("2020-10-14")),
    desc: "Whats new in this release? checkout..",
  },
  {
    id: 6,
    url: "/second-update-of-august-2020",
    title: "What's better than a hot cup of coffee? Yes!, a Project Sakura update.",
    author: "LordShenron",
    date: new Date(Date.parse("2020-08-28")),
    desc: "Whats new in this release? checkout..",
  },
  {
    id: 5,
    url: "/august-2020-update",
    title: "NOW IS THE TIME TO UPDATE! We have updated to the August Security Patch.",
    author: "LordShenron",
    date: new Date(Date.parse("2020-08-07")),
    desc: "August security patch, oplauncher and much more..",
  },
  {
    id: 4,
    url: "/july-2020-update",
    title: "July patch, ultra thicc gesture handle and more",
    author: "Amartya",
    date: new Date(Date.parse("2020-07-13")),
    desc: "Everyone likes thicc *ahem*, Yes the thicc gesture handle and a new shining tiny security patch..",
  },
  {
    id: 3,
    url: "/second-update-of-june-2020",
    title: "We are updating for the second time this june.",
    author: "Shen",
    date: new Date(Date.parse("2020-06-29")),
    desc: "Our updates are getting hotter just like the weather, so we should cool down now..",
  },
  {
    id: 2,
    url: "/maintainership",
    title: "Apply for Project Sakura Maintainership!",
    author: "Shen",
    date: new Date(Date.parse("2020-05-14")),
    desc: "Want to make a official sakura build for your device? check this post..",
  },
  {
    id: 1,
    url: "/may-2020-update",
    title: "Its summer and spring is almost gone, but we came with the May update.",
    author: "Shen",
    date: new Date(Date.parse("2020-05-15")),
    desc: "See whats new and good this may..",
  },
  {
    id: 0,
    url: "/android-11-beta-1",
    title: "First Beta of Project Sakura based on Android 11 is here",
    author: "LordShenron",
    date: new Date(Date.parse("2020-11-09")),
    desc: "Whats new in this release? checkout..",
  },
];
export default data;
