(function ($) {
    "use strict";

    $(document).ready(function () {
        
        $('#demande_send').hide();
        
//longueur message contact
        $('textarea').maxlength({
            alwaysShow: true,
            placement: 'top-left',
            threshold: 10,
            warningClass: "label label-success",
            limitReachedClass: "label label-danger"
        });
    });

})(jQuery);