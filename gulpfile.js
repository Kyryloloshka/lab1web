// Основний модуль
import gulp from "gulp";
// імпорт шляхів
import { path } from "./gulp/config/path.js";
// Імпорт загальних плагінів
import { plugins } from "./gulp/config/plugins.js"

// Передаємо значення в глобальну змінну
global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	gulp: gulp,
	plugins: plugins,
}

// імпорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

// Стеження за змінами
function watcher() {
	gulp.watch(path.watch.files, copy);     // Щоб одразу вигружати
	gulp.watch(path.watch.html, html);      // усе на ftp сервер треба 
	gulp.watch(path.watch.scss, scss);      // наприклад copy замінити
	gulp.watch(path.watch.js, js);          // на gulp.series(copy, ftp) і
	gulp.watch(path.watch.images, images);  // так з усім, що треба вигружати
}

export { svgSprive }

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)

const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

// Сторонні сценарії виконання задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

export { dev }
export { build }
export { deployZIP }
export { deployFTP }

// Виконання сценарія за замовчанням
gulp.task('default', dev);