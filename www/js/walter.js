var Player = __inherit(object, 'Player', true);
Player.PY$play = function() {
    var self = this;
    var __kwargs = __kwargs_get(arguments);
    var __varargs = __varargs_get(arguments);
    var $v1 = Array.prototype.slice.call(arguments).concat(js(__varargs));
    post(str('/play.html'), dict([str('some'), str('arg')]));
return None;
};
var player = Player();
var setup = function() {
    var __kwargs = __kwargs_get(arguments);
    var __varargs = __varargs_get(arguments);
    var $v2 = Array.prototype.slice.call(arguments).concat(js(__varargs));
    click(str('.play'), player.PY$__getattr__('play'));
return None;
}
var click = function() {
    var __kwargs = __kwargs_get(arguments);
    var __varargs = __varargs_get(arguments);
    var $v3 = Array.prototype.slice.call(arguments).concat(js(__varargs));
    var selector = ('selector' in __kwargs) ? __kwargs['selector'] : $v3[0];
    delete __kwargs.selector
    if (selector === undefined) { 
__builtins__.PY$print('click() did not get parameter selector'); }; 
    var func = ('func' in __kwargs) ? __kwargs['func'] : $v3[1];
    delete __kwargs.func
    if (func === undefined) { 
__builtins__.PY$print('click() did not get parameter func'); }; 
    jQuery(js(selector)).click(js(func));
return None;
}
var post = function() {
    var __kwargs = __kwargs_get(arguments);
    var __varargs = __varargs_get(arguments);
    var $v4 = Array.prototype.slice.call(arguments).concat(js(__varargs));
    var url = ('url' in __kwargs) ? __kwargs['url'] : $v4[0];
    delete __kwargs.url
    if (url === undefined) { 
__builtins__.PY$print('post() did not get parameter url'); }; 
    var params = $v4[1];
    if (params === undefined) { params = __kwargs.params === undefined ? dict([]) : __kwargs.params; };
    delete __kwargs.params
    if (params === undefined) { 
__builtins__.PY$print('post() did not get parameter params'); }; 
    var func = $v4[2];
    if (func === undefined) { func = __kwargs.func === undefined ? __builtins__.PY$None : __kwargs.func; };
    delete __kwargs.func
    if (func === undefined) { 
__builtins__.PY$print('post() did not get parameter func'); }; 
    jQuery.post(js(url), js(params), js(func));
return None;
}
jQuery(js(setup));

