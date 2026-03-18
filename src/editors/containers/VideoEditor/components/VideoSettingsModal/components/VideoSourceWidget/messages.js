import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  titleLabel: {
    id: 'authoring.videoeditor.videoSource.title.label',
    defaultMessage: 'Nguồn video',
    description: 'Title for the video source widget',
  },
  videoIdLabel: {
    id: 'authoring.videoeditor.videoSource.videoId.label',
    defaultMessage: 'ID video',
    description: 'Label for video ID field',
  },
  videoIdFeedback: {
    id: 'authoring.videoeditor.videoSource.videoId.feedback',
    defaultMessage: 'Nếu bạn được edX cung cấp ID video, hãy nhập ID vào đây.',
    description: 'Feedback for video ID field',
  },
  videoUrlLabel: {
    id: 'authoring.videoeditor.videoSource.videoUrl.label',
    defaultMessage: 'URL video',
    description: 'Label for video URL field',
  },
  videoUrlFeedback: {
    id: 'authoring.videoeditor.videoSource.videoUrl.feedback',
    defaultMessage: `URL cho video của bạn. Đây có thể là URL YouTube hoặc liên kết
    đến tệp video .mp4, .ogg hoặc .webm được lưu trữ ở nơi khác trên internet.`,
    description: 'Feedback for video URL field',
  },
  videoIdChangeAlert: {
    id: 'authoring.videoeditor.videoIdChangeAlert.message',
    defaultMessage: 'Trường ID video đã thay đổi, vui lòng kiểm tra URL video và URL dự phòng và cập nhật nếu cần.',
    description: 'Body message for the alert that appears when the video id has been changed.',
  },
  fallbackVideoTitle: {
    id: 'authoring.videoeditor.videoSource.fallbackVideo.title',
    defaultMessage: 'Video dự phòng',
    description: 'Title for the fallback videos section',
  },
  fallbackVideoMessage: {
    id: 'authoring.videoeditor.videoSource.fallbackVideo.message',
    defaultMessage: `Để đảm bảo tất cả người học có thể truy cập video, edX
    khuyến nghị cung cấp thêm video ở định dạng .mp4 và
    .webm. Video đầu tiên tương thích với thiết bị của người học sẽ được phát.`,
    description: 'Test explaining reason for fallback videos',
  },
  fallbackVideoLabel: {
    id: 'authoring.videoeditor.videoSource.fallbackVideo.label',
    defaultMessage: 'URL video',
    description: 'Label for fallback video url field',
  },
  deleteFallbackVideo: {
    id: 'authoring.videoeditor.videoSource.deleteFallbackVideo',
    defaultMessage: 'Xóa',
    description: 'Message Presented To user for action to delete fallback video',
  },
  allowDownloadCheckboxLabel: {
    id: 'authoring.videoeditor.videoSource.allowDownloadCheckboxLabel',
    defaultMessage: 'Cho phép tải xuống video',
    description: 'Label for allow video downloads checkbox',
  },
  allowDownloadTooltipMessage: {
    id: 'authoring.videoeditor.videoSource.allowDownloadTooltipMessage',
    defaultMessage: `Cho phép người học tải xuống các phiên bản video này ở
    các định dạng khác nhau nếu họ không thể sử dụng trình phát video edX hoặc
    không có quyền truy cập vào YouTube.`,
    description: 'Message for allow video downloads checkbox',
  },
  allowVideoSharingCheckboxLabel: {
    id: 'authoring.videoeditor.videoSource.allowVideoSharingCheckboxLabel',
    defaultMessage: 'Cho phép video này được chia sẻ trên mạng xã hội.',
    description: 'Label for allow shareable video checkbox',
  },
  allowVideoSharingTooltipMessage: {
    id: 'authoring.videoeditor.videoSource.allowVideoSharingTooltipMessage',
    defaultMessage: `Cho phép người học chia sẻ video này công khai trên mạng xã hội.
    Video sẽ có thể được xem bởi bất kỳ ai, họ không cần đăng ký khóa học
    hoặc thậm chí không cần tài khoản edX. Liên kết đến trang giới thiệu khóa học và đăng ký sẽ hiển thị cùng với video.`,
    description: 'Message for allow shareable video checkbox',
  },
  addButtonLabel: {
    id: 'authoring.videoeditor.videoSource.fallbackVideo.addButtonLabel',
    defaultMessage: 'Thêm URL video',
    description: 'Label for add a video URL button',
  },
});

export default messages;