sap.ui.controller("crudoperations-product.detailpage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf crudoperations-product.detailpage
*/
onInit: function() {

		
		var OEventbus= sap.ui.getCore().getEventBus();
		OEventbus.subscribe("busChannel","eventId",function(channelId,eventId,data){
			var cusD=data.ProductID;
			debugger;
			var url="proxy/http/122.180.87.238:8000/sap/opu/odata/SAP/ZGW_CLS01_PRODUCT_SRV/";
			var model=new sap.ui.model.odata.v2.ODataModel(url);
			this.getView().setModel(model);
			debugger;
			var obj=this.getView().byId("idobj");
			obj.bindElement("/ProductSet('"+cusD+"')");
		   
			
	},this
	);
	},
	
	onPress : function(){
		
		
		var dialog = new sap.m.Dialog({ title :"createproduct",
			
									content :[
							          new sap.m.Label({text : "Product Id"}),
							         new sap.m.Input({ value : "{ProductID}",  id:"idP"}),
							          new sap.m.Label({text : "Product Name"}),
							          new sap.m.Input({ value : "{Name}",  id:"idN"})		          
					
							       ],
		       beginButton: new sap.m.Button({
					text: 'Save',
					press : function () {
						sap.m.MessageToast.show('save pressed!');
					
				
						
						var omodel=sap.ui.getCore().getModel();
						debugger;
						var data= {
								 ProductID:sap.ui.getCore().byId("idP").getValue(),
							       Name : sap.ui.getCore().byId("idN").getValue()
								 }
						
						
						omodel.create("/ProductSet",data,{
							

							success : function(){sap.m.MessageToast.show("success")},
							error : function(){sap.m.MessageToast.show("error")}
							}
							
						);
						dialog.close();
					}
				}),
				endButton: new sap.m.Button({
					text: 'Cancel',
					press: function () {
				
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}

		
		}); 
		dialog.open();
	},
	update : function(){
		
		
		var dialog = new sap.m.Dialog({ title :"createproduct",
			
									content :[
							          new sap.m.Label({text : "Product Id"}),
							         new sap.m.Input({ value : "{ProductID}",  id:"idP"}),
							          new sap.m.Label({text : "Product Name"}),
							          new sap.m.Input({ value : "{Name}",  id:"idN"})		          
					
							       ],
		       beginButton: new sap.m.Button({
					text: 'update',
					press : function () {
						sap.m.MessageToast.show('save pressed!');
					
				
						
						var omodel=sap.ui.getCore().getModel();
						debugger;
						var ProductID=sap.ui.getCore().byId("idP").getValue()
						var data= {
								/* ProductID:sap.ui.getCore().byId("idP").getValue(),*/
							       Name : sap.ui.getCore().byId("idN").getValue()
								 }
						
						
						omodel.update("/ProductSet('"+ProductID+"')", data,{
							
							success : function(){sap.m.MessageToast.show("updated")},
							error : function(){sap.m.MessageToast.show("error")}
							}
							
						);
						
					}
				}),
				endButton: new sap.m.Button({
					text: 'Cancel',
					press: function () {
				
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}

		
		}); 
		dialog.open();
	},
	
	
	
	
	Deleted : function(){
		
		
		var dialog = new sap.m.Dialog({ title :"createproduct",
			
									content :[
							          new sap.m.Label({text : "Product Id"}),
							         new sap.m.Input({ value : "{ProductID}",  id:"idP"}),
							          new sap.m.Label({text : "Product Name"}),
							          new sap.m.Input({ value : "{Name}",  id:"idN"})		          
					
							       ],
		       beginButton: new sap.m.Button({
					text: 'delete',
					press : function () {
						sap.m.MessageToast.show('deleted!');
					
				
						
						var omodel=sap.ui.getCore().getModel();
						debugger;
						var ProductID=sap.ui.getCore().byId("idP").getValue()
						
						
						omodel.remove("/ProductSet('"+ProductID+"')", {
							
							success : function(){sap.m.MessageToast.show("deleted")},
							error : function(){sap.m.MessageToast.show("error")}
							}
							
						);
						
					}
				}),
				endButton: new sap.m.Button({
					text: 'Cancel',
					press: function () {
				
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}


		}); 
		dialog.open();
	}


		
		
	
	

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf crudoperations-product.detailpage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf crudoperations-product.detailpage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf crudoperations-product.detailpage
*/
//	onExit: function() {
//
//	}

});