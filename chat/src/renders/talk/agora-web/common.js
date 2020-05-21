function addView (id, show) {
  if (!$('#' + id)[0]) {
    $('<div/>', {
      id: 'remote_video_panel_' + id,
      class: 'video-view',
    }).appendTo('#video')

    $('<div/>', {
      id: 'remote_video_' + id,
      class: 'video-placeholder',
    }).appendTo('#remote_video_panel_' + id)

    $('<div/>', {
      id: 'remote_video_info_' + id,
      class: 'video-profile ' + (show ? '' : 'hide'),
    }).appendTo('#remote_video_panel_' + id)

    $('<div/>', {
      id: 'video_autoplay_' + id,
      class: 'autoplay-fallback hide',
    }).appendTo('#remote_video_panel_' + id)
  }
}

function removeView (id) {
  if ($('#remote_video_panel_' + id)[0]) {
    $('#remote_video_panel_' + id).remove()
  }
}

module.exports.addView = addView;
module.exports.removeView = removeView