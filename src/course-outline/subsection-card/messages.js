import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  newUnitButton: {
    id: 'course-authoring.course-outline.subsection.button.new-unit',
    defaultMessage: 'Đơn vị mới',
    description: 'Message of the button to create a new unit in a subsection.',
  },
  pasteButton: {
    id: 'course-authoring.course-outline.subsection.button.paste-unit',
    defaultMessage: 'Dán đơn vị',
    description: 'Message of the button to paste a new unit in a subsection.',
  },
  useUnitFromLibraryButton: {
    id: 'course-authoring.course-outline.subsection.button.use-unit-from-library',
    defaultMessage: 'Sử dụng đơn vị từ thư viện',
    description: 'Message of the button to add a new unit from a library in a subsection.',
  },
  unitPickerModalTitle: {
    id: 'course-authoring.course-outline.subsection.unit.modal.single-title.text',
    defaultMessage: 'Chọn đơn vị',
    description: 'Library unit picker modal title.',
  },
});

export default messages;
