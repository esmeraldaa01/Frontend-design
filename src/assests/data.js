import clns from "./clns.jpg";
import vip from "./vipGirl.jpg";
import pic2 from "./pic2.jpg";
import girl from "./girl.png";
import group from "./group.jpg";
import men from "./men.jpg";
import stFLogo from "./stFLogo.PNG";
import ndFLogo from "./ndFLogo.PNG";
import rdFLogo from './rdFLogo.PNG';
import rthFLogo from './rthFLogo.PNG';
import stNLogo from './stNLogo.PNG';

const data = [
  {
    category: "Featured",
    list: [
      {
        title: "What is Putins End Goal?",
        image: stFLogo,
        labelTag: 'LATEST',
        timestamp: "Added 21 hours ago",
      },
      {
        title:
          "Umbrella Academys Justin H. Min Replies to Fans on the Internet Actually Me  GQ",
          image: ndFLogo,
          labelTag: 'LATEST',
          timestamp: "Added 2 days ago"
      },
    ],
    subCategories: [
      {
        name: "more",
        list: [
          {
            title:
              "Heidi Montag Accuses Lady Gaga Of Sabotaging Her Music Career And Stealing Her Song",
            added: "Added 2 days ago",
            image: vip,
          },
          {
            title:
              "Astrophysicist Explains Black Holes in 5 Levels of Difficulty",
            added: "Added 3 days ago",
            image: pic2,
          },
          {
            title: "Knot Just a Heart Braid | Cosmo's The Braid Up",
            added: "Added 3 days ago",
            image: girl,
          },
        ],
      },
      {
        name: "topstories",
        list: [
          {
            title:
              "U2 Scripted Series From J.J. Abrams in the Works at Netflix | THR News",
            added: "Added 9 days ago",
            image: group,
          },
          {
            title:
              "Elie Mystal says the Constitution is deeply flawed in his book Let Me Retort",
            added: "Added 4 days ago",
            image: men,
          },
          {
            title: "Christian Gates Answers Fans' Questions",
            added: "Added 4 days ago",
            image: clns,
          },
        ],
      },
    ],
  },
  {
    category: "News",
    list: [
     { title: "Use These Simple Tips to Not Fall Victim to Tax Fraudsters",
    image : rdFLogo,
    },
      {
        title: 'Vacations Can Be a Teachable Experience for Kids',
        image : rthFLogo,
      },
      {
        title: 'Gas masks and hazmat suits are flying off the shelves at survival gear companies over fears of...',
        image : stNLogo,
      }
    ],
    subCategories: [
      {
        name: "discover",
        list: [
          {
            title:
              "Heidi Montag Accuses Lady Gaga Of Sabotaging Her Music Career And Stealing Her Song",
            added: "Added 2 days ago",
            image: vip,
          },
          {
            title:
              "Astrophysicist Explains Black Holes in 5 Levels of Difficulty",
            added: "Added 3 days ago",
            image: pic2,
          },
          {
            title: "Knot Just a Heart Braid | Cosmo's The Braid Up",
            added: "Added 3 days ago",
            image: girl,
          },
        ],
      },
    ],
  },
];

export default data;
