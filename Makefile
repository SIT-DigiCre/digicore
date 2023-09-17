include .env
COMPOSE_IMPL=docker compose -f ${COMPOSE_FILE}

.PHONY: up
up:
	${COMPOSE_IMPL} up

.PHONY: up-d
up-d:
	${COMPOSE_IMPL} up -d

.PHONY: logs-s
logs-s:
	${COMPOSE_IMPL} logs --tail 500

.PHONY: logs
logs:
	${COMPOSE_IMPL} logs

.PHONY: down
down:
	${COMPOSE_IMPL} down

.PHONY: pull
pull:
	${COMPOSE_IMPL} pull

.PHONY: build
build:
	${COMPOSE_IMPL} build

.PHONY: ls
ls:
	${COMPOSE_IMPL} ls

.PHONY: dev-migrate
dev-migrate:
	${COMPOSE_IMPL} exec app yarn dev-migrate 
	${COMPOSE_IMPL} exec app chown -R 1000:1000 prisma/migrations

.PHONY: migrate
migrate:
	${COMPOSE_IMPL} exec app yarn migrate
