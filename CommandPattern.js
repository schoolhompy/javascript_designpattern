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


function SearchPrivateCommand(searching) {
    this.search = searching;
}
SearchPrivateCommand.prototype.goSearch = function() {
    this.search.sendFormPrivate();
}


function SearchGoogleCommand(searching) {
    this.search = searching;
}
SearchGoogleCommand.prototype.goSearch = function() {
    this.search.sendFormToPublic();
}

var searchcommand = new searchCommand();
var sprivate = new SearchPrivateCommand(searchcommand);
var gosearch = new GoSearch(sprivate);
gosearch.runSearchCommand();

var spublic = new SearchGoogleCommand(searchcommand);
gosearch.setSearchTarget(spublic);
gosearch.runSearchCommand();

