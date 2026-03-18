import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  createCollectionModalTitle: {
    id: 'course-authoring.library-authoring.modals.create-collection.title',
    defaultMessage: 'Bộ sưu tập mới',
    description: 'Title of the Create Collection modal',
  },
  createCollectionModalCancel: {
    id: 'course-authoring.library-authoring.modals.create-collection.cancel',
    defaultMessage: 'Hủy',
    description: 'Label of the Cancel button of the Create Collection modal',
  },
  createCollectionModalCreate: {
    id: 'course-authoring.library-authoring.modals.create-collection.create',
    defaultMessage: 'Tạo',
    description: 'Label of the Create button of the Create Collection modal',
  },
  createCollectionModalNameLabel: {
    id: 'course-authoring.library-authoring.modals.create-collection.form.name',
    defaultMessage: 'Đặt tên cho bộ sưu tập',
    description: 'Label of the Name field of the Create Collection modal form',
  },
  createCollectionModalNamePlaceholder: {
    id: 'course-authoring.library-authoring.modals.create-collection.form.name.placeholder',
    defaultMessage: 'Nhập tiêu đề mô tả',
    description: 'Placeholder of the Name field of the Create Collection modal form',
  },
  createCollectionModalNameInvalid: {
    id: 'course-authoring.library-authoring.modals.create-collection.form.name.invalid',
    defaultMessage: 'Tên bộ sưu tập là bắt buộc',
    description: 'Message when the Name field of the Create Collection modal form is invalid',
  },
  createCollectionModalDescriptionLabel: {
    id: 'course-authoring.library-authoring.modals.create-collection.form.description',
    defaultMessage: 'Thêm mô tả (tùy chọn)',
    description: 'Label of the Description field of the Create Collection modal form',
  },
  createCollectionModalDescriptionPlaceholder: {
    id: 'course-authoring.library-authoring.modals.create-collection.form.description.placeholder',
    defaultMessage: 'Thêm mô tả',
    description: 'Placeholder of the Description field of the Create Collection modal form',
  },
  createCollectionModalDescriptionDetails: {
    id: 'course-authoring.library-authoring.modals.create-collection.form.description.details',
    defaultMessage: 'Mô tả giúp bạn và nhóm dễ dàng tổ chức và tìm kiếm nội dung hơn',
    description: 'Details of the Description field of the Create Collection modal form',
  },
  createCollectionSuccess: {
    id: 'course-authoring.library-authoring.modals.create-collection.success',
    defaultMessage: 'Tạo bộ sưu tập thành công',
    description: 'Success message when creating a library collection',
  },
  createCollectionError: {
    id: 'course-authoring.library-authoring.modals.create-collection.error',
    defaultMessage: 'Đã xảy ra lỗi khi tạo bộ sưu tập',
    description: 'Error message when creating a library collection',
  },
});

export default messages;