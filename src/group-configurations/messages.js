import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headingTitle: {
    id: 'course-authoring.group-configurations.heading-title',
    defaultMessage: 'Cấu Hình Nhóm',
    description: 'Title for the heading of the group configurations section.',
  },
  headingSubtitle: {
    id: 'course-authoring.group-configurations.heading-sub-title',
    defaultMessage: 'Cài Đặt',
    description: 'Subtitle for the heading of the group configurations section.',
  },
  containsGroups: {
    id: 'course-authoring.group-configurations.container.contains-groups',
    defaultMessage: 'Chứa {len, plural, one {1 nhóm} other {{len} nhóm}}',
    description: 'Message indicating the number of groups contained within a container.',
  },
  notInUse: {
    id: 'course-authoring.group-configurations.container.not-in-use',
    defaultMessage: 'Không được sử dụng',
    description: 'Message indicating that the group configurations are not currently in use.',
  },
  usedInLocations: {
    id: 'course-authoring.group-configurations.container.used-in-locations',
    defaultMessage: 'Được sử dụng tại {len, plural, one {1 vị trí} other {{len} vị trí}}',
    description: 'Message indicating the number of locations where the group configurations are used.',
  },
});

export default messages;