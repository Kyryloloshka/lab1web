import { deleteAsync } from "del";
import GulpZip from "gulp-zip";

export const zip = () => {
	deleteAsync(`./${app.path.rootFolder}.zip`);
	return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
		.pipe(app.plugins.gulpPlumber(
			app.plugins.notify.onError({
				title: 'ZIP бляяяяя ти що зовсім бовдур!?',
				massage: "Error: <%= error.message %"
			}))
		)
		.pipe(GulpZip(`${app.path.rootFolder}.zip`))
		.pipe(app.gulp.dest('./'));
}