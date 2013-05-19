if (typeof (SDK) == "undefined")
{ SDK = { __namespace: true }; }
//This will establish a more unique namespace for functions in this library. This will reduce the 
// potential for functions to be overwritten due to a duplicate name when the library is loaded.
SDK.ISV = {
    _getServerUrl: function () {
        ///<summary>
        /// Returns the URL for the SOAP endpoint using the context information available in the form
        /// or HTML Web resource.
        ///</summary>
        var ServicePath = "/XRMServices/2011/Organization.svc/web";
        var serverUrl = "";
        if (typeof GetGlobalContext == "function") {
            var context = GetGlobalContext();
            serverUrl = context.getServerUrl();
        }
        else {
            if (typeof Xrm.Page.context == "object") {
                serverUrl = Xrm.Page.context.getServerUrl();
            }
            else
            { throw new Error("Unable to access the server URL"); }
        }
        if (serverUrl.match(/\/$/)) {
            serverUrl = serverUrl.substring(0, serverUrl.length - 1);
        }
        return serverUrl + ServicePath;
    },
    GetSysUserTeamRolesRequest: function (userId, successCallback, errorCallback) {
        var requestMain = ""
        requestMain += "<s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\">";
        requestMain += "  <s:Body>";
        requestMain += "    <RetrieveMultiple xmlns=\"http://schemas.microsoft.com/xrm/2011/Contracts/Services\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\">";
        requestMain += "      <query i:type=\"a:QueryExpression\" xmlns:a=\"http://schemas.microsoft.com/xrm/2011/Contracts\">";
        requestMain += "        <a:ColumnSet>";
        requestMain += "          <a:AllColumns>false</a:AllColumns>";
        requestMain += "          <a:Columns xmlns:b=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\">";
        requestMain += "            <b:string>fullname</b:string>";
        requestMain += "            <b:string>domainname</b:string>";
        requestMain += "          </a:Columns>";
        requestMain += "        </a:ColumnSet>";
        requestMain += "        <a:Criteria>";
        requestMain += "          <a:Conditions>";
        requestMain += "            <a:ConditionExpression>";
        requestMain += "              <a:AttributeName>systemuserid</a:AttributeName>";
        requestMain += "              <a:Operator>Equal</a:Operator>";
        requestMain += "              <a:Values xmlns:b=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\">";
        requestMain += "                <b:anyType i:type=\"c:string\" xmlns:c=\"http://www.w3.org/2001/XMLSchema\">" + userId + "</b:anyType>";
        requestMain += "              </a:Values>";
        requestMain += "            </a:ConditionExpression>";
        requestMain += "          </a:Conditions>";
        requestMain += "          <a:FilterOperator>And</a:FilterOperator>";
        requestMain += "          <a:Filters />";
        requestMain += "        </a:Criteria>";
        requestMain += "        <a:Distinct>false</a:Distinct>";
        requestMain += "        <a:EntityName>systemuser</a:EntityName>";
        requestMain += "        <a:LinkEntities>";
        requestMain += "          <a:LinkEntity>";
        requestMain += "            <a:Columns>";
        requestMain += "              <a:AllColumns>false</a:AllColumns>";
        requestMain += "              <a:Columns xmlns:b=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\" />";
        requestMain += "            </a:Columns>";
        requestMain += "            <a:EntityAlias i:nil=\"true\" />";
        requestMain += "            <a:JoinOperator>Inner</a:JoinOperator>";
        requestMain += "            <a:LinkCriteria>";
        requestMain += "              <a:Conditions />";
        requestMain += "              <a:FilterOperator>And</a:FilterOperator>";
        requestMain += "              <a:Filters />";
        requestMain += "            </a:LinkCriteria>";
        requestMain += "            <a:LinkEntities>";
        requestMain += "              <a:LinkEntity>";
        requestMain += "                <a:Columns>";
        requestMain += "                  <a:AllColumns>false</a:AllColumns>";
        requestMain += "                  <a:Columns xmlns:b=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\" />";
        requestMain += "                </a:Columns>";
        requestMain += "                <a:EntityAlias i:nil=\"true\" />";
        requestMain += "                <a:JoinOperator>Inner</a:JoinOperator>";
        requestMain += "                <a:LinkCriteria>";
        requestMain += "                  <a:Conditions />";
        requestMain += "                  <a:FilterOperator>And</a:FilterOperator>";
        requestMain += "                  <a:Filters />";
        requestMain += "                </a:LinkCriteria>";
        requestMain += "                <a:LinkEntities>";
        requestMain += "                  <a:LinkEntity>";
        requestMain += "                    <a:Columns>";
        requestMain += "                      <a:AllColumns>false</a:AllColumns>";
        requestMain += "                      <a:Columns xmlns:b=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\">";
        requestMain += "                        <b:string>name</b:string>";
        requestMain += "                      </a:Columns>";
        requestMain += "                    </a:Columns>";
        requestMain += "                    <a:EntityAlias>Role</a:EntityAlias>";
        requestMain += "                    <a:JoinOperator>Inner</a:JoinOperator>";
        requestMain += "                    <a:LinkCriteria>";
        requestMain += "                      <a:Conditions />";
        requestMain += "                      <a:FilterOperator>And</a:FilterOperator>";
        requestMain += "                      <a:Filters />";
        requestMain += "                    </a:LinkCriteria>";
        requestMain += "                    <a:LinkEntities />";
        requestMain += "                    <a:LinkFromAttributeName>roleid</a:LinkFromAttributeName>";
        requestMain += "                    <a:LinkFromEntityName>teamroles</a:LinkFromEntityName>";
        requestMain += "                    <a:LinkToAttributeName>roleid</a:LinkToAttributeName>";
        requestMain += "                    <a:LinkToEntityName>role</a:LinkToEntityName>";
        requestMain += "                  </a:LinkEntity>";
        requestMain += "                  <a:LinkEntity>";
        requestMain += "                    <a:Columns>";
        requestMain += "                      <a:AllColumns>false</a:AllColumns>";
        requestMain += "                      <a:Columns xmlns:b=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\">";
        requestMain += "                        <b:string>name</b:string>";
        requestMain += "                        <b:string>businessunitid</b:string>";
        requestMain += "                      </a:Columns>";
        requestMain += "                    </a:Columns>";
        requestMain += "                    <a:EntityAlias>Team</a:EntityAlias>";
        requestMain += "                    <a:JoinOperator>Inner</a:JoinOperator>";
        requestMain += "                    <a:LinkCriteria>";
        requestMain += "                      <a:Conditions />";
        requestMain += "                      <a:FilterOperator>And</a:FilterOperator>";
        requestMain += "                      <a:Filters />";
        requestMain += "                    </a:LinkCriteria>";
        requestMain += "                    <a:LinkEntities />";
        requestMain += "                    <a:LinkFromAttributeName>teamid</a:LinkFromAttributeName>";
        requestMain += "                    <a:LinkFromEntityName>teamroles</a:LinkFromEntityName>";
        requestMain += "                    <a:LinkToAttributeName>teamid</a:LinkToAttributeName>";
        requestMain += "                    <a:LinkToEntityName>team</a:LinkToEntityName>";
        requestMain += "                  </a:LinkEntity>";
        requestMain += "                </a:LinkEntities>";
        requestMain += "                <a:LinkFromAttributeName>teamid</a:LinkFromAttributeName>";
        requestMain += "                <a:LinkFromEntityName>teammembership</a:LinkFromEntityName>";
        requestMain += "                <a:LinkToAttributeName>teamid</a:LinkToAttributeName>";
        requestMain += "                <a:LinkToEntityName>teamroles</a:LinkToEntityName>";
        requestMain += "              </a:LinkEntity>";
        requestMain += "            </a:LinkEntities>";
        requestMain += "            <a:LinkFromAttributeName>systemuserid</a:LinkFromAttributeName>";
        requestMain += "            <a:LinkFromEntityName>systemuser</a:LinkFromEntityName>";
        requestMain += "            <a:LinkToAttributeName>systemuserid</a:LinkToAttributeName>";
        requestMain += "            <a:LinkToEntityName>teammembership</a:LinkToEntityName>";
        requestMain += "          </a:LinkEntity>";
        requestMain += "        </a:LinkEntities>";
        requestMain += "        <a:Orders />";
        requestMain += "        <a:PageInfo>";
        requestMain += "          <a:Count>0</a:Count>";
        requestMain += "          <a:PageNumber>0</a:PageNumber>";
        requestMain += "          <a:PagingCookie i:nil=\"true\" />";
        requestMain += "          <a:ReturnTotalRecordCount>false</a:ReturnTotalRecordCount>";
        requestMain += "        </a:PageInfo>";
        requestMain += "        <a:NoLock>false</a:NoLock>";
        requestMain += "      </query>";
        requestMain += "    </RetrieveMultiple>";
        requestMain += "  </s:Body>";
        requestMain += "</s:Envelope>";
        var req = new XMLHttpRequest();
        req.open("POST", SDK.ISV._getServerUrl(), true)
        req.setRequestHeader("Accept", "application/xml, text/xml, */*");
        req.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        req.setRequestHeader("SOAPAction", "http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/RetrieveMultiple");
        req.onreadystatechange = function () { SDK.ISV.GetSysUserTeamRolesResponse(req, successCallback, errorCallback); };
        req.send(requestMain);
    },
    GetSysUserTeamRolesResponse: function (req, successCallback, errorCallback) {
        ///<summary>
        /// Recieves the assign response
        ///</summary>
        ///<param name="req" Type="XMLHttpRequest">
        /// The XMLHttpRequest response
        ///</param>
        ///<param name="successCallback" Type="Function">
        /// The function to perform when an successfult response is returned.
        /// For this message no data is returned so a success callback is not really necessary.
        ///</param>
        ///<param name="errorCallback" Type="Function">
        /// The function to perform when an error is returned.
        /// This function accepts a JScript error returned by the _getError function
        ///</param>
        if (req.readyState == 4) {
            if (req.status == 200) {
                if (successCallback != null)
                { successCallback(req.responseText); }
            }
            else {
                errorCallback(SDK.ISV._getError(req.responseXML));
            }
        }
    },
    _getError: function (faultXml) {
        ///<summary>
        /// Parses the WCF fault returned in the event of an error.
        ///</summary>
        ///<param name="faultXml" Type="XML">
        /// The responseXML property of the XMLHttpRequest response.
        ///</param>
        var errorMessage = "Unknown Error (Unable to parse the fault)";
        if (typeof faultXml == "object") {
            try {
                var bodyNode = faultXml.firstChild.firstChild;
                //Retrieve the fault node
                for (var i = 0; i < bodyNode.childNodes.length; i++) {
                    var node = bodyNode.childNodes[i];
                    //NOTE: This comparison does not handle the case where the XML namespace changes
                    if ("s:Fault" == node.nodeName) {
                        for (var j = 0; j < node.childNodes.length; j++) {
                            var faultStringNode = node.childNodes[j];
                            if ("faultstring" == faultStringNode.nodeName) {
                                errorMessage = faultStringNode.text;
                                break;
                            }
                        }
                        break;
                    }
                }
            }
            catch (e) { };
        }
        return new Error(errorMessage);
    },
    __namespace: true
};