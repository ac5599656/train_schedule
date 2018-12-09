var trainName = "";
var destination = "";
var firstTrainTime;
var frequencyTime = 0;
var militaryTime;
var nextArrival;
//if localStorage equals to null make trainInfo array empty
if (JSON.parse(localStorage.getItem("trainSchedule") === null)) {
    var trainInfo = [];
}
else {
    var trainInfo = JSON.parse(localStorage.getItem("trainSchedule"));
}
//format the current into military time
var now = moment().format("HH: mm");
var nextTrain = "";
//show previous train entries when the page reloads
populate2(JSON.parse(localStorage.getItem("trainSchedule")));

console.log(now);
//when the submit button gets clicked  get the value of all the input
$("#submit").on("click", function (event) {
    event.preventDefault();
    trainName = $("#train-name").val().trim();
    console.log(trainName);
    destination = $("#destination").val().trim();
    console.log(destination);
    frequencyTime = $("#frequency-time").val().trim();
    console.log(frequencyTime);

    firstTrainTime = $("#first-train-time").val().trim();

    var militaryTime = moment(firstTrainTime, "h:mm  a A").format("HH:mm");
    console.log(firstTrainTime);
    console.log(militaryTime);
    console.log(militaryTime);
    //calcualte the next arrival time for the train
    nextTrain = moment(firstTrainTime, 'HH:mm')
    while (moment().isAfter(nextTrain, "HH:mm")) {
        nextTrain = nextTrain.add(frequencyTime, 'm');
        console.log(nextTrain);
    }
    nextArrival = moment(nextTrain).format("HH:mm");
    console.log(nextArrival);

    trainInfo.push({
        name: trainName,
        location: destination,
        trainTime: firstTrainTime,
        nextArrival: nextArrival,
        time: frequencyTime
    });
    console.log(trainInfo)
    localStorage.setItem("trainSchedule", JSON.stringify(trainInfo));
    resetFields();
    populate(nextTrain, nextArrival);
});
//resets the input
function resetFields() {
    $("#train-name").val("");
    $("#destination").val("");
    $("#first-train-time").val("");
    $("#frequency-time").val("");
}


function populate(militaryTime, nextArrival) {
    //calculate the time till the train arrives.
    var duration = moment.duration(moment(nextArrival, "HH:mm").diff(moment())).asMinutes()
    var minutesTill = Math.round(duration);
    // createRow on the table;
    console.log(duration);
    var tBody = $("tbody");
    var tRow = $("<tr>");

    var trainNa = $("<td>").text(trainName);
    var dest = $("<td>").text(destination);
    var freqTime = $("<td>").text(frequencyTime);
    var trainSchedule = $("<td>").text(nextArrival);
    var minutesAway = $("<td>").text(minutesTill);
    console.log(minutesAway);


    tRow.append(trainNa, dest, freqTime, trainSchedule, minutesAway);
    tBody.append(tRow);

}

function populate2(train) {
    if (train) {

        console.log(train);
        for (let i = 0; i < train.length; i++) {


            // createRow on the table;
            var duration = moment.duration(moment(train[i].nextArrival, "HH:mm").diff(moment())).asMinutes()
            var minutesTill = Math.round(duration);
            console.log(duration);
            var tBody = $("tbody");
            var tRow = $("<tr>");

            var trainNa = $("<td>").text(train[i].name);
            var dest = $("<td>").text(train[i].location);
            var freqTime = $("<td>").text(train[i].time);
            var trainSch = $("<td>").text(train[i].nextArrival);
            var minutesAway = $("<td>").text(minutesTill);


            //append train info to a row in the table
            tRow.append(trainNa, dest, freqTime, trainSch, minutesAway);
            tBody.append(tRow);
        }
    }
}


