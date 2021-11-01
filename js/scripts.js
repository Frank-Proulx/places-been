//Business Logic
function VacationLog(){
  this.destinations = {};
  this.currentId = 0;
}

function Destination(location, landmarks, timeOfYear){
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
}

VacationLog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

VacationLog.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations[destination.id] = destination;
};

VacationLog.prototype.removeDestination = function(id) {
  if (this.destinations[id] === undefined) {
    return false;
  }
  delete this.destinations[id];
  return true;
};

//UI Logic
let vacationLog = new VacationLog();

$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();
    const newDest = new Destination($('#location').val(), $('#landmarks').val(), $('#time').val());
    vacationLog.addDestination(newDest)
  });
});

