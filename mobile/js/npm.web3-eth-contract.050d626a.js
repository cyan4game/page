(window.webpackJsonp=window.webpackJsonp||[]).push([["npm.web3-eth-contract"],{"6e11":function(t,e,n){"use strict";var o=n("17fb"),r=n("c063"),a=n("7789"),s=n("5ba3"),i=n("c3e6").subscription,c=n("c044").formatters,u=n("c044").errors,l=n("00d7"),p=n("aab1"),d=function t(e,n,a){var i=this,l=Array.prototype.slice.call(arguments);if(!(this instanceof t))throw new Error('Please use the "new" keyword to instantiate a web3.eth.Contract() object!');if(this.setProvider=function(){r.packageInit(i,arguments),i.clearSubscriptions=i._requestManager.clearSubscriptions},r.packageInit(this,[this.constructor]),this.clearSubscriptions=this._requestManager.clearSubscriptions,!e||!Array.isArray(e))throw u.ContractMissingABIError();this.options={};var d=l[l.length-1];o.isObject(d)&&!o.isArray(d)&&(a=d,this.options=o.extend(this.options,this._getOrSetDefaultOptions(a)),o.isObject(n)&&(n=null)),Object.defineProperty(this.options,"address",{set:function(t){t&&(i._address=s.toChecksumAddress(c.inputAddressFormatter(t)))},get:function(){return i._address},enumerable:!0}),Object.defineProperty(this.options,"jsonInterface",{set:function(t){return i.methods={},i.events={},i._jsonInterface=t.map((function(t){var e,n;if(t.constant="view"===t.stateMutability||"pure"===t.stateMutability||t.constant,t.payable="payable"===t.stateMutability||t.payable,t.name&&(n=s._jsonInterfaceMethodToString(t)),"function"===t.type){if(t.signature=p.encodeFunctionSignature(n),e=i._createTxObject.bind({method:t,parent:i}),i.methods[t.name]){var o=i._createTxObject.bind({method:t,parent:i,nextMethod:i.methods[t.name]});i.methods[t.name]=o}else i.methods[t.name]=e;i.methods[t.signature]=e,i.methods[n]=e}else if("event"===t.type){t.signature=p.encodeEventSignature(n);var r=i._on.bind(i,t.signature);i.events[t.name]&&"bound "!==i.events[t.name].name||(i.events[t.name]=r),i.events[t.signature]=r,i.events[n]=r}return t})),i.events.allEvents=i._on.bind(i,"allevents"),i._jsonInterface},get:function(){return i._jsonInterface},enumerable:!0});var h=this.constructor.defaultAccount,m=this.constructor.defaultBlock||"latest";Object.defineProperty(this,"handleRevert",{get:function(){return!1===i.options.handleRevert||!0===i.options.handleRevert?i.options.handleRevert:this.constructor.handleRevert},set:function(t){i.options.handleRevert=t},enumerable:!0}),Object.defineProperty(this,"defaultCommon",{get:function(){return i.options.common||this.constructor.defaultCommon},set:function(t){i.options.common=t},enumerable:!0}),Object.defineProperty(this,"defaultHardfork",{get:function(){return i.options.hardfork||this.constructor.defaultHardfork},set:function(t){i.options.hardfork=t},enumerable:!0}),Object.defineProperty(this,"defaultChain",{get:function(){return i.options.chain||this.constructor.defaultChain},set:function(t){i.options.chain=t},enumerable:!0}),Object.defineProperty(this,"transactionPollingTimeout",{get:function(){return 0===i.options.transactionPollingTimeout?i.options.transactionPollingTimeout:i.options.transactionPollingTimeout||this.constructor.transactionPollingTimeout},set:function(t){i.options.transactionPollingTimeout=t},enumerable:!0}),Object.defineProperty(this,"transactionConfirmationBlocks",{get:function(){return 0===i.options.transactionConfirmationBlocks?i.options.transactionConfirmationBlocks:i.options.transactionConfirmationBlocks||this.constructor.transactionConfirmationBlocks},set:function(t){i.options.transactionConfirmationBlocks=t},enumerable:!0}),Object.defineProperty(this,"transactionBlockTimeout",{get:function(){return 0===i.options.transactionBlockTimeout?i.options.transactionBlockTimeout:i.options.transactionBlockTimeout||this.constructor.transactionBlockTimeout},set:function(t){i.options.transactionBlockTimeout=t},enumerable:!0}),Object.defineProperty(this,"defaultAccount",{get:function(){return h},set:function(t){return t&&(h=s.toChecksumAddress(c.inputAddressFormatter(t))),t},enumerable:!0}),Object.defineProperty(this,"defaultBlock",{get:function(){return m},set:function(t){return m=t,t},enumerable:!0}),this.methods={},this.events={},this._address=null,this._jsonInterface=[],this.options.address=n,this.options.jsonInterface=e};d.setProvider=function(t,e){r.packageInit(this,[t]),this._ethAccounts=e},d.prototype._getCallback=function(t){if(t&&o.isFunction(t[t.length-1]))return t.pop()},d.prototype._checkListener=function(t,e){if(e===t)throw u.ContractReservedEventError(t)},d.prototype._getOrSetDefaultOptions=function(t){var e=t.gasPrice?String(t.gasPrice):null,n=t.from?s.toChecksumAddress(c.inputAddressFormatter(t.from)):null;return t.data=t.data||this.options.data,t.from=n||this.options.from,t.gasPrice=e||this.options.gasPrice,t.gas=t.gas||t.gasLimit||this.options.gas,delete t.gasLimit,t},d.prototype._encodeEventABI=function(t,e){var n=(e=e||{}).filter||{},r={};if(["fromBlock","toBlock"].filter((function(t){return void 0!==e[t]})).forEach((function(t){r[t]=c.inputBlockNumberFormatter(e[t])})),o.isArray(e.topics))r.topics=e.topics;else{if(r.topics=[],t&&!t.anonymous&&"ALLEVENTS"!==t.name&&r.topics.push(t.signature),"ALLEVENTS"!==t.name){var a=t.inputs.filter((function(t){return!0===t.indexed})).map((function(t){var e=n[t.name];return e?o.isArray(e)?e.map((function(e){return p.encodeParameter(t.type,e)})):p.encodeParameter(t.type,e):null}));r.topics=r.topics.concat(a)}r.topics.length||delete r.topics}return this.options.address&&(r.address=this.options.address.toLowerCase()),r},d.prototype._decodeEventABI=function(t){var e=this;t.data=t.data||"",t.topics=t.topics||[];var n=c.outputLogFormatter(t);if("ALLEVENTS"===e.name&&(e=e.jsonInterface.find((function(e){return e.signature===t.topics[0]}))||{anonymous:!0}),e.inputs=e.inputs||[],!e.anonymous){let n=0;e.inputs.forEach(t=>t.indexed?n++:null),n>0&&t.topics.length!==n+1&&(e={anonymous:!0,inputs:[]})}var o=e.anonymous?t.topics:t.topics.slice(1);return n.returnValues=p.decodeLog(e.inputs,t.data,o),delete n.returnValues.__length__,n.event=e.name,n.signature=e.anonymous||!t.topics[0]?null:t.topics[0],n.raw={data:n.data,topics:n.topics},delete n.data,delete n.topics,n},d.prototype._encodeMethodABI=function(){var t=this._method.signature,e=this.arguments||[],n=!1,r=this._parent.options.jsonInterface.filter((function(e){return"constructor"===t&&e.type===t||(e.signature===t||e.signature===t.replace("0x","")||e.name===t)&&"function"===e.type})).map((function(t){var r=o.isArray(t.inputs)?t.inputs.length:0;if(r!==e.length)throw new Error("The number of arguments is not matching the methods required number. You need to pass "+r+" arguments.");return"function"===t.type&&(n=t.signature),o.isArray(t.inputs)?t.inputs:[]})).map((function(t){return p.encodeParameters(t,e).replace("0x","")}))[0]||"";if("constructor"===t){if(!this._deployData)throw new Error("The contract has no contract data option set. This is necessary to append the constructor parameters.");return this._deployData.startsWith("0x")||(this._deployData="0x"+this._deployData),this._deployData+r}var a=n?n+r:r;if(!a)throw new Error("Couldn't find a matching contract method named \""+this._method.name+'".');return a},d.prototype._decodeMethodReturn=function(t,e){if(!e)return null;e=e.length>=2?e.slice(2):e;var n=p.decodeParameters(t,e);return 1===n.__length__?n[0]:(delete n.__length__,n)},d.prototype.deploy=function(t,e){if((t=t||{}).arguments=t.arguments||[],!(t=this._getOrSetDefaultOptions(t)).data){if("function"==typeof e)return e(u.ContractMissingDeployDataError());throw u.ContractMissingDeployDataError()}var n=o.find(this.options.jsonInterface,(function(t){return"constructor"===t.type}))||{};return n.signature="constructor",this._createTxObject.apply({method:n,parent:this,deployData:t.data,_ethAccounts:this.constructor._ethAccounts},t.arguments)},d.prototype._generateEventOptions=function(){var t=Array.prototype.slice.call(arguments),e=this._getCallback(t),n=o.isObject(t[t.length-1])?t.pop():{},r=o.isString(t[0])?t[0]:"allevents",a="allevents"===r.toLowerCase()?{name:"ALLEVENTS",jsonInterface:this.options.jsonInterface}:this.options.jsonInterface.find((function(t){return"event"===t.type&&(t.name===r||t.signature==="0x"+r.replace("0x",""))}));if(!a)throw u.ContractEventDoesNotExistError(r);if(!s.isAddress(this.options.address))throw u.ContractNoAddressDefinedError();return{params:this._encodeEventABI(a,n),event:a,callback:e}},d.prototype.clone=function(){return new this.constructor(this.options.jsonInterface,this.options.address,this.options)},d.prototype.once=function(t,e,n){var r=Array.prototype.slice.call(arguments);if(!(n=this._getCallback(r)))throw u.ContractOnceRequiresCallbackError();e&&delete e.fromBlock,this._on(t,e,(function(t,e,r){r.unsubscribe(),o.isFunction(n)&&n(t,e,r)}))},d.prototype._on=function(){var t=this._generateEventOptions.apply(this,arguments);t.params&&t.params.toBlock&&(delete t.params.toBlock,console.warn("Invalid option: toBlock. Use getPastEvents for specific range.")),this._checkListener("newListener",t.event.name),this._checkListener("removeListener",t.event.name);var e=new i({subscription:{params:1,inputFormatter:[c.inputLogFormatter],outputFormatter:this._decodeEventABI.bind(t.event),subscriptionHandler:function(t){t.removed?this.emit("changed",t):this.emit("data",t),o.isFunction(this.callback)&&this.callback(null,t,this)}},type:"eth",requestManager:this._requestManager});return e.subscribe("logs",t.params,t.callback||function(){}),e},d.prototype.getPastEvents=function(){var t=this._generateEventOptions.apply(this,arguments),e=new a({name:"getPastLogs",call:"eth_getLogs",params:1,inputFormatter:[c.inputLogFormatter],outputFormatter:this._decodeEventABI.bind(t.event)});e.setRequestManager(this._requestManager);var n=e.buildCall();return e=null,n(t.params,t.callback)},d.prototype._createTxObject=function(){var t=Array.prototype.slice.call(arguments),e={};if("function"===this.method.type&&(e.call=this.parent._executeMethod.bind(e,"call"),e.call.request=this.parent._executeMethod.bind(e,"call",!0)),e.send=this.parent._executeMethod.bind(e,"send"),e.send.request=this.parent._executeMethod.bind(e,"send",!0),e.encodeABI=this.parent._encodeMethodABI.bind(e),e.estimateGas=this.parent._executeMethod.bind(e,"estimate"),t&&this.method.inputs&&t.length!==this.method.inputs.length){if(this.nextMethod)return this.nextMethod.apply(null,t);throw u.InvalidNumberOfParams(t.length,this.method.inputs.length,this.method.name)}return e.arguments=t||[],e._method=this.method,e._parent=this.parent,e._ethAccounts=this.parent.constructor._ethAccounts||this._ethAccounts,this.deployData&&(e._deployData=this.deployData),e},d.prototype._processExecuteArguments=function(t,e){var n={};if(n.type=t.shift(),n.callback=this._parent._getCallback(t),"call"===n.type&&!0!==t[t.length-1]&&(o.isString(t[t.length-1])||isFinite(t[t.length-1]))&&(n.defaultBlock=t.pop()),n.options=o.isObject(t[t.length-1])?t.pop():{},n.generateRequest=!0===t[t.length-1]&&t.pop(),n.options=this._parent._getOrSetDefaultOptions(n.options),n.options.data=this.encodeABI(),!this._deployData&&!s.isAddress(this._parent.options.address))throw u.ContractNoAddressDefinedError();return this._deployData||(n.options.to=this._parent.options.address),n.options.data?n:s._fireError(new Error("Couldn't find a matching contract method, or the number of parameters is wrong."),e.eventEmitter,e.reject,n.callback)},d.prototype._executeMethod=function(){var t=this,e=this._parent._processExecuteArguments.call(this,Array.prototype.slice.call(arguments),n),n=l("send"!==e.type),r=t.constructor._ethAccounts||t._ethAccounts;if(e.generateRequest){var i={params:[c.inputCallFormatter.call(this._parent,e.options)],callback:e.callback};return"call"===e.type?(i.params.push(c.inputDefaultBlockNumberFormatter.call(this._parent,e.defaultBlock)),i.method="eth_call",i.format=this._parent._decodeMethodReturn.bind(null,this._method.outputs)):i.method="eth_sendTransaction",i}switch(e.type){case"estimate":var d=new a({name:"estimateGas",call:"eth_estimateGas",params:1,inputFormatter:[c.inputCallFormatter],outputFormatter:s.hexToNumber,requestManager:t._parent._requestManager,accounts:r,defaultAccount:t._parent.defaultAccount,defaultBlock:t._parent.defaultBlock}).createFunction();return d(e.options,e.callback);case"call":var h=new a({name:"call",call:"eth_call",params:2,inputFormatter:[c.inputCallFormatter,c.inputDefaultBlockNumberFormatter],outputFormatter:function(e){return t._parent._decodeMethodReturn(t._method.outputs,e)},requestManager:t._parent._requestManager,accounts:r,defaultAccount:t._parent.defaultAccount,defaultBlock:t._parent.defaultBlock,handleRevert:t._parent.handleRevert,abiCoder:p}).createFunction();return h(e.options,e.defaultBlock,e.callback);case"send":if(!s.isAddress(e.options.from))return s._fireError(u.ContractNoFromAddressDefinedError(),n.eventEmitter,n.reject,e.callback);if(o.isBoolean(this._method.payable)&&!this._method.payable&&e.options.value&&e.options.value>0)return s._fireError(new Error("Can not send value to non-payable contract method or constructor"),n.eventEmitter,n.reject,e.callback);var m={receiptFormatter:function(e){if(o.isArray(e.logs)){var n=o.map(e.logs,(function(e){return t._parent._decodeEventABI.call({name:"ALLEVENTS",jsonInterface:t._parent.options.jsonInterface},e)}));e.events={};var r=0;n.forEach((function(t){t.event?e.events[t.event]?Array.isArray(e.events[t.event])?e.events[t.event].push(t):e.events[t.event]=[e.events[t.event],t]:e.events[t.event]=t:(e.events[r]=t,r++)})),delete e.logs}return e},contractDeployFormatter:function(e){var n=t._parent.clone();return n.options.address=e.contractAddress,n}},f=new a({name:"sendTransaction",call:"eth_sendTransaction",params:1,inputFormatter:[c.inputTransactionFormatter],requestManager:t._parent._requestManager,accounts:t.constructor._ethAccounts||t._ethAccounts,defaultAccount:t._parent.defaultAccount,defaultBlock:t._parent.defaultBlock,transactionBlockTimeout:t._parent.transactionBlockTimeout,transactionConfirmationBlocks:t._parent.transactionConfirmationBlocks,transactionPollingTimeout:t._parent.transactionPollingTimeout,defaultCommon:t._parent.defaultCommon,defaultChain:t._parent.defaultChain,defaultHardfork:t._parent.defaultHardfork,handleRevert:t._parent.handleRevert,extraFormatters:m,abiCoder:p}).createFunction();return f(e.options,e.callback);default:throw new Error('Method "'+e.type+'" not implemented.')}},t.exports=d}}]);