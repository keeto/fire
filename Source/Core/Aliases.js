// AIRAliases.js - Revision: 1.5

var air = window.air || {};

(function(namespace, props){
	props.each(function(prop){
		air[prop] = namespace[prop];
	});
	return arguments.callee;
})
(window.runtime, ['trace'])
(window.runtime.flash.filesystem, ['File', 'FileStream', 'FileMode'])
(window.runtime.flash.events, ['AsyncErrorEvent', 'AsyncErrorEvent', 'BrowserInvokeEvent', 'DataEvent', 'DRMAuthenticateEvent', 'DRMStatusEvent', 'Event', 'EventDispatcher', 'FileListEvent', 'HTTPStatusEvent', 'IOErrorEvent', 'InvokeEvent', 'NetStatusEvent', 'OutputProgressEvent', 'ProgressEvent', 'SecurityErrorEvent', 'StatusEvent', 'TimerEvent', 'ActivityEvent', 'NativeWindowBoundsEvent', 'NativeWindowDisplayStateEvent', 'SQLErrorEvent', 'SQLEvent', 'SQLUpdateEvent'])
(window.runtime.flash.display, ['NativeWindow', 'NativeWindowDisplayState', 'NativeWindowInitOptions', 'NativeWindowSystemChrome', 'NativeWindowResize', 'NativeWindowType', 'NativeMenu', 'NativeMenuItem', 'Screen', 'Loader', 'Bitmap', 'BitmapData'])
(window.runtime.flash.geom, ['Point', 'Rectangle', 'Matrix'])
(window.runtime.flash.net, ['navigateToURL', 'sendToURL', 'FileFilter', 'LocalConnection', 'NetConnection', 'URLLoader', 'URLLoaderDataFormat', 'URLRequest', 'URLRequestDefaults', 'URLRequestHeader', 'URLRequestMethod', 'URLStream', 'URLVariables', 'Socket', 'XMLSocket', 'Responder', 'ObjectEncoding', 'NetStream', 'SharedObject', 'SharedObjectFlushStatus'])
(window.runtime.flash.system, ['Capabilities', 'System', 'Security'])
(window.runtime.flash.desktop, ['Updater', 'Clipboard', 'ClipboardFormats', 'ClipboardTransferMode', 'NativeDragManager', 'NativeDragOptions', 'NativeDragActions', 'Icon', 'DockIcon', 'InteractiveIcon', 'NotificationType', 'SystemTrayIcon', 'NativeApplication'])
(window.runtime.flash.ui, ['Keyboard', 'KeyLocation', 'Mouse'])
(window.runtime.flash.utils, ['ByteArray', 'CompressionAlgorithm', 'Endian', 'Timer'])
(window.runtime.flash.security, ['XMLSignatureValidator'])
(window.runtime.flash.html, ['HTMLLoader', 'HTMLPDFCapability'])
(window.runtime.flash.media, ['ID3Info', 'Sound', 'SoundChannel', 'SoundLoaderContext', 'SoundMixer', 'SoundTransform', 'Microphone', 'Video', 'Camera'])
(window.runtime.flash.data, ['EncryptedLocalStore', 'SQLCollationType', 'SQLColumnNameStyle', 'SQLColumnSchema', 'SQLConnection', 'SQLIndexSchema', 'SQLMode', 'SQLResult', 'SQLSchema', 'SQLSchemaResult', 'SQLStatement', 'SQLTableSchema', 'SQLTransactionLockType', 'SQLTriggerSchema', 'SQLViewSchema'])
(window.runtime.flash.errors, ['SQLError', 'SQLErrorOperation']);

(function(namespace, props){
	props.each(function(prop){
		air.__defineGetter__(prop, function(){
			return namespace[prop];
		});
	});
	return arguments.callee;
})
(window.runtime.air.net, ["ServiceMonitor", "SocketMonitor", "URLMonitor"])
(window.runtime.air.update, ["ApplicationUpdater", "ApplicationUpdaterUI"])
(window.runtime.air.update.events, ["UpdateEvent", "StatusUpdateEvent", "StatusUpdateErrorEvent", "DownloadErrorEvent", "StatusFileUpdateEvent", "StatusFileUpdateErrorEvent"]);
