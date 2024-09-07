import svgSprite from "gulp-svg-sprite"

export const svgSprive = () => {
	return app.gulp.src(`${app.path.src.svgicons}`, {})
		.pipe(app.plugins.gulpPlumber(
			app.plugins.notify.onError({
				title: 'SVG бляяяяя ти що зовсім бовдур!?',
				massage: "Error: <%= error.message %"
			}))
		)
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: `../icons/icons.svg`,
					example: true
				}
			},
		}))
		.pipe(app.gulp.dest(`${app.path.build.images}`))
}