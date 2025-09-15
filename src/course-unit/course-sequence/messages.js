import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  prevBtnText: {
    id: 'course-authoring.course-unit.prev-btn-text',
    defaultMessage: 'Trước',
  },
  nextBtnText: {
    id: 'course-authoring.course-unit.next-btn-text',
    defaultMessage: 'Tiếp',
  },
  newUnitBtnText: {
    id: 'course-authoring.course-unit.new-unit-btn-text',
    defaultMessage: 'Đơn vị mới',
  },
  sequenceNavLabelText: {
    id: 'course-authoring.course-unit.sequence-nav-label-text',
    defaultMessage: 'Điều hướng chuỗi',
  },
  sequenceLoadFailure: {
    id: 'course-authoring.course-unit.sequence.load.failure',
    defaultMessage: 'Đã xảy ra lỗi khi tải khóa học này.',
  },
  sequenceNoContent: {
    id: 'course-authoring.course-unit.sequence.no.content',
    defaultMessage: 'Không có nội dung nào ở đây.',
  },
  sequenceDropdownTitle: {
    id: 'course-authoring.course-unit.sequence.navigation.menu',
    defaultMessage: '{current} trên {total}',
  },
  pasteAsNewUnitLink: {
    id: 'course-authoring.course-unit.sequence.navigation.menu.copy-unit.past-unit-link',
    defaultMessage: 'Dán thành đơn vị mới',
  },
});

export default messages;