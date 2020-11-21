
var bopis_roadie_zipList = ["37167", "37130", "37129", "37015", "37075", "37138", "37062", "37064", "37179", "32703", "32820", "34769", "32726", "32764", "34736", "362720", "34748", "33844", "33809", "33853", "23841", "23005", "23875", "23188", "23139", "23112", "23111", "37814", "37760", "38017", "38002", "38053", "38637", "37379", "37312", "30742", "30705", "37347", "37321", "37363", "30721", "37327", "37405", "37087", "37066", "37172", "37040", "37055", "42134", "37801", "37862", "37938", "37771", "37830", "37854", "37821", "37865", "37757", "38019", "38401", "38478"];

// Curbside storeList goes here:

var curbside_storeList = ["516", "392", "2212", "1494", "448", "1600", "1787", "1382", "1317", "2163", "2375", "1213"];

document.addEventListener('DOMContentLoaded', displayEspotBOPISBanner, false);

function displayEspotBOPISBanner() {
	window.addEventListener("resize", function() {
		displayHeaderBannereSpot();
	});

	bindModals();
	$("#BuyOnlinePickupInStoreInfo , #BuyOnlinePickupCurbsideInfo, #SameDayDeliveryInfo , #FreeStandardDeliveryOn4Health").on("shown.bs.modal", function() {
		if ($(".modal-backdrop").length > 1) {
			$(".modal-backdrop").not(':first').remove();
		}
	});
}

TSCUtils.subscribe("STORE_UPDATE_EVENT", function() {
	$(".bopis-espot > div").hide();
	displayHeaderBannereSpot();
});

function displayHeaderBannereSpot() {
	var zipCode = TSCUtils.getCookie("lpZipCodeNum");
	var storeNum = TSCUtils.getCookie("lpStoreNum");

	var isRoadies = false;
	var isCurbSide = false;
	if (storeNum && curbside_storeList.length > 0) {
		for ( i = 0; i < curbside_storeList.length; i++) {
			if (storeNum == curbside_storeList[i]) {
				isCurbSide = true;
				console.info("hb curbsidebanner flow");
				displayBanner('curbsidebanner');
			}
		}
	}

	if (zipCode && bopis_roadie_zipList.length > 0 && !isCurbSide) {
		for ( i = 0; i < bopis_roadie_zipList.length; i++) {
			if (zipCode == bopis_roadie_zipList[i]) {
				isRoadies = true;
				console.info("hb roadies flow");
				displayBanner('curbsidebanner');
			}
		}
	}
	//Default Banner BOPIS/Shipping.
	if (!isCurbSide && !isRoadies) {
		console.info("hb sub flow");
		subopts();
	}
}

function subopts() {
	var lpIsBOPIS = TSCUtils.getCookie("lpIsBOPIS");
	if (lpIsBOPIS === 'Y') {
		console.info("hb bopis flow");
		displayBanner('curbsidebanner');
	} else {
		console.info("hb shipping flow");
		displayBanner('curbsidebanner');
	}

}

function displayBanner(banner) {
	$("." + banner).show();
}

var modalsContentObj = [{
	"id" : "BuyOnlinePickupInStoreInfo",
	"title" : "Buy Online Pickup in Store!",
	"content" : "<p>Thousands of items ready for pickup at your local store in 1 hour - FREE!</p><ul><li>While shopping online, select \"Pickup In Store\" for eligible items.</li><li>Select the store where you would like to pick up your items.</li><li>Place your order and wait to receive a \"Ready For Customer Pickup\" e-mail. This is a separate e-mail from your order confirmation and is the notification that the order is actually ready for pick up.</li><li>Bring your government-issued ID, \"Ready For Pickup\" e-mail or text and order number to the store.</li><li>Look for the Store Pickup location, usually at our \"Customer Service\" desk in the middle of the store or ask a Team Member.</li></ul> <p style=\"text-align: center; margin: 20px 0;\"><a href=\"/tsc/customer-solutions?cm_sp=header-_-banner-_-customer+solutions+bopis#FAQ-Autoship\" title=\"Frequently Asked Questions about Buy Online Pickup In Store - Tractor Supply Co.\"><button class=\"green_searchgrid\" style='height: 40px; max-width: 235px;'>More Information</button></a></p>",
}, {
	"id" : "BuyOnlinePickupCurbsideInfo",
	"title" : "Buy Online Pickup Curbside!",
	"content" : "<p>Buy Online and call or use the app when you arrive. We'll bring it to your car or truck.</p><ul><li>While shopping online, select \"Contactless Curbside Pickup In Store\" for eligible items.</li><li>Select the store where you would like to pick up your items.</li><li>Place your order and wait to receive a \"Ready For Customer Pickup\" e-mail. This is a separate e-mail from your order confirmation and is the notification that the order is actually ready for pick up.</li><li>Bring your government-issued ID, \"Ready For Pickup\" e-mail or text and order number to the store.</li><li>Call the store or use the app and let us know you have arrived  - We'll bring your order to you!</li></ul><p style=\"text-align:center;\"><a href=\"https://www.tractorsupply.com/tsc/cms/curbside-pickup\"><button class=\"green\" style=\"height: 40px; max-width: 235px;\">Learn More</button></a></p>",
}, {
	"id" : "SameDayDeliveryInfo",
	"title" : "Same Day Delivery",
	"content" : "<p>Available in Select Areas</p><ul><li>While shopping online, select \"Same Day Delivery\" for eligible items.</li><li>Items ordered before noon local time will be delivered the same day.</li><li>Items ordered after noon local time will be delivered the next day.</li><li>You also have the option of scheduling the delivery for a time that is convenient for you!</li></ul>",
}, {
	"id" : "FreeStandardDeliveryOn4Health",
	"title" : "Free Standard Delivery on 4Health",
	"content" : "<p>Spend $49 or more on 4Health or other select Pet Food, Treats, Toys, Flea & Tick, and other  pet supplies and receive free standard delivery to home.</p><p>Some exclusions may apply.</p>",
}];

function bindModals() {
	for ( i = 0; i < modalsContentObj.length; i++) {
		var modalHtml = '<div class="modal fade fullscreen-modal" id="' + modalsContentObj[i].id + '" tabindex="-1" role="dialog" aria-label="' + modalsContentObj[i].title + '" aria-hidden="true" style="display: none;"> <div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div><div class="modal-body generic"><p style="text-align: center; margin:  0 0 10px 0;"><strong>' + modalsContentObj[i].title + '</strong></p>' + modalsContentObj[i].content + '</div></div></div></div>';
		$('body').append(modalHtml);
	}
}