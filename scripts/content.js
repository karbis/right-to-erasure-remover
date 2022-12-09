let removedmessages = document.createElement("p")
document.getElementsByClassName("content")[0].append(removedmessages)

function update() {
	let array = [...document.getElementsByClassName("border-top sub-divider-bottom messageDivider roblox-message-row ng-scope read"),...document.getElementsByClassName("border-top sub-divider-bottom messageDivider roblox-message-row ng-scope unread")]
	if (array.length == 0) {
		setTimeout(update,50)
		return
	}
	let count = 0
	for (let x of array) {
		let message = x.getElementsByClassName("roblox-messageRow roblox-message-summary")[0].getElementsByClassName("wrapped-text message-summary-body")[0]
		let messagetext = message.getElementsByClassName("text-label text-overflow message-summary-content")[0].getElementsByClassName("font-subheader-2 text-subheader subject ng-binding")[0]
		let messagename = message.getElementsByClassName("font-header-2 paired-name message-summary-username positionAboveLink ng-binding ng-scope")[0].getElementsByClassName("element")[1]
		if (messagetext.innerText == "[Important] Right to Erasure - Action Requested" && messagename.innerText == "Roblox") {
			x.remove()
			count++
		}
	}
	if (count == 0) {
		removedmessages.innerText = ""
	} else {
		removedmessages.innerText = "Removed " + count + " messages"
	}
}
update()

// i stole this code https://stackoverflow.com/questions/3522090/event-when-window-location-href-changes
var oldHref = document.location.href;

window.onload = function() {
    var bodyList = document.querySelector("body")

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (oldHref != document.location.href) {
                oldHref = document.location.href;
                update()
            }
        });
    });
    
    var config = {
        childList: true,
        subtree: true
    };
    
    observer.observe(bodyList, config);
};
