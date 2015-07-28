/*
 * Bootstrap Scrollable Modal Plugin 0.1
 *
 * 2014, Sean Omlor: http://seanomlor.com
 *
 * Usage:
 *   thin wrapper around Bootstrap $('selector').modal()
 *   which adds/removes "modal-scrollable" class to body
 *
 *   modal-scrollabel class should, at minimum, be set to:
 *
 *   .modal-scrollable {
 *     overflow-y: auto;
 *   }
 *
 */

jQuery.fn.scrollableModal = function(opts) {
  var opts = opts || {};
  var $el = $(this);

  if (opts.destroy) {
    $el.off('show.bs.modal');
    $el.off('hide.bs.modal');
    $el.modal('hide');
  } else {
    $el.on('show.bs.modal', function() {
      $('body').addClass('modal-scrollable');
    });

    $el.on('hide.bs.modal', function(e) {
      $('body').removeClass('modal-scrollable');
    });

    $el.modal(opts);
  }
};
