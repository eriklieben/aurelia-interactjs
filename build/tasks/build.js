var gulp = require('gulp');
var runSequence = require('run-sequence');
var paths = require('../paths');
var assign = Object.assign || require('object.assign');
var typescript = require('gulp-typescript');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var changed = require('gulp-changed');

gulp.task('build-html', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'es6'))
    .pipe(gulp.dest(paths.output + 'commonjs'))
    .pipe(gulp.dest(paths.output + 'amd'))
    .pipe(gulp.dest(paths.output + 'system'));
});

var tsProjectES6 = typescript.createProject('./tsconfig.json', { typescript: require('typescript') });
var tsProjectAMD = typescript.createProject('./tsconfig.json', { typescript: require('typescript'), target: 'es5', module: 'amd' });
var tsProjectCJS = typescript.createProject('./tsconfig.json', { typescript: require('typescript'), target: 'es5', module: 'commonjs' });
var tsProjectSystem = typescript.createProject('./tsconfig.json', { typescript: require('typescript'), target: 'es5', module: 'system' });
function build(tsProject, outputPath) {
    return gulp.src(paths.dtsSrc.concat(paths.source))
      .pipe(plumber())
      .pipe(changed(outputPath, {extension: '.ts'}))
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(typescript(tsProject))
      .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '/src'}))
      .pipe(gulp.dest(outputPath));
}

gulp.task('build-es6', function () {
    return build(tsProjectES6, paths.output + 'es6');
});

gulp.task('build-ts', function() {
    return gulp.src(paths.source)
    .pipe(gulp.dest(paths.output + 'ts'));
});

gulp.task('build-commonjs', function () {
    return build(tsProjectCJS, paths.output + 'commonjs');
});

gulp.task('build-amd', function () {
    return build(tsProjectAMD, paths.output + 'amd');
});

gulp.task('build-system', function () {
    return build(tsProjectSystem, paths.output + 'system');
});

gulp.task('build-html-system', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build-html', 'build-es6', 'build-commonjs', 'build-amd', 'build-system'],
    callback
  );
});
