(window.webpackJsonp=window.webpackJsonp||[]).push([["npm.swarm-js"],{"33fb":function(n,t,r){var e=function(){throw"This swarm.js function isn't available on the browser."},o={readFile:e},i={download:e,safeDownloadArchived:e,directoryTree:e},u={platform:e,arch:e},a={join:e,slice:e},c={spawn:e},f={lookup:e},s=r("aaa4"),d=r("73f3"),l=r("69dc"),p=r("e2aa"),h=r("aad6");n.exports=h({fs:o,files:i,os:u,path:a,child_process:c,defaultArchives:{},mimetype:f,request:s,downloadUrl:null,bytes:d,hash:l,pick:p})},"69dc":function(n,t,r){var e=r("7b0be").keccak256,o=r("73f3"),i=function(n,t){var r=o.reverse(o.pad(6,o.fromNumber(n))),i=o.flatten([r,"0x0000",t]);return e(i).slice(2)};n.exports=function n(t){"string"==typeof t&&"0x"!==t.slice(0,2)?t=o.fromString(t):"string"!=typeof t&&void 0!==t.length&&(t=o.fromUint8Array(t));var r=o.length(t);if(r<=4096)return i(r,t);for(var e=4096;128*e<r;)e*=128;for(var u=[],a=0;a<r;a+=e){var c=e<r-a?e:r-a;u.push(n(o.slice(t,a,a+c)))}return i(r,o.flatten(u))}},aad6:function(n,t){n.exports=function(n){var t=n.fs,r=n.files,e=n.os,o=n.path,i=n.child_process,u=n.mimetype,a=n.defaultArchives,c=n.request,f=n.downloadUrl,s=n.bytes,d=n.hash,l=n.pick,p=function(n){return function(t){for(var r={},e=0,o=n.length;e<o;++e)r[n[e]]=t[e];return r}},h=function(n){return function(t){return"".concat(n,"/bzz-raw:/").concat(t)}},m=function(n){return function(t){return new Promise((function(r,e){c(h(n)(t),{responseType:"arraybuffer"},(function(n,t,o){return n?e(n):o.statusCode>=400?e(new Error("Error ".concat(o.statusCode,"."))):r(new Uint8Array(t))}))}))}},v=function(n){return function(t){return function t(r){return function(e){return function(o){var i=function(n){return void 0===n.path?Promise.resolve():"application/bzz-manifest+json"===n.contentType?t(n.hash)(e+n.path)(o):Promise.resolve((r=e+n.path,function(n){return function(t){return t[r]=n,t}})(function(n){return{type:n.contentType,hash:n.hash}}(n))(o));var r};return m(n)(r).then((function(n){return JSON.parse(R(n)).entries})).then((function(n){return Promise.all(n.map(i))})).then((function(){return o}))}}}(t)("")({})}},y=function(n){return function(t){return v(n)(t).then((function(n){return p(Object.keys(n))(Object.keys(n).map((function(t){return n[t].hash})))}))}},w=function(n){return function(t){return v(n)(t).then((function(t){var r=Object.keys(t),e=r.map((function(n){return t[n].hash})),o=r.map((function(n){return t[n].type})),i=e.map(m(n));return Promise.all(i).then((function(n){return p(r)(function(n){return n.map((function(n,t){return{type:o[t],data:n}}))}(n))}))}))}},k=function(n){return function(t){return function(e){return r.download(h(n)(t))(e)}}},b=function(n){return function(t){return function(r){return y(n)(t).then((function(t){var e=[];for(var i in t)if(i.length>0){var u=o.join(r,i);e.push(k(n)(t[i])(u))}return Promise.all(e).then((function(){return r}))}))}}},D=function(n){return function(t){return new Promise((function(r,e){var o={body:"string"==typeof t?C(t):t,method:"POST"};c("".concat(n,"/bzz-raw:/"),o,(function(n,t){return n?e(n):r(t)}))}))}},g=function(n){return function(t){return function(r){return function(e){return function o(i){var u="/"===r[0]?r:"/"+r,a="".concat(n,"/bzz:/").concat(t).concat(u),f={method:"PUT",headers:{"Content-Type":e.type},body:e.data};return new Promise((function(n,t){c(a,f,(function(r,e){return r?t(r):-1!==e.indexOf("error")?t(e):n(e)}))})).catch((function(n){return i>0&&o(i-1)}))}(3)}}}},P=function(n){return function(t){return A(n)({"":t})}},T=function(n){return function(r){return t.readFile(r).then((function(t){return P(n)({type:u.lookup(r),data:t})}))}},A=function(n){return function(t){return D(n)("{}").then((function(r){return Object.keys(t).reduce((function(r,e){return r.then(function(r){return function(e){return g(n)(e)(r)(t[r])}}(e))}),Promise.resolve(r))}))}},F=function(n){return function(r){return t.readFile(r).then(D(n))}},x=function(n){return function(e){return function(o){return r.directoryTree(o).then((function(n){return Promise.all(n.map((function(n){return t.readFile(n)}))).then((function(t){var r=n.map((function(n){return n.slice(o.length)})),e=n.map((function(n){return u.lookup(n)||"text/plain"}));return p(r)(t.map((function(n,t){return{type:e[t],data:n}})))}))})).then((function(n){return(t=e?{"":n[e]}:{},function(n){var r={};for(var e in t)r[e]=t[e];for(var o in n)r[o]=n[o];return r})(n);var t})).then(A(n))}}},E=function(n){return function(t){if("data"===t.pick)return l.data().then(D(n));if("file"===t.pick)return l.file().then(P(n));if("directory"===t.pick)return l.directory().then(A(n));if(t.path)switch(t.kind){case"data":return F(n)(t.path);case"file":return T(n)(t.path);case"directory":return x(n)(t.defaultFile)(t.path)}else{if(t.length||"string"==typeof t)return D(n)(t);if(t instanceof Object)return A(n)(t)}return Promise.reject(new Error("Bad arguments"))}},S=function(n){return function(t){return function(r){return U(n)(t).then((function(e){return e?r?b(n)(t)(r):w(n)(t):r?k(n)(t)(r):m(n)(t)}))}}},z=function(n,t){var o=e.platform().replace("win32","windows")+"-"+("x64"===e.arch()?"amd64":"386"),i=(t||a)[o],u=f+i.archive+".tar.gz",c=i.archiveMD5,s=i.binaryMD5;return r.safeDownloadArchived(u)(c)(s)(n)},j=function(n){return new Promise((function(t,r){var e=i.spawn,o=function(n){return function(t){return-1!==(""+t).indexOf(n)}},u=n.account,a=n.password,c=n.dataDir,f=n.ensApi,s=n.privateKey,d=0,l=e(n.binPath,["--bzzaccount",u||s,"--datadir",c,"--ens-api",f]),p=function(n){0===d&&o("Passphrase")(n)?setTimeout((function(){d=1,l.stdin.write(a+"\n")}),500):o("Swarm http proxy started")(n)&&(d=2,clearTimeout(h),t(l))};l.stdout.on("data",p),l.stderr.on("data",p);var h=setTimeout((function(){return r(new Error("Couldn't start swarm process."))}),2e4)}))},O=function(n){return new Promise((function(t,r){n.stderr.removeAllListeners("data"),n.stdout.removeAllListeners("data"),n.stdin.removeAllListeners("error"),n.removeAllListeners("error"),n.removeAllListeners("exit"),n.kill("SIGINT");var e=setTimeout((function(){return n.kill("SIGKILL")}),8e3);n.once("close",(function(){clearTimeout(e),t()}))}))},L=function(n){return D(n)("test").then((function(n){return"c9a99c7d326dcc6316f32fe2625b311f6dc49a175e6877681ded93137d3569e7"===n})).catch((function(){return!1}))},U=function(n){return function(t){return m(n)(t).then((function(n){try{return!!JSON.parse(R(n)).entries}catch(n){return!1}}))}},M=function(n){return function(t,r,e,o,i){var u;return void 0!==t&&(u=n(t)),void 0!==r&&(u=n(r)),void 0!==e&&(u=n(e)),void 0!==o&&(u=n(o)),void 0!==i&&(u=n(i)),u}},R=function(n){return s.toString(s.fromUint8Array(n))},C=function(n){return s.toUint8Array(s.fromString(n))},I=function(n){return{download:function(t,r){return S(n)(t)(r)},downloadData:M(m(n)),downloadDataToDisk:M(k(n)),downloadDirectory:M(w(n)),downloadDirectoryToDisk:M(b(n)),downloadEntries:M(v(n)),downloadRoutes:M(y(n)),isAvailable:function(){return L(n)},upload:function(t){return E(n)(t)},uploadData:M(D(n)),uploadFile:M(P(n)),uploadFileFromDisk:M(P(n)),uploadDataFromDisk:M(F(n)),uploadDirectory:M(A(n)),uploadDirectoryFromDisk:M(x(n)),uploadToManifest:M(g(n)),pick:l,hash:d,fromString:C,toString:R}};return{at:I,local:function(n){return function(t){return L("http://localhost:8500").then((function(r){return r?t(I("http://localhost:8500")).then((function(){})):z(n.binPath,n.archives).onData((function(t){return(n.onProgress||function(){})(t.length)})).then((function(){return j(n)})).then((function(n){return t(I("http://localhost:8500")).then((function(){return n}))})).then(O)}))}},download:S,downloadBinary:z,downloadData:m,downloadDataToDisk:k,downloadDirectory:w,downloadDirectoryToDisk:b,downloadEntries:v,downloadRoutes:y,isAvailable:L,startProcess:j,stopProcess:O,upload:E,uploadData:D,uploadDataFromDisk:F,uploadFile:P,uploadFileFromDisk:T,uploadDirectory:A,uploadDirectoryFromDisk:x,uploadToManifest:g,pick:l,hash:d,fromString:C,toString:R}}},e2aa:function(n,t){var r=function(n){return function(){return new Promise((function(t,r){var e,o=function(r){var e={},o=r.target.files.length,i=0;[].map.call(r.target.files,(function(r){var u=new FileReader;u.onload=function(u){var a=new Uint8Array(u.target.result);if("directory"===n){var c=r.webkitRelativePath;e[c.slice(c.indexOf("/")+1)]={type:"text/plain",data:a},++i===o&&t(e)}else if("file"===n){var f=r.webkitRelativePath;t({type:mimetype.lookup(f),data:a})}else t(a)},u.readAsArrayBuffer(r)}))};"directory"===n?((e=document.createElement("input")).addEventListener("change",o),e.type="file",e.webkitdirectory=!0,e.mozdirectory=!0,e.msdirectory=!0,e.odirectory=!0,e.directory=!0):((e=document.createElement("input")).addEventListener("change",o),e.type="file");var i=document.createEvent("MouseEvents");i.initEvent("click",!0,!1),e.dispatchEvent(i)}))}};n.exports={data:r("data"),file:r("file"),directory:r("directory")}}}]);