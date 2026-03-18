import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  draftStatusLabel: {
    id: 'course-authoring.library-authoring.generic.status-widget.draft',
    defaultMessage: 'Bản nháp',
    description: 'Label in library authoring sidebar when the entity is on draft status',
  },
  neverPublishedLabel: {
    id: 'course-authoring.library-authoring.generic.status-widget.never',
    defaultMessage: '(Chưa từng xuất bản)',
    description: 'Label in library authoring sidebar when the entity is never published',
  },
  unpublishedStatusLabel: {
    id: 'course-authoring.library-authoring.generic.status-widget.unpublished',
    defaultMessage: '(Chưa xuất bản các thay đổi)',
    description: 'Label in library authoring sidebar when the entity has unpublished changes',
  },
  publishedStatusLabel: {
    id: 'course-authoring.library-authoring.generic.status-widget.published',
    defaultMessage: 'Đã xuất bản',
    description: 'Label in library authoring sidebar when the entity is on published status',
  },
  lastPublishedMsg: {
    id: 'course-authoring.library-authoring.generic.status-widget.last-published',
    defaultMessage: 'Xuất bản lần cuối vào {date} lúc {time} bởi {user}.',
    description: 'Body message of the library authoring sidebar when the entity is published.',
  },
  lastPublishedMsgWithoutUser: {
    id: 'course-authoring.library-authoring.generic.status-widget.last-published-no-user',
    defaultMessage: 'Xuất bản lần cuối vào {date} lúc {time}.',
    description: 'Body message of the library authoring sidebar when the entity is published.',
  },
  lastDraftMsg: {
    id: 'course-authoring.library-authoring.generic.status-widget.last-draft',
    defaultMessage: 'Bản nháp được lưu vào {date} lúc {time} bởi {user}.',
    description: 'Body message of the library authoring sidebar when the entity is on draft status.',
  },
  lastDraftMsgWithoutUser: {
    id: 'course-authoring.library-authoring.generic.status-widget.last-draft-no-user',
    defaultMessage: 'Bản nháp được lưu vào {date} lúc {time}.',
    description: 'Body message of the library authoring sidebar when the entity is on draft status.',
  },
  publishButtonLabel: {
    id: 'course-authoring.library-authoring.generic.status-widget.publish-button',
    defaultMessage: 'Xuất bản',
    description: 'Label of publish button for an entity.',
  },
  discardChangesButtonLabel: {
    id: 'course-authoring.library-authoring.generic.status-widget.discard-button',
    defaultMessage: 'Hủy thay đổi',
    description: 'Label of discard changes button for an entity.',
  },
});

export default messages;