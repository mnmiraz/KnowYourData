import q2v1 from "./images/q2v1.png";
import q2v2 from "./images/q2v2.png";
import q6v1 from "./images/q6v1.png";
import q6v2 from "./images/q6v2.png";
import q7v1 from "./images/q7v1.png";
import q7v2 from "./images/q7v2.png";

export const dataSource = (username, dob) => {
  return [
    {
      id: "0",
      question: "Apps and websites can find out a lot about you. What do you think they can see?",
      answers: [`Photos on your phone`,
                `How often you use your phone`,
                `Where you’re accessing it at`,
                `How long you’re online`,
                `What and whose stories you watch`],
      variants: [`Your pets`,
                `Photos on your phone`,
                `Your math score`,
                `How often you use your phone`,
                `Your grandparents’ age`,
                `Your house address`,
                `Where you’re accessing it at`,
                `How long you’re online`,
                `What and whose stories you watch`,
                `Your opinion about Lunchables`],
      feedback: []
    },
    {
      id: "1",
      question: "Why are they getting your info?",
      answers: [`To sell you things you liked before`,
                `To store information about you`,
                `To attack your computer`,
                `To sell your information`],
      variants: [`To sell you things you liked before`,
                `To have bad people go to your house`,
                `To store information about you`,
                `To attack your computer`,
                `To sell your information to bad businessmen`,
                `To sell your information`],
      feedback: []
    },
    {
      id: "2",
      question:
        "You are at home and bored. You remembered a game that a classmate was talking about and want to give it a try. Which websites would you choose to download the game from?",
      answers: [q2v1],
      variants: [q2v1, q2v1],
      feedback: [`You got it right! Familiar names are often reliable. Always fact check with Google though. You can search “Is Steam a safe site?” for example.`,
                 `This is a terrible choice. Watch out for free stuff on the Internet. It’s often a trick for hackers to get you to click on their bad links. Be wary of typos!`]
    },
  
    {
      id: "3",
      question: "Phew, you learned how to download safe games now. You opened the game and it’s time to register an account. Choose your username:",
      answers: [`skjhfalkw`,`northflowerrain!`],
      variants: [username+`12345`, `skjhfalkw`, username+dob, `northflowerrain!`],
      feedback: [`This is a big no no! You don’t want to use username that can link to your real-life name.`,
                 `This is a safe username because it doesn’t reveal who you are. But it would be hard to remember, keep that in mind!`,
                 `This is a big no no! You don’t want to use username that can link to your real-life name and date of birth.`,
                 `This is a wise choice. Choose an username that is easy to remember but not giving ties to your identity.`]
    },
  
    {
      id: "4",
      question:
        "You’ve understood how to create a good username. Now, which password would you use?",
      answers: [`stablehorsecorrectmilk!@`],
      variants: [dob, `stablehorsecorrectmilk!@`, `01`+username+`1@!2_wow`, `E4gle5W1n6s`, `password`],
      feedback: [`This is very easy for bad people to steal your account. Don’t use personal information.`,
                 `This is good practice. A long password with random words that make sense in your head would make it hard for people to guess.`,
                 `This is a strong password, but don’t use your personal information.`,
                 `This is a strong password, but it might be hard to remember.`,
                 `Big no no! Too easy to guess.`]
    },
    {
      id: "5",
      question: "Alright. Now you know your login information. But this is your 26th game account… How would you store the info so you don’t mistake it with the others? ",
      answers: [`Tell your parents`, `Use a password manager`],
      variants: [`Tell your parents`, `Tell Becky, your classmate who has great memory`, `I don’t need to store the info. All my login info are the same!`, `Use a password manager`],
      feedback: [`Great. They will help you with storing it in a secure place.`,
                 `Never share your password with anyone other than your parents.`,
                 `Use a different password (and even username) for each account.`,
                 `Ask your teachers or parents about this! Software is confusing, right?`]
    },
    {
      id: "6",
      question: "The game was so much fun. All the kids you talked to say that you should have a Facebook account to chat with them on there. Time to set up your account. Here are 2 versions of how you might do it. Which one is safer?",
      answers: [q6v1],
      variants: [q6v1, q6v2],
      feedback: [`Cool! The Internet is not a safe place for you to share a lot of information about yourself.`,
                 `Bad people can use your information to do a lot of things. In this case, they can show up to your school, pretend to be your uncle, and take you to a place with free ice cream and highlighters.`]
    },
    {
      id: "7",
      question: "Now you have your account. You added your friends (after checking very carefully that they are not fake accounts.) Your friends are all posting pictures. Which one looks like it’s unsafe to be on the Internet?",
      answers: [q7v1, q7v2],
      variants: [q7v1, q7v2],
      feedback: [`That’s right. If a bad person looks at this picture, they can tell which beach the students are at, and which school they go to (peep the ID cards!) `,
                 `That’s right. If a bad person looks at this picture, they can tell what Miko’s family members look like, her name, and her age!`]
    }
  ];
}