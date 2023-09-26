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
ifeq ($(COMPOSE_FILE),compose.yaml)
	docker volume rm digicore_app_node_modules digicore_prisma_studio_node_modules
endif

.PHONY: pull
pull:
	${COMPOSE_IMPL} pull

.PHONY: build
build:
	${COMPOSE_IMPL} build

.PHONY: ls
ls:
	${COMPOSE_IMPL} ls

.PHONY: migrate
migrate:
ifeq ($(COMPOSE_FILE),compose.yaml)
	@echo dev migrate
	${COMPOSE_IMPL} exec app yarn prisma migrate dev
	${COMPOSE_IMPL} exec prisma_studio yarn prisma generate
else
	@echo prod migrate
	${COMPOSE_IMPL} exec app yarn prisma migrate deploy
endif
