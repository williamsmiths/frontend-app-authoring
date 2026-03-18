import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  newUnitButton: {
    id: 'course-authoring.course-outline.subsection.button.new-unit',
    defaultMessage: 'Đơn Vị Mới',
    description: 'Message of the button to create a new unit in a subsection.',
  },
  pasteButton: {
    id: 'course-authoring.course-outline.subsection.button.paste-unit',
    defaultMessage: 'Dán Đơn Vị',
    description: 'Message of the button to paste a new unit in a subsection.',
  },
  useUnitFromLibraryButton: {
    id: 'course-authoring.course-outline.subsection.button.use-unit-from-library',
    defaultMessage: 'Sử Dụng Đơn Vị Từ Thư Viện',
    description: 'Message of the button to add a new unit from a library in a subsection.',
  },
  unitPickerModalTitle: {
    id: 'course-authoring.course-outline.subsection.unit.modal.single-title.text',
    defaultMessage: 'Chọn Đơn Vị',
    description: 'Library unit picker modal title.',
  },
});

export default messages;
