import {src, dest} from 'gulp'
import config from '../config.js'
import gulpif from 'gulp-if'
import gulpChanged from 'gulp-changed'

export default function media() {
	return src(config.app.media.src, {
		encoding: config.app.media.encoding,
	})
		.pipe(gulpif(config.env === "development", gulpChanged(config.dist.media)))
		.pipe(dest(config.dist.media))
}