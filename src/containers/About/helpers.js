function toMonokai(id, message) {
    const engineers = document.getElementById(id);

    var messageArr = message.split(" ");
    var colors = ["#673ab7","#f44336", "#8bc34a",]; // Monokai color scheme

    for (var i = 0; i < messageArr.length; i++) {
      engineers.innerHTML += "<span style='color:" + colors[(i % colors.length)] + ";'>" + messageArr[i] + " </span>";
    }
}

const engineers = "I'm a fullstack developer with a focus on the back-end. Designing APIs and wrapping the whole project together is what I love to do. I've worked with companies from a team memeber to a project leader, I always focus on not reinventing the wheel and simplicity. In my most recent projects I have been utilizing Node.js and Express.js but will always favor the best tool for the job. I have also developed projects for IOS and Rasberry PI.";

const designer = "Making a PSD or Sketch design into a reality happens to be my speciality. I can throw my 2 cents in where needed from past experience to make the project the best that it can be. I'm a big fan of using Material design where it makes sense to build simple, easy to navigate UI's. In my most recent projects I have utilized React.js and Redux to make for a maintanable front-end.";

export { toMonokai, engineers, designer };
