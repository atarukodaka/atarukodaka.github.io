

deploy:
	rm -rf docs
	mv public docs
	git commit -am deploy
	git push origin master