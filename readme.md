# Combining Typescript, Webpack, Jasmine

After reading the following question on stackoverflow.com:
http://stackoverflow.com/questions/42585255/how-to-run-typescript-not-angularjs-unit-tests-with-jasmine-and-webpack

I figured, this shouldn't be to hard.
And well, it kinda was.

But it's working, so that's why I'm sharing this.

The key to this was this comment:
https://github.com/webpack-contrib/karma-webpack/issues/188#issuecomment-268538430

That is why karma couldn't see the *.ts files 
