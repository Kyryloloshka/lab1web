import { configFTP } from '../config/ftp.js';
import vinylFTP from 'vinyl-ftp';
import util from 'gulp-util';

export const ftp = () => {
	configFTP.log = util.log;
	const ftpConnect = vinylFTP.create(configFTP);
	return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
		.pipe(app.plugins.gulpPlumber(
			app.plugins.notify.onError({
				title: 'FTP бляяяяя ти що зовсім бовдур!?',
				massage: "Error: <%= error.message %"
			}))
		)
		.pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`));
}