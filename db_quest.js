const CyclicDb = require("@cyclic.sh/dynamodb")
const db = CyclicDb("busy-erin-bull-kitCyclicDB")


const run = async function(){
    let questions = db.collection('questions')
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
    await questions.delete("qfee2276a7b2e9")

    let mtgidx = await questions.index("meeting").find("123456789")
    console.log(mtgidx.results)
}

run()