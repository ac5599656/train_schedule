var trainName = "";
var destination = "";
var firstTrainTime;
var frequencyTime = 0;
var militaryTime;
var nextArrival;

var trainInfo = [];
var now = moment().format("HH: mm");
var nextTrain = "";

// moment.relativeTimeThreshold('m', 60);
console.log(now);
// console.log(moment("123", "hmm").format("HH:mm"));
$("#submit").on("click", function (event) {
    event.preventDefault();
    trainName = $("#train-name").val().trim();
    console.log(trainName);
    destination = $("#destination").val().trim();
    console.log(destination);
    frequencyTime = $("#frequency-time").val().trim();
    console.log(frequencyTime);
    // console.log(moment.duration(123, "minutes").format("h:mm"));
    // console.log(moment.duration(intFreq, "minutes").format("h:mm"));
    firstTrainTime = $("#first-train-time").val().trim();
    // var a = moment(firstTrainTime, "HH:mm"),;
    // console.log(a);
    // console.log(moment(firstTrainTime, 'h:mm A').format('HH:mm'));
    // var militaryTime = moment('firstTrainTime').format("HH:mm");

    // console.log(moment(firstTrainTime, "h:mm  a A").format("HH:mm"));
    var militaryTime = moment(firstTrainTime, "h:mm  a A").format("HH:mm");
    console.log(firstTrainTime);
    console.log(militaryTime);
    console.log(militaryTime);
    // nextTrain = moment().add(frequencyTime, 'm');
    // console.log(nextTrain);
    while (moment().isAfter(militaryTime)) {
        nextTrain = moment().add(frequencyTime, 'minutes');
        console.log(nextTrain);
        nextArrival = moment(nextTrain).format("HH:mm");
        console.log(nextTrain);
        if (nextArrival.isSame(now)) {
            break;
        }
    }

    trainInfo.push({
        name: trainName,
        location: destination,
        trainTime: firstTrainTime,
        time: frequencyTime
    });
    resetFields();
    populate(nextTrain);
});

function resetFields() {
    $("#train-name").val("");
    $("#destination").val("");
    $("#first-train-time").val("");
    $("#frequency-time").val("");
}




function populate(militaryTime, nextArrival) {
    // createRow on the table;
    var tBody = $("tbody");
    var tRow = $("<tr>");

    var trainNa = $("<td>").text(trainName);
    var dest = $("<td>").text(destination);
    var freqTime = $("<td>").text(frequencyTime);
    var trainSchedule = $("<td>").text(nextArrival);
    // console.log(nextArrival);
    // var differenceTime = moment().diff(moment(trainSchedule), "minutes");
    // var difference = trainSchedule.diff(moment(), "minutes");
    // var duration = moment.duration(moment(nextTrain, "HH:mm").diff(moment())).asMinutes();
    // console.log(duration);
    // var difference = moment(militaryTime, "h:mm:ss").fromNow();

    // var difference2 = now - militaryTime;
    // difference = moment().format(difference, "h:mm:ss");
    // console.log(difference2);
    // console.log(moment.duration().minutes());
    // var diffMinutes = moment().format(difference, "h:mm:ss");
    // console.log(diffMinutes);

    // console.log(difference);
    // var remainderTime = differenceTime % freqTime;
    // var restTimeDiff = freqTime - differenceTime;
    // var rest = moment(restTimeDiff, "minutes");
    // var minutesleft = $("<td>").text(rest);


    tRow.append(trainNa, dest, freqTime, trainSchedule);
    tBody.append(tRow);

}

// var firstTimeTransfered = moment(locoFirstTrain, "hh:mm").subtract(1, "years");
// console.log(firstTimeTransfered);

// var presentTime = moment();
// console.log("Current Time: " + moment(presentTime).format("hh:mm"));

// var differenceInTimes = moment().diff(moment(firstTimeTransfered), "minutes");
// console.log("Time difference: " + differenceInTimes);

// var timeRemainder = differenceInTimes % locoFrequency;
// console.log(timeRemainder);

// var minutesTilTrain = locoFrequency - timeRemainder;
// console.log("Minutes til train: " + minutesTilTrain);

// var nextTrain = moment().add(minutesTilTrain, "minutes");
// console.log("Next train arrival: " + moment(nextTrain).format("hh:mm"));

// var nextTime = moment(nextTrain).format("hh:mm");
