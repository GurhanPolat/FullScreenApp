sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
	"use strict";

	return Controller.extend("FullScreenApp.controller.View1", {

		onInit: function () {

			this._oView = this.getView();

			var oViewModel = new JSONModel({
				PoNumber: "100",
				Lifnr: "101",
				Waers: "TRY",
				Bukrs: "1000"
			});

			this._oView.setModel(oViewModel, "viewModel");
			this._oTable = this._oView.byId("table0");
			debugger;

		},

		onAddPurchaseOrder: function () {

			debugger;

			var oModel = this._oView.getModel(),
				sPath = "/PurchaseOrderSet",
				oData = {},
				mParameters = {};

			oData.Ponumber = this._oView.getModel("viewModel").getProperty("/PoNumber");
			oData.Lifnr = this._oView.getModel("viewModel").getProperty("/Lifnr");
			oData.Waers = this._oView.getModel("viewModel").getProperty("/Waers");
			oData.Bukrs = this._oView.getModel("viewModel").getProperty("/Bukrs");

			mParameters.success = function (oData2, oResponse) {
				debugger;
				var oBinding = this._oTable.getBinding("items");
				oBinding.filter([]);
				// var msg = "Kayıt Başarılı";
				// MessageToast.show(msg);
			}.bind(this);

			mParameters.error = function (oError) {
				debugger;
				var msg = "Kaydedilemedi!";
				MessageToast.show(msg);
			};

			oModel.create(sPath, oData, mParameters);

		}

	});

});