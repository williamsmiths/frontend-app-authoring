import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  titleLabel: {
    id: 'authoring.videoeditor.videoSource.title.label',
    defaultMessage: 'Nguồn video',
    description: 'Title for the video source widget',
  },
  videoIdLabel: {
    id: 'authoring.videoeditor.videoSource.videoId.label',
    defaultMessage: 'Video ID',
    description: 'Label for video ID field',
  },
  videoIdFeedback: {
    id: 'authoring.videoeditor.videoSource.videoId.feedback',
    defaultMessage: 'Nếu bạn được edX cung cấp một Video ID, hãy nhập ID đó tại đây.',
    description: 'Feedback for video ID field',
  },
  videoUrlLabel: {
    id: 'authoring.videoeditor.videoSource.videoUrl.label',
    defaultMessage: 'Video URL',
    description: 'Label for video URL field',
  },
  videoUrlFeedback: {
    id: 'authoring.videoeditor.videoSource.videoUrl.feedback',
    defaultMessage: `URL của video. Có thể là liên kết YouTube hoặc liên kết
    đến tệp .mp4, .ogg, hoặc .webm được lưu trữ ở nơi khác trên internet.`,
    description: 'Feedback for video URL field',
  },
  videoIdChangeAlert: {
    id: 'authoring.videoeditor.videoIdChangeAlert.message',
    defaultMessage: 'Trường ID video đã thay đổi, vui lòng kiểm tra các giá trị URL video và URL dự phòng, sau đó cập nhật nếu cần.',
    description: 'Body message for the alert that appears when the video id has been changed.',
  },
  fallbackVideoTitle: {
    id: 'authoring.videoeditor.videoSource.fallbackVideo.title',
    defaultMessage: 'Video dự phòng',
    description: 'Title for the fallback videos section',
  },
  fallbackVideoMessage: {
    id: 'authoring.videoeditor.videoSource.fallbackVideo.message',
    defaultMessage: `Để đảm bảo tất cả người học có thể xem video, edX
    khuyến nghị cung cấp thêm các video ở định dạng .mp4 và
    .webm. Video tương thích đầu tiên với thiết bị của người học
    sẽ được phát.`,
    description: 'Text explaining reason for fallback videos',
  },
  fallbackVideoLabel: {
    id: 'authoring.videoeditor.videoSource.fallbackVideo.label',
    defaultMessage: 'Video URL',
    description: 'Label for fallback video url field',
  },
  deleteFallbackVideo: {
    id: 'authoring.videoeditor.videoSource.deleteFallbackVideo',
    defaultMessage: 'Xóa',
    description: 'Message Presented To user for action to delete fallback video',
  },
  allowDownloadCheckboxLabel: {
    id: 'authoring.videoeditor.videoSource.allowDownloadCheckboxLabel',
    defaultMessage: 'Cho phép tải video xuống',
    description: 'Label for allow video downloads checkbox',
  },
  allowDownloadTooltipMessage: {
    id: 'authoring.videoeditor.videoSource.allowDownloadTooltipMessage',
    defaultMessage: `Cho phép người học tải video này xuống ở các định dạng khác nhau
    nếu họ không thể sử dụng trình phát video edX hoặc không có quyền truy cập YouTube.`,
    description: 'Message for allow video downloads checkbox',
  },
  allowVideoSharingCheckboxLabel: {
    id: 'authoring.videoeditor.videoSource.allowVideoSharingCheckboxLabel',
    defaultMessage: 'Cho phép chia sẻ video này lên mạng xã hội.',
    description: 'Label for allow shareable video checkbox',
  },
  allowVideoSharingTooltipMessage: {
    id: 'authoring.videoeditor.videoSource.allowVideoSharingTooltipMessage',
    defaultMessage: `Cho phép người học chia sẻ công khai video này trên mạng xã hội.
    Video sẽ hiển thị cho bất kỳ ai, không cần đăng ký khóa học
    hoặc có tài khoản edX. Các liên kết đến trang giới thiệu khóa học và trang đăng ký 
    sẽ xuất hiện cùng video.`,
    description: 'Message for allow shareable video checkbox',
  },
  addButtonLabel: {
    id: 'authoring.videoeditor.videoSource.fallbackVideo.addButtonLabel',
    defaultMessage: 'Thêm Video URL',
    description: 'Label for add a video URL button',
  },
});

export default messages;