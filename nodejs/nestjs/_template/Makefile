#!make
include .env

DEV_CONTAINER_NAME?=app.api

.DEFAULT_GOAL := help
help:
	@printf "\033[33mUsage:\033[0m\n  make [target] [arg=\"val\"...]\n\n\033[33mTargets:\033[0m\n"
	@grep -E '^[-a-zA-Z0-9_\.\/]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[32m%-15s\033[0m %s\n", $$1, $$2}'

dev: ## Run development server
	@docker-compose run -d --rm \
		--service-ports \
		--use-aliases \
		--name $(DEV_CONTAINER_NAME) \
		$(DEV_CONTAINER_NAME) yarn start:dev

exec: ## Execute a command in the development container
	@docker-compose run -it --rm app.api bash

install: ## Execute a command in the development container
	@docker-compose run -it --rm app.api yarn install

dbs: ## Run dependencies for development
	@docker-compose up -d redis mongo

stop: ## Stop all containers
	@docker-compose down --remove-orphans
	@docker-compose rm -f
