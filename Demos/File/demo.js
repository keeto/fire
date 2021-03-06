var log = function(path){
	var file = Filesystem.resolve(path);
	var p = new Element('p').inject(document.body);
	new Element('div', {style: 'font-weight: bold', text: path + ' '}).inject(p);
	var div = new Element('div', {text: file ? file.nativePath : 'NOT FOUND'}).inject(p);
};

window.addEvent('domready', function(){
	log('/native/path');
	log('file:///C:/windows');
	log('file:///url/format');
	log('desktop:/foo/jan.txt');
	log('app:/foo/jan.txt');
	log('app-storage:/foo/jan.txt');
	log('documents:/foo/jan.txt');
	log('user:/foo/jan.txt');

	var sourceDir = new Directory('app:/Demos');
	var files = sourceDir.list();
	files = files.map(function(file){
		return file.getPath();
	}).join('\n');
	air.trace(files);

	air.trace(new File('app:/Demos/index.html').read());
});
