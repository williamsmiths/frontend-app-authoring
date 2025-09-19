import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  createUnitModalTitle: {
    id: 'course-authoring.library-authoring.modals.create-unit.title',
    defaultMessage: 'Đơn vị mới',
    description: 'Title of the Create Unit modal',
  },
  createUnitModalCancel: {
    id: 'course-authoring.library-authoring.modals.create-unit.cancel',
    defaultMessage: 'Hủy',
    description: 'Label of the Cancel button of the Create Unit modal',
  },
  createUnitModalCreate: {
    id: 'course-authoring.library-authoring.modals.create-unit.create',
    defaultMessage: 'Tạo',
    description: 'Label of the Create button of the Create Unit modal',
  },
  createUnitModalNameLabel: {
    id: 'course-authoring.library-authoring.modals.create-unit.form.name',
    defaultMessage: 'Đặt tên đơn vị của bạn',
    description: 'Label of the Name field of the Create Unit modal form',
  },
  createUnitModalNamePlaceholder: {
    id: 'course-authoring.library-authoring.modals.create-unit.form.name.placeholder',
    defaultMessage: 'Nhập tiêu đề mô tả',
    description: 'Placeholder of the Name field of the Create Unit modal form',
  },
  createUnitModalNameInvalid: {
    id: 'course-authoring.library-authoring.modals.create-unit.form.name.invalid',
    defaultMessage: 'Tên đơn vị là bắt buộc',
    description: 'Message when the Name field of the Create Unit modal form is invalid',
  },
  createUnitSuccess: {
    id: 'course-authoring.library-authoring.modals.create-unit.success',
    defaultMessage: 'Tạo đơn vị thành công',
    description: 'Success message when creating a library unit',
  },
  createUnitError: {
    id: 'course-authoring.library-authoring.modals.create-unit.error',
    defaultMessage: 'Có lỗi xảy ra khi tạo đơn vị thư viện',
    description: 'Error message when creating a library unit',
  },
});

export default messages;
