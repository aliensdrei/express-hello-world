const CyclicDb = require("@cyclic.sh/dynamodb");
const db = CyclicDb("busy-erin-bull-kitCyclicDB");

const express = require("express");
const app = express();

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
/*

app.post("/question", async (req, res, next) => {
  let questions = db.collection("questions");

  let q = await questions.set(
    "q" + Math.random().toString(16).slice(2),
    {
      meeting: "123456789",
      text: req.body.q_text,
      answers: req.body.answer,
    },
    {
      $index: ["meeting"],
    }
  );
  res.render("index", { Question: req.body.q_text, Answers: req.body.answer });
});

app.get("/participant", async (req, res, next) => {
  let questions = db.collection("questions");
  let q = await questions.index("meeting").find("123456789");
  res.render("participant", {
    Question: q.results[0].props.text,
    Answers: q.results[0].props.answers,
  });
});

app.post("/participant", async (req, res, next) => {
  let answers = db.collection("answers");
  let q = await answers.set(
    "a" + Math.random().toString(16).slice(2),
    {
      meeting: "123456789",
      user: "user123",
      answers: req.body.raspuns,
    },
    {
      $index: ["meeting"],
    }
  );
  res.render("thank", {});
});

app.get("/results", async (req, res, next) => {
  let answers = db.collection("answers");
  let q = await answers.index("meeting").find("123456789");
  const results = []
  q.results.forEach(element => {
    if (Object.keys(results).indexOf(element.props.answers) == -1){
      results[element.props.answers] = 1
    } else {
      results[element.props.answers] = results[element.props.answers] + 1
    }
  })
  res.json(results)
});
*/
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Voting app listening at http://localhost:${port}`);
});
