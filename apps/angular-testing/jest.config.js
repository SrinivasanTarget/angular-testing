module.exports = {
  name: 'angular-testing',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-testing',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
