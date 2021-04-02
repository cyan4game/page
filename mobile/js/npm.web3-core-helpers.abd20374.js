(window.webpackJsonp=window.webpackJsonp||[]).push([["npm.web3-core-helpers"],{"490f":function(r,e,t){"use strict";r.exports={ErrorResponse:function(r){var e=r&&r.error&&r.error.message?r.error.message:JSON.stringify(r),t=r.error&&r.error.data?r.error.data:null,n=new Error("Returned error: "+e);return n.data=t,n},InvalidNumberOfParams:function(r,e,t){return new Error('Invalid number of parameters for "'+t+'". Got '+r+" expected "+e+"!")},InvalidConnection:function(r,e){return this.ConnectionError("CONNECTION ERROR: Couldn't connect to node "+r+".",e)},InvalidProvider:function(){return new Error("Provider not set or invalid")},InvalidResponse:function(r){var e=r&&r.error&&r.error.message?r.error.message:"Invalid JSON RPC response: "+JSON.stringify(r);return new Error(e)},ConnectionTimeout:function(r){return new Error("CONNECTION TIMEOUT: timeout of "+r+" ms achived")},ConnectionNotOpenError:function(r){return this.ConnectionError("connection not open on send()",r)},ConnectionCloseError:function(r){return"object"==typeof r&&r.code&&r.reason?this.ConnectionError("CONNECTION ERROR: The connection got closed with the close code `"+r.code+"` and the following reason string `"+r.reason+"`",r):new Error("CONNECTION ERROR: The connection closed unexpectedly")},MaxAttemptsReachedOnReconnectingError:function(){return new Error("Maximum number of reconnect attempts reached!")},PendingRequestsOnReconnectingError:function(){return new Error("CONNECTION ERROR: Provider started to reconnect before the response got received!")},ConnectionError:function(r,e){const t=new Error(r);return e&&(t.code=e.code,t.reason=e.reason),t},RevertInstructionError:function(r,e){var t=new Error("Your request got reverted with the following reason string: "+r);return t.reason=r,t.signature=e,t},TransactionRevertInstructionError:function(r,e,t){var n=new Error("Transaction has been reverted by the EVM:\n"+JSON.stringify(t,null,2));return n.reason=r,n.signature=e,n.receipt=t,n},TransactionError:function(r,e){var t=new Error(r);return t.receipt=e,t},NoContractAddressFoundError:function(r){return this.TransactionError("The transaction receipt didn't contain a contract address.",r)},ContractCodeNotStoredError:function(r){return this.TransactionError("The contract code couldn't be stored, please check your gas limit.",r)},TransactionRevertedWithoutReasonError:function(r){return this.TransactionError("Transaction has been reverted by the EVM:\n"+JSON.stringify(r,null,2),r)},TransactionOutOfGasError:function(r){return this.TransactionError("Transaction ran out of gas. Please provide more gas:\n"+JSON.stringify(r,null,2),r)},ResolverMethodMissingError:function(r,e){return new Error("The resolver at "+r+'does not implement requested method: "'+e+'".')},ContractMissingABIError:function(){return new Error("You must provide the json interface of the contract when instantiating a contract object.")},ContractOnceRequiresCallbackError:function(){return new Error("Once requires a callback as the second parameter.")},ContractEventDoesNotExistError:function(r){return new Error('Event "'+r+"\" doesn't exist in this contract.")},ContractReservedEventError:function(r){return new Error('The event "'+r+"\" is a reserved event name, you can't use it.")},ContractMissingDeployDataError:function(){return new Error('No "data" specified in neither the given options, nor the default options.')},ContractNoAddressDefinedError:function(){return new Error("This contract object doesn't have address set yet, please set an address first.")},ContractNoFromAddressDefinedError:function(){return new Error('No "from" address specified in neither the given options, nor the default options.')}}},"68e2":function(r,e,t){"use strict";var n=t("17fb"),o=t("5ba3"),i=t("5fa0"),s=function(r){return o.toBN(r).toString(10)},a=function(r){if(void 0!==r)return function(r){return"latest"===r||"pending"===r||"earliest"===r}(r)?r:"genesis"===r?"0x0":o.isHexStrict(r)?n.isString(r)?r.toLowerCase():r:o.numberToHex(r)},u=function(r){if(r.to&&(r.to=l(r.to)),r.data&&r.input)throw new Error('You can\'t have "data" and "input" as properties of transactions at the same time, please use either "data" or "input" instead.');if(!r.data&&r.input&&(r.data=r.input,delete r.input),r.data&&!r.data.startsWith("0x")&&(r.data="0x"+r.data),r.data&&!o.isHex(r.data))throw new Error("The data field must be HEX encoded data.");return(r.gas||r.gasLimit)&&(r.gas=r.gas||r.gasLimit),["gasPrice","gas","value","nonce"].filter((function(e){return void 0!==r[e]})).forEach((function(e){r[e]=o.numberToHex(r[e])})),r},c=function(r){return null!==r.blockNumber&&(r.blockNumber=o.hexToNumber(r.blockNumber)),null!==r.transactionIndex&&(r.transactionIndex=o.hexToNumber(r.transactionIndex)),r.nonce=o.hexToNumber(r.nonce),r.gas=o.hexToNumber(r.gas),r.gasPrice=s(r.gasPrice),r.value=s(r.value),r.to&&o.isAddress(r.to)?r.to=o.toChecksumAddress(r.to):r.to=null,r.from&&(r.from=o.toChecksumAddress(r.from)),r},d=function(r){if("string"==typeof r.blockHash&&"string"==typeof r.transactionHash&&"string"==typeof r.logIndex){var e=o.sha3(r.blockHash.replace("0x","")+r.transactionHash.replace("0x","")+r.logIndex.replace("0x",""));r.id="log_"+e.replace("0x","").substr(0,8)}else r.id||(r.id=null);return null!==r.blockNumber&&(r.blockNumber=o.hexToNumber(r.blockNumber)),null!==r.transactionIndex&&(r.transactionIndex=o.hexToNumber(r.transactionIndex)),null!==r.logIndex&&(r.logIndex=o.hexToNumber(r.logIndex)),r.address&&(r.address=o.toChecksumAddress(r.address)),r},l=function(r){var e=new i(r);if(e.isValid()&&e.isDirect())return e.toAddress().toLowerCase();if(o.isAddress(r))return"0x"+r.toLowerCase().replace("0x","");throw new Error(`Provided address ${r} is invalid, the capitalization checksum test failed, or it's an indirect IBAN address which can't be converted.`)};r.exports={inputDefaultBlockNumberFormatter:function(r){return a(this&&null==r?this.defaultBlock:r)},inputBlockNumberFormatter:a,inputCallFormatter:function(r){var e=(r=u(r)).from||(this?this.defaultAccount:null);return e&&(r.from=l(e)),r},inputTransactionFormatter:function(r){if(r=u(r),!n.isNumber(r.from)&&!n.isObject(r.from)){if(r.from=r.from||(this?this.defaultAccount:null),!r.from&&!n.isNumber(r.from))throw new Error('The send transactions "from" field must be defined!');r.from=l(r.from)}return r},inputAddressFormatter:l,inputPostFormatter:function(r){return r.ttl&&(r.ttl=o.numberToHex(r.ttl)),r.workToProve&&(r.workToProve=o.numberToHex(r.workToProve)),r.priority&&(r.priority=o.numberToHex(r.priority)),n.isArray(r.topics)||(r.topics=r.topics?[r.topics]:[]),r.topics=r.topics.map((function(r){return 0===r.indexOf("0x")?r:o.fromUtf8(r)})),r},inputLogFormatter:function(r){var e=function(r){return null==r?null:0===(r=String(r)).indexOf("0x")?r:o.fromUtf8(r)};return void 0===r&&(r={}),void 0===r.fromBlock&&(r={...r,fromBlock:"latest"}),(r.fromBlock||0===r.fromBlock)&&(r.fromBlock=a(r.fromBlock)),(r.toBlock||0===r.toBlock)&&(r.toBlock=a(r.toBlock)),r.topics=r.topics||[],r.topics=r.topics.map((function(r){return n.isArray(r)?r.map(e):e(r)})),e=null,r.address&&(r.address=n.isArray(r.address)?r.address.map((function(r){return l(r)})):l(r.address)),r},inputSignFormatter:function(r){return o.isHexStrict(r)?r:o.utf8ToHex(r)},inputStorageKeysFormatter:function(r){return r.map(o.numberToHex)},outputProofFormatter:function(r){return r.address=o.toChecksumAddress(r.address),r.nonce=o.hexToNumberString(r.nonce),r.balance=o.hexToNumberString(r.balance),r},outputBigNumberFormatter:s,outputTransactionFormatter:c,outputTransactionReceiptFormatter:function(r){if("object"!=typeof r)throw new Error("Received receipt is invalid: "+r);return null!==r.blockNumber&&(r.blockNumber=o.hexToNumber(r.blockNumber)),null!==r.transactionIndex&&(r.transactionIndex=o.hexToNumber(r.transactionIndex)),r.cumulativeGasUsed=o.hexToNumber(r.cumulativeGasUsed),r.gasUsed=o.hexToNumber(r.gasUsed),n.isArray(r.logs)&&(r.logs=r.logs.map(d)),r.contractAddress&&(r.contractAddress=o.toChecksumAddress(r.contractAddress)),void 0!==r.status&&null!==r.status&&(r.status=Boolean(parseInt(r.status))),r},outputBlockFormatter:function(r){return r.gasLimit=o.hexToNumber(r.gasLimit),r.gasUsed=o.hexToNumber(r.gasUsed),r.size=o.hexToNumber(r.size),r.timestamp=o.hexToNumber(r.timestamp),null!==r.number&&(r.number=o.hexToNumber(r.number)),r.difficulty&&(r.difficulty=s(r.difficulty)),r.totalDifficulty&&(r.totalDifficulty=s(r.totalDifficulty)),n.isArray(r.transactions)&&r.transactions.forEach((function(r){if(!n.isString(r))return c(r)})),r.miner&&(r.miner=o.toChecksumAddress(r.miner)),r},outputLogFormatter:d,outputPostFormatter:function(r){return r.expiry=o.hexToNumber(r.expiry),r.sent=o.hexToNumber(r.sent),r.ttl=o.hexToNumber(r.ttl),r.workProved=o.hexToNumber(r.workProved),r.topics||(r.topics=[]),r.topics=r.topics.map((function(r){return o.toUtf8(r)})),r},outputSyncingFormatter:function(r){return r.startingBlock=o.hexToNumber(r.startingBlock),r.currentBlock=o.hexToNumber(r.currentBlock),r.highestBlock=o.hexToNumber(r.highestBlock),r.knownStates&&(r.knownStates=o.hexToNumber(r.knownStates),r.pulledStates=o.hexToNumber(r.pulledStates)),r}}},c044:function(r,e,t){"use strict";var n=t("490f"),o=t("68e2");r.exports={errors:n,formatters:o}}}]);