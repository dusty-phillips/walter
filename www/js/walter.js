var Player = __inherit(object, 'Player', true);
Player.PY$play = function() {
    var self = this;
    var __kwargs = __kwargs_get(arguments);
    var __varargs = __varargs_get(arguments);
    var $v1 = Array.prototype.slice.call(arguments).concat(js(__varargs));
    post(str('/play.html'), dict([str('some'), str('arg')]), self.PY$__getattr__('update_status'));
return None;
};
Player.PY$update_status = function() {
    var self = this;
    var __kwargs = __kwargs_get(arguments);
    var __varargs = __varargs_get(arguments);
    var $v2 = Array.prototype.slice.call(arguments).concat(js(__varargs));
    var text = ('text' in __kwargs) ? __kwargs['text'] : $v2[0];
    delete __kwargs.text
    if (text === undefined) { 
__builtins__.PY$print('Player.update_status() did not get parameter text'); }; 
    text = py(text);
    html(str('#status'), text);
return None;
};
Player.PY$get_status = function() {
    var self = this;
    var __kwargs = __kwargs_get(arguments);
    var __varargs = __varargs_get(arguments);
    var $v3 = Array.prototype.slice.call(arguments).concat(js(__varargs));
    get(str('/status.html'), self.PY$__getattr__('update_status'));
return None;
};
var player = Player();
var setup = function() {
    var __kwargs = __kwargs_get(arguments);
    var __varargs = __varargs_get(arguments);
    var $v4 = Array.prototype.slice.call(arguments).concat(js(__varargs));
    click(str('.play'), player.PY$__getattr__('play'));
    window.setInterval(js(player.PY$__getattr__('get_status')), js(int(3000)));
return None;
}
var click = function() {
    var __kwargs = __kwargs_get(arguments);
    var __varargs = __varargs_get(arguments);
    var $v5 = Array.prototype.slice.call(arguments).concat(js(__varargs));
    var selector = ('selector' in __kwargs) ? __kwargs['selector'] : $v5[0];
    delete __kwargs.selector
    if (selector === undefined) { 
__builtins__.PY$print('click() did not get parameter selector'); }; 
    var func = ('func' in __kwargs) ? __kwargs['func'] : $v5[1];
    delete __kwargs.func
    if (func === undefined) { 
__builtins__.PY$print('click() did not get parameter func'); }; 
    jQuery(js(selector)).click(js(func));
return None;
}
var html = function() {
    var __kwargs = __kwargs_get(arguments);
    var __varargs = __varargs_get(arguments);
    var $v6 = Array.prototype.slice.call(arguments).concat(js(__varargs));
    var selector = ('selector' in __kwargs) ? __kwargs['selector'] : $v6[0];
    delete __kwargs.selector
    if (selector === undefined) { 
__builtins__.PY$print('html() did not get parameter selector'); }; 
    var text = ('text' in __kwargs) ? __kwargs['text'] : $v6[1];
    delete __kwargs.text
    if (text === undefined) { 
__builtins__.PY$print('html() did not get parameter text'); }; 
    jQuery(js(selector)).html(js(text));
return None;
}
var post = function() {
    var __kwargs = __kwargs_get(arguments);
    var __varargs = __varargs_get(arguments);
    var $v7 = Array.prototype.slice.call(arguments).concat(js(__varargs));
    var url = ('url' in __kwargs) ? __kwargs['url'] : $v7[0];
    delete __kwargs.url
    if (url === undefined) { 
__builtins__.PY$print('post() did not get parameter url'); }; 
    var params = $v7[1];
    if (params === undefined) { params = __kwargs.params === undefined ? dict([]) : __kwargs.params; };
    delete __kwargs.params
    if (params === undefined) { 
__builtins__.PY$print('post() did not get parameter params'); }; 
    var func = $v7[2];
    if (func === undefined) { func = __kwargs.func === undefined ? __builtins__.PY$None : __kwargs.func; };
    delete __kwargs.func
    if (func === undefined) { 
__builtins__.PY$print('post() did not get parameter func'); }; 
    jQuery.post(js(url), js(params), js(func));
return None;
}
var get = function() {
    var __kwargs = __kwargs_get(arguments);
    var __varargs = __varargs_get(arguments);
    var $v8 = Array.prototype.slice.call(arguments).concat(js(__varargs));
    var url = ('url' in __kwargs) ? __kwargs['url'] : $v8[0];
    delete __kwargs.url
    if (url === undefined) { 
__builtins__.PY$print('get() did not get parameter url'); }; 
    var func = $v8[1];
    if (func === undefined) { func = __kwargs.func === undefined ? __builtins__.PY$None : __kwargs.func; };
    delete __kwargs.func
    if (func === undefined) { 
__builtins__.PY$print('get() did not get parameter func'); }; 
    jQuery.get(js(url), js(func));
return None;
}
jQuery(js(setup));

