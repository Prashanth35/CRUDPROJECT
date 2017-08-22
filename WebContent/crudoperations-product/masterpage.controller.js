sap.ui.controller("crudoperations-product.masterpage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf crudoperations-product.masterpage
*/
	onInit: function() {
	url="proxy/http/122.180.87.238:8000/sap/opu/odata/SAP/ZGW_CLS01_PRODUCT_SRV/"
        var omodel=new sap.ui.model.odata.v2.ODataModel(url);
		sap.ui.getCore().setModel(omodel);
		var that=this;
		var olist=this.getView().byId("idlist");
		olist.attachUpdateFinished(function(){
			
			
			this.getItems()[20].firePress();
		});
        
},
Press : function(OEvent){
	debugger;
	var GetTittle=OEvent.getSource().getTitle();
	var osplitapp=this.getView().getParent().getParent();
	var OeventBus=sap.ui.getCore().getEventBus();
	OeventBus.publish("busChannel","eventId",{ProductID : GetTittle});

	   osplitapp.toDetail("idCRUD1--detailview");
	  } 


/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf crudoperations-product.masterpage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf crudoperations-product.masterpage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf crudoperations-product.masterpage
*/
//	onExit: function() {
//
//	}

});