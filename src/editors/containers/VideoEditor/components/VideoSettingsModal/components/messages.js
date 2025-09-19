import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  expandAltText: {
    id: 'authoring.videoeditor.expand',
    defaultMessage: 'Mở rộng',
  },
  collapseAltText: {
    id: 'authoring.videoeditor.collapse',
    defaultMessage: 'Thu gọn',
  },
  validateErrorTitle: {
    id: 'authoring.videoeditor.validate.error.title',
    defaultMessage: 'Không thể thêm video của bạn.',
    description: 'Title of validation error.',
  },
  validateErrorBody: {
    id: 'authoring.videoeditor.validate.error.body',
    defaultMessage: 'Vui lòng kiểm tra lại dữ liệu và thử lại.',
    description: 'Body of validation error.',
  },
  durationTitle: {
    id: 'authoring.videoeditor.duration.title',
    defaultMessage: 'Thời lượng',
    description: 'Title of Duration widget',
  },
  durationDescription: {
    id: 'authoring.videoeditor.duration.description',
    defaultMessage: 'Chọn đoạn video cụ thể để phát.',
    description: 'Description of Duration widget',
  },
  startTimeLabel: {
    id: 'authoring.videoeditor.duration.startTime.label',
    defaultMessage: 'Thời gian bắt đầu',
    description: 'Label of start time input field',
  },
  stopTimeLabel: {
    id: 'authoring.videoeditor.duration.stopTime.label',
    defaultMessage: 'Thời gian kết thúc',
    description: 'Label of stop time input field',
  },
  durationHint: {
    id: 'authoring.videoeditor.duration.hint',
    defaultMessage: 'Nhập thời gian theo định dạng HH:MM:SS',
    description: 'Hint text for start and stop time input fields',
  },
  fullVideoLength: {
    id: 'authoring.videoeditor.duration.fullVideoLength',
    defaultMessage: 'Toàn bộ độ dài video',
    description: 'Text describing a video with neither custom start time nor custom stop time',
  },
  startsAt: {
    id: 'authoring.videoeditor.duration.startsAt',
    defaultMessage: 'Bắt đầu từ {startTime}',
    description: 'Text describing a video with custom start time and default stop time',
  },
  total: {
    id: 'authoring.videoeditor.duration.total',
    defaultMessage: 'Tổng: {total}',
    description: 'Text describing a video with custom start time and custom stop time, or just a custom stop time',
  },
  custom: {
    id: 'authoring.videoeditor.duration.custom',
    defaultMessage: 'Tùy chỉnh: {total}',
    description: 'Text describing a video with custom start time and custom stop time, or just a custom stop time for a collapsed widget',
  },
  noTranscriptsAdded: {
    id: 'authoring.videoeditor.transcripts.empty',
    defaultMessage: 'Chưa thêm bản dịch phụ đề nào',
    description: 'Message shown when the user has not selected any transcripts for the video.',
  },
  videoTypeYoutube: {
    id: 'authoring.videoeditor.videotype.youtube',
    defaultMessage: 'YouTube video',
    description: 'Shown on the preview card if the video is from youtube.com.',
  },
  videoTypeOther: {
    id: 'authoring.videoeditor.videotype.other',
    defaultMessage: 'Video khác',
    description: 'Shown on the preview card if the video source could not be identified.',
  },
});

export default messages;