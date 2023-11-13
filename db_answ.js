const CyclicDb = require("@cyclic.sh/dynamodb")
const db = CyclicDb("busy-erin-bull-kitCyclicDB")


const run = async function(){
    let answers = db.collection('answers')
/*
    let q = await questions.set("q" + Math.random().toString(16).slice(2), {
        meeting: "123456789",
        text: "What do you think ?",
        answers: ["De acord", "No Way", "Don't care"]
    },{
    "$index": ["meeting"]
    })

    console.log(q)
*/
    await answers.delete("afcb0f9db8b11b")


    let mtgidx = await answers.index("meeting").find("123456789")
    console.log(mtgidx.results)
}

run()