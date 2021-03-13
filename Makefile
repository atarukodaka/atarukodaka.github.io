

deploy:
	rm -rf docs
	mv public docs
	git add docs content
	git commit -am deploy
	git push origin master
