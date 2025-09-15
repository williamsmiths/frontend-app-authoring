import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  altButtonEdit: {
    id: 'course-authoring.course-unit.heading.button.edit.alt',
    defaultMessage: 'Chỉnh sửa',
    description: 'The unit edit button text',
  },
  ariaLabelButtonEdit: {
    id: 'course-authoring.course-unit.heading.button.edit.aria-label',
    defaultMessage: 'Chỉnh sửa trường',
    description: 'The unit edit button aria label',
  },
  altButtonSettings: {
    id: 'course-authoring.course-unit.heading.button.settings.alt',
    defaultMessage: 'Cài đặt',
    description: 'The unit settings button text',
  },
  definedVisibilityMessage: {
    id: 'course-authoring.course-unit.heading.visibility.defined.message',
    defaultMessage: 'Quyền truy cập vào đơn vị này bị giới hạn cho: {selectedGroupsLabel}',
    description: 'Group visibility accessibility text for Unit',
  },
  commonVisibilityMessage: {
    id: 'course-authoring.course-unit.heading.visibility.common.message',
    defaultMessage: 'Quyền truy cập vào một số nội dung trong đơn vị này bị giới hạn cho các nhóm học viên cụ thể.',
    description: 'The label text of some content restriction in this unit',
  },
});

export default messages;