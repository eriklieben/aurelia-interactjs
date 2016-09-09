var gulp = require('gulp');
var runSequence = require('run-sequence');
var paths = require('../paths');
var fs = require('fs');
var bump = require('gulp-bump');
var args = require('../args');
var conventionalChangelog = require('gulp-conventional-changelog');

// utilizes the bump plugin to bump the
// semver for the repo
gulp.task('bump-version', function() {
  return gulp.src(['./package.json'])
    .pipe(bump({type: args.bump})) //major|minor|patch|prerelease
    .pipe(gulp.dest('./'));
});

// generates the CHANGELOG.md file based on commit
// from git commit messages
gulp.task('changelog', function () {
  return gulp.src(paths.doc + '/CHANGELOG.md', {
    buffer: false
  }).pipe(conventionalChangelog({
    preset: 'angular'
  }))
  .pipe(gulp.dest(paths.doc));
});

// calls the listed sequence of tasks in order
gulp.task('prepare-release', function(callback) {
  return runSequence(
    'build',
    'bump-version',
    'changelog',
    callback
  );
});
