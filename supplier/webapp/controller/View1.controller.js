sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel, MessageToast) {
        "use strict";

        return Controller.extend("supplier.controller.View1", {
            onInit: function () {

            },
            press : function(evt) {              
                debugger;
                window.open('https://supplier.ariba.com', '_blank');
                MessageToast.show("Opened in new tab.");
            },
            press1 : function(oEvent) {
                debugger;
                var oTitle = oEvent.getSource().getProperty("header");
            //  var oTargetSource = oEvent.getParameter("itemPressed").getTargetSrc();
                    MessageBox.confirm(
                        "Agree to Terms and Conditions below.", {
                            icon: MessageBox.Icon.INFORMATION,
                            title: "Terms and Conditions",
                            details: "<p><strong>By clicking Agree and Continue</strong></p>\n" +
                            "<ul>" +
                            "<li>I hereby give my consent to the User Agreement, it´s policies.</li>" +
                            "<li>I instruct SAP Fieldglass to use my Ariba Network Credentials to login.</li>" +
                            "<li>In addition I also agree on the Terms and Conditions from El Corte Inglés.</li>" +
                            "</ul>" +
                            "<p><a href='https://www.elcorteingles.com/luxe/for-shopping-lovers-rewards/terms-y-conditions/' target='_blank'>Click here</a> for Terms and Conditions Document",
                            contentWidth: "700px",
                            actions: ["Agree and Continue", "Cancel"],
                            emphasizedAction: "Agree and Continue",
                            onClose: function (oAction) { 
                                if (oAction === "Agree and Continue"){
                                    sap.m.URLHelper.redirect('https://xcore2.fgvms.com/SSOLogin?SSOParams=company%3DNINA%3B%3Breturningurl%3DcloseWindow', true);
                              //      window.open(', '_blank');
                                    MessageToast.show("Opened in new tab.");
                                }
                            }
                        }
                    );
    
                this.fnClose();
                }    
        });
    });