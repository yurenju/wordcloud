"use strict";

(function ($) {

$.imgurUpload = function (key, image, options) {
    var url = 'http://api.imgur.com/2/upload.json';

    if(XMLHttpRequest) {
        var request = new XMLHttpRequest();
        if ('withCredentials' in request) {
            //Firefox 3.5, Safari 4
            var fd = new FormData();
            fd.append('image', image);
            fd.append('key', key);

            if (options) {
                fd.append('title', options.title);
                fd.append('caption', options.caption);
            }

            request.open('POST', url);
            request.onload = function() {
                window.open(JSON.parse(request.responseText)
                                      .upload.links.imgur_page);
            }
            request.send(fd);
        }
        else if (XDomainRequest) {
            //IE8
        }
    }
};
})(jQuery);
