import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  actionsButtonLabel: {
    id: 'course-authoring.taxonomy-menu.action.button.label',
    defaultMessage: 'Hành động',
  },
  actionsButtonAlt: {
    id: 'course-authoring.taxonomy-menu.action.button.alt',
    defaultMessage: 'Hành động cho {name}',
  },
  importMenu: {
    id: 'course-authoring.taxonomy-menu.import.label',
    defaultMessage: 'Nhập lại',
  },
  manageOrgsMenu: {
    id: 'course-authoring.taxonomy-menu.assign-orgs.label',
    defaultMessage: 'Quản lý tổ chức',
  },
  exportMenu: {
    id: 'course-authoring.taxonomy-menu.export.label',
    defaultMessage: 'Xuất',
  },
  deleteMenu: {
    id: 'course-authoring.taxonomy-menu.delete.label',
    defaultMessage: 'Xóa',
  },
  taxonomyDeleteToast: {
    id: 'course-authoring.taxonomy-list.toast.delete',
    defaultMessage: '"{name}" đã bị xóa',
  },
});

export default messages;