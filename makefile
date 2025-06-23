up:
	# docker-compose up -d --build
	docker-compose -f docker-compose.dev.yml up --build -d


down:
	docker-compose down -v

restart:
	make down
	make up
