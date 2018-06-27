function GoSearch(searchCommand) {
    this.searchTarget = searchCommand;
}
GoSearch.prototype.runSearchCommand = function() {
    console.log("Command Run!");
    this.searchTarget.goSearch();
};
GoSearch.prototype.setSearchTarget = function(sTarget) {
    this.searchTarget = sTarget;
};

function searchCommand() {
    this.searchFrom = "";
}
searchCommand.prototype.sendFormPrivate = function() {
    this.searchFrom = "Intranet";
    console.log("Intranet");
};
searchCommand.prototype.sendFormToPublic = function() {
    this.searchFrom = "Google";
    console.log("Google");
};


function SearchPrivate(searching) {
    this.search = searching;
}
SearchPrivate.prototype.goSearch = function() {
    this.search.sendFormPrivate();
}


function SearchGoogle(searching) {
    this.search = searching;
}
SearchGoogle.prototype.goSearch = function() {
    this.search.sendFormToPublic();
}

var searchcommand = new searchCommand();
var sprivate = new SearchPrivate(searchcommand);
var gosearch = new GoSearch(sprivate);
gosearch.runSearchCommand();

var spublic = new SearchGoogle(searchcommand);
gosearch.setSearchTarget(spublic);
gosearch.runSearchCommand();

